export const DEFAULT_SITE_URL = 'https://www.kernelguard.net';

export function normalizeSiteUrl(value: string): string {
  return value.trim().replace(/\/$/, '');
}
