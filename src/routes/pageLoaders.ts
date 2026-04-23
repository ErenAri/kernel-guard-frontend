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