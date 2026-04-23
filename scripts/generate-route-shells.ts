import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_SITE_URL, normalizeSiteUrl } from '../src/config/site';
import { completedProjects } from '../src/data/completedProjects';
import { projects } from '../src/data/projects';
import { prerenderRoutes } from '../src/data/seoRoutes';
import { tr } from '../src/translations/tr';

type RouteMeta = {
  title: string;
  description: string;
  robots: 'index, follow' | 'noindex, follow';
  lang: 'tr' | 'en';
  type: 'website';
  image: string;
  imageAlt: string;
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const baseIndexPath = path.resolve(distDir, 'index.html');
const siteUrl = normalizeSiteUrl(process.env.SITE_URL || DEFAULT_SITE_URL);
const siteName = 'Kernel Guard';
const defaultImage =
  'https://storage.googleapis.com/m-infra-ais-prod-399110920482.europe-west2.run.app/ais-dev-3b2rqidgrlxxfxo5fs4lfr-399110920482.europe-west2.run.app/attachments/86903e05-950c-403d-b472-132984136a87.png';
const defaultImageAlt = 'Kernel Guard secure engineering platform';

const baseHtml = readFileSync(baseIndexPath, 'utf8');

function withDefaults(meta: Pick<RouteMeta, 'title' | 'description' | 'robots' | 'lang'>): RouteMeta {
  return {
    ...meta,
    type: 'website',
    image: defaultImage,
    imageAlt: defaultImageAlt,
  };
}

const staticRouteMeta = new Map<string, RouteMeta>([
  ['/', withDefaults({ title: tr.seo.home.title, description: tr.seo.home.description, robots: 'index, follow', lang: 'tr' })],
  ['/projects', withDefaults({ title: tr.seo.projects.title, description: tr.seo.projects.description, robots: 'index, follow', lang: 'tr' })],
  ['/completed-projects', withDefaults({ title: tr.seo.completedProjects.title, description: tr.seo.completedProjects.description, robots: 'index, follow', lang: 'tr' })],
  ['/services', withDefaults({ title: tr.seo.services.title, description: tr.seo.services.description, robots: 'index, follow', lang: 'tr' })],
  ['/services/secure-frontend', withDefaults({
    title: `${tr.home.features.frontend.title} - Kernel Guard`,
    description: tr.home.features.frontend.desc,
    robots: 'index, follow',
    lang: 'tr',
  })],
  ['/services/hardened-backend', withDefaults({
    title: `${tr.home.features.backend.title} - Kernel Guard`,
    description: tr.home.features.backend.desc,
    robots: 'index, follow',
    lang: 'tr',
  })],
  ['/services/data-protection', withDefaults({
    title: `${tr.home.features.data.title} - Kernel Guard`,
    description: tr.home.features.data.desc,
    robots: 'index, follow',
    lang: 'tr',
  })],
  ['/services/high-performance', withDefaults({
    title: `${tr.home.features.performance.title} - Kernel Guard`,
    description: tr.home.features.performance.desc,
    robots: 'index, follow',
    lang: 'tr',
  })],
  ['/terms', withDefaults({
    title: `${tr.terms.title} | Kernel-Guard`,
    description: tr.terms.section1.content,
    robots: 'index, follow',
    lang: 'tr',
  })],
  ['/privacy', withDefaults({
    title: `${tr.privacy.title} | Kernel-Guard`,
    description: tr.privacy.section1.content,
    robots: 'index, follow',
    lang: 'tr',
  })],
  ['/cookies', withDefaults({
    title: `${tr.cookies.title} | Kernel-Guard`,
    description: tr.cookies.desc,
    robots: 'index, follow',
    lang: 'tr',
  })],
  ['/not-found', withDefaults({
    title: 'Sayfa Bulunamadi | Kernel Guard',
    description: 'Istediginiz sayfa mevcut degil veya tasinmis olabilir.',
    robots: 'noindex, follow',
    lang: 'tr',
  })],
]);

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function canonicalForRoute(route: string): string {
  return route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function resolveMeta(route: string): RouteMeta {
  const directMatch = staticRouteMeta.get(route);
  if (directMatch) {
    return directMatch;
  }

  if (route.startsWith('/projects/')) {
    const id = route.replace('/projects/', '');
    const project = projects.find((item) => item.id === id);

    if (project) {
      return withDefaults({
        title: `${project.title} - Kernel Guard`,
        description: project.description.tr,
        robots: 'index, follow',
        lang: 'tr',
      });
    }
  }

  if (route.startsWith('/completed-projects/')) {
    const id = route.replace('/completed-projects/', '');
    const project = completedProjects.find((item) => item.id === id);

    if (project) {
      return withDefaults({
        title: `${project.title} - Kernel Guard`,
        description: project.description.tr,
        robots: project.accounts.length > 0 ? 'noindex, follow' : 'index, follow',
        lang: 'tr',
      });
    }
  }

  return withDefaults({
    title: tr.seo.home.title,
    description: tr.seo.home.description,
    robots: 'index, follow',
    lang: 'tr',
  });
}

function upsertNamedMetaTag(html: string, name: string, content: string): string {
  const escapedContent = escapeHtml(content);
  const tag = `<meta name="${name}" content="${escapedContent}" />`;
  const pattern = new RegExp(`<meta[^>]*name=["']${escapeRegExp(name)}["'][^>]*>`, 'i');

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace('</head>', `  ${tag}\n</head>`);
}

function upsertPropertyMetaTag(html: string, property: string, content: string): string {
  const escapedContent = escapeHtml(content);
  const tag = `<meta property="${property}" content="${escapedContent}" />`;
  const pattern = new RegExp(`<meta[^>]*property=["']${escapeRegExp(property)}["'][^>]*>`, 'i');

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace('</head>', `  ${tag}\n</head>`);
}

function upsertCanonicalTag(html: string, href: string): string {
  const escapedHref = escapeHtml(href);
  const tag = `<link rel="canonical" href="${escapedHref}" />`;
  const pattern = /<link[^>]*rel=["']canonical["'][^>]*>/i;

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace('</head>', `  ${tag}\n</head>`);
}

function buildStructuredData(route: string, meta: RouteMeta): Record<string, unknown> {
  const canonicalUrl = canonicalForRoute(route);
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteName,
        url: `${siteUrl}/`,
        logo: meta.image,
        sameAs: [
          'https://github.com/Kernel-Guard',
          'https://www.linkedin.com/company/kernel-guard/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${siteUrl}/`,
        name: siteName,
        inLanguage: meta.lang,
        publisher: {
          '@id': organizationId,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: meta.title,
        description: meta.description,
        inLanguage: meta.lang,
        isPartOf: {
          '@id': websiteId,
        },
      },
    ],
  };
}

function upsertStructuredDataScript(html: string, data: Record<string, unknown>): string {
  const scriptId = 'kg-structured-data';
  const escapedJson = JSON.stringify(data).replace(/</g, '\\u003c');
  const tag = `<script id="${scriptId}" type="application/ld+json">${escapedJson}</script>`;
  const pattern = new RegExp(`<script[^>]*id=["']${scriptId}["'][^>]*>[\\s\\S]*?<\\/script>`, 'i');

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace('</head>', `  ${tag}\n</head>`);
}

function applyRouteMeta(html: string, route: string, meta: RouteMeta): string {
  const escapedTitle = escapeHtml(meta.title);
  const canonicalUrl = canonicalForRoute(route);
  const locale = meta.lang === 'tr' ? 'tr_TR' : 'en_US';
  const alternateLocale = meta.lang === 'tr' ? 'en_US' : 'tr_TR';

  let nextHtml = html;

  if (/<html\s+lang=["'][^"']*["']>/i.test(nextHtml)) {
    nextHtml = nextHtml.replace(/<html\s+lang=["'][^"']*["']>/i, `<html lang="${meta.lang}">`);
  } else {
    nextHtml = nextHtml.replace('<html', `<html lang="${meta.lang}"`);
  }

  if (/<title>[^<]*<\/title>/i.test(nextHtml)) {
    nextHtml = nextHtml.replace(/<title>[^<]*<\/title>/i, `<title>${escapedTitle}</title>`);
  } else {
    nextHtml = nextHtml.replace('</head>', `  <title>${escapedTitle}</title>\n</head>`);
  }

  nextHtml = upsertNamedMetaTag(nextHtml, 'description', meta.description);
  nextHtml = upsertNamedMetaTag(nextHtml, 'robots', meta.robots);
  nextHtml = upsertNamedMetaTag(nextHtml, 'googlebot', meta.robots);
  nextHtml = upsertCanonicalTag(nextHtml, canonicalUrl);

  nextHtml = upsertPropertyMetaTag(nextHtml, 'og:url', canonicalUrl);
  nextHtml = upsertPropertyMetaTag(nextHtml, 'og:type', meta.type);
  nextHtml = upsertPropertyMetaTag(nextHtml, 'og:title', meta.title);
  nextHtml = upsertPropertyMetaTag(nextHtml, 'og:description', meta.description);
  nextHtml = upsertPropertyMetaTag(nextHtml, 'og:site_name', siteName);
  nextHtml = upsertPropertyMetaTag(nextHtml, 'og:image', meta.image);
  nextHtml = upsertPropertyMetaTag(nextHtml, 'og:image:alt', meta.imageAlt);
  nextHtml = upsertPropertyMetaTag(nextHtml, 'og:locale', locale);
  nextHtml = upsertPropertyMetaTag(nextHtml, 'og:locale:alternate', alternateLocale);

  nextHtml = upsertNamedMetaTag(nextHtml, 'twitter:creator', '@kernelguard');
  nextHtml = upsertNamedMetaTag(nextHtml, 'twitter:site', '@kernelguard');
  nextHtml = upsertNamedMetaTag(nextHtml, 'twitter:card', 'summary_large_image');
  nextHtml = upsertNamedMetaTag(nextHtml, 'twitter:title', meta.title);
  nextHtml = upsertNamedMetaTag(nextHtml, 'twitter:description', meta.description);
  nextHtml = upsertNamedMetaTag(nextHtml, 'twitter:image', meta.image);
  nextHtml = upsertNamedMetaTag(nextHtml, 'twitter:image:alt', meta.imageAlt);

  nextHtml = upsertStructuredDataScript(nextHtml, buildStructuredData(route, meta));

  return nextHtml;
}

function routeOutputPath(route: string): string {
  if (route === '/') {
    return path.resolve(distDir, 'index.html');
  }

  return path.resolve(distDir, route.replace(/^\//, ''), 'index.html');
}

for (const route of prerenderRoutes) {
  const meta = resolveMeta(route);
  const outputPath = routeOutputPath(route);
  const renderedHtml = applyRouteMeta(baseHtml, route, meta);

  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, renderedHtml, 'utf8');
}

const notFoundShellPath = routeOutputPath('/not-found');
const fallback404Path = path.resolve(distDir, '404.html');
writeFileSync(fallback404Path, readFileSync(notFoundShellPath, 'utf8'), 'utf8');

console.log(`Generated route HTML shells for ${prerenderRoutes.length} routes in ${distDir}`);
