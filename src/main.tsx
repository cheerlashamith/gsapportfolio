// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Lenis smooth scroll — tuned for buttery storytelling feel
const lenis = new Lenis({
  duration:        1.5,
  easing:          (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel:     true,
  smoothTouch:     false, // prevent mobile issues
  touchMultiplier: 2,
  wheelMultiplier: 1,
} as any);

// Wire Lenis into GSAP ticker — single RAF loop, no duplication
function rafLoop(time: number) {
  lenis.raf(time * 1000);
}
gsap.ticker.add(rafLoop);
gsap.ticker.lagSmoothing(0);

// Sync ScrollTrigger with Lenis
lenis.on('scroll', () => ScrollTrigger.update());

// Export lenis so sections can use lenis.scrollTo()
export { lenis };

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>
);
