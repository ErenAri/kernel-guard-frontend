import { completedProjects } from './completedProjects';
import { projects } from './projects';

const staticRoutes = [
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

const dynamicRoutes = [
  ...projects.map((project) => `/projects/${project.id}`),
  ...completedProjects.map((project) => `/completed-projects/${project.id}`),
];

const nonIndexableRouteSet = new Set<string>([
  '/not-found',
  ...completedProjects
    .filter((project) => project.accounts.length > 0)
    .map((project) => `/completed-projects/${project.id}`),
]);

export const prerenderRoutes = Array.from(new Set([...staticRoutes, ...dynamicRoutes])).sort((a, b) => a.localeCompare(b));

export const nonIndexableRoutes = Array.from(nonIndexableRouteSet).sort((a, b) => a.localeCompare(b));

export const sitemapRoutes = prerenderRoutes.filter((route) => !nonIndexableRouteSet.has(route));
