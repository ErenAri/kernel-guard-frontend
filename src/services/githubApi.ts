export interface GithubConfig {
  email: string;
  password?: string;
}

type GithubAction = 'createSession' | 'readFile' | 'updateFile' | 'uploadImage' | 'logout';

export type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

interface GithubApiPayload {
  path?: string;
  content?: JsonValue | string;
  message?: string;
  sha?: string;
  turnstileToken?: string;
}

interface GithubApiError {
  error?: string;
}

export class GithubService {
  private config: GithubConfig;
  // Cloudflare Pages Functions expose the GitHub bridge at this same-origin route.
  private apiUrl = '/api/github';

  constructor(config: GithubConfig) {
    this.config = config;
  }

  private async fetchApi<T>(action: GithubAction, payload: GithubApiPayload = {}): Promise<T> {
    if (action === 'createSession' && !this.config.password) {
      throw new Error('Password is required to create an admin session.');
    }

    const body: Record<string, unknown> = {
      action,
      email: this.config.email,
      ...payload,
    };

    if (action === 'createSession') {
      body.password = this.config.password;
    }

    const response = await fetch(this.apiUrl, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const rawBody = await response.text();
    let data: (T & GithubApiError) | GithubApiError = {};

    try {
      data = rawBody ? JSON.parse(rawBody) : {};
    } catch {
      data = { error: rawBody || 'Unexpected API response.' };
    }

    if (!response.ok) {
      throw new Error(data.error || 'API Request Failed');
    }

    return data as T;
  }

  async createSession(turnstileToken?: string): Promise<{ success: boolean; expiresAt?: number }> {
    return this.fetchApi('createSession', { turnstileToken });
  }

  async logout(): Promise<void> {
    await this.fetchApi('logout');
  }

  /**
   * Reads a JSON file from the repository.
   */
  async getJsonFile<T>(path: string): Promise<{ content: T; sha: string }> {
    return this.fetchApi('readFile', { path });
  }

  /**
   * Updates a JSON file in the repository.
   */
  async updateJsonFile(path: string, content: JsonValue, message: string, sha: string): Promise<{ sha?: string }> {
    return this.fetchApi('updateFile', { path, content, message, sha });
  }

  /**
   * Uploads an image (base64) to the repository and returns its path.
   */
  async uploadImage(filename: string, base64Content: string): Promise<string> {
    const path = `public/images/projects/${filename}`;
    
    await this.fetchApi('uploadImage', { 
      path, 
      content: base64Content, 
      message: `Upload image ${filename}` 
    });

    return `/images/projects/${filename}`;
  }
}
