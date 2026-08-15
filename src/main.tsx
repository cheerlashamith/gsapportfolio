// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Lenis smooth scroll — tuned for responsive, butter-smooth 60fps scrolling
const lenis = new Lenis({
  duration:        1.1,
  easing:          (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel:     true,
  smoothTouch:     false, // prevent mobile scroll lag / fighting
  touchMultiplier: 1.5,
  wheelMultiplier: 1.0,
} as any);

// Wire Lenis into GSAP ticker
function rafLoop(time: number) {
  lenis.raf(time * 1000);
}
gsap.ticker.add(rafLoop);
gsap.ticker.lagSmoothing(500, 33); // Keep lagSmoothing enabled to avoid large teleport jumps during frame drops

// Sync ScrollTrigger with Lenis
lenis.on('scroll', ScrollTrigger.update);

// Export lenis so sections can use lenis.scrollTo()
export { lenis };

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
