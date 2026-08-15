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

// 3. Disable lagSmoothing so GSAP animations track the Lenis frame in real-time
gsap.ticker.lagSmoothing(0);

// Export lenis so sections can use lenis.scrollTo()
export { lenis };

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
