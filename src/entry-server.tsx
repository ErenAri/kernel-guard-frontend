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
import ServiceLandingPage from './pages/ServiceLandingPage';
import Articles from './pages/Articles';
import ArticlePage from './pages/ArticlePage';
import Security from './pages/Security';
import Engineering from './pages/Engineering';
import Status from './pages/Status';
import Changelog from './pages/Changelog';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import Contact from './pages/Contact';
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
                <LanguageProvider key="en" initialLanguage="en">
                  <CanonicalPathRedirect />
                  <ScrollToTop />
                  <LocalizedRoutes />
                </LanguageProvider>
              }
            />
            <Route
              path="/de/*"
              element={
                <LanguageProvider key="de" initialLanguage="de">
                  <CanonicalPathRedirect />
                  <ScrollToTop />
                  <LocalizedRoutes />
                </LanguageProvider>
              }
            />
            <Route
              path="/ja/*"
              element={
                <LanguageProvider key="ja" initialLanguage="ja">
                  <CanonicalPathRedirect />
                  <ScrollToTop />
                  <LocalizedRoutes />
                </LanguageProvider>
              }
            />
            <Route
              path="/zh-cn/*"
              element={
                <LanguageProvider key="zh-CN" initialLanguage="zh-CN">
                  <CanonicalPathRedirect />
                  <ScrollToTop />
                  <LocalizedRoutes />
                </LanguageProvider>
              }
            />
            <Route
              path="/es/*"
              element={
                <LanguageProvider key="es" initialLanguage="es">
                  <CanonicalPathRedirect />
                  <ScrollToTop />
                  <LocalizedRoutes />
                </LanguageProvider>
              }
            />
            <Route
              path="/fr/*"
              element={
                <LanguageProvider key="fr" initialLanguage="fr">
                  <CanonicalPathRedirect />
                  <ScrollToTop />
                  <LocalizedRoutes />
                </LanguageProvider>
              }
            />
            <Route
              path="/ko/*"
              element={
                <LanguageProvider key="ko" initialLanguage="ko">
                  <CanonicalPathRedirect />
                  <ScrollToTop />
                  <LocalizedRoutes />
                </LanguageProvider>
              }
            />
            <Route
              path="/*"
              element={
                <LanguageProvider key="tr" initialLanguage={language}>
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
