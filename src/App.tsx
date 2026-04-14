/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import CompletedProjects from './pages/CompletedProjects';
import CompletedProjectDetails from './pages/CompletedProjectDetails';
import SecureFrontend from './pages/SecureFrontend';
import HardenedBackend from './pages/HardenedBackend';
import DataProtection from './pages/DataProtection';
import HighPerformance from './pages/HighPerformance';
import Services from './pages/Services';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <ScrollToTop />
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
              </Route>
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
