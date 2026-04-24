/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
  loadTerms,
  loadPrivacy,
  loadCookies,
  loadNotFound,
} from './routes/pageLoaders';

const Layout = lazy(loadLayout);
const Home = lazy(loadHome);
const Projects = lazy(loadProjects);
const ProjectDetails = lazy(loadProjectDetails);
const CompletedProjects = lazy(loadCompletedProjects);
const CompletedProjectDetails = lazy(loadCompletedProjectDetails);
const SecureFrontend = lazy(loadSecureFrontend);
const HardenedBackend = lazy(loadHardenedBackend);
const DataProtection = lazy(loadDataProtection);
const HighPerformance = lazy(loadHighPerformance);
const Services = lazy(loadServices);
const Terms = lazy(loadTerms);
const Privacy = lazy(loadPrivacy);
const Cookies = lazy(loadCookies);
const NotFound = lazy(loadNotFound);

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
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
        <Route path="completed-projects" element={<CompletedProjects />} />
        <Route path="completed-projects/:id" element={<CompletedProjectDetails />} />
        <Route path="services" element={<Services />} />
        <Route path="services/secure-frontend" element={<SecureFrontend />} />
        <Route path="services/hardened-backend" element={<HardenedBackend />} />
        <Route path="services/data-protection" element={<DataProtection />} />
        <Route path="services/high-performance" element={<HighPerformance />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function LangShell({ lang }: { lang: Language }) {
  return (
    <LanguageProvider initialLanguage={lang}>
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
            <Route path="/*" element={<LangShell lang="tr" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
