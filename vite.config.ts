// vite.config.ts — Add PWA plugin
// First: npm install -D vite-plugin-pwa

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'src/assets/hero.jpg'],
      manifest: {
        name: 'Cheerla Shamith — Portfolio',
        short_name: 'CS Portfolio',
        description: 'Full-Stack Developer & AI Enthusiast — Cheerla Shamith',
        theme_color: '#4361ee',
        background_color: '#060610',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
        start_url: '/',
        scope: '/',
        shortcuts: [
          {
            name: 'View Projects',
            url: '/#projects',
            description: 'View Shamith\'s projects',
          },
          {
            name: 'Contact Me',
            url: '/#contact',
            description: 'Get in touch with Shamith',
          },
        ],
      },
      devOptions: {
        enabled: false, // ← disable SW in dev so Vite's HMR works properly
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 8000000,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'cdn-cache', expiration: { maxEntries: 20 } },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
});
