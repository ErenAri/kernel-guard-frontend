const DEFAULT_ALLOWED_ORIGINS = [
  'https://kernelguard.net',
  'https://www.kernelguard.net',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:8788',
  'http://127.0.0.1:8788',
];

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 40;
const SESSION_TTL_SECONDS = 60 * 60 * 2;
const ADMIN_SESSION_COOKIE = 'kg_admin_session';
const rateLimitBuckets = new Map();

function parseAllowedOrigins(env) {
  const configured = String(env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  return new Set([...DEFAULT_ALLOWED_ORIGINS, ...configured]);
}

function isAllowedOrigin(origin, env) {
  if (!origin) return true;
  return parseAllowedOrigins(env).has(origin);
}

function buildCorsHeaders(request, env) {
  const origin = request.headers.get('Origin') || '';
  const headers = {
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };

  if (origin && isAllowedOrigin(origin, env)) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers['Access-Control-Allow-Credentials'] = 'true';
  }

  return headers;
}

function jsonResponse(request, env, body, status = 200, extraHeaders = {}) {
  const headers = new Headers({
    ...buildCorsHeaders(request, env),
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });

  Object.entries(extraHeaders).forEach(([name, value]) => {
    headers.set(name, value);
  });

  return new Response(JSON.stringify(body), {
    status,
    headers,
  });
}

function safeEquals(actual, expected) {
  if (typeof actual !== 'string' || typeof expected !== 'string') return false;
  if (actual.length === 0 || expected.length === 0) return false;

  let mismatch = actual.length ^ expected.length;
  const length = Math.max(actual.length, expected.length);

  for (let index = 0; index < length; index += 1) {
    const actualCode = actual.charCodeAt(index % actual.length);
    const expectedCode = expected.charCodeAt(index % expected.length);
    mismatch |= actualCode ^ expectedCode;
  }

  return mismatch === 0;
}

function getCookie(request, name) {
  const cookieHeader = request.headers.get('Cookie') || '';
  const cookies = cookieHeader
    .split(';')
    .map((cookie) => cookie.trim())
    .filter(Boolean);

  for (const cookie of cookies) {
    const separatorIndex = cookie.indexOf('=');
    if (separatorIndex === -1) continue;

    const cookieName = cookie.slice(0, separatorIndex);
    const cookieValue = cookie.slice(separatorIndex + 1);
    if (cookieName === name) {
      try {
        return decodeURIComponent(cookieValue);
      } catch {
        return '';
      }
    }
  }

  return '';
}

function isLocalDevelopmentRequest(request) {
  const hostname = new URL(request.url).hostname;
  return hostname === 'localhost' || hostname === '127.0.0.1';
}

function sessionCookieAttributes(request, maxAge) {
  const attributes = [
    'HttpOnly',
    'SameSite=Strict',
    'Path=/api/github',
    `Max-Age=${maxAge}`,
  ];

  if (!isLocalDevelopmentRequest(request)) {
    attributes.push('Secure');
  }

  return attributes.join('; ');
}

function buildSessionCookie(request, token) {
  return `${ADMIN_SESSION_COOKIE}=${encodeURIComponent(token)}; ${sessionCookieAttributes(request, SESSION_TTL_SECONDS)}`;
}

function clearSessionCookie(request) {
  return `${ADMIN_SESSION_COOKIE}=; ${sessionCookieAttributes(request, 0)}`;
}

function getClientIp(request) {
  return request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For') || 'unknown';
}

function isRateLimited(request) {
  const key = getClientIp(request);
  const now = Date.now();
  const current = rateLimitBuckets.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitBuckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function contentUrl(owner, repo, path, ref) {
  const encodedPath = path.split('/').map(encodeURIComponent).join('/');
  const baseUrl = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/${encodedPath}`;
  return ref ? `${baseUrl}?ref=${encodeURIComponent(ref)}` : baseUrl;
}

function githubHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'kernel-guard-admin',
  };
}

async function readGithubJson(response) {
  const text = await response.text();
  if (!text) return {};

  try {
    return JSON.parse(text);
  } catch {
    return { message: text };
  }
}

async function assertGithubOk(response, fallbackMessage) {
  if (response.ok) return readGithubJson(response);

  const data = await readGithubJson(response);
  throw new Error(data.message || fallbackMessage);
}

function decodeBase64Utf8(value) {
  const binary = atob(String(value).replace(/\s/g, ''));
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function encodeBase64Utf8(value) {
  const bytes = new TextEncoder().encode(value);
  const chunkSize = 0x8000;
  let binary = '';

  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }

  return btoa(binary);
}

async function getFile({ owner, repo, token, path }) {
  const response = await fetch(contentUrl(owner, repo, path, 'main'), {
    headers: githubHeaders(token),
  });

  return assertGithubOk(response, `Unable to read ${path}`);
}

async function updateFile({ owner, repo, token, path, message, content, sha }) {
  const response = await fetch(contentUrl(owner, repo, path), {
    method: 'PUT',
    headers: githubHeaders(token),
    body: JSON.stringify({
      message,
      content,
      sha,
      branch: 'main',
    }),
  });

  return assertGithubOk(response, `Unable to update ${path}`);
}

async function hmacHex(secret, value) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value));
  return [...new Uint8Array(signature)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

function base64UrlEncode(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlDecode(value) {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(value.length / 4) * 4, '=');
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function createSessionToken(secret, email) {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = base64UrlEncode(JSON.stringify({ email, expiresAt }));
  const signature = await hmacHex(secret, payload);
  return {
    token: `${payload}.${signature}`,
    expiresAt,
  };
}

async function verifySessionToken(secret, email, token) {
  if (!secret || !email || !token || typeof token !== 'string') return false;

  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [payload, signature] = parts;
  let decoded;
  try {
    decoded = JSON.parse(base64UrlDecode(payload));
  } catch {
    return false;
  }

  const expiresAt = Number(decoded.expiresAt);
  if (!Number.isFinite(expiresAt) || expiresAt < Math.floor(Date.now() / 1000)) return false;
  if (!safeEquals(decoded.email, email)) return false;

  const expected = await hmacHex(secret, payload);
  return safeEquals(signature, expected);
}

async function verifyTurnstile(request, env, token) {
  if (!env.TURNSTILE_SECRET_KEY) return true;
  if (!token) return false;

  const formData = new FormData();
  formData.append('secret', env.TURNSTILE_SECRET_KEY);
  formData.append('response', token);
  formData.append('remoteip', getClientIp(request));

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json().catch(() => ({ success: false }));
  return result.success === true;
}

function hasValidCredentials(payload, adminEmail, adminPassword) {
  return safeEquals(payload.email, adminEmail) && safeEquals(payload.password, adminPassword);
}

async function isAuthenticated(request, env) {
  return verifySessionToken(env.ADMIN_SESSION_SECRET, env.ADMIN_EMAIL, getCookie(request, ADMIN_SESSION_COOKIE));
}

export async function onRequest(context) {
  const { request, env } = context;

  if (!isAllowedOrigin(request.headers.get('Origin') || '', env)) {
    return jsonResponse(request, env, { error: 'Origin is not allowed.' }, 403);
  }

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: buildCorsHeaders(request, env) });
  }

  if (request.method !== 'POST') {
    return jsonResponse(request, env, { error: 'Method not allowed' }, 405);
  }

  if (isRateLimited(request)) {
    return jsonResponse(request, env, { error: 'Too many requests.' }, 429);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse(request, env, { error: 'Invalid JSON payload.' }, 400);
  }

  const adminEmail = env.ADMIN_EMAIL;
  const adminPassword = env.ADMIN_PASSWORD;
  const token = env.GITHUB_PAT;
  const owner = env.GITHUB_OWNER || 'ErenAri';
  const repo = env.GITHUB_REPO || 'kernel-guard-frontend';

  if (!adminEmail || !adminPassword) {
    return jsonResponse(request, env, { error: 'Server misconfiguration: ADMIN_EMAIL or ADMIN_PASSWORD is missing.' }, 500);
  }

  if (!env.ADMIN_SESSION_SECRET) {
    return jsonResponse(request, env, { error: 'Server misconfiguration: ADMIN_SESSION_SECRET is missing.' }, 500);
  }

  if (payload.action === 'logout') {
    return jsonResponse(request, env, { success: true }, 200, {
      'Set-Cookie': clearSessionCookie(request),
    });
  }

  if (payload.action === 'createSession') {
    if (!hasValidCredentials(payload, adminEmail, adminPassword)) {
      return jsonResponse(request, env, { error: 'Invalid credentials. Unauthorized access attempt.' }, 401);
    }

    const turnstileOk = await verifyTurnstile(request, env, payload.turnstileToken);
    if (!turnstileOk) {
      return jsonResponse(request, env, { error: 'Turnstile verification failed.' }, 401);
    }

    const session = await createSessionToken(env.ADMIN_SESSION_SECRET, adminEmail);

    return jsonResponse(request, env, {
      success: true,
      expiresAt: session.expiresAt,
    }, 200, {
      'Set-Cookie': buildSessionCookie(request, session.token),
    });
  }

  if (!token) {
    return jsonResponse(request, env, { error: 'Server misconfiguration: GITHUB_PAT is missing.' }, 500);
  }

  if (!(await isAuthenticated(request, env))) {
    return jsonResponse(request, env, { error: 'Invalid credentials. Unauthorized access attempt.' }, 401);
  }

  try {
    if (payload.action === 'readFile') {
      const data = await getFile({ owner, repo, token, path: payload.path });

      if (Array.isArray(data) || data.type !== 'file') {
        throw new Error('Path is not a file.');
      }

      return jsonResponse(request, env, {
        content: JSON.parse(decodeBase64Utf8(data.content)),
        sha: data.sha,
      });
    }

    if (payload.action === 'updateFile') {
      const data = await updateFile({
        owner,
        repo,
        token,
        path: payload.path,
        message: payload.message,
        content: encodeBase64Utf8(JSON.stringify(payload.content, null, 2)),
        sha: payload.sha,
      });

      return jsonResponse(request, env, { success: true, sha: data.content?.sha });
    }

    if (payload.action === 'uploadImage') {
      let existingSha;

      try {
        const existing = await getFile({ owner, repo, token, path: payload.path });
        if (!Array.isArray(existing) && existing.type === 'file') {
          existingSha = existing.sha;
        }
      } catch (error) {
        if (!String(error.message || '').includes('Not Found')) {
          throw error;
        }
      }

      await updateFile({
        owner,
        repo,
        token,
        path: payload.path,
        message: payload.message,
        content: String(payload.content).replace(/^data:image\/\w+;base64,/, ''),
        sha: existingSha,
      });

      return jsonResponse(request, env, { success: true });
    }

    return jsonResponse(request, env, { error: 'Invalid action specified.' }, 400);
  } catch (error) {
    return jsonResponse(request, env, { error: error.message || 'GitHub API communication failed.' }, 500);
  }
}
