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
  duration:        1.0,
  easing:          (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel:     true,
  smoothTouch:     false, // prevent mobile scroll lag / fighting
  touchMultiplier: 1.5,
  wheelMultiplier: 1.0,
} as any);

// Update ScrollTrigger on scroll
lenis.on('scroll', ScrollTrigger.update);

// Dedicated standard high-precision RAF loop
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Export lenis so sections can use lenis.scrollTo()
export { lenis };

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
