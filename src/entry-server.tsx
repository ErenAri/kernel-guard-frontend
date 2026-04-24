import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route, StaticRouter } from 'react-router-dom';
import { LanguageProvider, type Language } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import CanonicalPathRedirect from './components/CanonicalPathRedirect';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
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
import NotFound from './pages/NotFound';

interface HelmetDataAttributes {
  toString(): string;
}

interface HelmetState {
  title?: HelmetDataAttributes;
  meta?: HelmetDataAttributes;
  link?: HelmetDataAttributes;
  script?: HelmetDataAttributes;
  htmlAttributes?: HelmetDataAttributes;
}

interface HelmetContextShape {
  helmet?: HelmetState;
}

export interface RenderResult {
  html: string;
  helmet: HelmetState;
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

export function renderRoute(url: string, language: Language): RenderResult {
  const helmetContext: HelmetContextShape = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <ThemeProvider>
        <StaticRouter location={url}>
          <Routes>
            <Route
              path="/en/*"
              element={
                <LanguageProvider initialLanguage="en">
                  <CanonicalPathRedirect />
                  <ScrollToTop />
                  <LocalizedRoutes />
                </LanguageProvider>
              }
            />
            <Route
              path="/*"
              element={
                <LanguageProvider initialLanguage={language}>
                  <CanonicalPathRedirect />
                  <ScrollToTop />
                  <LocalizedRoutes />
                </LanguageProvider>
              }
            />
          </Routes>
        </StaticRouter>
      </ThemeProvider>
    </HelmetProvider>,
  );

  return {
    html,
    helmet: helmetContext.helmet ?? {},
  };
}
