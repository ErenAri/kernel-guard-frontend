export interface GithubConfig {
  email: string;
  password: string;
}

export class GithubService {
  private config: GithubConfig;
  // Use absolute path for Vercel functions, but allow localhost for dev if configured.
  // In a standard Vite setup without a proxy, local dev might need to point to a local api server, 
  // but for simplicity we assume the API route is available at /api/github
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
        action,
        ...payload,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'API Request Failed');
    }

    return data;
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
