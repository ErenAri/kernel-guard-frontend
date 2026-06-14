/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy, type ComponentType } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import BrowserLanguageRedirect from './components/BrowserLanguageRedirect';
import CanonicalPathRedirect from './components/CanonicalPathRedirect';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider, type Language } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import {
  loadLayout,
  loadHome,
  loadProjects,
  loadProjectDetails,
  loadCompletedProjects,
  loadCompletedProjectDetails,
  loadSecureFrontend,
  loadHardenedBackend,
  loadDataProtection,
  loadHighPerformance,
  loadServices,
  loadServiceLandingPage,
  loadArticles,
  loadArticlePage,
  loadSecurity,
  loadEngineering,
  loadStatus,
  loadChangelog,
  loadTerms,
  loadPrivacy,
  loadCookies,
  loadContact,
  loadNotFound,
  loadAdminLayout,
  loadAdminDashboard,
  loadProjectEditor,
  type CachedModuleLoader,
} from './routes/pageLoaders';

function lazyRoute<TModule extends { default: ComponentType<Record<string, never>> }>(
  loader: CachedModuleLoader<TModule>,
) {
  const LazyComponent = lazy(loader);

  return function PreloadedRoute() {
    const module = loader.getResolved();

    if (module) {
      const Component = module.default;
      return <Component />;
    }

    return <LazyComponent />;
  };
}

const Layout = lazyRoute(loadLayout);
const Home = lazyRoute(loadHome);
const Projects = lazyRoute(loadProjects);
const ProjectDetails = lazyRoute(loadProjectDetails);
const BpfcompatPage = lazy(() => import('./pages/bpfcompat/BpfcompatPage'));
const CompletedProjects = lazyRoute(loadCompletedProjects);
const CompletedProjectDetails = lazyRoute(loadCompletedProjectDetails);
const SecureFrontend = lazyRoute(loadSecureFrontend);
const HardenedBackend = lazyRoute(loadHardenedBackend);
const DataProtection = lazyRoute(loadDataProtection);
const HighPerformance = lazyRoute(loadHighPerformance);
const Services = lazyRoute(loadServices);
const ServiceLandingPage = lazyRoute(loadServiceLandingPage);
const Articles = lazyRoute(loadArticles);
const ArticlePage = lazyRoute(loadArticlePage);
const Security = lazyRoute(loadSecurity);
const Engineering = lazyRoute(loadEngineering);
const Status = lazyRoute(loadStatus);
const Changelog = lazyRoute(loadChangelog);
const Terms = lazyRoute(loadTerms);
const Privacy = lazyRoute(loadPrivacy);
const Cookies = lazyRoute(loadCookies);
const Contact = lazyRoute(loadContact);
const NotFound = lazyRoute(loadNotFound);
const AdminLayout = lazyRoute(loadAdminLayout);
const AdminDashboard = lazyRoute(loadAdminDashboard);
const ProjectEditor = lazyRoute(loadProjectEditor);

// Design previews (not linked from production nav)
const BpfcompatPreviewIndex = lazy(() => import('./pages/preview/BpfcompatPreviewIndex'));
const BpfcompatVerdict = lazy(() => import('./pages/preview/BpfcompatVerdict'));
const BpfcompatProofLoop = lazy(() => import('./pages/preview/BpfcompatProofLoop'));
const BpfcompatNarrative = lazy(() => import('./pages/preview/BpfcompatNarrative'));
const BpfcompatLaunch = lazy(() => import('./pages/preview/BpfcompatLaunch'));

function RouteLoadingFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="font-mono text-sm tracking-wider text-foreground/60 uppercase">Loading</p>
    </div>
  );
}

function LocalizedRoutes() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="edit/:type/:id" element={<ProjectEditor />} />
      </Route>

      {/* Public Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/bpfcompat" element={<BpfcompatPage />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
        <Route path="completed-projects" element={<CompletedProjects />} />
        <Route path="completed-projects/:id" element={<CompletedProjectDetails />} />
        <Route path="services" element={<Services />} />
        <Route path="services/secure-frontend" element={<SecureFrontend />} />
        <Route path="services/hardened-backend" element={<HardenedBackend />} />
        <Route path="services/data-protection" element={<DataProtection />} />
        <Route path="services/high-performance" element={<HighPerformance />} />
        <Route path="services/:slug" element={<ServiceLandingPage />} />
        <Route path="articles" element={<Articles />} />
        <Route path="articles/:slug" element={<ArticlePage />} />
        <Route path="security" element={<Security />} />
        <Route path="engineering" element={<Engineering />} />
        <Route path="status" element={<Status />} />
        <Route path="changelog" element={<Changelog />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="contact" element={<Contact />} />

        {/* Design previews */}
        <Route path="preview/bpfcompat" element={<BpfcompatPreviewIndex />} />
        <Route path="preview/bpfcompat/launch" element={<BpfcompatLaunch />} />
        <Route path="preview/bpfcompat/verdict" element={<BpfcompatVerdict />} />
        <Route path="preview/bpfcompat/proof-loop" element={<BpfcompatProofLoop />} />
        <Route path="preview/bpfcompat/narrative" element={<BpfcompatNarrative />} />

        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function LangShell({ lang }: { lang: Language }) {
  // key={lang} forces a clean remount when the URL prefix flips between
  // /en/* and /*. Without it, React Router keeps the same LangShell instance
  // (same element type at same tree position) and useState(initialLanguage)
  // never re-runs — leaving the language state stuck at the first mount value.
  return (
    <LanguageProvider key={lang} initialLanguage={lang}>
      <BrowserLanguageRedirect />
      <CanonicalPathRedirect />
      <ScrollToTop />
      <Suspense fallback={<RouteLoadingFallback />}>
        <LocalizedRoutes />
      </Suspense>
    </LanguageProvider>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/en/*" element={<LangShell lang="en" />} />
            <Route path="/de/*" element={<LangShell lang="de" />} />
            <Route path="/ja/*" element={<LangShell lang="ja" />} />
            <Route path="/zh-cn/*" element={<LangShell lang="zh-CN" />} />
            <Route path="/es/*" element={<LangShell lang="es" />} />
            <Route path="/fr/*" element={<LangShell lang="fr" />} />
            <Route path="/ko/*" element={<LangShell lang="ko" />} />
            <Route path="/*" element={<LangShell lang="tr" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
