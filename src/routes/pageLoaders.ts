type ModuleLoader<TModule = unknown> = () => Promise<TModule>;

type PrefetchConnection = {
  saveData?: boolean;
  effectiveType?: string;
};

type PrefetchNavigator = Navigator & {
  connection?: PrefetchConnection;
};

const CONSTRAINED_CONNECTION_TYPES = new Set(['slow-2g', '2g']);

function cacheLoader<TModule>(loader: ModuleLoader<TModule>): ModuleLoader<TModule> {
  let pending: Promise<TModule> | null = null;

  return () => {
    if (!pending) {
      pending = loader();
    }

    return pending;
  };
}

function canPrefetchRoute(): boolean {
  if (typeof navigator === 'undefined') {
    return false;
  }

  const connection = (navigator as PrefetchNavigator).connection;

  if (!connection) {
    return true;
  }

  if (connection.saveData) {
    return false;
  }

  return !CONSTRAINED_CONNECTION_TYPES.has(connection.effectiveType ?? '');
}

export const loadLayout = cacheLoader(() => import('../components/Layout'));
export const loadHome = cacheLoader(() => import('../pages/Home'));
export const loadProjects = cacheLoader(() => import('../pages/Projects'));
export const loadProjectDetails = cacheLoader(() => import('../pages/ProjectDetails'));
export const loadCompletedProjects = cacheLoader(() => import('../pages/CompletedProjects'));
export const loadCompletedProjectDetails = cacheLoader(() => import('../pages/CompletedProjectDetails'));
export const loadSecureFrontend = cacheLoader(() => import('../pages/SecureFrontend'));
export const loadHardenedBackend = cacheLoader(() => import('../pages/HardenedBackend'));
export const loadDataProtection = cacheLoader(() => import('../pages/DataProtection'));
export const loadHighPerformance = cacheLoader(() => import('../pages/HighPerformance'));
export const loadServices = cacheLoader(() => import('../pages/Services'));
export const loadTerms = cacheLoader(() => import('../pages/Terms'));
export const loadPrivacy = cacheLoader(() => import('../pages/Privacy'));
export const loadCookies = cacheLoader(() => import('../pages/Cookies'));
export const loadContact = cacheLoader(() => import('../pages/Contact'));
export const loadNotFound = cacheLoader(() => import('../pages/NotFound'));

const prefetchers = {
  home: loadHome,
  projects: loadProjects,
  projectDetails: loadProjectDetails,
  completedProjects: loadCompletedProjects,
  completedProjectDetails: loadCompletedProjectDetails,
  services: loadServices,
  secureFrontend: loadSecureFrontend,
  hardenedBackend: loadHardenedBackend,
  dataProtection: loadDataProtection,
  highPerformance: loadHighPerformance,
  terms: loadTerms,
  privacy: loadPrivacy,
  cookies: loadCookies,
  contact: loadContact,
  notFound: loadNotFound,
} as const;

export type PrefetchRoute = keyof typeof prefetchers;

export function prefetchRoute(route: PrefetchRoute): void {
  if (!canPrefetchRoute()) {
    return;
  }

  void prefetchers[route]();
}

export function prefetchRoutes(routes: readonly PrefetchRoute[]): void {
  for (const route of routes) {
    prefetchRoute(route);
  }
}

// Loaders required to render a given URL. Used by main.tsx to preload the
// page's lazy chunks before hydration so React's client tree matches the
// server-rendered markup (no Suspense fallback flash, no hydration warnings).
export function resolveLoadersForPath(pathname: string): PrefetchRoute[] {
  const path = pathname.replace(/\/+$/, '') || '/';

  if (path === '/') return ['home'];
  if (path === '/services') return ['services'];
  if (path === '/services/secure-frontend') return ['secureFrontend'];
  if (path === '/services/hardened-backend') return ['hardenedBackend'];
  if (path === '/services/data-protection') return ['dataProtection'];
  if (path === '/services/high-performance') return ['highPerformance'];
  if (path === '/projects') return ['projects'];
  if (path.startsWith('/projects/')) return ['projectDetails'];
  if (path === '/completed-projects') return ['completedProjects'];
  if (path.startsWith('/completed-projects/')) return ['completedProjectDetails'];
  if (path === '/terms') return ['terms'];
  if (path === '/privacy') return ['privacy'];
  if (path === '/cookies') return ['cookies'];
  if (path === '/contact') return ['contact'];
  return ['notFound'];
}

export function preloadRoutes(routes: readonly PrefetchRoute[]): Promise<unknown[]> {
  return Promise.all(routes.map((route) => prefetchers[route]()));
}