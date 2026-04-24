import { completedProjects } from './completedProjects';
import { projects } from './projects';

const baseStaticRoutes = [
  '/',
  '/projects',
  '/completed-projects',
  '/services',
  '/services/secure-frontend',
  '/services/hardened-backend',
  '/services/data-protection',
  '/services/high-performance',
  '/terms',
  '/privacy',
  '/cookies',
  '/not-found',
];

const baseDynamicRoutes = [
  ...projects.map((project) => `/projects/${project.id}`),
  ...completedProjects.map((project) => `/completed-projects/${project.id}`),
];

const baseRoutes = [...baseStaticRoutes, ...baseDynamicRoutes];

// Mirror every TR route under /en/* so each language has its own indexable URL.
function withEnMirror(routes: string[]): string[] {
  return routes.flatMap((route) => {
    if (route === '/') return ['/', '/en'];
    return [route, `/en${route}`];
  });
}

const baseNonIndexableRouteSet = new Set<string>([
  '/not-found',
  ...completedProjects
    .filter((project) => project.accounts.length > 0)
    .map((project) => `/completed-projects/${project.id}`),
]);

const nonIndexableRouteSet = new Set<string>([
  ...baseNonIndexableRouteSet,
  ...Array.from(baseNonIndexableRouteSet).map((route) => (route === '/' ? '/en' : `/en${route}`)),
]);

export const prerenderRoutes = Array.from(new Set(withEnMirror(baseRoutes))).sort((a, b) => a.localeCompare(b));

export const nonIndexableRoutes = Array.from(nonIndexableRouteSet).sort((a, b) => a.localeCompare(b));

export const sitemapRoutes = prerenderRoutes.filter((route) => !nonIndexableRouteSet.has(route));

// Pairs of (tr, en) routes used to emit <xhtml:link rel="alternate" hreflang="..."> in the sitemap.
export const sitemapAlternates: Array<{ tr: string; en: string }> = baseRoutes
  .filter((route) => !baseNonIndexableRouteSet.has(route))
  .map((route) => ({
    tr: route,
    en: route === '/' ? '/en' : `/en${route}`,
  }));
