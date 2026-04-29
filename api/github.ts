import { VercelRequest, VercelResponse } from '@vercel/node';
import { timingSafeEqual } from 'node:crypto';
import { Octokit } from 'octokit';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const GITHUB_OWNER = process.env.GITHUB_OWNER || 'ErenAri';
const GITHUB_REPO = process.env.GITHUB_REPO || 'kernel-guard-frontend';

function safeEquals(actual: unknown, expected: string | undefined) {
  if (typeof actual !== 'string' || !expected) return false;

  const actualBuffer = Buffer.from(actual);
  const expectedBuffer = Buffer.from(expected);

  if (actualBuffer.length !== expectedBuffer.length) return false;

  return timingSafeEqual(actualBuffer, expectedBuffer);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers for local development if needed
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password, action, path, content, message, sha } = req.body;

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    return res.status(500).json({ error: 'Server misconfiguration: ADMIN_EMAIL or ADMIN_PASSWORD is missing.' });
  }

  // Authentication check
  if (!safeEquals(email, ADMIN_EMAIL) || !safeEquals(password, ADMIN_PASSWORD)) {
    return res.status(401).json({ error: 'Invalid credentials. Unauthorized access attempt.' });
  }

  // Get PAT from environment variables (configured securely in Vercel)
  const token = process.env.GITHUB_PAT;
  
  if (!token) {
    return res.status(500).json({ error: 'Server misconfiguration: GITHUB_PAT is missing.' });
  }

  const octokit = new Octokit({ auth: token });

  try {
    if (action === 'readFile') {
      const response = await octokit.rest.repos.getContent({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: path,
        ref: 'main',
      });

      if (Array.isArray(response.data) || response.data.type !== 'file') {
        throw new Error('Path is not a file');
      }

      // Base64 decode
      const decodedContent = decodeURIComponent(escape(atob(response.data.content)));
      
      return res.status(200).json({
        content: JSON.parse(decodedContent),
        sha: response.data.sha,
      });
    } 
    
    else if (action === 'updateFile') {
      const encodedContent = btoa(unescape(encodeURIComponent(JSON.stringify(content, null, 2))));
      
      const response = await octokit.rest.repos.createOrUpdateFileContents({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: path,
        message: message,
        content: encodedContent,
        sha: sha,
        branch: 'main',
      });

      return res.status(200).json({ success: true, sha: response.data.content?.sha });
    }

    else if (action === 'uploadImage') {
      // Check if file already exists
      let existingSha: string | undefined = undefined;
      try {
        const existing = await octokit.rest.repos.getContent({
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO,
          path: path,
          ref: 'main',
        });
        if (!Array.isArray(existing.data) && existing.data.type === 'file') {
          existingSha = existing.data.sha;
        }
      } catch (e) {
        // Doesn't exist
      }

      const cleanBase64 = content.replace(/^data:image\/\w+;base64,/, '');

      await octokit.rest.repos.createOrUpdateFileContents({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: path,
        message: message,
        content: cleanBase64,
        sha: existingSha,
        branch: 'main',
      });

      return res.status(200).json({ success: true });
    }

    else {
      return res.status(400).json({ error: 'Invalid action specified' });
    }

  } catch (error: any) {
    console.error('GitHub API Error:', error);
    return res.status(500).json({ error: error.message || 'GitHub API communication failed' });
  }
}
