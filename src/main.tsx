// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Lenis smooth scroll — configured for optimal 60fps responsiveness
const lenis = new Lenis({
  duration:        1.2,
  easing:          (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel:     true,
  smoothTouch:     false, // native momentum scrolling on mobile prevents stutter
  touchMultiplier: 1.5,
  wheelMultiplier: 1.0,
  infinite:        false,
} as any);

// 1. Synchronize Lenis scroll events with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

// 2. Hook Lenis into GSAP ticker so both animate on the exact same frame
gsap.ticker.add((time: number) => {
  lenis.raf(time * 1000);
});

// 3. Keep standard lagSmoothing to prevent frame stutter in Chrome
gsap.ticker.lagSmoothing(500, 33);

// 4. Purge any stale service workers or caches that cause Chrome lag
if (typeof window !== 'undefined') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
      }
    });
  }
  if ('caches' in window) {
    caches.keys().then((names) => {
      for (const name of names) {
        caches.delete(name);
      }
    });
  }
}

// Export lenis so sections can use lenis.scrollTo()
export { lenis };

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
