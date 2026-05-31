const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  'Access-Control-Allow-Headers':
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json; charset=utf-8',
    },
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

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON payload.' }, 400);
  }

  const adminEmail = env.ADMIN_EMAIL;
  const adminPassword = env.ADMIN_PASSWORD;
  const token = env.GITHUB_PAT;
  const owner = env.GITHUB_OWNER || 'ErenAri';
  const repo = env.GITHUB_REPO || 'kernel-guard-frontend';

  if (!adminEmail || !adminPassword) {
    return jsonResponse({ error: 'Server misconfiguration: ADMIN_EMAIL or ADMIN_PASSWORD is missing.' }, 500);
  }

  if (!token) {
    return jsonResponse({ error: 'Server misconfiguration: GITHUB_PAT is missing.' }, 500);
  }

  if (!safeEquals(payload.email, adminEmail) || !safeEquals(payload.password, adminPassword)) {
    return jsonResponse({ error: 'Invalid credentials. Unauthorized access attempt.' }, 401);
  }

  try {
    if (payload.action === 'readFile') {
      const data = await getFile({ owner, repo, token, path: payload.path });

      if (Array.isArray(data) || data.type !== 'file') {
        throw new Error('Path is not a file.');
      }

      return jsonResponse({
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

      return jsonResponse({ success: true, sha: data.content?.sha });
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

      return jsonResponse({ success: true });
    }

    return jsonResponse({ error: 'Invalid action specified.' }, 400);
  } catch (error) {
    return jsonResponse({ error: error.message || 'GitHub API communication failed.' }, 500);
  }
}
