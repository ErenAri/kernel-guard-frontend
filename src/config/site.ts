export const DEFAULT_SITE_URL = 'https://www.kernelguard.net';

export function normalizeSiteUrl(value: string): string {
  return value.trim().replace(/\/$/, '');
}

export function normalizeCanonicalPath(inputPath: string): string {
  const withoutQuery = inputPath.split('?')[0]?.split('#')[0] ?? '/';
  const prefixed = withoutQuery.startsWith('/') ? withoutQuery : `/${withoutQuery}`;
  const deduped = prefixed.replace(/\/+/g, '/');

  if (deduped === '/') {
    return '/';
  }

  return deduped.endsWith('/') ? deduped : `${deduped}/`;
}

export function buildCanonicalUrl(siteUrl: string, path: string): string {
  return `${normalizeSiteUrl(siteUrl)}${normalizeCanonicalPath(path)}`;
}
