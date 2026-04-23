import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_SITE_URL, normalizeSiteUrl } from '../src/config/site';
import { nonIndexableRoutes, sitemapRoutes } from '../src/data/seoRoutes';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = normalizeSiteUrl(process.env.SITE_URL || DEFAULT_SITE_URL);
const lastmod = new Date().toISOString().slice(0, 10);

function toAbsoluteUrl(route: string): string {
  return route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes
  .map((route) => {
    return `  <url>
    <loc>${escapeXml(toAbsoluteUrl(route))}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
  })
  .join('\n')}
</urlset>
`;

const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
writeFileSync(sitemapPath, xml, 'utf8');

console.log(
  `Generated sitemap with ${sitemapRoutes.length} indexable URLs (excluded ${nonIndexableRoutes.length} non-indexable routes) at ${sitemapPath}`,
);
