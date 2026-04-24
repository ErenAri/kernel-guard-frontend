import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildCanonicalUrl, DEFAULT_SITE_URL, normalizeCanonicalPath, normalizeSiteUrl } from '../src/config/site';
import { nonIndexableRoutes, sitemapAlternates, sitemapRoutes } from '../src/data/seoRoutes';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = normalizeSiteUrl(process.env.SITE_URL || DEFAULT_SITE_URL);
const lastmod = new Date().toISOString().slice(0, 10);

function toAbsoluteUrl(route: string): string {
  return buildCanonicalUrl(siteUrl, normalizeCanonicalPath(route));
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const indexableRouteSet = new Set(sitemapRoutes);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapRoutes
  .map((route) => {
    const pair = sitemapAlternates.find((entry) => entry.tr === route || entry.en === route);
    const alternates = pair
      ? [
          indexableRouteSet.has(pair.tr)
            ? `    <xhtml:link rel="alternate" hreflang="tr" href="${escapeXml(toAbsoluteUrl(pair.tr))}" />`
            : '',
          indexableRouteSet.has(pair.en)
            ? `    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(toAbsoluteUrl(pair.en))}" />`
            : '',
          indexableRouteSet.has(pair.tr)
            ? `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(toAbsoluteUrl(pair.tr))}" />`
            : '',
        ]
          .filter(Boolean)
          .join('\n')
      : '';

    return `  <url>
    <loc>${escapeXml(toAbsoluteUrl(route))}</loc>
    <lastmod>${lastmod}</lastmod>${alternates ? `\n${alternates}` : ''}
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
