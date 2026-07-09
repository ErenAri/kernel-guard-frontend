import { completedProjects } from './completedProjects';
import { projects } from './projects';
import { articleSlugs } from './articles';
import { growthServiceSlugs } from './growthServices';
import { LANGUAGE_HREFLANGS, SUPPORTED_LANGUAGES, localizePath } from '../i18n/route';
import type { Language } from '../context/LanguageContext';

const baseStaticRoutes = [
  '/',
  '/projects',
  '/completed-projects',
  '/services',
  '/services/secure-frontend',
  '/services/hardened-backend',
  '/services/data-protection',
  '/services/high-performance',
  '/articles',
  '/security',
  '/engineering',
  '/status',
  '/changelog',
  '/terms',
  '/privacy',
  '/cookies',
  '/contact',
  '/not-found',
];

const baseDynamicRoutes = [
  ...projects.map((project) => `/projects/${project.id}`),
  ...completedProjects.map((project) => `/completed-projects/${project.id}`),
  ...articleSlugs.map((slug) => `/articles/${slug}`),
  ...growthServiceSlugs.map((slug) => `/services/${slug}`),
];

const baseRoutes = [...baseStaticRoutes, ...baseDynamicRoutes];

// Mirror every canonical route under each supported language prefix so each
// language keeps its own renderable URL. Sitemap inclusion is filtered later so
// legal, utility, and non-indexable pages can still be prerendered without being
// submitted as high-priority canonical URLs.
function withLanguageMirrors(routes: string[]): string[] {
  return routes.flatMap((route) => SUPPORTED_LANGUAGES.map((language) => localizePath(route, language)));
}

function mirrorRouteSet(routes: Iterable<string>): Set<string> {
  return new Set(
    Array.from(routes).flatMap((route) =>
      SUPPORTED_LANGUAGES.map((language) => localizePath(route, language)),
    ),
  );
}

const baseNonIndexableRouteSet = new Set<string>([
  '/not-found',
  ...completedProjects
    .filter((project) => project.accounts.length > 0)
    .map((project) => `/completed-projects/${project.id}`),
]);

const baseSitemapExcludedRouteSet = new Set<string>([
  ...baseNonIndexableRouteSet,
  '/security',
  '/engineering',
  '/status',
  '/changelog',
  '/terms',
  '/privacy',
  '/cookies',
]);

const nonIndexableRouteSet = mirrorRouteSet(baseNonIndexableRouteSet);
const sitemapExcludedRouteSet = mirrorRouteSet(baseSitemapExcludedRouteSet);

export const prerenderRoutes = Array.from(new Set(withLanguageMirrors(baseRoutes))).sort((a, b) => a.localeCompare(b));

export const nonIndexableRoutes = Array.from(nonIndexableRouteSet).sort((a, b) => a.localeCompare(b));

export const sitemapRoutes = prerenderRoutes.filter((route) => !sitemapExcludedRouteSet.has(route));

export const sitemapAlternates: Array<{ routes: Record<Language, string>; hreflangs: Record<Language, string> }> = baseRoutes
  .filter((route) => !baseSitemapExcludedRouteSet.has(route))
  .map((route) => ({
    routes: Object.fromEntries(SUPPORTED_LANGUAGES.map((language) => [language, localizePath(route, language)])) as Record<Language, string>,
    hreflangs: LANGUAGE_HREFLANGS,
  }));
