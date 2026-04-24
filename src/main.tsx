import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import { loadLayout, preloadRoutes, resolveLoadersForPath } from './routes/pageLoaders';
import './index.css';

const rootElement = document.getElementById('root')!;

async function bootstrap() {
  // Preload the layout and the current route's lazy chunks so the first
  // client render matches the prerendered HTML (avoids Suspense fallback
  // flash and hydration mismatch warnings).
  await Promise.all([
    loadLayout(),
    preloadRoutes(resolveLoadersForPath(window.location.pathname)),
  ]);

  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

void bootstrap();
