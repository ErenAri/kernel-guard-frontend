import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type { Language } from '../src/context/LanguageContext';
import { normalizeCanonicalPath } from '../src/config/site';
import { prerenderRoutes } from '../src/data/seoRoutes';
import { detectLanguageFromPath } from '../src/i18n/route';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const ssrEntryPath = path.resolve(__dirname, '../dist-ssr/entry-server.js');
const baseIndexPath = path.resolve(distDir, 'index.html');
const baseHtml = readFileSync(baseIndexPath, 'utf8');

type HelmetAttr = { toString(): string };
interface HelmetState {
  title?: HelmetAttr;
  meta?: HelmetAttr;
  link?: HelmetAttr;
  script?: HelmetAttr;
  htmlAttributes?: HelmetAttr;
}
interface EntryServerModule {
  renderRoute(url: string, language: Language): { html: string; helmet: HelmetState };
}

const { renderRoute } = (await import(pathToFileURL(ssrEntryPath).href)) as EntryServerModule;

function languageForRoute(route: string): Language {
  return detectLanguageFromPath(route);
}

function routeOutputPath(route: string): string {
  if (route === '/') {
    return path.resolve(distDir, 'index.html');
  }
  return path.resolve(distDir, route.replace(/^\//, ''), 'index.html');
}

function buildRoutePath(route: string): string {
  return normalizeCanonicalPath(route);
}

// React 19 + react-helmet-async v3 leans on React 19's native head-tag hoisting
// at runtime. `renderToString` does not hoist, so head-type tags emitted by our
// <SEO> component land inside the body stream. Extract them so the prerendered
// file has them in <head> where crawlers and social unfurlers look.
const HEAD_TAG_PATTERNS: RegExp[] = [
  /<title[^>]*>[\s\S]*?<\/title>/gi,
  /<meta\b[^>]*\/?>/gi,
  /<link\b[^>]*\/?>/gi,
  /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
];

function normalizeHeadTagAttributes(tag: string): string {
  // React 19 keeps `hrefLang` camelCase when serializing <link>. Browsers don't
  // care (HTML attributes are case-insensitive) but strict validators and
  // Google's hreflang report prefer the canonical lowercase spelling.
  return tag.replace(/\bhrefLang=/g, 'hreflang=');
}

function extractHeadTags(body: string): { body: string; headTags: string[] } {
  let nextBody = body;
  const collected: string[] = [];

  for (const pattern of HEAD_TAG_PATTERNS) {
    nextBody = nextBody.replace(pattern, (match) => {
      collected.push(normalizeHeadTagAttributes(match));
      return '';
    });
  }

  return { body: nextBody, headTags: collected };
}

function dedupeHeadTags(existingHead: string, newTags: string[]): string[] {
  const result: string[] = [];
  const seenCanonical = /<link[^>]*rel=["']canonical["'][^>]*>/i.test(existingHead);
  const seenTitle = /<title[^>]*>[\s\S]*?<\/title>/i.test(existingHead);
  const seenMetaNames = new Set<string>();
  const seenOgProps = new Set<string>();

  existingHead.replace(/<meta\s+name=["']([^"']+)["'][^>]*>/gi, (_, name) => {
    seenMetaNames.add(name.toLowerCase());
    return '';
  });
  existingHead.replace(/<meta\s+property=["']([^"']+)["'][^>]*>/gi, (_, prop) => {
    seenOgProps.add(prop.toLowerCase());
    return '';
  });

  for (const tag of newTags) {
    if (/<title\b/i.test(tag) && seenTitle) continue;
    if (/rel=["']canonical["']/i.test(tag) && seenCanonical) continue;

    const nameMatch = /<meta\s+name=["']([^"']+)["']/i.exec(tag);
    if (nameMatch && seenMetaNames.has(nameMatch[1].toLowerCase())) continue;

    const propMatch = /<meta\s+property=["']([^"']+)["']/i.exec(tag);
    if (propMatch && seenOgProps.has(propMatch[1].toLowerCase())) continue;

    result.push(tag);
  }

  return result;
}

function replaceBaseTitle(html: string, newTitle: string | undefined): string {
  if (!newTitle) return html;
  if (/<title[^>]*>[\s\S]*?<\/title>/i.test(html)) {
    return html.replace(/<title[^>]*>[\s\S]*?<\/title>/i, newTitle);
  }
  return html.replace('</head>', `    ${newTitle}\n  </head>`);
}

function stripBaseMetaNames(html: string, names: string[]): string {
  const joined = names.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  return html.replace(new RegExp(`\\n?\\s*<meta\\s+name=["'](?:${joined})["'][^>]*>`, 'gi'), '');
}

function applyRenderedPage(
  baseTemplate: string,
  body: string,
  htmlLang: string,
): string {
  const { body: cleanBody, headTags } = extractHeadTags(body);

  let nextHtml = baseTemplate;

  // Swap the hard-coded <html lang="..."> from Vite's base template.
  nextHtml = nextHtml.replace(/<html[^>]*>/i, `<html lang="${htmlLang}">`);

  // Extract Helmet-rendered title from head tags so we can replace the base title.
  const newTitle = headTags.find((tag) => /<title\b/i.test(tag));

  // Strip base meta tags that Helmet will re-emit with route-specific values.
  nextHtml = stripBaseMetaNames(nextHtml, ['description', 'robots', 'googlebot', 'author']);

  nextHtml = replaceBaseTitle(nextHtml, newTitle);

  const nonTitleHeadTags = headTags.filter((tag) => !/<title\b/i.test(tag));
  const deduped = dedupeHeadTags(nextHtml, nonTitleHeadTags);

  if (deduped.length > 0) {
    const block = deduped.map((tag) => `    ${tag}`).join('\n');
    nextHtml = nextHtml.replace('</head>', `${block}\n  </head>`);
  }

  // Inject the cleaned rendered body into #root.
  const rootPattern = /<div\s+id=["']root["']\s*>\s*<\/div>/i;
  if (rootPattern.test(nextHtml)) {
    nextHtml = nextHtml.replace(rootPattern, `<div id="root">${cleanBody}</div>`);
  } else {
    nextHtml = nextHtml.replace(
      /<div\s+id=["']root["'][^>]*>[\s\S]*?<\/div>/i,
      `<div id="root">${cleanBody}</div>`,
    );
  }

  return nextHtml;
}

async function prerenderAll(): Promise<void> {
  let rendered = 0;
  let failures = 0;

  for (const route of prerenderRoutes) {
    const routePath = buildRoutePath(route);
    const lang = languageForRoute(route);

    try {
      const { html: body } = renderRoute(routePath, lang);
      const fullHtml = applyRenderedPage(baseHtml, body, lang);

      const outputPath = routeOutputPath(route);
      mkdirSync(path.dirname(outputPath), { recursive: true });
      writeFileSync(outputPath, fullHtml, 'utf8');
      rendered += 1;
    } catch (error) {
      failures += 1;
      console.error(`[prerender] failed for ${route}:`, error);
    }
  }

  // 404 fallback: reuse the /not-found shell.
  try {
    const notFoundPath = routeOutputPath('/not-found');
    const fallback404Path = path.resolve(distDir, '404.html');
    writeFileSync(fallback404Path, readFileSync(notFoundPath, 'utf8'), 'utf8');
  } catch (error) {
    console.error('[prerender] failed to write 404.html fallback:', error);
  }

  console.log(`[prerender] rendered ${rendered}/${prerenderRoutes.length} routes (${failures} failures)`);
  if (failures > 0) {
    process.exitCode = 1;
  }
}

prerenderAll().catch((error) => {
  console.error('[prerender] fatal error:', error);
  process.exit(1);
});
