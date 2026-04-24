import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // File watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    // The SSR build powers scripts/prerender.ts. Bundle libraries that ship
    // dual CJS/ESM without `"type": "module"` so Node does not trip over
    // named-export detection at prerender time.
    ssr: {
      noExternal: ['react-helmet-async', 'react-router', 'react-router-dom', 'motion', /^lucide-/],
    },
  };
});
