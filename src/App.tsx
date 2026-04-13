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
import Demos from './pages/Demos';
import DemoDetails from './pages/DemoDetails';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<ProjectDetails />} />
              <Route path="demos" element={<Demos />} />
              <Route path="demos/:id" element={<DemoDetails />} />
              <Route path="terms" element={<Terms />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="cookies" element={<Cookies />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}
