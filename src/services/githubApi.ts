export interface GithubConfig {
  email: string;
  password: string;
  sessionToken?: string;
}

export class GithubService {
  private config: GithubConfig;
  // Cloudflare Pages Functions expose the GitHub bridge at this same-origin route.
  private apiUrl = '/api/github';

  constructor(config: GithubConfig) {
    this.config = config;
  }

  private async fetchApi(action: string, payload: any = {}) {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.config.email,
        password: this.config.password,
        sessionToken: this.config.sessionToken,
        action,
        ...payload,
      }),
    });

    const rawBody = await response.text();
    let data: any = {};

    try {
      data = rawBody ? JSON.parse(rawBody) : {};
    } catch {
      data = { error: rawBody || 'Unexpected API response.' };
    }

    if (!response.ok) {
      throw new Error(data.error || 'API Request Failed');
    }

    return data;
  }

  async createSession(turnstileToken?: string): Promise<{ sessionToken?: string; expiresAt?: number }> {
    return this.fetchApi('createSession', { turnstileToken });
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
  async updateJsonFile(path: string, content: any, message: string, sha: string): Promise<{ sha?: string }> {
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
