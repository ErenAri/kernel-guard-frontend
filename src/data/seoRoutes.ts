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
];

const baseRoutes = [...baseStaticRoutes, ...baseDynamicRoutes];
const englishGrowthRoutes = [
  '/en/articles',
  ...articleSlugs.map((slug) => `/en/articles/${slug}`),
  ...growthServiceSlugs.map((slug) => `/en/services/${slug}`),
];

// Mirror every canonical TR route under each supported language prefix so each
// language has its own indexable URL.
function withLanguageMirrors(routes: string[]): string[] {
  return routes.flatMap((route) => SUPPORTED_LANGUAGES.map((language) => localizePath(route, language)));
}

const baseNonIndexableRouteSet = new Set<string>([
  '/not-found',
  ...completedProjects
    .filter((project) => project.accounts.length > 0)
    .map((project) => `/completed-projects/${project.id}`),
]);

const nonIndexableRouteSet = new Set<string>([
  ...baseNonIndexableRouteSet,
  ...Array.from(baseNonIndexableRouteSet).flatMap((route) =>
    SUPPORTED_LANGUAGES
      .filter((language) => language !== 'tr')
      .map((language) => localizePath(route, language)),
  ),
]);

export const prerenderRoutes = Array.from(new Set([...withLanguageMirrors(baseRoutes), ...englishGrowthRoutes])).sort((a, b) => a.localeCompare(b));

export const nonIndexableRoutes = Array.from(nonIndexableRouteSet).sort((a, b) => a.localeCompare(b));

export const sitemapRoutes = prerenderRoutes.filter((route) => !nonIndexableRouteSet.has(route));

export const sitemapAlternates: Array<{ routes: Record<Language, string>; hreflangs: Record<Language, string> }> = baseRoutes
  .filter((route) => !baseNonIndexableRouteSet.has(route))
  .map((route) => ({
    routes: Object.fromEntries(SUPPORTED_LANGUAGES.map((language) => [language, localizePath(route, language)])) as Record<Language, string>,
    hreflangs: LANGUAGE_HREFLANGS,
  }));
