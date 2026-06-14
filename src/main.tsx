import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
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

  const app = (
    <StrictMode>
      <App />
    </StrictMode>
  );

  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, app, {
      onRecoverableError(error, errorInfo) {
        if (error instanceof Error && error.message.includes('Minified React error #418')) {
          return;
        }

        console.error(error, errorInfo.componentStack);
      },
    });
  } else {
    createRoot(rootElement).render(app);
  }
}

void bootstrap();
