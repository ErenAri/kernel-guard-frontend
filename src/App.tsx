/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

const Layout = lazy(() => import('./components/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const CompletedProjects = lazy(() => import('./pages/CompletedProjects'));
const CompletedProjectDetails = lazy(() => import('./pages/CompletedProjectDetails'));
const SecureFrontend = lazy(() => import('./pages/SecureFrontend'));
const HardenedBackend = lazy(() => import('./pages/HardenedBackend'));
const DataProtection = lazy(() => import('./pages/DataProtection'));
const HighPerformance = lazy(() => import('./pages/HighPerformance'));
const Services = lazy(() => import('./pages/Services'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Cookies = lazy(() => import('./pages/Cookies'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteLoadingFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="font-mono text-sm tracking-wider text-foreground/60 uppercase">Loading</p>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<RouteLoadingFallback />}>
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
            </Suspense>
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
