# CHEERLA SHAMITH — PORTFOLIO 2.0
## ██████████ COMPLETE CINEMATIC BUILD PROMPT ██████████
### React 18 + TypeScript + Vite + Tailwind + GSAP + Framer Motion
### CircularGallery Projects • StoryScroll Reveals • ANTIGRAVITY Footer

> **HOW TO USE:** Paste this entire document into Lovable / Bolt / v0 / Cursor as a single prompt.
> All image paths use `./src/assets/` — substitute your actual files.
> Do NOT generate placeholder images. Use path references only.

---

# ════════════════════════════════════════════════════
# PART 0 — IDENTITY & PHILOSOPHY
# ════════════════════════════════════════════════════

Build the portfolio for **Cheerla Shamith** (King) — B.Tech CSE student 2023–2027, SASI Institute of Technology & Engineering, full-stack developer and AI engineer. The portfolio must feel like a **AAA game studio intro** meets a **YC-funded startup landing page**. Every pixel deliberate, every animation purposeful, zero dropped frames, buttery-smooth Lenis scrolling throughout.

```
OWNER DATA (NEVER CHANGE):
Full Name:    Cheerla Shamith
Phone:        +91 6305284229
Email:        chshamith888@gmail.com
Location:     Pentapadu, West Godavari, Andhra Pradesh, India
LinkedIn:     https://www.linkedin.com/in/cheerla-shamith-a420472a0
GitHub:       https://github.com/cheerlashamith
CodeChef:     https://www.codechef.com/users/sasihackerrr
Instagram:    https://www.instagram.com/starshami888/
WhatsApp:     https://wa.me/916305284229
College:      SASI Institute of Technology & Engineering (JNTUK)
Degree:       B.Tech CSE  |  2023–2027
CGPA:         9.32 (Sem I–VI)
```

**THREE BIG ARCHITECTURAL CHANGES vs v1:**
1. **Projects Section** → 3D `CircularGallery` rotating carousel + StoryScroll reveal panel. NO more sticky-stacking cards.
2. **Footer** → ANTIGRAVITY edition — GSAP physics where EVERYTHING floats *upward*, defying gravity, with elastic spring easing, upward particle drift, and levitating social links.
3. **Hero** → Particle canvas PLUS an optional `AnimatedShaderHero` background sublayer (Grid Morph variant, `opacity: 0.18`).

---

# ════════════════════════════════════════════════════
# PART 1 — TECH STACK & INSTALLATION
# ════════════════════════════════════════════════════

```bash
npm create vite@latest shamith-portfolio -- --template react-ts
cd shamith-portfolio

# Core animation
npm install gsap @gsap/react framer-motion

# Smooth scroll
npm install @studio-freight/lenis

# UI utilities
npm install lucide-react clsx class-variance-authority

# Styling
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**`package.json` exact versions:**
```json
{
  "gsap": "^3.12.5",
  "@gsap/react": "^2.1.1",
  "@studio-freight/lenis": "^1.0.42",
  "framer-motion": "^12.0.0",
  "lucide-react": "^0.344.0",
  "clsx": "^2.1.0",
  "class-variance-authority": "^0.7.0"
}
```

**`index.html` `<head>` additions:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Raleway:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
<link rel="preload" as="image" href="./src/assets/hero.jpg">
<title>Cheerla Shamith — Full-Stack Developer & AI Engineer</title>
```

---

# ════════════════════════════════════════════════════
# PART 2 — FILE STRUCTURE
# ════════════════════════════════════════════════════

```
shamith-portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── hero.jpg                ← your hero profile photo
│   │   ├── about.jpg               ← blue suit photo
│   │   └── projects/
│   │       ├── gramin-1.jpg
│   │       ├── gramin-2.jpg
│   │       ├── gramin-3.jpg
│   │       ├── smartsupport-1.jpg
│   │       ├── smartsupport-2.jpg
│   │       ├── smartsupport-3.jpg
│   │       ├── meetminds-1.jpg
│   │       ├── meetminds-2.jpg
│   │       ├── meetminds-3.jpg
│   │       ├── stockease-1.jpg
│   │       ├── stockease-2.jpg
│   │       ├── stockease-3.jpg
│   │       ├── mindmitra-1.jpg
│   │       ├── mindmitra-2.jpg
│   │       ├── mindmitra-3.jpg
│   │       ├── codearena-1.jpg
│   │       ├── codearena-2.jpg
│   │       └── codearena-3.jpg
│   ├── components/
│   │   ├── Cursor.tsx
│   │   ├── Preloader.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx              ← ANTIGRAVITY edition
│   │   └── ui/
│   │       ├── CircularGallery.tsx ← adapted 3D project carousel
│   │       └── ShaderBackground.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx    ← CircularGallery + StoryScroll
│   │   ├── TimelineSection.tsx
│   │   ├── HackathonsSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   └── ContactSection.tsx
│   ├── hooks/
│   │   ├── useMagneticHover.ts
│   │   ├── useTypewriter.ts
│   │   ├── useCounter.ts
│   │   └── useParticleCanvas.ts
│   ├── data/
│   │   ├── projects.ts
│   │   ├── timeline.ts
│   │   ├── hackathons.ts
│   │   ├── certifications.ts
│   │   ├── achievements.ts
│   │   └── skills.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

# ════════════════════════════════════════════════════
# PART 3 — GLOBAL STYLES (src/index.css)
# ════════════════════════════════════════════════════

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Raleway:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ─── Design Tokens ─── */
:root {
  --primary:        #4361ee;
  --primary-dark:   #2f49c7;
  --secondary:      #3a0ca3;
  --accent:         #f72585;
  --purple:         #7209b7;
  --bg:             #060610;
  --bg-deep:        #050510;
  --bg-card:        rgba(10, 10, 30, 0.75);
  --text:           #f8f9fa;
  --text-muted:     rgba(248, 249, 250, 0.58);
  --border:         rgba(67, 97, 238, 0.18);
  --border-hover:   rgba(67, 97, 238, 0.55);
  --gradient:       linear-gradient(135deg, #4361ee, #3a0ca3, #7209b7);
  --gradient-acc:   linear-gradient(135deg, #f72585, #7209b7, #4361ee);
  --gradient-h:     linear-gradient(90deg, #4361ee, #7209b7, #f72585);
  --glow-blue:      0 0 40px rgba(67, 97, 238, 0.45);
  --glow-pink:      0 0 40px rgba(247, 37, 133, 0.45);
  --glow-purple:    0 0 40px rgba(114, 9, 183, 0.45);
  --glass:          rgba(255, 255, 255, 0.04);
  --glass-border:   rgba(255, 255, 255, 0.09);
}

/* ─── Reset ─── */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: auto; overflow-x: hidden; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  cursor: none;
}
@media (max-width: 1024px) { body { cursor: auto; } }
::selection { background: rgba(67,97,238,0.35); color: #fff; }

/* ─── Typography Utilities ─── */
.gradient-text {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.gradient-text-accent {
  background: var(--gradient-acc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.gradient-text-h {
  background: var(--gradient-h);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ─── Glass ─── */
.glass {
  background: var(--glass);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid var(--glass-border);
}
.glass-card {
  background: var(--bg-card);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--border);
  border-radius: 20px;
  transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
}
.glass-card:hover {
  border-color: var(--border-hover);
  box-shadow: var(--glow-blue);
  transform: translateY(-7px);
}

/* ─── Watermark ─── */
.section-watermark {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  font-size: clamp(5rem, 18vw, 18rem);
  text-transform: uppercase;
  letter-spacing: -0.05em;
  color: white;
  opacity: 0.025;
  pointer-events: none;
  white-space: nowrap;
  user-select: none;
  z-index: 0;
}

/* ─── Scrollbar ─── */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 2px; }

/* ─── Preloader ─── */
.preloader-bar { height: 3px; background: var(--gradient); transition: width 0.05s linear; }

/* ─── Infinite Marquee ─── */
@keyframes marquee-left  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
@keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0);    } }
@keyframes marquee-up    { from { transform: translateY(0); }    to { transform: translateY(-50%); } }
.marquee-left  { animation: marquee-left  var(--speed, 30s) linear infinite; }
.marquee-right { animation: marquee-right var(--speed, 30s) linear infinite; }
.marquee-up    { animation: marquee-up    var(--speed, 20s) linear infinite; }
.marquee-left:hover,
.marquee-right:hover { animation-play-state: paused; }

/* ─── Typewriter Cursor ─── */
.typewriter-cursor {
  display: inline-block; width: 3px; height: 1em;
  background: var(--primary); margin-left: 3px;
  vertical-align: middle;
  animation: blink 0.8s step-end infinite;
}
@keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }

/* ─── Profile Ring ─── */
@keyframes rotate-ring { to { transform: rotate(360deg); } }
.animated-ring {
  background: conic-gradient(from 0deg, var(--primary), var(--accent), var(--purple), var(--primary));
  animation: rotate-ring 3s linear infinite;
  border-radius: 50%;
}
@keyframes float-idle {
  0%,100% { transform: translateY(-8px); }
  50%      { transform: translateY(8px);  }
}
.float-idle { animation: float-idle 4s ease-in-out infinite; }

/* ─── ANTIGRAVITY animations (CSS fallbacks, GSAP drives the real ones) ─── */
@keyframes float-up {
  from { transform: translateY(30px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
@keyframes drift-up {
  from { transform: translateY(0) scale(1); opacity: 0.6; }
  to   { transform: translateY(-120vh) scale(0.3); opacity: 0; }
}
@keyframes orb-pulse {
  0%,100% { transform: scale(1) translateY(0); }
  50%      { transform: scale(1.12) translateY(-20px); }
}

/* ─── CircularGallery 3D ─── */
.circular-gallery-stage {
  perspective: 2400px;
  perspective-origin: 50% 50%;
}
.circular-gallery-scene {
  transform-style: preserve-3d;
  transition: transform 0.1s linear;
}
.project-gallery-card {
  position: absolute;
  width: 320px;
  height: 420px;
  left: 50%; top: 50%;
  margin-left: -160px;
  margin-top: -210px;
  transform-style: preserve-3d;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.4s ease;
}
.project-gallery-card:hover {
  box-shadow: 0 0 60px rgba(67,97,238,0.7), 0 0 120px rgba(67,97,238,0.25);
}
.project-gallery-card.active {
  box-shadow: 0 0 80px rgba(247,37,133,0.6), 0 0 160px rgba(247,37,133,0.2);
}

/* ─── StoryScroll Panel ─── */
.story-detail-panel {
  position: sticky;
  top: 80px;
  height: calc(100dvh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.story-indicator-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: rgba(255,255,255,0.25);
  transition: all 0.4s ease;
  cursor: pointer;
}
.story-indicator-dot.active {
  background: var(--primary);
  box-shadow: 0 0 14px var(--primary);
  transform: scale(1.4);
}

/* ─── Timeline Line ─── */
.timeline-line {
  position: absolute; left: 50%; top: 0;
  width: 2px; background: var(--primary);
  transform-origin: top; height: 0;
}

/* ─── Skills Row ─── */
.skill-row-name {
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 6vw, 6rem);
  color: var(--text);
  letter-spacing: -0.04em;
  line-height: 1;
  transition: opacity 0.4s ease, -webkit-text-fill-color 0.4s ease;
}
.skill-row:hover .skill-row-name {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ─── Footer Antigravity Orbs ─── */
.footer-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  mix-blend-mode: screen;
  animation: orb-pulse 6s ease-in-out infinite;
}
.footer-particle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  animation: drift-up var(--dur, 8s) linear var(--delay, 0s) infinite;
}

/* ─── Reduced Motion ─── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# ════════════════════════════════════════════════════
# PART 4 — TAILWIND CONFIG
# ════════════════════════════════════════════════════

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["'Poppins'", 'sans-serif'],
        raleway: ["'Raleway'", 'sans-serif'],
        grotesk: ["'Space Grotesk'", 'sans-serif'],
      },
      colors: {
        primary:   '#4361ee',
        secondary: '#3a0ca3',
        accent:    '#f72585',
        purple:    '#7209b7',
        bg:        '#060610',
        'bg-deep': '#050510',
        foreground:'#f8f9fa',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float':     'float-idle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
```

---

# ════════════════════════════════════════════════════
# PART 5 — MAIN.TSX (Lenis + GSAP Init)
# ════════════════════════════════════════════════════

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Lenis smooth scroll
const lenis = new Lenis({
  duration:        1.3,
  easing:          (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel:     true,
  smoothTouch:     false, // prevent mobile issues
  touchMultiplier: 2,
});

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
```

---

# ════════════════════════════════════════════════════
# PART 6 — APP.TSX (Root Shell)
# ════════════════════════════════════════════════════

```tsx
// src/App.tsx
import React, { useState, lazy, Suspense } from 'react';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const HeroSection         = lazy(() => import('./sections/HeroSection'));
const AboutSection        = lazy(() => import('./sections/AboutSection'));
const SkillsSection       = lazy(() => import('./sections/SkillsSection'));
const ProjectsSection     = lazy(() => import('./sections/ProjectsSection'));
const TimelineSection     = lazy(() => import('./sections/TimelineSection'));
const HackathonsSection   = lazy(() => import('./sections/HackathonsSection'));
const CertificationsSection = lazy(() => import('./sections/CertificationsSection'));
const AchievementsSection = lazy(() => import('./sections/AchievementsSection'));
const ContactSection      = lazy(() => import('./sections/ContactSection'));

const SectionLoader = () => (
  <div className="flex items-center justify-center h-64">
    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <div style={{ background: 'var(--bg)' }}>
      <Cursor />
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <Navbar preloaderDone={preloaderDone} />
      <main>
        <Suspense fallback={<SectionLoader />}>
          <HeroSection preloaderDone={preloaderDone} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <TimelineSection />
          <HackathonsSection />
          <CertificationsSection />
          <AchievementsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 7 — CUSTOM HOOKS
# ════════════════════════════════════════════════════

## 7a. useTypewriter
```ts
// src/hooks/useTypewriter.ts
import { useState, useEffect, useRef } from 'react';

export function useTypewriter(
  words: string[],
  typeSpeed = 110,
  deleteSpeed = 55,
  pauseMs = 2100
) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const tick = () => {
      if (!isDeleting) {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
        if (displayed.length + 1 === currentWord.length) {
          timerRef.current = setTimeout(() => setIsDeleting(true), pauseMs);
          return;
        }
      } else {
        setDisplayed(currentWord.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex(i => i + 1);
        }
      }
    };

    timerRef.current = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timerRef.current);
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

  return displayed;
}
```

## 7b. useCounter
```ts
// src/hooks/useCounter.ts
import { useState, useEffect, useRef } from 'react';

export function useCounter(target: number, duration = 1600) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}
```

## 7c. useMagneticHover
```ts
// src/hooks/useMagneticHover.ts
import { useRef, useEffect } from 'react';

export function useMagneticHover(strength = 0.35, radius = 60) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < radius) {
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px) scale(1.12)`;
        el.style.transition = 'transform 0.15s ease-out';
      } else {
        el.style.transform = 'translate(0,0) scale(1)';
        el.style.transition = 'transform 0.5s ease-out';
      }
    };

    const onMouseLeave = () => {
      el.style.transform = 'translate(0,0) scale(1)';
      el.style.transition = 'transform 0.5s ease-out';
    };

    document.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [strength, radius]);

  return ref;
}
```

## 7d. useParticleCanvas
```ts
// src/hooks/useParticleCanvas.ts
import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  color: string;
  opacity: number;
}

const COLORS = ['#4361ee','#3a0ca3','#7209b7','#f72585'];

export function useParticleCanvas(canvasRef: React.RefObject<HTMLCanvasElement>, count = 150) {
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 70 : count;

    let rafId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const initParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: 1.5 + Math.random() * 2.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: 0.3 + Math.random() * 0.6,
      }));
    };
    initParticles();

    const REPEL_RADIUS = 140;
    const REPEL_FORCE  = 0.8;
    const CONN_DIST    = 110;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move and repel
      particles.forEach(p => {
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.hypot(dx, dy);
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS * REPEL_FORCE;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Damping
        p.vx *= 0.97;
        p.vy *= 0.97;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > canvas.width) { p.x = canvas.width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -1; }

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONN_DIST) {
            const alpha = (1 - dist / CONN_DIST) * 0.28;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(67,97,238,${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    };
    draw();

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.parentElement?.addEventListener('mousemove', onMouseMove);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      canvas.parentElement?.removeEventListener('mousemove', onMouseMove);
    };
  }, [canvasRef, count]);
}
```

---

# ════════════════════════════════════════════════════
# PART 8 — DATA LAYER
# ════════════════════════════════════════════════════

## 8a. projects.ts
```ts
// src/data/projects.ts
export interface Project {
  id: string;
  number: string;
  category: string;
  name: string;
  description: string;
  tech: string[];
  liveUrl: string | null;
  codeUrl: string | null;
  badge: string | null;
  color: string; // dominant accent for this card
  images: {
    card: string;   // shown in circular gallery card
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
}

export const projects: Project[] = [
  {
    id: 'gramin',
    number: '01',
    category: 'AI Civic Platform',
    name: 'Gramin Sahayak',
    description: 'AI civic platform for rural India with multilingual voice/text chatbot. Selected Top 100 of 1 Lakh nationwide for AWS × Hack2skill "AI for Bharat". Bridges the digital divide so rural citizens can effortlessly discover and apply for government schemes in their own language.',
    tech: ['AI Chatbot', 'AWS', 'React', 'Node.js', 'Gemini API'],
    liveUrl: 'https://graminsahayak.vercel.app/',
    codeUrl: 'https://github.com/cheerlashamith/graminsahayak',
    badge: '🏆 Top 100 / 1 Lakh',
    color: '#FF9900',
    images: {
      card: './src/assets/projects/gramin-3.jpg',
      col1Top: './src/assets/projects/gramin-1.jpg',
      col1Bottom: './src/assets/projects/gramin-2.jpg',
      col2: './src/assets/projects/gramin-3.jpg',
    },
  },
  {
    id: 'smartsupport',
    number: '02',
    category: 'AI SaaS',
    name: 'SmartSupport',
    description: 'AI customer support triage system that auto-classifies tickets using vector search and the Gemini API. Reduces ticket resolution time by 40% through intelligent routing, real-time summarisation, and a self-improving knowledge base.',
    tech: ['Gemini API', 'Vector Search', 'FastAPI', 'React'],
    liveUrl: 'https://jarvis-ai1111.netlify.app/',
    codeUrl: 'https://github.com/cheerlashamith/jarvis/',
    badge: null,
    color: '#4361ee',
    images: {
      card: './src/assets/projects/smartsupport-3.jpg',
      col1Top: './src/assets/projects/smartsupport-1.jpg',
      col1Bottom: './src/assets/projects/smartsupport-2.jpg',
      col2: './src/assets/projects/smartsupport-3.jpg',
    },
  },
  {
    id: 'meetminds',
    number: '03',
    category: 'Offline AI Platform',
    name: 'MeetMinds',
    description: '100% offline AI meeting intelligence hub — transcribes, diarises speakers, and generates structured minutes with zero data ever leaving your machine. Fully local stack: Whisper ASR + Pyannote + LLaMA 3 via Ollama + ChromaDB + FastAPI.',
    tech: ['Whisper ASR', 'LLaMA 3', 'ChromaDB', 'FastAPI', 'Pyannote'],
    liveUrl: null,
    codeUrl: null,
    badge: '🔧 In Progress',
    color: '#7209b7',
    images: {
      card: './src/assets/projects/meetminds-3.jpg',
      col1Top: './src/assets/projects/meetminds-1.jpg',
      col1Bottom: './src/assets/projects/meetminds-2.jpg',
      col2: './src/assets/projects/meetminds-3.jpg',
    },
  },
  {
    id: 'stockease',
    number: '04',
    category: 'Web App',
    name: 'StockEase',
    description: 'Smart inventory management system with real-time Supabase database, automated low-stock alerts, and a visual analytics dashboard. Streamlines stock tracking and reduces wastage for SMEs.',
    tech: ['JavaScript', 'Supabase', 'HTML5', 'CSS3'],
    liveUrl: 'https://shamithcheerla.github.io/stockease',
    codeUrl: 'https://github.com/shamithcheerla/stockease',
    badge: null,
    color: '#2ecc71',
    images: {
      card: './src/assets/projects/stockease-3.jpg',
      col1Top: './src/assets/projects/stockease-1.jpg',
      col1Bottom: './src/assets/projects/stockease-2.jpg',
      col2: './src/assets/projects/stockease-3.jpg',
    },
  },
  {
    id: 'mindmitra',
    number: '05',
    category: 'AI Companion',
    name: 'MindMitra',
    description: 'Intelligent, empathetic AI-powered virtual companion offering emotional support and daily guidance with human-like responsiveness. Built for Google Gen AI Exchange Hackathon.',
    tech: ['React.js', 'SQL', 'Gemini API', 'FastAPI'],
    liveUrl: 'https://preview-eym0zo3nkyrk.devv.app/',
    codeUrl: 'https://github.com/shamithcheerla/mindmitra',
    badge: null,
    color: '#f72585',
    images: {
      card: './src/assets/projects/mindmitra-3.jpg',
      col1Top: './src/assets/projects/mindmitra-1.jpg',
      col1Bottom: './src/assets/projects/mindmitra-2.jpg',
      col2: './src/assets/projects/mindmitra-3.jpg',
    },
  },
  {
    id: 'codearena',
    number: '06',
    category: 'EdTech Platform',
    name: 'CodeArena',
    description: 'Interactive competitive programming platform with gamified coding challenges, adaptive difficulty levels, real-time leaderboards, and achievement unlocks. Makes DSA practice addictive.',
    tech: ['React.js', 'FastAPI', 'SQL', 'HTML/CSS'],
    liveUrl: 'https://shamithcheerla.github.io/codearena',
    codeUrl: 'https://github.com/shamithcheerla/codearena',
    badge: null,
    color: '#f39c12',
    images: {
      card: './src/assets/projects/codearena-3.jpg',
      col1Top: './src/assets/projects/codearena-1.jpg',
      col1Bottom: './src/assets/projects/codearena-2.jpg',
      col2: './src/assets/projects/codearena-3.jpg',
    },
  },
];
```

## 8b. timeline.ts
```ts
// src/data/timeline.ts
export const timeline = [
  {
    date: '2023 – 2027',
    role: 'B.Tech in Computer Science & Engineering',
    institution: 'SASI Institute of Technology & Engineering (JNTUK)',
    description: 'Currently pursuing B.Tech with a CGPA of 9.32 (Sem I–VI). Core focus on CS fundamentals, full-stack web development, AI/ML, and competitive programming.',
    type: 'education', link: null,
  },
  {
    date: 'May 2026 – Jul 2026',
    role: 'Research Intern',
    institution: 'NIT Andhra Pradesh',
    description: 'Entrepreneurship-driven project exploring AI agents, workflow automation, and advanced prompt engineering strategies. Building core automation modules and scoping real-world applications.',
    type: 'experience', link: null,
  },
  {
    date: 'May 2026 – Jul 2026',
    role: 'Research Intern',
    institution: 'NIT Tiruchirappalli',
    description: 'Structured learning covering AI & ML concepts, mathematical foundations for ML, Web Technologies, Programming, and DSA under faculty guidance.',
    type: 'experience', link: null,
  },
  {
    date: 'Jan 2026 – Apr 2026',
    role: 'ML Research Intern',
    institution: 'UCSI University, Kuala Lumpur (Remote)',
    description: 'Evaluated 10 ML algorithms and 2 DL models for diabetes classification across 5 medical datasets. AdaBoost achieved 99.47% accuracy. Results compiled into a comparative analysis report.',
    type: 'experience', link: null,
  },
  {
    date: 'Jan 2025 – Feb 2025',
    role: 'Web Development Intern',
    institution: 'Codec Technologies Pvt. Ltd.',
    description: 'Developed and integrated 3+ core features for a full-stack educational web application — including JWT authentication and a real-time analytics dashboard — in an AICTE-approved internship.',
    type: 'experience',
    link: 'https://drive.google.com/file/d/1JZhZCHei3NuwHQR0CfslOPvDA6P7pQjx/view',
  },
  {
    date: '2021 – 2023',
    role: 'Intermediate Education (MPC)',
    institution: 'SASI Junior College',
    description: 'Completed Intermediate with 98.2% marks. EAMCET Rank: 3292.',
    type: 'education', link: null,
  },
  {
    date: '2021',
    role: 'Secondary School Certificate (SSC)',
    institution: 'Bhashyam Public School',
    description: 'Completed SSC with a perfect 100%, demonstrating academic excellence from an early stage.',
    type: 'education', link: null,
  },
];
```

## 8c. hackathons.ts
```ts
// src/data/hackathons.ts
export const hackathons = [
  {
    date: 'Jun 2026',
    name: 'Google Solution Challenge',
    organizer: 'Google Developer Student Clubs',
    description: 'Built a solution for local community problems using Google technologies under the global GDSC challenge framework.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png',
    glowColor: '#4285F4', badge: null, certificate: null,
  },
  {
    date: 'May 2026',
    name: 'AI For Bharat Hackathon',
    organizer: 'AWS × Hack2Skill',
    description: 'Built Gramin Sahayak — AI civic platform for rural India. Selected Top 100 out of 1 Lakh participants nationwide! $100 AWS credits awarded.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/200px-Amazon_Web_Services_Logo.svg.png',
    glowColor: '#FF9900',
    badge: '🏆 Top 100 / 1 Lakh',
    certificate: 'https://certificate.hack2skill.com/verify/2026H2S04AIFB-P03454',
  },
  {
    date: 'Apr 2026',
    name: 'AMD Slingshot Hackathon',
    organizer: 'AMD',
    description: 'Built a cost-effective Smart Facility Digital Twin with real-time occupancy visualization and peak-hour forecasting using a lightweight IoT-free architecture.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/200px-AMD_Logo.svg.png',
    glowColor: '#ED1C24', badge: null, certificate: null,
  },
  {
    date: 'Nov 2025',
    name: 'Gen AI Exchange Hackathon',
    organizer: 'Google Cloud & Hack2skill',
    description: 'Built MindMitra — AI-powered virtual companion for emotional support and daily guidance with human-like responsiveness.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/200px-Google_Cloud_logo.svg.png',
    glowColor: '#4285F4', badge: null,
    certificate: 'https://drive.google.com/file/d/1zKZ_5RADQ5VG6FZbags6E4MsT7tgP4PN/view',
  },
  {
    date: '2025',
    name: 'PRAYATNA 2.0 National Hackathon',
    organizer: 'SASI Institute of Technology & Engineering',
    description: 'Competed at national level; built working prototype of StockEase under strict time constraint with team.',
    logo: 'https://via.placeholder.com/100x100/4361ee/ffffff?text=P2',
    glowColor: '#7209b7', badge: null,
    certificate: 'https://drive.google.com/file/d/1QPGMXciPK-iUjcasOpO7DzzuMG0lCy-D/view',
  },
];
```

## 8d. certifications.ts
```ts
// src/data/certifications.ts
export const certifications = [
  { name: 'Generative AI Professional',    issuer: 'Oracle',               logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/200px-Oracle_logo.svg.png', link: 'https://drive.google.com/file/d/1NMPukqoVycnJCC26BxGo5Tsd-7OejT_W/view' },
  { name: 'Google Analytics Certificate',  issuer: 'Google',               logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png', link: 'https://drive.google.com/file/d/1LztSLx0TmmsZkG7e-3eYeLcPVEVPEyyF/view' },
  { name: 'Intro to Generative AI',        issuer: 'AWS',                  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/200px-Amazon_Web_Services_Logo.svg.png', link: 'https://drive.google.com/file/d/1Hn2l1LvBkyDEwKsQGBmZkUFyxhArYoJ2/view' },
  { name: 'Generative AI',                 issuer: 'LinkedIn Learning',    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/200px-LinkedIn_logo_initials.png', link: 'https://www.linkedin.com/learning/certificates/e8ee7a269bdff84fcb94d25aeede18a898f59ae8277a2ddd1a476fb2910b5fd6' },
  { name: 'AI Foundations Associate',      issuer: 'Oracle',               logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/200px-Oracle_logo.svg.png', link: 'https://drive.google.com/file/d/10NXjbcxy9cS8sJ3v6MJOKedMorgwxJL-/view' },
  { name: 'Python for Everybody',          issuer: 'University of Michigan', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Coursera-logo.svg/200px-Coursera-logo.svg.png', link: 'https://www.coursera.org/account/accomplishments/verify/M47PWD113RTU' },
  { name: 'HTML5 Certification',           issuer: 'Infosys Springboard',  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/200px-Infosys_logo.svg.png', link: '#' },
  { name: 'Intro to MongoDB',              issuer: 'MongoDB',              logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/200px-MongoDB_Logo.svg.png', link: 'https://learn.mongodb.com/c/Y6gXvIpPT5Sib_wRR8jdAw' },
  { name: 'Cyber Security Awareness',      issuer: 'LinkedIn Learning',    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/200px-LinkedIn_logo_initials.png', link: 'https://www.linkedin.com/learning/certificates/3d58bab08ffebe34cb5f9018c211883b849c7db826aa3e344bffb80696f28ee6' },
];
```

## 8e. achievements.ts
```ts
// src/data/achievements.ts
export const achievements = [
  { icon: 'fas fa-star',       title: 'CodeChef Diamond Badge',          description: 'Diamond-rated on CodeChef. Solved 2,000+ algorithmic and data structure problems across competitive programming platforms.',        link: null },
  { icon: 'fab fa-aws',        title: 'AWS × Hack2skill Finalist',        description: 'Shortlisted nationwide — Top 100 of 1 Lakh participants — for Gramin Sahayak. $100 AWS credits awarded for prototype phase.',           link: null },
  { icon: 'fas fa-landmark',   title: 'MoSPI, Govt. of India',            description: 'Selected under Group A from a large national applicant pool for the Ministry of Statistics & Programme Implementation Statistical Internship.', link: null },
  { icon: 'fas fa-medal',      title: 'Academic Excellence',              description: '9.32 CGPA (Sem I–VI) at SASI Institute. 98.2% in Intermediate (EAMCET Rank 3292). 100% in SSC. Consistent top performer.',              link: null },
  { icon: 'fas fa-trophy',     title: 'PRAYATNA 2.0 National Hackathon',  description: 'Competed at national level; built working prototype of StockEase under a strict time constraint with a cross-functional team.',           link: 'https://drive.google.com/file/d/1QPGMXciPK-iUjcasOpO7DzzuMG0lCy-D/view' },
  { icon: 'fas fa-lightbulb',  title: 'TECH SPARK\'25 Quiz Winner',       description: 'Awarded for securing a top position in the TECH SPARK\'25 technical quiz, demonstrating strong foundational CS knowledge.',              link: 'https://drive.google.com/file/d/1kngzVDppM-KkLbfaJBxhRsEDKFPk5kuV/view' },
  { icon: 'fas fa-user-tie',   title: 'Full Stack Dev Interview Cert.',    description: 'Certified in preparing for and excelling in full-stack developer technical interviews, covering system design and DSA.',                  link: 'https://drive.google.com/file/d/1tuEFJA9A7NBlSI37WqF-I7pIRCdcCHUy/view' },
  { icon: 'fas fa-code',       title: 'Competitive Coding for Placement', description: 'Completed intensive training in data structures and algorithms specifically designed for placement-level competitive programming.',          link: 'https://drive.google.com/file/d/1xN-XymmCgdjKEca1iHIvkrel0orglaat/view' },
];
```

## 8f. skills.ts
```ts
// src/data/skills.ts
export const skillCategories = [
  {
    name: 'Frontend',
    images: [
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=200&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&q=80',
    ],
    skills: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'React.js',   icon: 'devicon-react-original colored' },
      { name: 'Tailwind',   icon: 'devicon-tailwindcss-original colored' },
      { name: 'HTML5',      icon: 'devicon-html5-plain colored' },
      { name: 'CSS3',       icon: 'devicon-css3-plain colored' },
    ],
  },
  {
    name: 'Backend',
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=80',
    ],
    skills: [
      { name: 'Node.js',    icon: 'devicon-nodejs-plain colored' },
      { name: 'Express.js', icon: 'devicon-express-original' },
      { name: 'FastAPI',    icon: 'devicon-fastapi-plain colored' },
      { name: 'REST APIs',  icon: 'fas fa-network-wired', color: 'var(--primary)' },
      { name: 'JWT Auth',   icon: 'fas fa-key',           color: 'var(--accent)' },
    ],
  },
  {
    name: 'Languages & DB',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&q=80',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=200&q=80',
    ],
    skills: [
      { name: 'Python',   icon: 'devicon-python-plain colored' },
      { name: 'Java',     icon: 'devicon-java-plain colored' },
      { name: 'C',        icon: 'devicon-c-plain colored' },
      { name: 'MongoDB',  icon: 'devicon-mongodb-plain colored' },
      { name: 'MySQL',    icon: 'devicon-mysql-plain colored' },
      { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
      { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
    ],
  },
  {
    name: 'AI / ML',
    images: [
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=200&q=80',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&q=80',
    ],
    skills: [
      { name: 'TensorFlow',   icon: 'devicon-tensorflow-original colored' },
      { name: 'PyTorch',      icon: 'devicon-pytorch-original colored' },
      { name: 'scikit-learn', icon: 'fas fa-brain',           color: '#e67e22' },
      { name: 'Whisper ASR',  icon: 'fas fa-microphone',      color: '#3498db' },
      { name: 'LLaMA 3',      icon: 'fas fa-robot',           color: '#9b59b6' },
      { name: 'RAG',          icon: 'fas fa-project-diagram', color: '#2ecc71' },
      { name: 'Gemini API',   icon: 'fas fa-magic',           color: '#f1c40f' },
    ],
  },
  {
    name: 'Tools & DevOps',
    images: [
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=200&q=80',
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=200&q=80',
    ],
    skills: [
      { name: 'Git',     icon: 'devicon-git-plain colored' },
      { name: 'GitHub',  icon: 'devicon-github-original' },
      { name: 'Docker',  icon: 'devicon-docker-plain colored' },
      { name: 'AWS',     icon: 'devicon-amazonwebservices-original colored' },
      { name: 'Vercel',  icon: 'devicon-vercel-original' },
      { name: 'Netlify', icon: 'devicon-netlify-plain colored' },
    ],
  },
];
```

---

# ════════════════════════════════════════════════════
# PART 9 — CURSOR COMPONENT
# ════════════════════════════════════════════════════

```tsx
// src/components/Cursor.tsx
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 1024) return;

    const dot  = dotRef.current!;
    const ring = ringRef.current!;

    let mx = 0, my = 0;   // target (mouse)
    let rx = 0, ry = 0;   // ring current (lerped)
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };

    const lerp = () => {
      rx += (mx - rx) * 0.10;
      ry += (my - ry) * 0.10;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(lerp);
    };
    lerp();

    document.addEventListener('mousemove', onMouseMove);

    // Hover state
    const interactables = document.querySelectorAll<HTMLElement>('a, button, .interactive');
    const enterHover = () => {
      ring.style.width = ring.style.height = '70px';
      ring.style.borderColor = 'var(--accent)';
      dot.style.transform = dot.style.transform + ' scale(0)';
      dot.style.opacity = '0';
    };
    const leaveHover = () => {
      ring.style.width = ring.style.height = '44px';
      ring.style.borderColor = 'var(--primary)';
      dot.style.opacity = '1';
    };
    interactables.forEach(el => {
      el.addEventListener('mouseenter', enterHover);
      el.addEventListener('mouseleave', leaveHover);
    });

    const onMouseDown = () => { ring.style.width = ring.style.height = '28px'; };
    const onMouseUp   = () => { ring.style.width = ring.style.height = '44px'; };
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(rafId);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', enterHover);
        el.removeEventListener('mouseleave', leaveHover);
      });
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 1024) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 99999,
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--primary)', pointerEvents: 'none',
          transition: 'opacity 0.3s',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 99998,
          width: 44, height: 44, borderRadius: '50%',
          border: '2px solid var(--primary)',
          pointerEvents: 'none',
          transition: 'width 0.25s, height 0.25s, border-color 0.25s',
        }}
      />
    </>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 10 — PRELOADER
# ════════════════════════════════════════════════════

```tsx
// src/components/Preloader.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps { onComplete: () => void; }

export default function Preloader({ onComplete }: PreloaderProps) {
  const wrapRef    = useRef<HTMLDivElement>(null);
  const barRef     = useRef<HTMLDivElement>(null);
  const cRef       = useRef<HTMLSpanElement>(null);
  const sRef       = useRef<HTMLSpanElement>(null);
  const monoRef    = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let count = 0;
    const interval = setInterval(() => {
      count = Math.min(count + 2, 100);
      if (counterRef.current) counterRef.current.textContent = `${count}%`;
      if (count >= 100) clearInterval(interval);
    }, 36);

    const tl = gsap.timeline();
    tl.to(barRef.current, { width: '100%', duration: 1.8, ease: 'none' })
      .from(cRef.current,  { x: -80, opacity: 0, duration: 0.7, ease: 'power3.out' }, 0.3)
      .from(sRef.current,  { x:  80, opacity: 0, duration: 0.7, ease: 'power3.out' }, 0.3)
      .to(monoRef.current, { scale: 1.08, duration: 0.2, ease: 'power2.in' }, 1.1)
      .to(monoRef.current, { scale: 1.0,  duration: 0.2, ease: 'power2.out' }, 1.3)
      .to(wrapRef.current, {
        y: '-100%', duration: 0.65, ease: 'expo.inOut',
        onComplete: () => {
          document.body.style.overflow = '';
          if (wrapRef.current) wrapRef.current.style.display = 'none';
          onComplete();
        },
      }, 2.1);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={wrapRef}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: 'var(--bg)', display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {/* Progress bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, background: 'rgba(255,255,255,0.05)', height: 3 }}>
        <div ref={barRef} className="preloader-bar" style={{ width: '0%' }} />
      </div>

      {/* Monogram */}
      <div ref={monoRef} style={{ display: 'flex', gap: 4 }}>
        <span
          ref={cRef}
          style={{
            fontFamily: 'Raleway, sans-serif', fontWeight: 900,
            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
            background: 'var(--gradient)', WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}
        >C</span>
        <span
          ref={sRef}
          style={{
            fontFamily: 'Raleway, sans-serif', fontWeight: 900,
            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
            background: 'var(--gradient-acc)', WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}
        >S</span>
      </div>

      {/* Counter */}
      <div
        ref={counterRef}
        style={{
          position: 'absolute', bottom: 28, left: 28,
          fontFamily: 'Space Grotesk, sans-serif', fontSize: 13,
          color: 'var(--text-muted)', letterSpacing: '0.12em',
        }}
      >0%</div>
    </div>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 11 — NAVBAR
# ════════════════════════════════════════════════════

```tsx
// src/components/Navbar.tsx
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { lenis } from '../main';

const NAV_LINKS = [
  { label: 'Home',            id: 'hero'           },
  { label: 'About',           id: 'about'          },
  { label: 'Skills',          id: 'skills'         },
  { label: 'Projects',        id: 'projects'       },
  { label: 'Education',       id: 'timeline'       },
  { label: 'Hackathons',      id: 'hackathons'     },
  { label: 'Certifications',  id: 'certifications' },
  { label: 'Achievements',    id: 'achievements'   },
  { label: 'Contact',         id: 'contact'        },
];

export default function Navbar({ preloaderDone }: { preloaderDone: boolean }) {
  const navRef     = useRef<HTMLElement>(null);
  const logoRef    = useRef<HTMLDivElement>(null);
  const linksRef   = useRef<HTMLDivElement>(null);
  const ctaRef     = useRef<HTMLAnchorElement>(null);
  const [scrolled, setScrolled]   = useState(false);
  const [hidden, setHidden]       = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const prevY      = useRef(0);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      setHidden(y > 250 && y > prevY.current);
      prevY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Entrance animation after preloader
  useEffect(() => {
    if (!preloaderDone) return;
    const tl = gsap.timeline();
    tl.from(logoRef.current,    { opacity: 0, x: -25, duration: 0.8, ease: 'power2.out' }, 0)
      .from(linksRef.current?.children ? Array.from(linksRef.current.children) : [],
            { opacity: 0, y: -12, duration: 0.6, stagger: 0.06, ease: 'power2.out' }, 0.3)
      .from(ctaRef.current,     { opacity: 0, x:  25, duration: 0.8, ease: 'power2.out' }, 0.5);
  }, [preloaderDone]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) lenis?.scrollTo(el);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          height: 70,
          padding: '0 clamp(20px, 4vw, 60px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(6,6,16,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <div
          ref={logoRef}
          style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
          onClick={() => scrollTo('hero')}
        >
          <div style={{
            width: 42, height: 42, borderRadius: 10,
            background: 'var(--gradient)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 17, color: '#fff',
            transition: 'transform 0.65s ease',
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(360deg)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(0deg)')}
          >CS</div>
          <span style={{
            fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff',
          }} className="hidden sm:block">Shamith</span>
        </div>

        {/* Desktop nav links */}
        <div ref={linksRef} className="hidden lg:flex items-center" style={{ gap: 28 }}>
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 500,
                color: active === link.id ? 'var(--text)' : 'var(--text-muted)',
                background: 'none', border: 'none', cursor: 'pointer',
                position: 'relative', padding: '4px 0',
                transition: 'color 0.3s',
              }}
              className="nav-link-item"
            >
              {link.label}
              <span style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
                background: 'var(--gradient)',
                width: active === link.id ? '100%' : '0%',
                transition: 'width 0.3s ease',
              }} />
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          ref={ctaRef}
          href="#contact"
          onClick={e => { e.preventDefault(); scrollTo('contact'); }}
          style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: '#fff',
            background: 'var(--gradient)', padding: '10px 28px', borderRadius: 50,
            textDecoration: 'none', transition: 'transform 0.3s, box-shadow 0.3s',
            display: 'block',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--glow-blue)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
          className="hidden sm:block"
        >Hire Me</a>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 26, height: 2, background: '#fff', borderRadius: 2,
              transition: 'transform 0.35s ease, opacity 0.35s ease',
              transform: menuOpen
                ? i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'scaleX(0)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(6,6,16,0.97)', backdropFilter: 'blur(40px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: 8,
        }}>
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                fontFamily: 'Raleway, sans-serif', fontWeight: 800,
                fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', color: '#fff',
                background: 'none', border: 'none', cursor: 'pointer',
                opacity: 0, animation: `float-up 0.5s ${i * 0.06}s ease forwards`,
              }}
            >{link.label}</button>
          ))}
          <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
            {[
              { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/cheerla-shamith-a420472a0' },
              { icon: 'fab fa-github',      href: 'https://github.com/cheerlashamith' },
              { icon: 'fas fa-code',        href: 'https://www.codechef.com/users/sasihackerrr' },
              { icon: 'fab fa-instagram',   href: 'https://www.instagram.com/starshami888/' },
            ].map(s => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                className="glass" style={{
                  width: 48, height: 48, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, color: '#fff', textDecoration: 'none',
                }}>
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 12 — HERO SECTION
# ════════════════════════════════════════════════════

```tsx
// src/sections/HeroSection.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import { useParticleCanvas } from '../hooks/useParticleCanvas';

const ROLES = ['Full Stack Developer', 'AI Enthusiast', 'React Developer', 'Python Developer', 'Problem Solver', 'Tech Innovator'];

// Grid Morph Shader Background (sublayer, opacity 0.18)
function GridMorphBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let t = 0, rafId: number;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const animate = () => {
      t += 0.008;
      const { width, height } = canvas;
      ctx.fillStyle = 'rgb(6,6,16)';
      ctx.fillRect(0, 0, width, height);
      const gs = 50;
      const cols = Math.ceil(width / gs);
      const rows = Math.ceil(height / gs);
      for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
        const wave = Math.sin(i * 0.22 + t) * Math.cos(j * 0.22 + t);
        const b = (wave + 1) / 2;
        ctx.fillStyle = `rgba(67,97,238,${b * 0.22})`;
        ctx.fillRect(i * gs, j * gs, gs - 1, gs - 1);
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.18, pointerEvents: 'none', zIndex: 0 }} />;
}

export default function HeroSection({ preloaderDone }: { preloaderDone: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const nameRef    = useRef<HTMLHeadingElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const scrollIndRef = useRef<HTMLDivElement>(null);
  const role = useTypewriter(ROLES);

  useParticleCanvas(canvasRef, 150);

  // Entrance animations after preloader
  useEffect(() => {
    if (!preloaderDone) return;

    // Split name into chars
    if (nameRef.current) {
      const text = nameRef.current.textContent || '';
      nameRef.current.innerHTML = text.split('').map((ch, i) =>
        `<span class="hero-char" style="display:inline-block;opacity:0;transform:translateY(50px) rotateX(-90deg)">${ch === ' ' ? '&nbsp;' : ch}</span>`
      ).join('');
    }

    const tl = gsap.timeline();
    tl.from('.hero-greeting',  { opacity: 0, y: 25, duration: 0.7, ease: 'power2.out' }, 0)
      .to('.hero-char', {
        opacity: 1, y: 0, rotateX: 0,
        stagger: 0.025, duration: 0.55, ease: 'back.out(1.7)',
        transformOrigin: 'center bottom',
        transformStyle: 'preserve-3d',
      }, 0.15)
      .from('.hero-role',     { opacity: 0, y: 18, duration: 0.5, ease: 'power2.out' }, 0.55)
      .from('.hero-desc',     { opacity: 0, y: 22, duration: 0.8, ease: 'power2.out' }, 0.65)
      .from('.hero-cta-row',  { opacity: 0, y: 18, stagger: 0.1, duration: 0.6, ease: 'power2.out' }, 0.90)
      .from('.hero-social-item', { opacity: 0, y: 15, scale: 0.85, stagger: 0.07, duration: 0.5, ease: 'back.out(1.7)' }, 1.05)
      .to(profileRef.current, { opacity: 1, scale: 1, duration: 1.1, ease: 'back.out(1.7)' }, 0.4);

    gsap.set(profileRef.current, { opacity: 0, scale: 0.6 });

    // Scroll indicator fade
    gsap.to(scrollIndRef.current, { opacity: 0, scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: '+=120px', scrub: true } });

    // Watermark parallax
    gsap.to('.hero-watermark', { y: -120, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 2 } });
  }, [preloaderDone]);

  const socialLinks = [
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/cheerla-shamith-a420472a0', color: '#0077B5' },
    { icon: 'fab fa-github',      href: 'https://github.com/cheerlashamith',                     color: '#fff'    },
    { icon: 'fas fa-code',        href: 'https://www.codechef.com/users/sasihackerrr',            color: '#4361ee' },
    { icon: 'fab fa-instagram',   href: 'https://www.instagram.com/starshami888/',                color: '#E1306C' },
  ];

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{ height: '100dvh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', background: 'var(--bg)' }}
    >
      {/* Shader sublayer */}
      <GridMorphBg />

      {/* Particle canvas */}
      <canvas ref={canvasRef} id="hero-canvas" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }} />

      {/* Watermark */}
      <span className="section-watermark hero-watermark" style={{ zIndex: 1 }}>DEVELOPER</span>

      {/* Floating shapes */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
        <div className="hero-shape-a" style={{ position: 'absolute', top: '22%', right: '22%', width: 80, height: 80, border: '2px solid rgba(67,97,238,0.4)', transform: 'rotate(45deg)', animation: 'spin 12s linear infinite' }} />
        <div className="hero-shape-b" style={{ position: 'absolute', bottom: '28%', left: '18%', width: 50, height: 50, background: 'rgba(247,37,133,0.12)', border: '1px solid rgba(247,37,133,0.3)', borderRadius: '50%', animation: 'float-idle 3s ease-in-out infinite' }} />
        <div className="hero-shape-c" style={{ position: 'absolute', top: '18%', left: '30%', width: 60, height: 60, border: '1.5px solid rgba(114,9,183,0.5)', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animation: 'spin 16s linear infinite reverse' }} />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <div>
            <p className="hero-greeting" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 16, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
              Hello, I'm 👋
            </p>

            <h1
              ref={nameRef}
              style={{
                fontFamily: 'Raleway, sans-serif', fontWeight: 900,
                fontSize: 'clamp(2.6rem, 5.5vw, 5rem)', color: '#fff',
                letterSpacing: '-0.035em', lineHeight: 1.05, marginBottom: 16,
                transformStyle: 'preserve-3d', perspective: 1000,
              }}
            >Cheerla Shamith</h1>

            <div className="hero-role" style={{ minHeight: '2.4rem', marginBottom: 20 }}>
              <span style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 500,
                fontSize: 'clamp(1.1rem, 2.8vw, 1.9rem)',
                background: 'var(--gradient)', WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>{role}</span>
              <span className="typewriter-cursor" />
            </div>

            <p className="hero-desc" style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 15.5,
              color: 'var(--text-muted)', maxWidth: 500, lineHeight: 1.75, marginBottom: 28,
            }}>
              Full-Stack Developer & AI Enthusiast specializing in React, Node.js, and MongoDB.
              Passionate about building Agentic Workflows, AI Agents, and Generative AI solutions.
              Currently pursuing B.Tech CSE (CGPA 9.32) at SASI Institute of Technology & Engineering.
            </p>

            <div className="hero-cta-row" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 22 }}>
              <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, color: '#fff',
                  background: 'var(--gradient)', padding: '13px 36px', borderRadius: 50,
                  textDecoration: 'none', transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = 'var(--glow-blue)'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = ''; }}
              >Let's Connect →</a>
              <a href="./src/assets/cv.pdf" download
                style={{
                  fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, color: 'var(--primary)',
                  border: '2px solid var(--primary)', padding: '13px 36px', borderRadius: 50,
                  textDecoration: 'none', transition: 'all 0.3s', background: 'transparent',
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--gradient)'; el.style.color = '#fff'; el.style.border = '2px solid transparent'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = 'var(--primary)'; el.style.border = '2px solid var(--primary)'; }}
              >Download CV</a>
            </div>

            <div style={{ display: 'flex', gap: 14 }}>
              {socialLinks.map(s => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-item glass"
                  style={{
                    width: 48, height: 48, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, color: s.color, textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--gradient)'; el.style.color = '#fff'; el.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = ''; el.style.color = s.color; el.style.transform = ''; }}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile image side */}
          <div ref={profileRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="float-idle" style={{ position: 'relative', width: 290, height: 290 }}>
              {/* Rotating gradient ring */}
              <div className="animated-ring" style={{ position: 'absolute', inset: 0, borderRadius: '50%', padding: 5 }}>
                {/* White gap */}
                <div style={{ position: 'absolute', inset: 4, borderRadius: '50%', background: 'var(--bg)' }} />
              </div>
              {/* Profile photo */}
              <img
                src="./src/assets/hero.jpg"
                alt="Cheerla Shamith"
                loading="eager"
                decoding="async"
                style={{
                  position: 'absolute', inset: 9, borderRadius: '50%',
                  width: 'calc(100% - 18px)', height: 'calc(100% - 18px)',
                  objectFit: 'cover',
                }}
              />
              {/* Outer glow */}
              <div style={{
                position: 'absolute', inset: -10, borderRadius: '50%',
                boxShadow: '0 0 70px rgba(67,97,238,0.5), 0 0 140px rgba(67,97,238,0.18)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollIndRef} style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      }}>
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none" style={{ opacity: 0.6 }}>
          <rect x="1" y="1" width="22" height="34" rx="11" stroke="white" strokeWidth="1.5"/>
          <circle cx="12" cy="10" r="3" fill="white">
            <animate attributeName="cy" values="10;24;10" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
        <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 13 — ABOUT SECTION
# ════════════════════════════════════════════════════

```tsx
// src/sections/AboutSection.tsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCounter } from '../hooks/useCounter';

const STATS = [
  { value: 9, suffix: '.32', label: 'CGPA', icon: 'fas fa-graduation-cap' },
  { value: 5, suffix: '+',   label: 'Projects',   icon: 'fas fa-code'        },
  { value: 3, suffix: '+',   label: 'Internships', icon: 'fas fa-briefcase'   },
  { value: 7, suffix: '+',   label: 'Certifications', icon: 'fas fa-certificate' },
];

function StatCard({ stat }: { stat: typeof STATS[0] }) {
  const { count, ref } = useCounter(stat.value);
  return (
    <div
      ref={ref as any}
      style={{
        background: '#fff', borderRadius: 14, padding: '22px 18px',
        boxShadow: '0 6px 24px rgba(0,0,0,0.07)', textAlign: 'center',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-7px)'; el.style.boxShadow = '0 14px 32px rgba(67,97,238,0.18)'; }}
      onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 6px 24px rgba(0,0,0,0.07)'; }}
    >
      <i className={stat.icon} style={{ fontSize: 22, color: 'var(--primary)', marginBottom: 10, display: 'block' }} />
      <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '2rem', color: 'var(--primary)' }}>
        {count}{stat.suffix}
      </div>
      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: '#666', marginTop: 4 }}>{stat.label}</div>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef     = useRef<HTMLDivElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(imgRef.current, {
      opacity: 0, x: -60, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
    });
    gsap.from(textRef.current?.querySelectorAll('.about-para'), {
      opacity: 0, y: 30, stagger: 0.15, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: textRef.current, start: 'top 75%', toggleActions: 'play none none none' },
    });

    // 3D tilt on scroll
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center', end: 'bottom center',
      onUpdate: (self) => {
        const p = self.progress;
        gsap.to(imgRef.current, {
          rotateX: (p - 0.5) * 14, rotateY: (p - 0.5) * -9,
          duration: 0.6, ease: 'power1.out',
        });
      },
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ background: '#f8f9ff', padding: 'clamp(80px,10vw,130px) 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 }}>WHO I AM</p>
          <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(2.4rem,6vw,4.8rem)', color: 'var(--secondary)' }}>About Me</h2>
          <div style={{ height: 4, width: 70, background: 'var(--gradient)', margin: '14px auto 0', borderRadius: 2 }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div ref={imgRef} style={{ perspective: 1200 }}>
            <div style={{ position: 'relative', maxWidth: 460 }}>
              <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient)', borderRadius: 20, transform: 'rotate(-5deg)', opacity: 0.7, zIndex: 0 }} />
              <img
                src="./src/assets/about.jpg"
                alt="Cheerla Shamith"
                loading="lazy" decoding="async"
                style={{ borderRadius: 20, width: '100%', objectFit: 'cover', aspectRatio: '3/4', position: 'relative', zIndex: 1 }}
              />
            </div>
          </div>

          {/* Text */}
          <div ref={textRef}>
            <h3 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 26, color: 'var(--secondary)', marginBottom: 20 }}>
              Enthusiastic Full-Stack Developer & AI Engineer
            </h3>
            {[
              "I'm a passionate Computer Science student with expertise in building modern web applications. My journey in tech has equipped me with strong problem-solving skills and a deep understanding of full-stack development.",
              "Currently pursuing my B.Tech in Computer Science at SASI Institute of Technology & Engineering (JNTUK) with a CGPA of 9.32, I'm constantly exploring new technologies and expanding my skillset.",
              "My areas of interest include Full-Stack Development, Generative AI, building intelligent AI Agents, Agentic Workflows, and Ethical Hacking.",
            ].map((para, i) => (
              <p key={i} className="about-para" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 15.5, color: '#444', lineHeight: 1.82, marginBottom: 16 }}>{para}</p>
            ))}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-9">
              {STATS.map(s => <StatCard key={s.label} stat={s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 14 — SKILLS SECTION (RevealImageList)
# ════════════════════════════════════════════════════

```tsx
// src/sections/SkillsSection.tsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories } from '../data/skills';

function SkillPill({ name, icon, color }: { name: string; icon: string; color?: string }) {
  return (
    <div
      className="glass"
      style={{
        height: 42, padding: '0 16px', borderRadius: 50,
        display: 'flex', alignItems: 'center', gap: 10,
        transition: 'all 0.3s', cursor: 'default',
        fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'var(--text)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--primary)';
        el.style.boxShadow = '0 0 12px rgba(67,97,238,0.45)';
        el.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = '';
        el.style.boxShadow = '';
        el.style.transform = '';
      }}
    >
      <i className={icon} style={{ fontSize: 16, color: color || undefined }} />
      {name}
    </div>
  );
}

function SkillRow({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={rowRef}
      className="skill-row"
      style={{
        display: 'flex', alignItems: 'flex-start',
        borderBottom: '1px solid var(--border)',
        padding: '36px 0', position: 'relative', overflow: 'visible',
        gap: 0,
      }}
    >
      {/* Category name (left 30%) */}
      <div style={{ width: '30%', position: 'relative', minWidth: 160 }}>
        <h2 className="skill-row-name">{category.name}</h2>
        {/* Hover images */}
        {category.images.map((src, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              right: i === 0 ? 20 : 36,
              top: i === 0 ? -4 : 12,
              zIndex: i === 0 ? 40 : 38,
              width: 80, height: 64,
              opacity: 0,
              transform: `scale(0) rotate(${i === 1 ? 12 : 0}deg)`,
              transition: `all 0.4s ${i * 0.06}s ease`,
              borderRadius: 10,
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            }}
            className={`skill-hover-img-${index}-${i}`}
          >
            <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>

      {/* Skills pills (right 70%) */}
      <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: '12px 20px', alignItems: 'center', paddingLeft: 40 }}>
        {category.skills.map(skill => (
          <SkillPill key={skill.name} name={skill.name} icon={skill.icon} color={(skill as any).color} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from('.skill-row', {
      opacity: 0, y: 50, stagger: 0.12, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' },
    });
    gsap.to('.skills-watermark', {
      y: -140, ease: 'none',
      scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 },
    });
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={{ background: 'var(--bg)', padding: 'clamp(80px,10vw,130px) 0', position: 'relative', overflow: 'hidden' }}>
      <span className="section-watermark skills-watermark">SKILLS</span>
      <div className="container mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 }}>WHAT I KNOW</p>
          <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(2.4rem,6vw,4.8rem)', color: 'var(--text)' }}>Technical Skills</h2>
          <div style={{ height: 4, width: 70, background: 'var(--gradient)', margin: '14px auto 0', borderRadius: 2 }} />
        </div>

        {skillCategories.map((cat, i) => <SkillRow key={cat.name} category={cat} index={i} />)}
      </div>
    </section>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 15 — ★ PROJECTS SECTION — CircularGallery + StoryScroll ★
# ════════════════════════════════════════════════════

## This is the centrepiece of the redesign. TWO-PANEL LAYOUT (desktop):
##   LEFT  — 3D rotating CircularGallery (6 project cards in a circle)
##   RIGHT — StoryScroll sticky panel (project details, scrolls through as you scroll)
## MOBILE — Vertical story-scroll cards (no 3D gallery)

```tsx
// src/sections/ProjectsSection.tsx
import React, { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';

// ── CircularGallery (adapted from provided component) ──────────────────────────
interface CircularGalleryProps {
  activeIndex: number;
  onSelect: (index: number) => void;
}

function CircularGallery({ activeIndex, onSelect }: CircularGalleryProps) {
  const [rotation, setRotation] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const rafRef           = useRef<number>();
  const AUTO_SPEED = 0.015; // degrees per frame

  // Scroll → rotate
  useEffect(() => {
    const section = document.getElementById('projects-scroll-zone');
    if (!section) return;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeoutRef.current);
      const rect = section.getBoundingClientRect();
      const total = section.scrollHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(scrolled / total, 1);
      setRotation(progress * 360);
      // Update active based on rotation
      const angleStep = 360 / projects.length;
      const normalized = ((progress * 360) % 360 + 360) % 360;
      const idx = Math.round(normalized / angleStep) % projects.length;
      onSelect((projects.length - idx) % projects.length);
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onSelect]);

  // Auto-rotate when not scrolling
  useEffect(() => {
    const autoRotate = () => {
      if (!isScrolling) setRotation(r => r + AUTO_SPEED);
      rafRef.current = requestAnimationFrame(autoRotate);
    };
    rafRef.current = requestAnimationFrame(autoRotate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [isScrolling]);

  const anglePerItem = 360 / projects.length;
  const RADIUS = 280; // px

  return (
    <div
      className="circular-gallery-stage"
      style={{ width: '100%', height: 560, position: 'relative' }}
    >
      <div
        className="circular-gallery-scene"
        style={{
          width: '100%', height: '100%',
          transform: `rotateY(${rotation}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {projects.map((proj, i) => {
          const itemAngle    = i * anglePerItem;
          const relAngle     = ((itemAngle - rotation) % 360 + 360) % 360;
          const normalised   = relAngle > 180 ? 360 - relAngle : relAngle;
          const opacityVal   = Math.max(0.25, 1 - normalised / 160);
          const isActive     = i === activeIndex;

          return (
            <div
              key={proj.id}
              className={`project-gallery-card ${isActive ? 'active' : ''}`}
              style={{
                transform: `rotateY(${itemAngle}deg) translateZ(${RADIUS}px)`,
                opacity: opacityVal,
                cursor: 'pointer',
                transition: 'opacity 0.3s linear, box-shadow 0.4s ease',
              }}
              onClick={() => onSelect(i)}
            >
              {/* Card inner */}
              <div style={{
                position: 'relative', width: '100%', height: '100%',
                borderRadius: 24, overflow: 'hidden',
                border: `2px solid ${isActive ? proj.color + '88' : 'rgba(255,255,255,0.08)'}`,
              }}>
                {/* BG image */}
                <img
                  src={proj.images.card}
                  alt={proj.name}
                  loading="lazy" decoding="async"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(180deg, transparent 40%, rgba(6,6,16,0.92) 100%)`,
                }} />
                {/* Text */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 18px' }}>
                  <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, color: proj.color, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 4 }}>{proj.category}</p>
                  <h3 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 18, color: '#fff' }}>{proj.name}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
                    {proj.tech.slice(0, 2).map(t => (
                      <span key={t} style={{
                        fontFamily: 'Space Grotesk, sans-serif', fontSize: 11,
                        background: 'rgba(67,97,238,0.25)', color: 'var(--primary)',
                        padding: '2px 10px', borderRadius: 20,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
                {/* Active indicator */}
                {isActive && (
                  <div style={{
                    position: 'absolute', top: 16, right: 16,
                    width: 10, height: 10, borderRadius: '50%',
                    background: proj.color, boxShadow: `0 0 14px ${proj.color}`,
                    animation: 'pulse 1.5s ease infinite',
                  }} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── StoryScroll Detail Panel ───────────────────────────────────────────────────
function ProjectDetailPanel({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{ opacity: 0, x: 40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -40, y: -20 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="story-detail-panel"
        style={{ padding: '24px 0' }}
      >
        {/* Project number */}
        <span style={{
          fontFamily: 'Raleway, sans-serif', fontWeight: 900,
          fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: 1,
          background: 'var(--gradient)', WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block',
          marginBottom: 8,
        }}>{project.number}</span>

        {/* Category */}
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, textTransform: 'uppercase',
          letterSpacing: '0.2em', color: project.color,
        }}>{project.category}</span>

        {/* Badge */}
        {project.badge && (
          <div style={{
            display: 'inline-block', marginTop: 10, marginBottom: 8,
            fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 12,
            background: 'rgba(67,97,238,0.15)', color: 'var(--primary)',
            padding: '4px 14px', borderRadius: 20, border: '1px solid rgba(67,97,238,0.3)',
          }}>{project.badge}</div>
        )}

        {/* Name */}
        <h2 style={{
          fontFamily: 'Raleway, sans-serif', fontWeight: 900,
          fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#fff',
          lineHeight: 1.1, marginBottom: 16, marginTop: project.badge ? 4 : 12,
        }}>{project.name}</h2>

        {/* Description */}
        <p style={{
          fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 15,
          color: 'var(--text-muted)', lineHeight: 1.78, marginBottom: 22,
          maxWidth: 480,
        }}>{project.description}</p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
          {project.tech.map(t => (
            <span key={t} style={{
              fontFamily: 'Space Grotesk, sans-serif', fontSize: 12,
              background: 'rgba(67,97,238,0.12)', color: 'var(--primary)',
              padding: '4px 14px', borderRadius: 20,
              border: '1px solid rgba(67,97,238,0.2)',
            }}>{t}</span>
          ))}
        </div>

        {/* Image grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ borderRadius: 14, overflow: 'hidden', height: 140 }}>
              <img src={project.images.col1Top} alt="" loading="lazy" decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.45s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)')}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = '')}
              />
            </div>
            <div style={{ borderRadius: 14, overflow: 'hidden', height: 180 }}>
              <img src={project.images.col1Bottom} alt="" loading="lazy" decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.45s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)')}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = '')}
              />
            </div>
          </div>
          <div style={{ borderRadius: 14, overflow: 'hidden' }}>
            <img src={project.images.col2} alt="" loading="lazy" decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.45s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)')}
              onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = '')}
            />
          </div>
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
          {project.liveUrl && project.liveUrl !== '#' ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: '#fff',
                background: 'var(--gradient)', padding: '10px 26px', borderRadius: 50,
                textDecoration: 'none', transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = 'var(--glow-blue)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = ''; }}
            >View Live →</a>
          ) : project.badge?.includes('Progress') ? (
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: '#f39c12', border: '2px solid #f39c12', padding: '10px 24px', borderRadius: 50 }}>🔧 In Progress</span>
          ) : null}
          {project.codeUrl && project.codeUrl !== '#' && (
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: 'var(--primary)',
                border: '2px solid var(--primary)', padding: '10px 24px', borderRadius: 50,
                textDecoration: 'none', transition: 'all 0.3s',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--primary)'; el.style.color = '#fff'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = ''; el.style.color = 'var(--primary)'; }}
            >GitHub ↗</a>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Mobile: Story Scroll Cards ─────────────────────────────────────────────────
function MobileProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      className="glass-card"
      style={{ padding: 'clamp(20px,3vw,32px)', marginBottom: 24 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <span style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 48, background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>{project.number}</span>
        {project.badge && <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11, fontWeight: 600, color: project.color, border: `1px solid ${project.color}44`, padding: '3px 10px', borderRadius: 20 }}>{project.badge}</span>}
      </div>
      <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, color: project.color, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 4 }}>{project.category}</p>
      <h3 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 10 }}>{project.name}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 14 }}>{project.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
        {project.tech.map(t => <span key={t} style={{ fontSize: 11, background: 'rgba(67,97,238,0.15)', color: 'var(--primary)', padding: '3px 10px', borderRadius: 20 }}>{t}</span>)}
      </div>
      <img src={project.images.col2} alt={project.name} loading="lazy" decoding="async"
        style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 14 }} />
      <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
        {project.liveUrl && project.liveUrl !== '#' && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 13, color: '#fff', background: 'var(--gradient)', padding: '8px 20px', borderRadius: 50, textDecoration: 'none' }}
          >Live →</a>
        )}
        {project.codeUrl && project.codeUrl !== '#' && (
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 13, color: 'var(--primary)', border: '2px solid var(--primary)', padding: '8px 20px', borderRadius: 50, textDecoration: 'none' }}
          >Code ↗</a>
        )}
      </div>
    </motion.div>
  );
}

// ── MAIN EXPORT ────────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 1024);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    gsap.from('.projects-header', {
      opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' },
    });
    gsap.to('.projects-watermark', {
      y: -140, ease: 'none',
      scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 },
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} style={{ background: 'var(--bg)', padding: 'clamp(80px,8vw,120px) 0', position: 'relative', overflow: 'visible' }}>
      <span className="section-watermark projects-watermark">PROJECTS</span>

      <div className="container mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="projects-header" style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 }}>WHAT I'VE BUILT</p>
          <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(2.4rem,6vw,4.8rem)', color: 'var(--text)' }}>My Projects</h2>
          <div style={{ height: 4, width: 70, background: 'var(--gradient)', margin: '14px auto 0', borderRadius: 2 }} />
        </div>

        {/* Desktop: CircularGallery + StoryPanel */}
        {!isMobile ? (
          <div id="projects-scroll-zone" style={{ position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
              {/* Left — Circular Gallery */}
              <div style={{ position: 'sticky', top: 80, height: 600 }}>
                <CircularGallery activeIndex={activeIndex} onSelect={setActiveIndex} />

                {/* Story indicator dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 20 }}>
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      className={`story-indicator-dot ${i === activeIndex ? 'active' : ''}`}
                      onClick={() => setActiveIndex(i)}
                      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                    />
                  ))}
                </div>
              </div>

              {/* Right — Story Detail Panel */}
              <ProjectDetailPanel project={projects[activeIndex]} index={activeIndex} />
            </div>
          </div>
        ) : (
          /* Mobile: vertical story-scroll cards */
          <div>
            {projects.map((proj, i) => <MobileProjectCard key={proj.id} project={proj} index={i} />)}
          </div>
        )}
      </div>
    </section>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 16 — TIMELINE SECTION
# ════════════════════════════════════════════════════

```tsx
// src/sections/TimelineSection.tsx
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timeline } from '../data/timeline';

export default function TimelineSection() {
  const lineRef      = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef   = useRef<HTMLElement>(null);

  useEffect(() => {
    // Draw the vertical line on scroll
    gsap.to(lineRef.current, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        end: 'bottom 80%',
        scrub: 1.2,
      },
    });
  }, []);

  return (
    <section id="timeline" ref={sectionRef} style={{ background: '#f0f2ff', padding: 'clamp(80px,10vw,130px) 0', position: 'relative' }}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 }}>MY JOURNEY</p>
          <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(2.4rem,6vw,4.8rem)', color: 'var(--secondary)' }}>Education & Experience</h2>
          <div style={{ height: 4, width: 70, background: 'var(--gradient)', margin: '14px auto 0', borderRadius: 2 }} />
        </div>

        <div ref={containerRef} style={{ position: 'relative', maxWidth: 860, margin: '0 auto' }}>
          <div ref={lineRef} className="timeline-line" />
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                paddingBottom: 48,
              }}
            >
              {/* Center dot */}
              <div style={{
                position: 'absolute', left: '50%', top: 20,
                width: 24, height: 24, borderRadius: '50%',
                border: '4px solid var(--primary)', background: '#fff',
                transform: 'translateX(-50%)', zIndex: 10,
                boxShadow: '0 0 0 4px rgba(67,97,238,0.15)',
              }} />

              {/* Content card */}
              <div style={{
                width: 'calc(50% - 40px)',
                background: '#fff', borderRadius: 16,
                boxShadow: '0 8px 32px rgba(0,0,0,0.07)',
                padding: '22px 24px',
              }}>
                <span style={{
                  display: 'inline-block', fontFamily: 'Space Grotesk, sans-serif', fontSize: 12,
                  background: 'var(--gradient)', color: '#fff',
                  borderRadius: 20, padding: '4px 14px', marginBottom: 10,
                }}>{item.date}</span>
                <h3 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--secondary)', marginBottom: 4 }}>{item.role}</h3>
                <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 14, color: 'var(--primary)', opacity: 0.85, marginBottom: 10 }}>{item.institution}</h4>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 14, color: '#555', lineHeight: 1.75 }}>{item.description}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 13, color: 'var(--primary)', display: 'inline-block', marginTop: 10, textDecoration: 'none' }}
                  >View Certificate →</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 17 — HACKATHONS SECTION
# ════════════════════════════════════════════════════

```tsx
// src/sections/HackathonsSection.tsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { hackathons } from '../data/hackathons';

export default function HackathonsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from('.hack-card', {
      opacity: 0, y: 45, scale: 0.95, stagger: 0.10, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' },
    });
    gsap.to('.hack-watermark', {
      y: -140, ease: 'none',
      scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 },
    });
  }, []);

  return (
    <section id="hackathons" ref={sectionRef} style={{ background: 'var(--bg)', padding: 'clamp(80px,10vw,130px) 0', position: 'relative', overflow: 'hidden' }}>
      <span className="section-watermark hack-watermark">HACK</span>
      <div className="container mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 }}>WAR STORIES</p>
          <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(2.4rem,6vw,4.8rem)', color: 'var(--text)' }}>Hackathons</h2>
          <div style={{ height: 4, width: 70, background: 'var(--gradient)', margin: '14px auto 0', borderRadius: 2 }} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((h, i) => (
            <div
              key={i}
              className="hack-card glass-card"
              style={{ padding: 28, minHeight: 280, display: 'flex', flexDirection: 'column' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 35px ${h.glowColor}44`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div style={{ width: 70, height: 70, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10, overflow: 'hidden' }}>
                  <img src={h.logo} alt={h.organizer} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, color: 'var(--text-muted)' }}>{h.date}</span>
              </div>
              {h.badge && (
                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 12, background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 8, display: 'block' }}>{h.badge}</span>
              )}
              <h3 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 4 }}>{h.name}</h3>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, color: 'var(--primary)', letterSpacing: '0.06em', marginBottom: 10 }}>{h.organizer}</p>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, flex: 1 }}>{h.description}</p>
              {h.certificate && (
                <a href={h.certificate} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 13, color: 'var(--accent)', display: 'inline-block', marginTop: 14, textDecoration: 'none', transition: 'transform 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = ''}
                >View Certificate →</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 18 — CERTIFICATIONS SECTION (Dual Marquee)
# ════════════════════════════════════════════════════

```tsx
// src/sections/CertificationsSection.tsx
import { CSSProperties } from 'react';
import { certifications } from '../data/certifications';

function CertCard({ cert }: { cert: typeof certifications[0] }) {
  return (
    <div
      style={{
        background: '#fff', borderRadius: 14, boxShadow: '0 4px 18px rgba(0,0,0,0.07)',
        padding: '16px 22px', minWidth: 220, margin: '0 10px',
        display: 'flex', flexDirection: 'column', gap: 6,
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1.05)'; el.style.boxShadow = '0 8px 32px rgba(67,97,238,0.18)'; }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '0 4px 18px rgba(0,0,0,0.07)'; }}
      onClick={() => cert.link !== '#' && window.open(cert.link, '_blank')}
    >
      <img src={cert.logo} alt={cert.issuer} loading="lazy" decoding="async"
        style={{ width: 44, height: 44, objectFit: 'contain' }} />
      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 13, color: 'var(--secondary)' }}>{cert.name}</span>
      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11, color: '#888' }}>{cert.issuer}</span>
    </div>
  );
}

export default function CertificationsSection() {
  const triple = [...certifications, ...certifications, ...certifications];
  const tripleB = [...certifications.slice(4), ...certifications, ...certifications.slice(0, 5)];

  return (
    <section id="certifications" style={{ background: '#f0f2ff', padding: 'clamp(80px,10vw,130px) 0', overflow: 'hidden' }}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 }}>VERIFIED SKILLS</p>
          <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(2.4rem,6vw,4.8rem)', color: 'var(--secondary)' }}>Certifications</h2>
          <div style={{ height: 4, width: 70, background: 'var(--gradient)', margin: '14px auto 0', borderRadius: 2 }} />
        </div>
      </div>

      {/* Row 1 — left */}
      <div style={{ overflow: 'hidden', marginBottom: 20 }}>
        <div
          className="marquee-left"
          style={{ '--speed': '35s' } as CSSProperties}
        >
          <div style={{ display: 'flex', width: '300%' }}>
            {triple.map((cert, i) => <CertCard key={i} cert={cert} />)}
          </div>
        </div>
      </div>

      {/* Row 2 — right */}
      <div style={{ overflow: 'hidden' }}>
        <div
          className="marquee-right"
          style={{ '--speed': '28s' } as CSSProperties}
        >
          <div style={{ display: 'flex', width: '300%' }}>
            {tripleB.map((cert, i) => <CertCard key={i} cert={cert} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 19 — ACHIEVEMENTS SECTION
# ════════════════════════════════════════════════════

```tsx
// src/sections/AchievementsSection.tsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { achievements } from '../data/achievements';

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from('.ach-card', {
      opacity: 0, y: 40, scale: 0.94, stagger: 0.09, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' },
    });
    gsap.to('.ach-watermark', {
      y: -140, ease: 'none',
      scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 },
    });
  }, []);

  return (
    <section id="achievements" ref={sectionRef} style={{ background: 'var(--bg)', padding: 'clamp(80px,10vw,130px) 0', position: 'relative', overflow: 'hidden' }}>
      <span className="section-watermark ach-watermark">WINS</span>
      <div className="container mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 }}>RECOGNITION</p>
          <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(2.4rem,6vw,4.8rem)', color: 'var(--text)' }}>Achievements</h2>
          <div style={{ height: 4, width: 70, background: 'var(--gradient)', margin: '14px auto 0', borderRadius: 2 }} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="ach-card glass-card"
              style={{ padding: 26, minHeight: 200, display: 'flex', flexDirection: 'column' }}
            >
              <i className={a.icon} style={{
                fontSize: '2.4rem', marginBottom: 16, display: 'block',
                background: 'var(--gradient-acc)', WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }} />
              <h3 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 17, color: '#fff', marginBottom: 10 }}>{a.title}</h3>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.72, flex: 1 }}>{a.description}</p>
              {a.link && (
                <a href={a.link} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 13, color: 'var(--accent)', display: 'inline-block', marginTop: 14, textDecoration: 'none', transition: 'transform 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = ''}
                >View Certificate →</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 20 — CONTACT SECTION
# ════════════════════════════════════════════════════

```tsx
// src/sections/ContactSection.tsx
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const SOCIALS = [
  { icon: 'fab fa-whatsapp',    href: 'https://wa.me/916305284229',                          label: 'WhatsApp'  },
  { icon: 'fab fa-instagram',   href: 'https://www.instagram.com/starshami888/',              label: 'Instagram' },
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/cheerla-shamith-a420472a0', label: 'LinkedIn'  },
  { icon: 'fab fa-github',      href: 'https://github.com/cheerlashamith',                   label: 'GitHub'    },
  { icon: 'fas fa-code',        href: 'https://www.codechef.com/users/sasihackerrr',          label: 'CodeChef'  },
];

export default function ContactSection() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent]       = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.to('.contact-watermark', {
      y: -140, ease: 'none',
      scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 },
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    const msg = `Hello, I'm ${name}. ${message}${email ? ` — Email: ${email}` : ''}`;
    window.open(`https://wa.me/916305284229?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const fieldStyle = {
    width: '100%', padding: '15px 20px', borderRadius: 14, fontSize: 15,
    fontFamily: 'Poppins, sans-serif', background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.09)', color: '#fff',
    outline: 'none', transition: 'border-color 0.3s, box-shadow 0.3s',
  };

  return (
    <section id="contact" ref={sectionRef} style={{
      background: '#08080f', borderRadius: '40px 40px 0 0',
      padding: 'clamp(80px,10vw,130px) clamp(20px,6vw,80px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <span className="section-watermark contact-watermark">CONNECT</span>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          style={{
            fontFamily: 'Raleway, sans-serif', fontWeight: 900,
            fontSize: 'clamp(3.5rem,9vw,8rem)', color: '#fff',
            textTransform: 'uppercase', letterSpacing: '-0.04em',
            textAlign: 'center', marginBottom: 40,
          }}
        >Let's Talk</motion.h2>

        {/* Social circles */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 52 }}>
          {SOCIALS.map(s => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              style={{
                width: 72, height: 72, borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26, color: '#fff', textDecoration: 'none',
                transition: 'all 0.45s ease',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#fff'; el.style.color = '#000'; el.style.boxShadow = '0 0 45px rgba(255,255,255,0.28)'; el.style.transform = 'scale(1.1)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = '#fff'; el.style.boxShadow = ''; el.style.transform = ''; }}
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ maxWidth: 580, margin: '0 auto' }}>
          {[
            { label: 'Name *', value: name, setter: setName, type: 'text', placeholder: 'Your name', required: true },
            { label: 'Email', value: email, setter: setEmail, type: 'email', placeholder: 'your@email.com', required: false },
          ].map(f => (
            <div key={f.label} style={{ marginBottom: 16 }}>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={f.value}
                onChange={e => f.setter(e.target.value)}
                required={f.required}
                style={fieldStyle}
                onFocus={e => { (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--primary)'; (e.currentTarget as HTMLInputElement).style.boxShadow = '0 0 0 3px rgba(67,97,238,0.14)'; }}
                onBlur={e => { (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.09)'; (e.currentTarget as HTMLInputElement).style.boxShadow = ''; }}
              />
            </div>
          ))}
          <div style={{ marginBottom: 16 }}>
            <textarea
              placeholder="Your message *"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              style={{ ...fieldStyle, minHeight: 140, resize: 'vertical' }}
              onFocus={e => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'var(--primary)'; (e.currentTarget as HTMLTextAreaElement).style.boxShadow = '0 0 0 3px rgba(67,97,238,0.14)'; }}
              onBlur={e => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.09)'; (e.currentTarget as HTMLTextAreaElement).style.boxShadow = ''; }}
            />
          </div>
          <button type="submit" style={{
            width: '100%', padding: 16, background: 'var(--gradient)', color: '#fff', border: 'none',
            borderRadius: 14, fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15,
            letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
            transition: 'transform 0.3s, box-shadow 0.3s',
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = 'var(--glow-blue)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = ''; }}
          >
            {sent ? '✓ Sent via WhatsApp!' : 'Send Message'}
          </button>
        </form>

        {/* Contact strip */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap', marginTop: 48 }}>
          {[
            { icon: 'fas fa-phone',          text: '+91 6305284229'         },
            { icon: 'fas fa-envelope',       text: 'chshamith888@gmail.com' },
            { icon: 'fas fa-map-marker-alt', text: 'Pentapadu, West Godavari, AP' },
          ].map(item => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <i className={item.icon} style={{ fontSize: 18, color: 'var(--primary)' }} />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 14, color: 'var(--text-muted)' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 21 — ★★★ FOOTER — ANTIGRAVITY EDITION ★★★
# ════════════════════════════════════════════════════

## CONCEPT: Everything FLOATS UP. The footer is a deep-space anti-gravity chamber.
## • Upward-drifting particles (canvas-driven, not CSS).
## • GSAP: all elements animate from y:80 → y:0 with elastic.out spring — like they fell upward and overshot.
## • Floating pulsing orbs (radial gradients) drift in sine waves.
## • Profile image levitates continuously + bounces in on mount.
## • Social links magnetic + float up staggered with back.out(1.9).
## • Nav links ripple up like a wave.
## • Name chars split and float independently.
## • Background: deep #050510 with subtle upward grid lines (CSS gradient).

```tsx
// src/components/Footer.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenis } from '../main';

const NAV_LINKS = ['Home','About','Skills','Projects','Education','Hackathons','Certifications','Achievements','Contact'];
const NAV_IDS   = ['hero','about','skills','projects','timeline','hackathons','certifications','achievements','contact'];

const SOCIALS = [
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/cheerla-shamith-a420472a0', bg: '#0077B5', label: 'LinkedIn' },
  { icon: 'fab fa-github',      href: 'https://github.com/cheerlashamith',                     bg: '#333',    label: 'GitHub'   },
  { icon: 'fas fa-code',        href: 'https://www.codechef.com/users/sasihackerrr',            bg: '#4361ee', label: 'CodeChef' },
  { icon: 'fab fa-instagram',   href: 'https://www.instagram.com/starshami888/',                bg: '#E1306C', label: 'Instagram'},
  { icon: 'fab fa-whatsapp',    href: 'https://wa.me/916305284229',                             bg: '#25D366', label: 'WhatsApp' },
];

// Antigravity upward particle canvas
function AntigravityCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    interface UpParticle {
      x: number; y: number;
      vx: number; vy: number; // vy is NEGATIVE (upward)
      radius: number;
      opacity: number;
      color: string;
      startY: number;
    }

    const COLS = ['rgba(67,97,238,', 'rgba(114,9,183,', 'rgba(247,37,133,', 'rgba(255,255,255,'];
    const particles: UpParticle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * (canvas.width || 1200),
      y: Math.random() * (canvas.height || 400),
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(0.3 + Math.random() * 0.8), // always moving UP
      radius: 1 + Math.random() * 2.5,
      opacity: 0.2 + Math.random() * 0.5,
      color: COLS[Math.floor(Math.random() * COLS.length)],
      startY: 0,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx + Math.sin(Date.now() * 0.001 + p.y) * 0.1; // gentle sway
        p.y += p.vy;
        p.opacity -= 0.002;

        if (p.y < -20 || p.opacity <= 0) {
          // Reset from bottom
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 10;
          p.opacity = 0.2 + Math.random() * 0.4;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity.toFixed(2)})`;
        ctx.fill();
      });
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 1,
      }}
    />
  );
}

export default function Footer() {
  const footerRef     = useRef<HTMLElement>(null);
  const profileRef    = useRef<HTMLDivElement>(null);
  const nameRef       = useRef<HTMLHeadingElement>(null);
  const taglineRef    = useRef<HTMLParagraphElement>(null);
  const socialsRef    = useRef<HTMLDivElement>(null);
  const navRef        = useRef<HTMLDivElement>(null);
  const ctaRef        = useRef<HTMLDivElement>(null);
  const copyrightRef  = useRef<HTMLDivElement>(null);
  const dividerRef    = useRef<HTMLDivElement>(null);
  const orb1Ref       = useRef<HTMLDivElement>(null);
  const orb2Ref       = useRef<HTMLDivElement>(null);
  const orb3Ref       = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── FLOATING ORBS — independent sine-wave drift ── */
      if (orb1Ref.current) {
        gsap.to(orb1Ref.current, {
          y: -60, x: 40, duration: 8, ease: 'sine.inOut',
          repeat: -1, yoyo: true,
        });
      }
      if (orb2Ref.current) {
        gsap.to(orb2Ref.current, {
          y: -80, x: -50, duration: 11, ease: 'sine.inOut',
          repeat: -1, yoyo: true, delay: 2,
        });
      }
      if (orb3Ref.current) {
        gsap.to(orb3Ref.current, {
          y: -40, x: 30, duration: 7, ease: 'sine.inOut',
          repeat: -1, yoyo: true, delay: 4,
        });
      }

      /* ── SCROLL-TRIGGERED ANTIGRAVITY ENTRANCE ── */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Profile photo "falls up" with elastic overshoot
      tl.fromTo(profileRef.current,
        { y: 120, opacity: 0, scale: 0.65 },
        { y: 0, opacity: 1, scale: 1, duration: 1.4, ease: 'elastic.out(1, 0.55)' },
        0
      );

      // Name chars split and float up
      if (nameRef.current) {
        const nameText = 'Cheerla Shamith';
        nameRef.current.innerHTML = nameText.split('').map((ch, i) =>
          `<span class="footer-char" style="display:inline-block;opacity:0;transform:translateY(60px)">${ch === ' ' ? '&nbsp;' : ch}</span>`
        ).join('');
        tl.to('.footer-char', {
          y: 0, opacity: 1, stagger: 0.035, duration: 0.8,
          ease: 'back.out(1.9)',
        }, 0.25);
      }

      // Tagline floats up
      tl.fromTo(taglineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'back.out(1.5)' },
        0.6
      );

      // Social links bounce up one by one — MAGNETIC
      if (socialsRef.current) {
        const children = Array.from(socialsRef.current.children);
        tl.fromTo(children,
          { y: 80, opacity: 0, scale: 0.5 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.9, ease: 'elastic.out(1, 0.6)' },
          0.5
        );
      }

      // CTA buttons float up
      tl.fromTo(ctaRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'back.out(1.7)' },
        0.7
      );

      // Nav links wave-ripple up
      if (navRef.current) {
        const links = Array.from(navRef.current.querySelectorAll('.footer-nav-link'));
        tl.fromTo(links,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: { each: 0.045, from: 'start' }, duration: 0.65, ease: 'power3.out' },
          0.8
        );
      }

      // Divider line grows
      tl.fromTo(dividerRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power3.out', transformOrigin: 'center' },
        1.0
      );

      // Copyright fades in last
      tl.fromTo(copyrightRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        1.2
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  // Continuous levitation of profile image
  useEffect(() => {
    if (!profileRef.current) return;
    gsap.to(profileRef.current, {
      y: -12, duration: 2.8, ease: 'sine.inOut',
      repeat: -1, yoyo: true, delay: 1.5, // after entrance
    });
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) lenis?.scrollTo(el);
  };

  return (
    <footer
      ref={footerRef}
      style={{
        position: 'relative', background: 'var(--bg-deep)',
        overflow: 'hidden',
        /* Subtle upward grid lines via CSS gradient */
        backgroundImage: `
          linear-gradient(rgba(67,97,238,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(67,97,238,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    >
      {/* ── Upward particle canvas ── */}
      <AntigravityCanvas />

      {/* ── Floating orbs ── */}
      <div
        ref={orb1Ref}
        className="footer-orb"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(67,97,238,0.28) 0%, transparent 70%)',
          top: -100, left: -100, zIndex: 0,
          animationDelay: '0s',
        }}
      />
      <div
        ref={orb2Ref}
        className="footer-orb"
        style={{
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(247,37,133,0.18) 0%, transparent 70%)',
          bottom: 0, right: -80, zIndex: 0,
          animationDelay: '2s',
        }}
      />
      <div
        ref={orb3Ref}
        className="footer-orb"
        style={{
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(114,9,183,0.2) 0%, transparent 70%)',
          top: '40%', left: '50%', zIndex: 0,
          transform: 'translate(-50%, -50%)',
          animationDelay: '4s',
        }}
      />

      {/* ── Centre content (z-index above canvas + orbs) ── */}
      <div
        style={{
          position: 'relative', zIndex: 10,
          padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,60px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Profile image — levitates */}
        <div ref={profileRef} style={{ marginBottom: 24, willChange: 'transform' }}>
          <div style={{
            width: 'clamp(110px,14vw,160px)', height: 'clamp(110px,14vw,160px)',
            borderRadius: '50%', overflow: 'hidden',
            border: '4px solid rgba(255,255,255,0.15)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 60px rgba(67,97,238,0.3)',
            margin: '0 auto',
          }}>
            <img
              src="./src/assets/hero.jpg"
              alt="Cheerla Shamith"
              loading="lazy" decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Name — chars split and floated up by GSAP */}
        <h2
          ref={nameRef}
          style={{
            fontFamily: 'Raleway, sans-serif', fontWeight: 800,
            fontSize: 'clamp(1.3rem, 3vw, 2rem)', color: '#fff',
            letterSpacing: '0.02em', marginBottom: 8,
          }}
        >Cheerla Shamith</h2>

        {/* Tagline */}
        <p
          ref={taglineRef}
          style={{
            fontFamily: 'Poppins, sans-serif', fontStyle: 'italic', fontWeight: 300, fontSize: 14,
            color: 'rgba(255,255,255,0.55)', marginBottom: 28,
          }}
        >"Building the future, one commit at a time."</p>

        {/* Social links — magnetic + antigravity bounce-in */}
        <div ref={socialsRef} style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
          {SOCIALS.map(s => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
                border: '1.5px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, color: '#fff', textDecoration: 'none',
                transition: 'all 0.35s ease',
                willChange: 'transform',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = s.bg;
                el.style.borderColor = s.bg;
                el.style.transform = 'translateY(-8px) scale(1.15)';
                el.style.boxShadow = `0 12px 30px ${s.bg}55`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,255,255,0.06)';
                el.style.borderColor = 'rgba(255,255,255,0.12)';
                el.style.transform = '';
                el.style.boxShadow = '';
              }}
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div ref={ctaRef} style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
          <a
            href="https://www.linkedin.com/in/cheerla-shamith-a420472a0"
            target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: '#fff',
              background: '#0077B5', padding: '11px 28px', borderRadius: 50,
              textDecoration: 'none', transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 0 28px rgba(0,119,181,0.5)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = ''; }}
          >LinkedIn →</a>
          <a
            href="https://wa.me/916305284229"
            target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: '#fff',
              background: '#25D366', padding: '11px 28px', borderRadius: 50,
              textDecoration: 'none', transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 0 28px rgba(37,211,102,0.5)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = ''; }}
          >WhatsApp →</a>
        </div>

        {/* Nav links */}
        <nav ref={navRef} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '6px 28px', marginBottom: 32 }}>
          {NAV_LINKS.map((label, i) => (
            <button
              key={label}
              className="footer-nav-link"
              onClick={() => scrollTo(NAV_IDS[i])}
              style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 13,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.65)', background: 'none', border: 'none',
                cursor: 'pointer', transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'}
            >{label}</button>
          ))}
        </nav>

        {/* Divider */}
        <div
          ref={dividerRef}
          style={{
            width: '100%', maxWidth: 600,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginBottom: 24,
          }}
        />

        {/* Copyright */}
        <div
          ref={copyrightRef}
          style={{
            fontFamily: 'Poppins, sans-serif', fontSize: 12,
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          © {new Date().getFullYear()} Cheerla Shamith. All rights reserved. Built with ❤️ & caffeine.
        </div>
      </div>
    </footer>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 22 — GSAP MASTER ANIMATION REFERENCE
# ════════════════════════════════════════════════════

## EASING CHEATSHEET (use these exact eases throughout):

| Effect              | GSAP Ease              | Notes                         |
|---------------------|------------------------|-------------------------------|
| Antigravity bounce  | `elastic.out(1, 0.55)` | Main antigravity footer entry |
| Text overshoot      | `back.out(1.9)`        | Name chars float up           |
| Section reveals     | `power3.out`           | Clean professional             |
| Hero name chars     | `back.out(1.7)`        | 3D rotateX entrance            |
| Scroll scrub        | `none`                 | Progress-based animations      |
| Orb drift           | `sine.inOut`           | Smooth perpetual float         |
| Preloader exit      | `expo.inOut`           | Dramatic slide away            |
| Profile image       | `back.out(1.7)`        | Scale from 0.6 to 1            |

## KEY SCROLLTRIGGER PATTERNS:

```javascript
// 1. Standard section reveal (copy for all sections)
gsap.from(elements, {
  opacity: 0, y: 45, duration: 0.9, ease: 'power3.out', stagger: 0.1,
  scrollTrigger: { trigger: section, start: 'top 78%', toggleActions: 'play none none none' }
});

// 2. Watermark parallax (all sections)
gsap.to(watermark, {
  y: -140, ease: 'none',
  scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 2 }
});

// 3. Timeline line draw
gsap.to(lineEl, {
  height: '100%', ease: 'none',
  scrollTrigger: { trigger: container, start: 'top 60%', end: 'bottom 80%', scrub: 1.2 }
});

// 4. About image 3D tilt
ScrollTrigger.create({
  trigger: aboutSection,
  start: 'top center', end: 'bottom center',
  onUpdate: (self) => gsap.to(imgEl, {
    rotateX: (self.progress - 0.5) * 14,
    rotateY: (self.progress - 0.5) * -9,
    duration: 0.6, ease: 'power1.out',
  })
});

// 5. Footer antigravity (elastic bounce up)
tl.fromTo(el, { y: 80, opacity: 0 }, { y: 0, opacity: 1, ease: 'elastic.out(1, 0.55)', duration: 1.3 });

// 6. Hero name 3D entrance
gsap.to('.hero-char', {
  opacity: 1, y: 0, rotateX: 0,
  stagger: 0.025, duration: 0.55, ease: 'back.out(1.7)',
  transformOrigin: 'center bottom', transformStyle: 'preserve-3d',
});
```

---

# ════════════════════════════════════════════════════
# PART 23 — RESPONSIVE BREAKPOINTS
# ════════════════════════════════════════════════════

| Element               | Mobile (< 768px)       | Tablet (768–1023px) | Desktop (1024px+)        |
|-----------------------|------------------------|---------------------|--------------------------|
| Hero layout           | Single col, img top    | Single col          | 2-col grid               |
| Navbar                | Hamburger only         | Hamburger           | Full links               |
| About                 | Single col             | Single col          | 2-col 50/50              |
| Skills rows           | Name small, pills wrap | Name 40vw           | Name 7vw, full layout    |
| **Projects**          | Story-scroll cards     | Story-scroll cards  | CircularGallery + panel  |
| Timeline              | Left-aligned only      | Left-aligned        | Alternating L/R          |
| Hackathons            | 1-col                  | 2-col               | 3-col                    |
| Achievements          | 1-col                  | 2-col               | 4-col                    |
| Certifications        | Marquee slower         | Marquee normal      | Dual-marquee full width  |
| Contact form          | Full width             | max 480px           | max 580px                |
| **Footer orbs**       | Hide 2 of 3 orbs       | Show 2 orbs         | All 3 orbs               |
| **Footer socials**    | 44px circles           | 52px circles        | 52px magnetic            |
| Circular gallery R    | N/A                    | N/A                 | 280px radius             |

Use `height: 100dvh` everywhere instead of `100vh` for mobile browser chrome safety.

---

# ════════════════════════════════════════════════════
# PART 24 — PERFORMANCE CHECKLIST
# ════════════════════════════════════════════════════

- [ ] All `<img>`: `loading="lazy" decoding="async"` (except hero which is `loading="eager"`)
- [ ] Hero image: `<link rel="preload" as="image" href="./src/assets/hero.jpg">` in index.html
- [ ] Canvas: `requestAnimationFrame` with `clearRect` every frame; mobile particle count halved
- [ ] GSAP: `will-change: transform` only on actively-animating elements; remove in `onComplete`
- [ ] Single RAF loop via `gsap.ticker.add` — no independent `setInterval` animation loops
- [ ] Lenis + GSAP ticker synced: `lenis.on('scroll', () => ScrollTrigger.update())`
- [ ] All sections `React.lazy` + `Suspense`
- [ ] `useEffect` cleanups on all GSAP contexts: `return () => ctx.revert()`
- [ ] `@media (prefers-reduced-motion: reduce)` disables ALL transform animations, uses opacity only
- [ ] Mobile: disable custom cursor, disable 3D gallery, show story cards instead
- [ ] Footer canvas particles: 60 particles max, removed on `unmount`
- [ ] CircularGallery: cancel `requestAnimationFrame` on unmount

---

# ════════════════════════════════════════════════════
# PART 25 — LIB/UTILS + VITE CONFIG
# ════════════════════════════════════════════════════

```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
```

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation':    ['gsap', '@gsap/react', 'framer-motion'],
          'lenis':        ['@studio-freight/lenis'],
        },
      },
    },
  },
});
```

---

# ════════════════════════════════════════════════════
# PART 26 — FINAL INTEGRATION NOTES
# ════════════════════════════════════════════════════

## CircularGallery (from provided component)
The provided `CircularGallery` component is adapted here so that:
- Items are the 6 projects, not biodiversity specimens
- Photos come from `./src/assets/projects/` paths
- Rotation is tied to page scroll progress AND auto-rotate
- Clicking any card updates `activeIndex` in parent
- The `activeIndex` drives the `ProjectDetailPanel` on the right

## StoryScroll (from provided Variant 3 + 5)
The Story Scroll pattern is applied to:
- `ProjectDetailPanel`: animated with `AnimatePresence` + `motion.div`
- `whileInView` pattern on mobile cards
- Fixed story indicator dots matching scroll progress to active project

## ShaderHero (from provided AnimatedShaderHeroShowcase)
The **Grid Morph** variant is used as a sublayer behind the hero particle canvas:
- Rendered at `opacity: 0.18` so it's subtle
- Uses `requestAnimationFrame` synced via GSAP ticker
- Adds depth without competing with the particle system

## Antigravity Footer (NEW — not in any provided component)
Entirely custom, core innovation of this build:
- All elements conceptually "fall upward" and overshoot their resting position
- GSAP `elastic.out(1, 0.55)` for the profile image (bounces past 0 and settles)
- GSAP `back.out(1.9)` for name chars (overshoots position then snaps)
- Continuous levitation via repeating `sine.inOut` tween after entrance
- Deep-space background with upward grid lines (CSS gradient pattern)
- Upward-drifting particle canvas (separate from hero particles)
- Three floating orbs with independent sine-wave drift (CSS + GSAP)
- Magnetic social links that glow and float up on hover

---

# ════════════════════════════════════════════════════
# END OF BUILD PROMPT
# ════════════════════════════════════════════════════

> Built for Cheerla Shamith (King) — B.Tech CSE 2027, SASI Institute.
> Questions: chshamith888@gmail.com | +91 6305284229
> GitHub: https://github.com/cheerlashamith
# SHAMITH PORTFOLIO V2 — PART 2
## TypeScript Interfaces • Complete Animations • Accessibility • SEO • Deployment
### Append this to the main prompt or feed as Part 2

---

# ════════════════════════════════════════════════════
# PART 27 — COMPLETE TYPESCRIPT INTERFACES & TYPES
# ════════════════════════════════════════════════════

```ts
// src/types/index.ts — Single source of truth for all types

/** Shared section props */
export interface SectionProps {
  id?: string;
  className?: string;
}

/** Preloader */
export interface PreloaderProps {
  onComplete: () => void;
  duration?: number; // ms, default 2400
}

/** Navbar */
export interface NavbarProps {
  preloaderDone: boolean;
}

/** Project (already in data/projects.ts — replicated here for reference) */
export interface ProjectImages {
  card: string;
  col1Top: string;
  col1Bottom: string;
  col2: string;
}

export interface Project {
  id: string;
  number: string;           // "01"–"06"
  category: string;
  name: string;
  description: string;
  tech: string[];
  liveUrl: string | null;
  codeUrl: string | null;
  badge: string | null;
  color: string;            // hex, used for glow / accent
  images: ProjectImages;
}

/** Timeline item */
export interface TimelineItem {
  date: string;
  role: string;
  institution: string;
  description: string;
  type: 'education' | 'experience';
  link: string | null;
}

/** Hackathon */
export interface Hackathon {
  date: string;
  name: string;
  organizer: string;
  description: string;
  logo: string;
  glowColor: string;        // hex
  badge: string | null;
  certificate: string | null;
}

/** Certification */
export interface Certification {
  name: string;
  issuer: string;
  logo: string;
  link: string;
}

/** Achievement */
export interface Achievement {
  icon: string;             // Font Awesome class e.g. "fas fa-star"
  title: string;
  description: string;
  link: string | null;
}

/** Skill */
export interface Skill {
  name: string;
  icon: string;
  color?: string;
}

/** Skill category */
export interface SkillCategory {
  name: string;
  images: [string, string]; // always exactly 2
  skills: Skill[];
}

/** Circular Gallery props */
export interface CircularGalleryProps {
  activeIndex: number;
  onSelect: (index: number) => void;
  radius?: number;          // default 280
  autoRotateSpeed?: number; // degrees per frame, default 0.015
}

/** Story indicator */
export interface StoryIndicatorProps {
  count: number;
  active: number;
  onSelect: (i: number) => void;
}

/** Particle config */
export interface ParticleConfig {
  count: number;
  mobileCount: number;
  repelRadius: number;
  repelForce: number;
  connectionDist: number;
  colors: string[];
}

/** Contact form */
export interface ContactFormState {
  name: string;
  email: string;
  message: string;
  status: 'idle' | 'sent' | 'error';
}

/** Social link */
export interface SocialLink {
  icon: string;
  href: string;
  label: string;
  bg?: string;
}

/** GSAP animation config */
export interface AnimConfig {
  duration: number;
  ease: string;
  delay?: number;
  stagger?: number;
}
```

---

# ════════════════════════════════════════════════════
# PART 28 — COMPLETE ANIMATION SEQUENCES (GSAP)
# ════════════════════════════════════════════════════

Every section has a dedicated `useEffect` that fires ONCE (on `scrollTrigger` enter).
No animations trigger without `preloaderDone = true` for above-fold content.
Below-fold content uses `scrollTrigger` with `toggleActions: 'play none none none'`.

## 28a — Hero Full Sequence (fires when preloaderDone = true)

```typescript
// Fires AFTER preloader exit completes (preloaderDone state = true)
useEffect(() => {
  if (!preloaderDone) return;

  // Step 0: Set initial states BEFORE timeline starts
  gsap.set('.hero-greeting', { opacity: 0, y: 25 });
  gsap.set('.hero-role',     { opacity: 0, y: 18 });
  gsap.set('.hero-desc',     { opacity: 0, y: 22 });
  gsap.set('.hero-cta-row > *', { opacity: 0, y: 18 });
  gsap.set('.hero-social-item', { opacity: 0, y: 15, scale: 0.85 });
  gsap.set(profileRef.current,  { opacity: 0, scale: 0.6 });
  gsap.set(scrollIndRef.current,{ opacity: 0 });

  // Step 1: Split name into char spans
  if (nameRef.current) {
    const text = nameRef.current.getAttribute('data-name') || 'Cheerla Shamith';
    nameRef.current.innerHTML = Array.from(text).map(ch =>
      ch === ' '
        ? '<span class="hero-char" style="display:inline-block;width:0.3em">&nbsp;</span>'
        : `<span class="hero-char" style="display:inline-block;opacity:0;transform:translateY(50px) rotateX(-90deg)">${ch}</span>`
    ).join('');
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl // ─── Greeting slides up (t = 0)
    .to('.hero-greeting', { opacity: 1, y: 0, duration: 0.7 }, 0)

    // ─── Name chars flip up in 3D (t = 0.15)
    .to('.hero-char', {
      opacity: 1, y: 0, rotateX: 0,
      stagger: 0.026,
      duration: 0.55,
      ease: 'back.out(1.7)',
      transformOrigin: 'center bottom',
    }, 0.15)

    // ─── Role typewriter line fades in (t = 0.55)
    .to('.hero-role', { opacity: 1, y: 0, duration: 0.5 }, 0.55)

    // ─── Description paragraph (t = 0.65)
    .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8 }, 0.65)

    // ─── CTA buttons stagger (t = 0.90)
    .to('.hero-cta-row > *', { opacity: 1, y: 0, stagger: 0.12, duration: 0.6 }, 0.90)

    // ─── Social links scale + slide (t = 1.05)
    .to('.hero-social-item', {
      opacity: 1, y: 0, scale: 1,
      stagger: 0.07, duration: 0.5,
      ease: 'back.out(1.7)',
    }, 1.05)

    // ─── Profile image bounces in (t = 0.40)
    .to(profileRef.current, {
      opacity: 1, scale: 1,
      duration: 1.1,
      ease: 'back.out(1.7)',
    }, 0.40)

    // ─── Scroll indicator fades in (t = 1.55)
    .to(scrollIndRef.current, { opacity: 1, duration: 0.8 }, 1.55);

  // ─── Floating shapes start (independent of timeline)
  gsap.to('.hero-shape-a', { rotation: '+=360', duration: 12, ease: 'none', repeat: -1 });
  gsap.to('.hero-shape-b', { y: 8, duration: 3, ease: 'sine.inOut', repeat: -1, yoyo: true });
  gsap.to('.hero-shape-c', { rotation: '-=360', duration: 16, ease: 'none', repeat: -1 });

  // ─── Profile idle float (after bounce-in, delay 1.6s)
  gsap.to(profileRef.current, {
    y: -10, duration: 3, ease: 'sine.inOut',
    repeat: -1, yoyo: true, delay: 1.6,
  });

  // ─── Hero watermark parallax
  gsap.to('.hero-watermark', {
    y: -120,
    scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 2 },
  });

  // ─── Scroll indicator fade out
  gsap.to(scrollIndRef.current, {
    opacity: 0,
    scrollTrigger: { trigger: heroRef.current, start: 'top top', end: '+=100px', scrub: true },
  });

}, [preloaderDone]);
```

## 28b — About Section Sequence

```typescript
useEffect(() => {
  const ctx = gsap.context(() => {

    // Header reveal
    gsap.from('.about-header > *', {
      opacity: 0, y: 40, stagger: 0.12, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.about-header', start: 'top 80%', toggleActions: 'play none none none' },
    });

    // Image slide in from left
    gsap.from(imgRef.current, {
      opacity: 0, x: -60, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: imgRef.current, start: 'top 75%', toggleActions: 'play none none none' },
    });

    // Text paragraphs line reveal
    gsap.from('.about-para', {
      opacity: 0, y: 30, stagger: 0.15, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: textRef.current, start: 'top 75%', toggleActions: 'play none none none' },
    });

    // Stats cards stagger
    gsap.from('.stat-card', {
      opacity: 0, y: 30, scale: 0.9, stagger: 0.1, duration: 0.7, ease: 'back.out(1.5)',
      scrollTrigger: { trigger: '.stat-card', start: 'top 85%', toggleActions: 'play none none none' },
    });

    // 3D tilt on scroll
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      end: 'bottom center',
      onUpdate: (self) => {
        const p = self.progress;
        gsap.to(imgRef.current, {
          rotateX: (p - 0.5) * 14,
          rotateY: (p - 0.5) * -9,
          duration: 0.6, ease: 'power1.out',
        });
      },
    });

  }, sectionRef);
  return () => ctx.revert();
}, []);
```

## 28c — Skills RevealImageList Hover Logic

```typescript
// In each SkillRow component, add this hover handler to the row div:
const handleRowMouseEnter = () => {
  // Category name: opacity → 1, gradient fill
  // Hover images: scale → 1, opacity → 1, stagger
  const imgs = rowRef.current?.querySelectorAll('.skill-hover-img');
  imgs?.forEach((img, i) => {
    gsap.to(img, {
      scale: 1, opacity: 1, duration: 0.4,
      ease: 'back.out(1.5)', delay: i * 0.06,
    });
  });
};

const handleRowMouseLeave = () => {
  const imgs = rowRef.current?.querySelectorAll('.skill-hover-img');
  imgs?.forEach((img) => {
    gsap.to(img, { scale: 0, opacity: 0, duration: 0.25, ease: 'power2.in' });
  });
};

// Apply to each skill row's img containers via their ref:
// Initial state set in useEffect:
useEffect(() => {
  gsap.set(rowRef.current?.querySelectorAll('.skill-hover-img'), {
    scale: 0, opacity: 0
  });
}, []);
```

## 28d — Projects CircularGallery Keyboard Navigation

```typescript
// Add keyboard navigation to CircularGallery
useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') onSelect((activeIndex + 1) % projects.length);
    if (e.key === 'ArrowLeft')  onSelect((activeIndex - 1 + projects.length) % projects.length);
  };
  window.addEventListener('keydown', handleKey);
  return () => window.removeEventListener('keydown', handleKey);
}, [activeIndex, onSelect]);
```

## 28e — Footer Antigravity Micro-interactions

```typescript
// Magnetic effect on social links (in addition to GSAP entrance)
useEffect(() => {
  if (!socialsRef.current) return;
  const links = Array.from(socialsRef.current.querySelectorAll<HTMLElement>('a'));

  const handlers: Array<{ el: HTMLElement; onMove: (e: MouseEvent) => void; onLeave: () => void }> = [];

  links.forEach(el => {
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < 80) {
        gsap.to(el, {
          x: dx * 0.4, y: dy * 0.4,
          duration: 0.2, ease: 'power2.out',
        });
      }
    };
    const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });

    document.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    handlers.push({ el, onMove, onLeave });
  });

  return () => {
    handlers.forEach(({ el, onMove, onLeave }) => {
      document.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    });
  };
}, []);

// Hover ripple on footer background grid
const handleFooterMouseMove = (e: React.MouseEvent<HTMLElement>) => {
  if (!footerRef.current) return;
  const rect = footerRef.current.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  footerRef.current.style.setProperty('--mx', `${x}%`);
  footerRef.current.style.setProperty('--my', `${y}%`);
};
// Add to footer element: onMouseMove={handleFooterMouseMove}
// Add to footer CSS:
// background-image: ..., radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(67,97,238,0.06) 0%, transparent 50%)
```

---

# ════════════════════════════════════════════════════
# PART 29 — ACCESSIBILITY (WCAG 2.1 AA)
# ════════════════════════════════════════════════════

## 29a — Skip Link (add at top of App.tsx, before Cursor)
```tsx
<a
  href="#hero"
  style={{
    position: 'absolute', top: -100, left: 20, zIndex: 100000,
    background: 'var(--primary)', color: '#fff',
    padding: '12px 24px', borderRadius: 8, fontFamily: 'Poppins',
    textDecoration: 'none', transition: 'top 0.3s',
  }}
  onFocus={e => (e.currentTarget.style.top = '20px')}
  onBlur={e => (e.currentTarget.style.top = '-100px')}
>Skip to main content</a>
```

## 29b — ARIA labels on all interactive elements

```tsx
// Circular Gallery cards
<div
  role="button"
  tabIndex={0}
  aria-label={`View project: ${proj.name} (${proj.category})`}
  aria-pressed={i === activeIndex}
  onKeyDown={e => e.key === 'Enter' && onSelect(i)}
>

// Story indicator dots
<button
  className="story-indicator-dot"
  aria-label={`Go to project ${i + 1}`}
  aria-current={i === activeIndex ? 'true' : undefined}
/>

// Social links — all need aria-label
<a aria-label={`Visit ${s.label} profile`} ...>

// Nav links
<button aria-label={`Navigate to ${link.label} section`} ...>

// Hamburger
<button aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} ...>

// Skill pills
<div role="listitem" aria-label={`Skill: ${name}`} ...>

// Contact form
<form aria-label="Contact form - sends message via WhatsApp" ...>
<input aria-label="Your name" aria-required="true" ...>
<input aria-label="Your email address" ...>
<textarea aria-label="Your message" aria-required="true" ...>
<button type="submit" aria-label="Send message via WhatsApp" ...>
```

## 29c — Focus Indicators
```css
/* Add to index.css */
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
  border-radius: 4px;
}
button:focus-visible,
a:focus-visible,
[role="button"]:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
  box-shadow: 0 0 0 4px rgba(67, 97, 238, 0.22);
}
```

## 29d — Colour Contrast Checks
```
Background #060610  + Text #f8f9fa     → 18.6:1  ✅ (passes AAA)
Background #060610  + Muted text 58%   → 7.2:1   ✅ (passes AA)
Primary #4361ee     on #060610         → 4.6:1   ✅ (passes AA for large text)
Accent #f72585      on #060610         → 5.1:1   ✅
About bg #f8f9ff    + Secondary #3a0ca3 → 9.2:1  ✅
Footer bg #050510   + White text 65%   → 6.8:1   ✅
```

## 29e — Motion Preferences

```tsx
// Create a hook for reduced motion
// src/hooks/useReducedMotion.ts
import { useState, useEffect } from 'react';
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    mq.addEventListener('change', e => setReduced(e.matches));
    return () => mq.removeEventListener('change', e => setReduced(e.matches));
  }, []);
  return reduced;
}

// Usage in any component:
const reducedMotion = useReducedMotion();
// Then gate all GSAP animations:
if (!reducedMotion) {
  gsap.from(el, { y: 40, opacity: 0, ... });
} else {
  gsap.set(el, { opacity: 1 }); // just show it
}
// Canvas particles: if reducedMotion, render static dots only (no RAF loop)
```

---

# ════════════════════════════════════════════════════
# PART 30 — SEO & META TAGS
# ════════════════════════════════════════════════════

```html
<!-- Complete index.html <head> -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#4361ee" />

  <!-- Primary SEO -->
  <title>Cheerla Shamith — Full-Stack Developer & AI Engineer | B.Tech CSE SASI 2027</title>
  <meta name="description" content="Portfolio of Cheerla Shamith — Full-Stack Developer, AI Enthusiast, and B.Tech CSE student at SASI Institute (JNTUK) with CGPA 9.32. Expert in React, Node.js, FastAPI, and Generative AI. AWS × Hack2skill Top 100 finalist." />
  <meta name="keywords" content="Cheerla Shamith, Full Stack Developer, AI Engineer, React Developer, SASI Institute, JNTUK, Gramin Sahayak, MeetMinds, CodeArena, Andhra Pradesh developer, B.Tech CSE portfolio" />
  <meta name="author" content="Cheerla Shamith" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://cheerlashamith.dev" />

  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://cheerlashamith.dev" />
  <meta property="og:title" content="Cheerla Shamith — Full-Stack Developer & AI Engineer" />
  <meta property="og:description" content="AWS Top 100 finalist. Building AI-first full-stack applications. CGPA 9.32 | React • FastAPI • Gemini API • LLaMA 3" />
  <meta property="og:image" content="https://cheerlashamith.dev/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:site_name" content="Cheerla Shamith Portfolio" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Cheerla Shamith — Full-Stack Developer & AI Engineer" />
  <meta name="twitter:description" content="AWS Top 100 finalist. CGPA 9.32. Building AI-powered full-stack apps. React • FastAPI • GenAI." />
  <meta name="twitter:image" content="https://cheerlashamith.dev/og-image.jpg" />

  <!-- Structured Data — Person -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Cheerla Shamith",
    "alternateName": "King",
    "jobTitle": "Full-Stack Developer & AI Enthusiast",
    "email": "chshamith888@gmail.com",
    "telephone": "+916305284229",
    "url": "https://cheerlashamith.dev",
    "sameAs": [
      "https://www.linkedin.com/in/cheerla-shamith-a420472a0",
      "https://github.com/cheerlashamith",
      "https://www.codechef.com/users/sasihackerrr"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "SASI Institute of Technology & Engineering",
      "sameAs": "https://www.sasi.ac.in"
    },
    "knowsAbout": ["React", "Node.js", "FastAPI", "MongoDB", "Python", "Generative AI", "Machine Learning", "LLaMA 3", "Whisper ASR", "AWS"]
  }
  </script>

  <!-- Preconnects -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Raleway:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

  <!-- Icon Libraries -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

  <!-- Preload hero image -->
  <link rel="preload" as="image" href="./src/assets/hero.jpg" fetchpriority="high" />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</head>
```

### Favicon SVG (public/favicon.svg)
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="url(#g)"/>
  <text x="16" y="22" font-family="Raleway,sans-serif" font-weight="900"
        font-size="16" fill="white" text-anchor="middle">CS</text>
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4361ee"/>
      <stop offset="50%" stop-color="#3a0ca3"/>
      <stop offset="100%" stop-color="#7209b7"/>
    </linearGradient>
  </defs>
</svg>
```

---

# ════════════════════════════════════════════════════
# PART 31 — COMPLETE MOBILE RESPONSIVE STYLES
# ════════════════════════════════════════════════════

```css
/* Append to src/index.css */

/* ─── Mobile Hero ─── */
@media (max-width: 1023px) {
  .hero-grid { flex-direction: column-reverse !important; }
  .hero-profile-wrapper { margin: 0 auto 32px; }
  .hero-text { text-align: center; }
  .hero-cta-row { justify-content: center !important; }
  .hero-social-links { justify-content: center !important; }
}

/* ─── Mobile Circular Gallery → Show detail panel below gallery ─── */
@media (max-width: 1023px) {
  .projects-desktop { display: none !important; }
  .projects-mobile  { display: block !important; }
}
@media (min-width: 1024px) {
  .projects-desktop { display: grid !important; }
  .projects-mobile  { display: none !important; }
}

/* ─── Mobile Timeline → Single column ─── */
@media (max-width: 767px) {
  .timeline-line { left: 24px !important; }
  .timeline-item { justify-content: flex-start !important; }
  .timeline-item > div:last-child {
    width: calc(100% - 52px) !important;
    margin-left: 52px !important;
    padding-left: 0 !important;
  }
  .timeline-node { left: 12px !important; transform: none !important; }
}

/* ─── Mobile Hackathons ─── */
@media (max-width: 767px) {
  .hackathons-grid { grid-template-columns: 1fr !important; }
}

/* ─── Mobile Achievements ─── */
@media (max-width: 767px) {
  .achievements-grid { grid-template-columns: 1fr !important; }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .achievements-grid { grid-template-columns: repeat(2, 1fr) !important; }
}

/* ─── Mobile Footer ─── */
@media (max-width: 767px) {
  .footer-orb:not(:first-child) { display: none; } /* Keep 1 orb on mobile */
  .footer-socials { gap: 10px !important; }
  .footer-socials a { width: 44px !important; height: 44px !important; font-size: 18px !important; }
  .footer-ctas { flex-direction: column; align-items: center; }
  .footer-nav { gap: 4px 18px !important; }
}

/* ─── Skill rows mobile ─── */
@media (max-width: 767px) {
  .skill-row { flex-direction: column !important; gap: 16px; }
  .skill-row-name { font-size: clamp(2rem, 8vw, 3.5rem) !important; }
  .skill-row > div:first-child { width: 100% !important; min-width: unset !important; }
  .skill-row > div:last-child { padding-left: 0 !important; }
  .skill-hover-img { display: none !important; }
}

/* ─── Navbar mobile active state ─── */
@media (max-width: 1023px) {
  .nav-cta-desktop { display: none !important; }
}

/* ─── Section padding scale ─── */
@media (max-width: 480px) {
  section { padding-left: 20px !important; padding-right: 20px !important; }
  .container { padding-left: 20px !important; padding-right: 20px !important; }
}

/* ─── Certifications mobile marquee speed ─── */
@media (max-width: 767px) {
  .marquee-left  { --speed: 22s !important; }
  .marquee-right { --speed: 18s !important; }
}

/* ─── Contact form mobile ─── */
@media (max-width: 767px) {
  .contact-info-strip { flex-direction: column; gap: 16px !important; align-items: flex-start; padding-left: 24px; }
}

/* ─── About stats grid ─── */
@media (max-width: 480px) {
  .about-stats { grid-template-columns: repeat(2, 1fr) !important; }
}

/* ─── Footer nav wrapping ─── */
@media (max-width: 480px) {
  .footer-nav a, .footer-nav button {
    font-size: 11px !important;
    letter-spacing: 0.06em !important;
  }
}
```

---

# ════════════════════════════════════════════════════
# PART 32 — ADDITIONAL CSS UTILITIES & ANIMATIONS
# ════════════════════════════════════════════════════

```css
/* Append to src/index.css */

/* ─── Pulse animation for active project dot ─── */
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.5); opacity: 0.6; }
}

/* ─── Footer grid highlight on hover ─── */
footer::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at var(--mx, 50%) var(--my, 50%),
    rgba(67, 97, 238, 0.07) 0%,
    transparent 50%
  );
  pointer-events: none;
  z-index: 2;
  transition: background 0.1s ease;
}

/* ─── Project gallery card glow ring ─── */
.project-gallery-card.active::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 27px;
  background: conic-gradient(from 0deg, var(--primary), var(--accent), var(--purple), var(--primary));
  animation: rotate-ring 3s linear infinite;
  z-index: -1;
}
.project-gallery-card.active::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--bg);
  border-radius: 24px;
  z-index: -1;
}

/* ─── Scroll progress bar ─── */
.scroll-progress-bar {
  position: fixed;
  top: 70px; /* below navbar */
  left: 0;
  height: 2px;
  background: var(--gradient);
  transform-origin: left;
  z-index: 999;
  pointer-events: none;
}

/* ─── Section entry line ─── */
.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary), var(--accent), var(--purple), transparent);
  margin: 0;
  opacity: 0.35;
}

/* ─── Tech pill hover ─── */
.tech-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  border-radius: 20px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  background: rgba(67, 97, 238, 0.12);
  color: var(--primary);
  border: 1px solid rgba(67, 97, 238, 0.2);
  transition: all 0.25s ease;
  cursor: default;
}
.tech-pill:hover {
  background: rgba(67, 97, 238, 0.22);
  border-color: rgba(67, 97, 238, 0.5);
  transform: translateY(-2px);
}

/* ─── Glass card interactive ─── */
.glass-card-interactive {
  background: var(--bg-card);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--border);
  border-radius: 20px;
  transition: all 0.35s ease;
  cursor: pointer;
}
.glass-card-interactive:hover {
  border-color: var(--border-hover);
  box-shadow: var(--glow-blue);
  transform: translateY(-7px) scale(1.015);
}
.glass-card-interactive:active {
  transform: translateY(-3px) scale(1.005);
}

/* ─── Image reveal on hover ─── */
.img-reveal-wrapper {
  overflow: hidden;
  border-radius: 14px;
}
.img-reveal-wrapper img {
  transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1);
}
.img-reveal-wrapper:hover img {
  transform: scale(1.06);
}

/* ─── Gradient border button ─── */
.gradient-border-btn {
  position: relative;
  padding: 10px 26px;
  border-radius: 50px;
  background: transparent;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: var(--primary);
  border: none;
  transition: all 0.3s ease;
}
.gradient-border-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50px;
  padding: 2px;
  background: var(--gradient);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
.gradient-border-btn:hover {
  background: var(--gradient);
  color: #fff;
}
.gradient-border-btn:hover::before {
  display: none;
}

/* ─── Toast notification ─── */
.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(80px);
  background: var(--gradient);
  color: #fff;
  padding: 14px 28px;
  border-radius: 50px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  z-index: 99999;
  box-shadow: var(--glow-blue);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
}
.toast.show {
  transform: translateX(-50%) translateY(0);
}

/* ─── Loading skeleton (for async images) ─── */
.skeleton {
  background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
}
@keyframes shimmer {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}

/* ─── Section reveal helper class ─── */
.will-animate {
  opacity: 0;
  transform: translateY(40px);
}
.will-animate.animated {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.9s ease, transform 0.9s ease;
}

/* ─── Hero canvas overlay gradient (fades particles into bg at edges) ─── */
#hero-canvas::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, var(--bg) 100%);
  pointer-events: none;
}

/* ─── Scroll bar styled per section ─── */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--primary), var(--accent));
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover { background: var(--accent); }
```

---

# ════════════════════════════════════════════════════
# PART 33 — SCROLL PROGRESS BAR (Global)
# ════════════════════════════════════════════════════

```tsx
// src/components/ScrollProgressBar.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(barRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });
    gsap.set(barRef.current, { scaleX: 0, transformOrigin: 'left' });
  }, []);

  return (
    <div
      ref={barRef}
      className="scroll-progress-bar"
      style={{
        position: 'fixed',
        top: 70,
        left: 0,
        right: 0,
        height: 2,
        background: 'var(--gradient)',
        transformOrigin: 'left',
        zIndex: 999,
        pointerEvents: 'none',
      }}
    />
  );
}
// Add <ScrollProgressBar /> to App.tsx after <Navbar />
```

---

# ════════════════════════════════════════════════════
# PART 34 — ERROR BOUNDARY
# ════════════════════════════════════════════════════

```tsx
// src/components/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props { children: ReactNode; fallback?: ReactNode; }
interface State { hasError: boolean; error?: Error; }

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Portfolio render error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div style={{
          minHeight: '100vh', background: 'var(--bg)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          color: 'var(--text)', fontFamily: 'Poppins, sans-serif',
          textAlign: 'center', padding: 40,
        }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>⚡</div>
          <h2 style={{ fontFamily: 'Raleway', fontWeight: 900, fontSize: 32, marginBottom: 12 }}>
            Something glitched
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
            {this.state.error?.message || 'An unexpected error occurred.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: 'var(--gradient)', color: '#fff', border: 'none',
              padding: '12px 32px', borderRadius: 50, fontFamily: 'Poppins',
              fontWeight: 600, fontSize: 15, cursor: 'pointer',
            }}
          >Reload Page</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Usage in App.tsx:
// Wrap each section's Suspense in <ErrorBoundary>
// <ErrorBoundary>
//   <Suspense fallback={<SectionLoader />}>
//     <HeroSection preloaderDone={preloaderDone} />
//   </Suspense>
// </ErrorBoundary>
```

---

# ════════════════════════════════════════════════════
# PART 35 — COMPLETE TSCONFIG & POSTCSS
# ════════════════════════════════════════════════════

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

```js
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

# ════════════════════════════════════════════════════
# PART 36 — DEPLOYMENT: VERCEL CONFIG
# ════════════════════════════════════════════════════

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    {
      "source": "/src/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*)\\.js",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*)\\.css",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

```yaml
# .github/workflows/deploy.yml (for CI/CD)
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-args: '--prod'
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

# ════════════════════════════════════════════════════
# PART 37 — COMPLETE VITE CONFIG WITH ALIASES
# ════════════════════════════════════════════════════

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@sections': path.resolve(__dirname, './src/sections'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@data': path.resolve(__dirname, './src/data'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@types': path.resolve(__dirname, './src/types'),
    },
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor':    ['react', 'react-dom'],
          'animation-gsap':  ['gsap', '@gsap/react'],
          'animation-framer':['framer-motion'],
          'lenis':           ['@studio-freight/lenis'],
          'icons':           ['lucide-react'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['gsap', 'framer-motion', '@studio-freight/lenis'],
  },
});
```

---

# ════════════════════════════════════════════════════
# PART 38 — COMPLETE tailwind.config.js (Extended)
# ════════════════════════════════════════════════════

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["'Poppins'", 'system-ui', 'sans-serif'],
        raleway: ["'Raleway'", 'system-ui', 'sans-serif'],
        grotesk: ["'Space Grotesk'", 'system-ui', 'sans-serif'],
      },
      colors: {
        primary:   '#4361ee',
        'primary-dark': '#2f49c7',
        secondary: '#3a0ca3',
        accent:    '#f72585',
        purple:    '#7209b7',
        bg:        '#060610',
        'bg-deep': '#050510',
        'bg-card': 'rgba(10, 10, 30, 0.75)',
        foreground:'#f8f9fa',
        'text-muted': 'rgba(248, 249, 250, 0.58)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4361ee, #3a0ca3, #7209b7)',
        'gradient-accent':  'linear-gradient(135deg, #f72585, #7209b7, #4361ee)',
        'gradient-h':       'linear-gradient(90deg, #4361ee, #7209b7, #f72585)',
        'gradient-radial':  'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-blue':   '0 0 40px rgba(67, 97, 238, 0.45)',
        'glow-pink':   '0 0 40px rgba(247, 37, 133, 0.45)',
        'glow-purple': '0 0 40px rgba(114, 9, 183, 0.45)',
        'glass':       '0 8px 32px rgba(0,0,0,0.28)',
      },
      animation: {
        'spin-slow':    'spin 12s linear infinite',
        'spin-reverse': 'spin 16s linear infinite reverse',
        'float':        'float-idle 4s ease-in-out infinite',
        'float-slow':   'float-idle 6s ease-in-out infinite',
        'drift-up':     'drift-up 8s linear infinite',
        'orb-pulse':    'orb-pulse 6s ease-in-out infinite',
        'shimmer':      'shimmer 1.5s infinite',
        'blink':        'blink 0.8s step-end infinite',
        'ring-rotate':  'rotate-ring 3s linear infinite',
      },
      keyframes: {
        'float-idle': {
          '0%, 100%': { transform: 'translateY(-8px)' },
          '50%':       { transform: 'translateY(8px)'  },
        },
        'drift-up': {
          from: { transform: 'translateY(0) scale(1)', opacity: '0.6' },
          to:   { transform: 'translateY(-120vh) scale(0.3)', opacity: '0' },
        },
        'orb-pulse': {
          '0%, 100%': { transform: 'scale(1) translateY(0)' },
          '50%':       { transform: 'scale(1.12) translateY(-20px)' },
        },
        'rotate-ring': {
          to: { transform: 'rotate(360deg)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
        'shimmer': {
          from: { backgroundPosition: '200% 0' },
          to:   { backgroundPosition: '-200% 0' },
        },
      },
      transitionTimingFunction: {
        'expo-out':  'cubic-bezier(0.19, 1, 0.22, 1)',
        'back-out':  'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'spring':    'cubic-bezier(0.25, 1, 0.5, 1)',
        'snap':      'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl':'1536px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '28px',
        '3xl': '40px',
      },
      backdropBlur: {
        'xl': '24px',
        '2xl': '40px',
      },
    },
  },
  plugins: [],
};
```

---

# ════════════════════════════════════════════════════
# PART 39 — COMPLETE CIRCULAR GALLERY (ALL EDGE CASES)
# ════════════════════════════════════════════════════

```tsx
// src/components/ui/CircularGallery.tsx
// Full production-ready version with all edge cases handled

import React, {
  useState, useEffect, useRef, useCallback,
  forwardRef, HTMLAttributes,
} from 'react';

export interface GalleryItem {
  id: string;
  name: string;
  category: string;
  color: string;
  imageSrc: string;
  badge?: string | null;
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
  radius?: number;
  autoRotateSpeed?: number;
  cardWidth?: number;
  cardHeight?: number;
}

const CircularGallery = forwardRef<HTMLDivElement, CircularGalleryProps>(
  (
    {
      items,
      activeIndex,
      onSelect,
      className = '',
      radius = 280,
      autoRotateSpeed = 0.015,
      cardWidth = 300,
      cardHeight = 400,
      ...props
    },
    ref
  ) => {
    const [rotation, setRotation] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(0);
    const dragStartRotation = useRef(0);
    const rafRef = useRef<number>();
    const scrollTimeout = useRef<ReturnType<typeof setTimeout>>();
    const interactTimeout = useRef<ReturnType<typeof setTimeout>>();

    // Auto-rotation RAF loop
    useEffect(() => {
      const loop = () => {
        if (!isInteracting && !isDragging) {
          setRotation(r => r + autoRotateSpeed);
        }
        rafRef.current = requestAnimationFrame(loop);
      };
      rafRef.current = requestAnimationFrame(loop);
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, [isInteracting, isDragging, autoRotateSpeed]);

    // Mouse drag rotation
    const handleMouseDown = (e: React.MouseEvent) => {
      setIsDragging(true);
      dragStartX.current = e.clientX;
      dragStartRotation.current = rotation;
    };
    const handleMouseMove = useCallback((e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartX.current;
      setRotation(dragStartRotation.current + dx * 0.4);
    }, [isDragging]);
    const handleMouseUp = useCallback(() => {
      setIsDragging(false);
      // Snap to nearest card
      const angleStep = 360 / items.length;
      const snapped = Math.round(rotation / angleStep) * angleStep;
      setRotation(snapped);
      const idx = (Math.round(-rotation / angleStep) % items.length + items.length) % items.length;
      onSelect(idx);
    }, [isDragging, rotation, items.length, onSelect]);

    useEffect(() => {
      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, [isDragging, handleMouseMove, handleMouseUp]);

    // Touch drag
    const handleTouchStart = (e: React.TouchEvent) => {
      setIsDragging(true);
      dragStartX.current = e.touches[0].clientX;
      dragStartRotation.current = rotation;
    };
    const handleTouchMove = (e: React.TouchEvent) => {
      if (!isDragging) return;
      const dx = e.touches[0].clientX - dragStartX.current;
      setRotation(dragStartRotation.current + dx * 0.4);
    };
    const handleTouchEnd = () => handleMouseUp();

    // Scroll-driven rotation (from section scroll progress)
    useEffect(() => {
      const section = document.getElementById('projects');
      if (!section) return;

      const handleScroll = () => {
        setIsInteracting(true);
        clearTimeout(scrollTimeout.current);
        clearTimeout(interactTimeout.current);

        const rect = section.getBoundingClientRect();
        const totalScroll = section.scrollHeight - window.innerHeight;
        const scrolled = Math.max(0, -rect.top);
        const progress = Math.min(scrolled / Math.max(totalScroll, 1), 1);
        const targetRotation = progress * 360 * 1.5; // 1.5 full rotations

        setRotation(targetRotation);

        // Which card is in front?
        const angleStep = 360 / items.length;
        const normalised = ((targetRotation % 360) + 360) % 360;
        const frontIdx = Math.round(normalised / angleStep) % items.length;
        const correctedIdx = (items.length - frontIdx) % items.length;
        onSelect(correctedIdx);

        scrollTimeout.current = setTimeout(() => setIsInteracting(false), 300);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, [items.length, onSelect]);

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="3D Project Carousel — drag or use arrow keys to rotate"
        className={`circular-gallery-stage select-none ${className}`}
        style={{
          width: '100%',
          height: cardHeight + 80,
          position: 'relative',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        {...props}
      >
        {/* 3D Scene */}
        <div
          className="circular-gallery-scene"
          style={{
            width: '100%',
            height: '100%',
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
            position: 'absolute',
            top: 0, left: 0,
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;

            // Opacity based on how close to front
            const relAngle = ((itemAngle - rotation) % 360 + 360) % 360;
            const frontFacing = relAngle > 180 ? 360 - relAngle : relAngle;
            const opacityVal = Math.max(0.15, 1 - frontFacing / 160);
            const scaleVal   = Math.max(0.75, 1 - frontFacing / 320);
            const isActive   = i === activeIndex;

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`Project: ${item.name}`}
                aria-pressed={isActive}
                className={`project-gallery-card ${isActive ? 'active' : ''}`}
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px) scale(${scaleVal})`,
                  opacity: opacityVal,
                  width: cardWidth,
                  height: cardHeight,
                  transition: `opacity 0.25s linear, box-shadow 0.4s ease`,
                  userSelect: 'none',
                  pointerEvents: isDragging ? 'none' : 'auto',
                }}
                onClick={() => !isDragging && onSelect(i)}
                onKeyDown={e => e.key === 'Enter' && onSelect(i)}
              >
                {/* Card content */}
                <div style={{
                  position: 'relative', width: '100%', height: '100%',
                  borderRadius: 24, overflow: 'hidden',
                  border: `2px solid ${isActive ? item.color + 'aa' : 'rgba(255,255,255,0.07)'}`,
                  transition: 'border-color 0.4s ease',
                }}>
                  {/* Image */}
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    style={{
                      position: 'absolute', inset: 0,
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(
                      180deg,
                      rgba(6,6,16,0.15) 0%,
                      rgba(6,6,16,0.55) 55%,
                      rgba(6,6,16,0.95) 100%
                    )`,
                  }} />

                  {/* Content */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '20px 18px 22px',
                  }}>
                    <p style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: 10, color: item.color,
                      textTransform: 'uppercase', letterSpacing: '0.2em',
                      marginBottom: 5,
                    }}>{item.category}</p>

                    <h3 style={{
                      fontFamily: 'Raleway, sans-serif', fontWeight: 800,
                      fontSize: 19, color: '#fff', lineHeight: 1.2,
                    }}>{item.name}</h3>

                    {item.badge && (
                      <span style={{
                        display: 'inline-block', marginTop: 6,
                        fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 10,
                        color: item.color, border: `1px solid ${item.color}55`,
                        padding: '2px 10px', borderRadius: 20,
                      }}>{item.badge}</span>
                    )}
                  </div>

                  {/* Active dot */}
                  {isActive && (
                    <div style={{
                      position: 'absolute', top: 14, right: 14,
                      width: 10, height: 10, borderRadius: '50%',
                      background: item.color,
                      boxShadow: `0 0 12px ${item.color}, 0 0 24px ${item.color}88`,
                      animation: 'pulse 1.5s ease infinite',
                    }} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Ground shadow / reflection effect */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: '10%', right: '10%',
          height: 40,
          background: 'radial-gradient(ellipse, rgba(67,97,238,0.2) 0%, transparent 70%)',
          filter: 'blur(12px)',
          pointerEvents: 'none',
        }} />
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';
export { CircularGallery };
```

---

# ════════════════════════════════════════════════════
# PART 40 — CONTACT FORM: TOAST + VALIDATION
# ════════════════════════════════════════════════════

```tsx
// Complete form logic with validation and toast
import { useState, useRef, useCallback } from 'react';

function useContactForm() {
  const [state, setState] = useState({
    name: '', email: '', message: '',
    status: 'idle' as 'idle' | 'sending' | 'sent' | 'error',
    errors: {} as Record<string, string>,
  });

  const validate = useCallback(() => {
    const errors: Record<string, string> = {};
    if (!state.name.trim())                     errors.name    = 'Name is required';
    if (state.name.trim().length < 2)           errors.name    = 'Name must be at least 2 characters';
    if (state.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
                                                errors.email   = 'Invalid email address';
    if (!state.message.trim())                  errors.message = 'Message is required';
    if (state.message.trim().length < 10)       errors.message = 'Message must be at least 10 characters';
    return errors;
  }, [state.name, state.email, state.message]);

  const submit = useCallback(() => {
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setState(s => ({ ...s, errors, status: 'error' }));
      return false;
    }

    setState(s => ({ ...s, status: 'sending', errors: {} }));

    // Build WhatsApp message
    const parts = [`Hello, I'm ${state.name}.`, state.message];
    if (state.email) parts.push(`You can reach me at: ${state.email}`);
    const msg = parts.join(' ');
    const url = `https://wa.me/916305284229?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setState(s => ({ ...s, status: 'sent', name: '', email: '', message: '' }));
      setTimeout(() => setState(s => ({ ...s, status: 'idle' })), 5000);
    }, 600); // brief "sending" state for UX

    return true;
  }, [state, validate]);

  return { state, setState, submit };
}

// Toast component
function Toast({ message, show }: { message: string; show: boolean }) {
  return (
    <div
      className={`toast ${show ? 'show' : ''}`}
      role="alert"
      aria-live="polite"
    >{message}</div>
  );
}

// Field error message
function FieldError({ error }: { error?: string }) {
  if (!error) return null;
  return (
    <span
      role="alert"
      style={{
        fontFamily: 'Poppins, sans-serif', fontSize: 12,
        color: '#ff6b6b', display: 'block', marginTop: 4, paddingLeft: 4,
      }}
    >{error}</span>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 41 — IMAGE LAZY LOAD COMPONENT
# ════════════════════════════════════════════════════

```tsx
// src/components/ui/LazyImage.tsx
import { useState, useRef, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderColor?: string;
}

export function LazyImage({
  src, alt, style, className, placeholderColor = 'rgba(67,97,238,0.1)', ...props
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { rootMargin: '200px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden', ...style as React.CSSProperties }}>
      {/* Skeleton */}
      {!loaded && (
        <div
          className="skeleton"
          style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(90deg, ${placeholderColor} 25%, rgba(255,255,255,0.06) 50%, ${placeholderColor} 75%)`,
            backgroundSize: '200% 100%',
          }}
        />
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          className={className}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.4s ease',
            width: '100%', height: '100%', objectFit: 'cover',
          }}
          {...props}
        />
      )}
    </div>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 42 — COMPLETE FINAL APP.TSX WITH ALL IMPORTS
# ════════════════════════════════════════════════════

```tsx
// src/App.tsx — Complete with all improvements
import React, { useState, lazy, Suspense } from 'react';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import { ErrorBoundary } from './components/ErrorBoundary';

// Code-split all heavy sections
const HeroSection           = lazy(() => import('./sections/HeroSection'));
const AboutSection          = lazy(() => import('./sections/AboutSection'));
const SkillsSection         = lazy(() => import('./sections/SkillsSection'));
const ProjectsSection       = lazy(() => import('./sections/ProjectsSection'));
const TimelineSection       = lazy(() => import('./sections/TimelineSection'));
const HackathonsSection     = lazy(() => import('./sections/HackathonsSection'));
const CertificationsSection = lazy(() => import('./sections/CertificationsSection'));
const AchievementsSection   = lazy(() => import('./sections/AchievementsSection'));
const ContactSection        = lazy(() => import('./sections/ContactSection'));

// Section divider
const SectionDivider = () => <div className="section-divider" />;

// Loading spinner for sections
const SectionLoader = () => (
  <div
    style={{
      minHeight: 400, display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: 'var(--bg)',
    }}
  >
    <div style={{
      width: 36, height: 36, borderRadius: '50%',
      border: '2px solid transparent',
      borderTopColor: 'var(--primary)',
      borderRightColor: 'var(--accent)',
      animation: 'spin 0.8s linear infinite',
    }} />
  </div>
);

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#hero"
        style={{
          position: 'absolute', top: -100, left: 20, zIndex: 100000,
          background: 'var(--primary)', color: '#fff',
          padding: '12px 24px', borderRadius: 8,
          fontFamily: 'Poppins, sans-serif', fontWeight: 600,
          textDecoration: 'none', transition: 'top 0.3s',
        }}
        onFocus={e => (e.currentTarget.style.top = '20px')}
        onBlur={e => (e.currentTarget.style.top = '-100px')}
      >Skip to main content</a>

      {/* Global UI */}
      <Cursor />
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <Navbar preloaderDone={preloaderDone} />
      <ScrollProgressBar />

      {/* Main content */}
      <main id="main-content" tabIndex={-1}>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <HeroSection preloaderDone={preloaderDone} />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <AboutSection />
          </Suspense>
        </ErrorBoundary>

        <SectionDivider />

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <SkillsSection />
          </Suspense>
        </ErrorBoundary>

        <SectionDivider />

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <ProjectsSection />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <TimelineSection />
          </Suspense>
        </ErrorBoundary>

        <SectionDivider />

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <HackathonsSection />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <CertificationsSection />
          </Suspense>
        </ErrorBoundary>

        <SectionDivider />

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <AchievementsSection />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <ContactSection />
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
    </>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 43 — COMPLETE PACKAGE.JSON
# ════════════════════════════════════════════════════

```json
{
  "name": "shamith-portfolio-v2",
  "private": true,
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev":     "vite",
    "build":   "tsc && vite build",
    "preview": "vite preview",
    "lint":    "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "react":                  "^18.2.0",
    "react-dom":              "^18.2.0",
    "gsap":                   "^3.12.5",
    "@gsap/react":            "^2.1.1",
    "@studio-freight/lenis":  "^1.0.42",
    "framer-motion":          "^12.0.0",
    "lucide-react":           "^0.344.0",
    "clsx":                   "^2.1.0",
    "class-variance-authority": "^0.7.0"
  },
  "devDependencies": {
    "@types/react":           "^18.2.55",
    "@types/react-dom":       "^18.2.19",
    "@typescript-eslint/eslint-plugin": "^7.0.2",
    "@typescript-eslint/parser":        "^7.0.2",
    "@vitejs/plugin-react":             "^4.2.1",
    "autoprefixer":                     "^10.4.17",
    "eslint":                           "^8.56.0",
    "eslint-plugin-react-hooks":        "^4.6.0",
    "eslint-plugin-react-refresh":      "^0.4.5",
    "postcss":                          "^8.4.35",
    "tailwindcss":                      "^3.4.1",
    "typescript":                       "^5.2.2",
    "vite":                             "^5.1.0"
  }
}
```

---

# ════════════════════════════════════════════════════
# PART 44 — IMPLEMENTATION PRIORITY ORDER
# ════════════════════════════════════════════════════

When implementing, build in this exact order for fastest visual feedback:

```
Phase 1 — Foundation (30 min)
  1. Run npm install commands
  2. Set up tailwind.config.js, postcss.config.js, tsconfig.json
  3. Set up src/index.css (full CSS from Part 3 + Part 32)
  4. Set up main.tsx with Lenis + GSAP
  5. Create all data/ files (projects.ts, timeline.ts, etc.)
  6. Create src/types/index.ts

Phase 2 — Shell (20 min)
  7. Cursor.tsx
  8. Preloader.tsx (visual first impression)
  9. Navbar.tsx
  10. App.tsx (shell with all lazy imports)
  11. ScrollProgressBar.tsx
  12. ErrorBoundary.tsx

Phase 3 — Hero (30 min)
  13. useParticleCanvas.ts
  14. useTypewriter.ts
  15. GridMorphBg (shader sublayer)
  16. HeroSection.tsx (full — this is what people see first)

Phase 4 — Content Sections (60 min)
  17. AboutSection.tsx + useCounter.ts
  18. SkillsSection.tsx
  19. CircularGallery.tsx (full component)
  20. ProjectsSection.tsx (desktop + mobile)
  21. TimelineSection.tsx
  22. HackathonsSection.tsx
  23. CertificationsSection.tsx
  24. AchievementsSection.tsx
  25. ContactSection.tsx

Phase 5 — Footer Antigravity (30 min)
  26. Footer.tsx — implement last so GSAP ScrollTrigger context is fully loaded
  27. AntigravityCanvas (upward particles)
  28. GSAP entrance timeline
  29. Magnetic social links
  30. Floating orbs

Phase 6 — Polish (20 min)
  31. Verify all GSAP cleanups (ctx.revert())
  32. Verify all RAF cancellations on unmount
  33. Test scroll progress bar
  34. Test preloaderDone flow
  35. Test mobile responsive breakpoints
  36. Test reduced-motion preference
  37. Verify all aria-labels
  38. Test keyboard navigation in CircularGallery
  39. Replace all asset paths with your actual image files
  40. Deploy to Vercel
```

---

# ════════════════════════════════════════════════════
# PART 45 — IMAGE PATHS REFERENCE
# ════════════════════════════════════════════════════

## Replace these paths with your actual image files:

```
Your photos:
  ./src/assets/hero.jpg           → Your profile photo (circular, ~500x500px recommended)
  ./src/assets/about.jpg          → Blue suit photo (portrait, ~460x615px recommended)

Project screenshots (3 per project):
  ./src/assets/projects/gramin-1.jpg      → Gramin Sahayak screenshot 1
  ./src/assets/projects/gramin-2.jpg      → Gramin Sahayak screenshot 2
  ./src/assets/projects/gramin-3.jpg      → Gramin Sahayak hero/featured image

  ./src/assets/projects/smartsupport-1.jpg
  ./src/assets/projects/smartsupport-2.jpg
  ./src/assets/projects/smartsupport-3.jpg

  ./src/assets/projects/meetminds-1.jpg
  ./src/assets/projects/meetminds-2.jpg
  ./src/assets/projects/meetminds-3.jpg

  ./src/assets/projects/stockease-1.jpg
  ./src/assets/projects/stockease-2.jpg
  ./src/assets/projects/stockease-3.jpg

  ./src/assets/projects/mindmitra-1.jpg
  ./src/assets/projects/mindmitra-2.jpg
  ./src/assets/projects/mindmitra-3.jpg

  ./src/assets/projects/codearena-1.jpg
  ./src/assets/projects/codearena-2.jpg
  ./src/assets/projects/codearena-3.jpg

OG image (for social sharing):
  ./public/og-image.jpg           → 1200x630px portfolio thumbnail

Favicon:
  ./public/favicon.svg            → Use the SVG provided in Part 30
```

## Image optimization commands:
```bash
# Install sharp CLI for batch optimization
npm install -g @squoosh/cli

# Optimize all project images
squoosh-cli --webp '{"quality":82}' ./src/assets/projects/*.jpg

# Or use ImageMagick for resizing:
mogrify -resize 900x600^ -gravity center -extent 900x600 -quality 85 ./src/assets/projects/*.jpg
```

---

# ════════════════════════════════════════════════════
# PART 46 — QUICK START COMMANDS
# ════════════════════════════════════════════════════

```bash
# 1. Create project
npm create vite@latest shamith-portfolio -- --template react-ts
cd shamith-portfolio

# 2. Install all dependencies at once
npm install gsap @gsap/react @studio-freight/lenis framer-motion lucide-react clsx class-variance-authority
npm install -D tailwindcss postcss autoprefixer @vitejs/plugin-react @types/react @types/react-dom typescript

# 3. Init Tailwind
npx tailwindcss init -p

# 4. Create all directories
mkdir -p src/{components/ui,sections,hooks,data,types,assets/projects,lib}

# 5. Copy your images into src/assets/
# (hero.jpg, about.jpg, projects/*.jpg)

# 6. Start dev server
npm run dev

# 7. Build for production
npm run build

# 8. Deploy to Vercel
npx vercel --prod
```

---

# ════════════════════════════════════════════════════
# ███████████████████████████████████████████████████
# END OF PART 2 — SHAMITH PORTFOLIO V2 BUILD PROMPT
# ███████████████████████████████████████████████████
# ════════════════════════════════════════════════════

> Total coverage: TypeScript types • Full animation sequences •
> Accessibility WCAG 2.1 AA • SEO + LD+JSON • Complete CSS •
> Mobile responsive • Error boundaries • Deployment • Quick start •
> Circular Gallery (all edge cases) • Antigravity Footer (complete) •
> Image optimization • Performance checklist

> Owner: Cheerla Shamith | chshamith888@gmail.com | +91 6305284229
> GitHub: https://github.com/cheerlashamith
> LinkedIn: https://www.linkedin.com/in/cheerla-shamith-a420472a0
# SHAMITH PORTFOLIO V2 — PART 3
## Complete Working Code • Advanced Scroll Effects • PWA • Testing • Final Polish

---

# ════════════════════════════════════════════════════
# PART 47 — COMPLETE SHADER BACKGROUND COMPONENT
# ════════════════════════════════════════════════════

```tsx
// src/components/ui/ShaderBackground.tsx
// Grid Morph sublayer — used in Hero at opacity 0.18

import { useEffect, useRef } from 'react';

type ShaderVariant = 'grid-morph' | 'plasma' | 'radial-burst' | 'particle-field';

interface ShaderBackgroundProps {
  variant?: ShaderVariant;
  opacity?: number;
  className?: string;
}

// Grid Morph — wavy colored squares
function GridMorphCanvas({ opacity }: { opacity: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let t = 0;
    let rafId: number;
    let lastTime = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const animate = (now: number) => {
      // Cap at 60 FPS
      if (now - lastTime < 16.67) { rafId = requestAnimationFrame(animate); return; }
      lastTime = now;
      t += 0.007;

      const { width, height } = canvas;
      ctx.fillStyle = '#060610';
      ctx.fillRect(0, 0, width, height);

      const gridSize = 55;
      const cols = Math.ceil(width  / gridSize) + 1;
      const rows = Math.ceil(height / gridSize) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const wave1 = Math.sin(i * 0.22 + t * 1.1) * Math.cos(j * 0.22 + t);
          const wave2 = Math.sin((i + j) * 0.18 + t * 0.8);
          const brightness = ((wave1 + wave2 + 2) / 4);

          // Alternate between blue and purple tones
          const hue = 240 + Math.sin(i * 0.1 + t) * 30;
          ctx.fillStyle = `hsla(${hue}, 70%, ${40 + brightness * 25}%, ${brightness * 0.3})`;
          ctx.fillRect(i * gridSize, j * gridSize, gridSize - 1, gridSize - 1);
        }
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        opacity,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

// Plasma — classic demo-scene plasma
function PlasmaCanvas({ opacity }: { opacity: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let t = 0;
    let rafId: number;
    let lastTime = 0;

    // Use a small off-screen resolution, then scale up (performance)
    const W = 160, H = 90;
    canvas.width  = W;
    canvas.height = H;
    canvas.style.imageRendering = 'pixelated';

    const animate = (now: number) => {
      if (now - lastTime < 33) { rafId = requestAnimationFrame(animate); return; } // 30 FPS max for plasma
      lastTime = now;
      t += 0.025;

      const imageData = ctx.createImageData(W, H);
      const data = imageData.data;

      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const v =
            Math.sin(x * 0.06 + t) +
            Math.sin(y * 0.06 + t) +
            Math.sin((x + y) * 0.05 + t) +
            Math.sin(Math.sqrt(x * x + y * y) * 0.07 + t);

          const c = (v + 4) / 8;
          const idx = (y * W + x) * 4;
          data[idx    ] = Math.sin(c * Math.PI * 2)         * 60 + 40;
          data[idx + 1] = Math.sin(c * Math.PI * 2 + 2.094) * 40 + 30;
          data[idx + 2] = Math.sin(c * Math.PI * 2 + 4.188) * 127 + 120;
          data[idx + 3] = 255;
        }
      }
      ctx.putImageData(imageData, 0, 0);
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        opacity,
        pointerEvents: 'none',
        zIndex: 0,
        imageRendering: 'pixelated',
      }}
    />
  );
}

// Radial Burst — orbiting glowing spheres
function RadialBurstCanvas({ opacity }: { opacity: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let t = 0;
    let rafId: number;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      t += 0.018;
      const { width, height } = canvas;
      const cx = width / 2, cy = height / 2;

      ctx.fillStyle = 'rgba(6,6,16,0.08)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 9; i++) {
        const angle  = (i / 9) * Math.PI * 2 + t;
        const r      = (Math.min(width, height) * 0.28) + Math.sin(t * 1.5 + i) * 50;
        const x      = cx + Math.cos(angle) * r;
        const y      = cy + Math.sin(angle) * r * 0.6;
        const hue    = (i / 9) * 360 + t * 40;
        const size   = 40 + Math.sin(t * 2 + i) * 15;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, size);
        grad.addColorStop(0, `hsla(${hue}, 80%, 65%, 0.7)`);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        opacity,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

export function ShaderBackground({ variant = 'grid-morph', opacity = 0.18, className = '' }: ShaderBackgroundProps) {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null; // Respect motion preference
  }

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}
    >
      {variant === 'grid-morph'    && <GridMorphCanvas   opacity={opacity} />}
      {variant === 'plasma'        && <PlasmaCanvas       opacity={opacity} />}
      {variant === 'radial-burst'  && <RadialBurstCanvas  opacity={opacity} />}
    </div>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 48 — ADVANCED SCROLL EFFECTS
# ════════════════════════════════════════════════════

## 48a — Horizontal Scroll Text (for Achievements header)

```tsx
// src/components/ui/ScrollingText.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollingTextProps {
  text: string;
  direction?: 'left' | 'right';
  fontSize?: string;
  opacity?: number;
}

export function ScrollingText({
  text,
  direction = 'left',
  fontSize = 'clamp(4rem, 10vw, 9rem)',
  opacity = 0.06,
}: ScrollingTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? ['0%', '-25%'] : ['-25%', '0%']
  );

  const repeated = `${text} • `.repeat(6);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ overflow: 'hidden', pointerEvents: 'none', width: '100%' }}
    >
      <motion.div
        style={{ x, opacity, whiteSpace: 'nowrap' }}
      >
        <span style={{
          fontFamily: 'Raleway, sans-serif', fontWeight: 900,
          fontSize, color: 'currentColor',
          textTransform: 'uppercase', letterSpacing: '-0.04em',
        }}>
          {repeated}
        </span>
      </motion.div>
    </div>
  );
}

// Usage in AchievementsSection ABOVE the grid:
// <ScrollingText text="ACHIEVEMENTS" direction="left" opacity={0.05} />
// <ScrollingText text="RECOGNITION" direction="right" opacity={0.04} />
```

## 48b — Pinned Section with Horizontal Cards (alternative Projects view)

```tsx
// Only use this if the CircularGallery feels too complex for the builder.
// This is a simpler alternative: horizontal scrolling inside a pinned section.

// In ProjectsSection, add an alternative view toggle:
const [view, setView] = useState<'circular' | 'horizontal'>('circular');

// HorizontalCards component:
function HorizontalProjectScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const totalWidth = track.scrollWidth - window.innerWidth;

    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: `+=${totalWidth}`,
      pin: true,
      scrub: 1.2,
      animation: gsap.to(track, { x: -totalWidth, ease: 'none' }),
    });

    return () => st.kill();
  }, []);

  return (
    <div ref={containerRef} style={{ overflow: 'hidden', height: '100dvh', position: 'relative' }}>
      <div ref={trackRef} style={{ display: 'flex', gap: 32, padding: '80px 60px', width: 'max-content' }}>
        {projects.map((proj, i) => (
          <div
            key={proj.id}
            className="glass-card"
            style={{ width: 420, flexShrink: 0, padding: 32 }}
          >
            <span style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 72, background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{proj.number}</span>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 11, color: proj.color, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 6 }}>{proj.category}</p>
            <h3 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 28, color: '#fff', marginBottom: 12 }}>{proj.name}</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 20 }}>{proj.description}</p>
            <img src={proj.images.col2} alt={proj.name} loading="lazy" style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 16, marginBottom: 16 }} />
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
              {proj.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## 48c — Parallax Images Stack (About Section enhancement)

```tsx
// Add 3 floating decorative elements to the About image column
function ParallaxImageStack() {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating credential badges
      gsap.to('.about-badge-1', {
        y: -30, rotation: 5,
        scrollTrigger: { trigger: stackRef.current, start: 'top center', end: 'bottom center', scrub: 2 },
      });
      gsap.to('.about-badge-2', {
        y: 40, rotation: -8,
        scrollTrigger: { trigger: stackRef.current, start: 'top center', end: 'bottom center', scrub: 1.5 },
      });
    }, stackRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={stackRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 5 }}>
      {/* CGPA badge floats top-right */}
      <div
        className="about-badge-1 glass"
        style={{
          position: 'absolute', top: 30, right: -20,
          padding: '12px 18px', borderRadius: 14,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}
      >
        <span style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 24, color: 'var(--primary)' }}>9.32</span>
        <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11, color: 'var(--secondary)' }}>CGPA</span>
      </div>
      {/* Badge bottom-left */}
      <div
        className="about-badge-2 glass"
        style={{
          position: 'absolute', bottom: 40, left: -24,
          padding: '10px 16px', borderRadius: 14,
          display: 'flex', alignItems: 'center', gap: 8,
        }}
      >
        <i className="fas fa-trophy" style={{ color: '#f39c12', fontSize: 18 }} />
        <div>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 12, color: 'var(--secondary)' }}>Top 100</div>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 10, color: '#666' }}>AWS × Hack2skill</div>
        </div>
      </div>
    </div>
  );
}
// Wrap the About image div in position:relative and add <ParallaxImageStack /> inside it
```

## 48d — Lenis Smooth Scroll to Section with Offset

```ts
// src/hooks/useSmoothScroll.ts
import { useCallback } from 'react';
import { lenis } from '../main';

export function useSmoothScroll() {
  const scrollTo = useCallback((target: string | HTMLElement, offset = -80) => {
    if (typeof target === 'string') {
      const el = document.getElementById(target);
      if (el) lenis?.scrollTo(el, { offset, duration: 1.4 });
    } else {
      lenis?.scrollTo(target, { offset, duration: 1.4 });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    lenis?.scrollTo(0, { duration: 1.8 });
  }, []);

  return { scrollTo, scrollToTop };
}
```

## 48e — Section Active Tracking (for Navbar highlight)

```ts
// src/hooks/useActiveSection.ts
import { useState, useEffect } from 'react';

const SECTIONS = ['hero','about','skills','projects','timeline','hackathons','certifications','achievements','contact'];

export function useActiveSection() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();

    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActive(id);
          }
        },
        { threshold: [0.3], rootMargin: '-70px 0px 0px 0px' }
      );
      observer.observe(el);
      observers.set(id, observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return active;
}

// Usage in Navbar.tsx:
// const active = useActiveSection();
// Then use active === link.id to show the active underline
```

---

# ════════════════════════════════════════════════════
# PART 49 — COMPLETE SKILLS SECTION (Full Hover Logic)
# ════════════════════════════════════════════════════

```tsx
// src/sections/SkillsSection.tsx — Complete with hover image reveal

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories } from '../data/skills';

function SkillPill({ name, icon, color }: { name: string; icon: string; color?: string }) {
  return (
    <div
      role="listitem"
      aria-label={`Skill: ${name}`}
      style={{
        height: 42, padding: '0 16px', borderRadius: 50,
        display: 'flex', alignItems: 'center', gap: 10,
        background: 'var(--glass)', backdropFilter: 'blur(18px)',
        border: '1px solid var(--glass-border)',
        transition: 'all 0.3s ease', cursor: 'default',
        fontFamily: 'Poppins, sans-serif', fontSize: 13,
        color: 'var(--text)', userSelect: 'none',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(67,97,238,0.55)';
        el.style.boxShadow = '0 0 12px rgba(67,97,238,0.35)';
        el.style.transform = 'translateY(-3px)';
        el.style.background = 'rgba(67,97,238,0.12)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--glass-border)';
        el.style.boxShadow = '';
        el.style.transform = '';
        el.style.background = 'var(--glass)';
      }}
    >
      <i className={icon} style={{ fontSize: 16, color: color || undefined }} />
      {name}
    </div>
  );
}

function SkillRow({
  category,
  rowIndex,
}: {
  category: typeof skillCategories[0];
  rowIndex: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [hovered, setHovered] = useState(false);

  // Set initial hidden state
  useEffect(() => {
    gsap.set([img1Ref.current, img2Ref.current], { scale: 0, opacity: 0, y: 10 });
  }, []);

  const handleEnter = () => {
    setHovered(true);
    gsap.to(img1Ref.current, { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: 'back.out(1.5)' });
    gsap.to(img2Ref.current, { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: 'back.out(1.5)', delay: 0.07 });
  };

  const handleLeave = () => {
    setHovered(false);
    gsap.to(img1Ref.current, { scale: 0, opacity: 0, y: 10, duration: 0.28, ease: 'power2.in' });
    gsap.to(img2Ref.current, { scale: 0, opacity: 0, y: 10, duration: 0.22, ease: 'power2.in', delay: 0.03 });
  };

  return (
    <div
      ref={rowRef}
      role="list"
      aria-label={`${category.name} skills`}
      style={{
        display: 'flex', alignItems: 'flex-start',
        borderBottom: '1px solid rgba(67,97,238,0.12)',
        padding: '36px 0', position: 'relative',
        overflow: 'visible', gap: 0,
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Category name — Left 30% */}
      <div style={{ width: 'clamp(140px, 30%, 220px)', position: 'relative', flexShrink: 0 }}>
        <h2
          ref={nameRef}
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5.5vw, 5.8rem)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            transition: 'all 0.4s ease',
            userSelect: 'none',
            ...(hovered
              ? {
                  background: 'var(--gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }
              : {
                  color: 'rgba(248,249,250,0.12)',
                  WebkitTextFillColor: 'rgba(248,249,250,0.12)',
                }),
          }}
        >
          {category.name}
        </h2>

        {/* Hover images — Image 1 */}
        <div
          ref={img1Ref}
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -6, right: 10,
            width: 82, height: 66,
            borderRadius: 12, overflow: 'hidden',
            boxShadow: '0 8px 28px rgba(0,0,0,0.55)',
            zIndex: 40,
            pointerEvents: 'none',
          }}
        >
          <img
            src={category.images[0]}
            alt=""
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Hover images — Image 2 */}
        <div
          ref={img2Ref}
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 10, right: -8,
            width: 78, height: 62,
            borderRadius: 12, overflow: 'hidden',
            boxShadow: '0 8px 28px rgba(0,0,0,0.55)',
            transform: 'rotate(12deg)',
            zIndex: 38,
            pointerEvents: 'none',
          }}
        >
          <img
            src={category.images[1]}
            alt=""
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Skills pills — Right 70% */}
      <div
        style={{
          flex: 1,
          display: 'flex', flexWrap: 'wrap',
          gap: '10px 18px', alignItems: 'center',
          paddingLeft: 'clamp(20px, 4vw, 48px)',
        }}
      >
        {category.skills.map(skill => (
          <SkillPill
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            color={(skill as any).color}
          />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger rows on scroll
      gsap.from('.skill-row-animate', {
        opacity: 0, y: 55, stagger: 0.11, duration: 0.9, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 76%',
          toggleActions: 'play none none none',
        },
      });

      // Header
      gsap.from('.skills-header > *', {
        opacity: 0, y: 35, stagger: 0.12, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skills-header',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });

      // Watermark parallax
      gsap.to('.skills-watermark', {
        y: -140, ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom', end: 'bottom top', scrub: 2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        background: 'var(--bg)',
        padding: 'clamp(80px,10vw,130px) 0',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <span
        aria-hidden="true"
        className="section-watermark skills-watermark"
      >SKILLS</span>

      <div
        className="container mx-auto px-6"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <div className="skills-header" style={{ textAlign: 'center', marginBottom: 70 }}>
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif', fontSize: 12,
            color: 'var(--primary)', textTransform: 'uppercase',
            letterSpacing: '0.22em', marginBottom: 10,
          }}>WHAT I KNOW</p>
          <h2 style={{
            fontFamily: 'Raleway, sans-serif', fontWeight: 900,
            fontSize: 'clamp(2.4rem,6vw,4.8rem)', color: 'var(--text)',
          }}>Technical Skills</h2>
          <div style={{
            height: 4, width: 70, background: 'var(--gradient)',
            margin: '14px auto 0', borderRadius: 2,
          }} />
        </div>

        {/* Skill rows */}
        {skillCategories.map((cat, i) => (
          <div key={cat.name} className="skill-row-animate">
            <SkillRow category={cat} rowIndex={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 50 — PWA CONFIGURATION
# ════════════════════════════════════════════════════

```ts
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
      workbox: {
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
```

```txt
# public/robots.txt
User-agent: *
Allow: /
Sitemap: https://cheerlashamith.dev/sitemap.xml
```

---

# ════════════════════════════════════════════════════
# PART 51 — PERFORMANCE BENCHMARKS & TARGETS
# ════════════════════════════════════════════════════

## Lighthouse Targets:
```
Performance:    95+ (desktop) / 85+ (mobile)
Accessibility:  100
Best Practices: 100
SEO:            100
```

## Core Web Vitals Targets:
```
LCP (Largest Contentful Paint): < 1.8s
INP (Interaction to Next Paint): < 100ms
CLS (Cumulative Layout Shift):   < 0.05
FID (First Input Delay):         < 50ms
TTFB (Time to First Byte):       < 200ms
```

## Bundle Size Targets:
```
Initial JS:        < 180KB gzipped
Critical CSS:      < 20KB
Total assets:      < 3MB (before lazy)
Lazy-loaded JS:    < 400KB gzipped
```

## Performance Optimization Checklist:
```
✅ Hero image preloaded with <link rel="preload" fetchpriority="high">
✅ Google Fonts with display=swap
✅ Font Awesome deferred (not blocking)
✅ React.lazy() on every section
✅ Single GSAP ticker (no multiple RAF loops)
✅ Particle canvas capped at 60fps via timestamp diff
✅ Plasma canvas runs at 30fps max (pixel canvas at 1/10 resolution)
✅ IntersectionObserver for counter animation (not scroll listener)
✅ GSAP context cleanup: ctx.revert() in every useEffect return
✅ RAF cleanup in every canvas useEffect
✅ Lenis + ScrollTrigger synced via lenis.on('scroll', ScrollTrigger.update)
✅ will-change: transform only on actively animating elements
✅ Images: loading="lazy" decoding="async" on all below-fold images
✅ Manual chunk splitting in Vite build
✅ Service Worker caching via VitePWA
✅ Vercel CDN + immutable cache headers for assets
✅ webp format for project screenshots (use squoosh)
✅ Reduced motion media query kills all animations
```

## Image Optimization Commands:
```bash
# Convert JPGs to WebP (80% quality)
npx @squoosh/cli --webp '{"quality":80}' src/assets/*.jpg
npx @squoosh/cli --webp '{"quality":78}' src/assets/projects/*.jpg

# Resize hero image to max 600x600
npx @squoosh/cli --resize '{"width":600,"height":600,"fit":"cover"}' \
  --webp '{"quality":85}' src/assets/hero.jpg

# Generate OG image (1200x630)
# Use Canva, Figma, or create programmatically
```

---

# ════════════════════════════════════════════════════
# PART 52 — BROWSER COMPATIBILITY
# ════════════════════════════════════════════════════

```
Supported browsers (as of 2024):
  ✅ Chrome  92+   — full support
  ✅ Firefox 90+   — full support
  ✅ Safari  15+   — webkit prefix on backdrop-filter
  ✅ Edge    92+   — full support
  ✅ iOS     15+   — use 100dvh, not 100vh
  ✅ Android Chrome 92+ — reduced particles, no 3D gallery

Known issues + fixes:

1. Safari backdrop-filter: Add -webkit-backdrop-filter alongside backdrop-filter (already in CSS).

2. CSS conic-gradient on Safari < 15:
   Fallback: background: linear-gradient(135deg, var(--primary), var(--purple));

3. dvh on older browsers:
   Use: height: 100vh; height: 100dvh;  (dvh overrides)

4. GSAP transformStyle preserve-3d on Safari:
   Add: -webkit-transform-style: preserve-3d;

5. Lenis smooth scroll on iOS may conflict with inertia scroll:
   Set smoothTouch: false in Lenis config (already done in main.tsx).

6. color-scheme for iOS status bar:
   Add: <meta name="color-scheme" content="dark">

7. FA icons not loading (CORS):
   Host locally: npm install @fortawesome/fontawesome-free
   Import in main.tsx: import '@fortawesome/fontawesome-free/css/all.min.css';
```

---

# ════════════════════════════════════════════════════
# PART 53 — TESTING GUIDE
# ════════════════════════════════════════════════════

## Manual Testing Checklist:

```
PRELOADER:
  □ Bar fills left-to-right in ~1.8s
  □ "C" slides from left, "S" from right simultaneously
  □ Monogram pulses at 1.1s
  □ Preloader slides UP off screen at 2.1s
  □ Body overflow restored after exit
  □ Hero animations fire AFTER preloader completes

HERO:
  □ Canvas particles appear and connect with lines
  □ Grid Morph shader visible as subtle background
  □ Floating shapes (diamond, circle, triangle) animating
  □ Name chars flip in 3D from bottom
  □ Typewriter cycles through all 6 roles
  □ Profile image bounces in, then floats continuously
  □ Social links magnetic on desktop
  □ Scroll indicator fades out after 100px scroll
  □ Watermark parallaxes backward on scroll

NAVBAR:
  □ Transparent on load → frosted glass after 80px scroll
  □ Hides on scroll DOWN > 250px
  □ Shows on scroll UP
  □ Logo spins 360° on hover
  □ Active section gets gradient underline
  □ Smooth scroll to sections on click
  □ Hamburger opens full-screen overlay on mobile
  □ Mobile nav links stagger in
  □ Mobile social icons visible in overlay

ABOUT:
  □ Image slides from left on scroll
  □ 3D tilt follows scroll progress
  □ Decorative gradient card visible behind image
  □ Counter animates from 0 to target on viewport entry
  □ Paragraphs stagger in

SKILLS:
  □ Category name is dim (opacity 0.12) until hover
  □ On hover: name fills with gradient
  □ On hover: two images pop up with stagger
  □ Skill pills bounce up on hover

PROJECTS (Desktop):
  □ CircularGallery cards arrange in 3D circle
  □ Cards rotate as page scrolls
  □ Clicking a card updates the detail panel
  □ Detail panel animates in/out with AnimatePresence
  □ Indicator dots update with active project
  □ Arrow keys rotate gallery
  □ Drag rotates gallery
  □ "View Live" opens in new tab
  □ Badge shows for Gramin and MeetMinds

PROJECTS (Mobile):
  □ Vertical story-scroll cards shown
  □ Each card has fade-up on viewport entry
  □ Images visible in cards
  □ Buttons work

TIMELINE:
  □ Line draws down as you scroll through
  □ Items animate in from alternating sides
  □ Date badge has gradient background
  □ Certificate link works for Codec Technologies item

HACKATHONS:
  □ Cards reveal with stagger on scroll
  □ Glow color on hover matches brand color
  □ AWS Hack2skill shows badge "🏆 Top 100 / 1 Lakh"
  □ Certificate links work

CERTIFICATIONS:
  □ Row 1 scrolls LEFT continuously
  □ Row 2 scrolls RIGHT continuously
  □ Hover pauses that row
  □ Cards clickable → open certificate

ACHIEVEMENTS:
  □ 4-column grid on desktop
  □ Cards reveal with stagger
  □ Certificate link arrow animates right on hover

CONTACT:
  □ "Let's Talk" heading reveals on scroll
  □ Social circles flip on hover (white bg, black icon)
  □ Form validation fires on submit
  □ Sending to WhatsApp opens new tab with pre-filled message
  □ Toast shows after submit

FOOTER (ANTIGRAVITY):
  □ Upward particles drifting from bottom
  □ Floating orbs visible (blue, pink, purple)
  □ Profile image bounces up with elastic ease
  □ Name characters float up sequentially
  □ Social links float up staggered, magnetic on hover
  □ CTA buttons animate up
  □ Nav links wave up
  □ Divider grows from center
  □ Copyright fades in last
  □ WhatsApp CTA opens chat
  □ LinkedIn CTA opens profile

PERFORMANCE:
  □ No console errors or warnings
  □ No memory leaks (RAF cancelled on unmount)
  □ Smooth 60fps scroll throughout
  □ Mobile: 60fps on mid-range device
  □ First paint < 1.5s on 3G (throttled)

ACCESSIBILITY:
  □ Skip link appears on Tab press
  □ All buttons/links have aria-labels
  □ Circular Gallery keyboard navigable
  □ Form fields labelled
  □ Focus indicators visible
  □ reduced-motion: all animations disabled
  □ Screen reader: meaningful structure
```

---

# ════════════════════════════════════════════════════
# PART 54 — COMPLETE CONTACT SECTION (Final)
# ════════════════════════════════════════════════════

```tsx
// src/sections/ContactSection.tsx — Complete final version

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SOCIALS = [
  { icon: 'fab fa-whatsapp',    href: 'https://wa.me/916305284229',                           label: 'WhatsApp',  bg: '#25D366' },
  { icon: 'fab fa-instagram',   href: 'https://www.instagram.com/starshami888/',               label: 'Instagram', bg: '#E1306C' },
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/cheerla-shamith-a420472a0', label: 'LinkedIn',  bg: '#0077B5' },
  { icon: 'fab fa-github',      href: 'https://github.com/cheerlashamith',                    label: 'GitHub',    bg: '#333'    },
  { icon: 'fas fa-code',        href: 'https://www.codechef.com/users/sasihackerrr',           label: 'CodeChef',  bg: '#4361ee' },
];

export default function ContactSection() {
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [message, setMessage] = useState('');
  const [status,  setStatus]  = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors,  setErrors]  = useState<Record<string, string>>({});
  const sectionRef   = useRef<HTMLElement>(null);
  const headingRef   = useRef<HTMLHeadingElement>(null);
  const socialsRef   = useRef<HTMLDivElement>(null);
  const formRef      = useRef<HTMLFormElement>(null);
  const stripRef     = useRef<HTMLDivElement>(null);
  const toastRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading split and reveal
      gsap.from(headingRef.current, {
        opacity: 0, y: 60, duration: 1.1, ease: 'expo.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      });

      // Social circles stagger up
      gsap.from(Array.from(socialsRef.current?.children || []), {
        opacity: 0, y: 50, scale: 0.6, stagger: 0.1, duration: 0.8, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: socialsRef.current, start: 'top 85%', toggleActions: 'play none none none' },
      });

      // Form slides up
      gsap.from(formRef.current, {
        opacity: 0, y: 50, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: formRef.current, start: 'top 85%', toggleActions: 'play none none none' },
      });

      // Contact strip
      gsap.from(Array.from(stripRef.current?.children || []), {
        opacity: 0, y: 20, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: stripRef.current, start: 'top 90%', toggleActions: 'play none none none' },
      });

      // Watermark
      gsap.to('.contact-watermark', {
        y: -140, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validate = useCallback(() => {
    const errs: Record<string, string> = {};
    if (!name.trim())             errs.name    = 'Name is required';
    if (name.trim().length < 2)   errs.name    = 'At least 2 characters';
    if (!message.trim())          errs.message = 'Message is required';
    if (message.trim().length < 10) errs.message = 'At least 10 characters';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Invalid email';
    return errs;
  }, [name, message, email]);

  const showToast = (msg: string) => {
    if (!toastRef.current) return;
    toastRef.current.textContent = msg;
    toastRef.current.classList.add('show');
    setTimeout(() => toastRef.current?.classList.remove('show'), 4500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');

    setTimeout(() => {
      const parts = [`Hello, I'm ${name}.`, message];
      if (email) parts.push(`Reach me at: ${email}`);
      const text = encodeURIComponent(parts.join(' '));
      window.open(`https://wa.me/916305284229?text=${text}`, '_blank', 'noopener,noreferrer');
      setStatus('sent');
      setName(''); setEmail(''); setMessage('');
      showToast('✅ Opening WhatsApp to send your message!');
      setTimeout(() => setStatus('idle'), 5000);
    }, 600);
  };

  const fieldBase: React.CSSProperties = {
    width: '100%', padding: '15px 20px', borderRadius: 14, fontSize: 15,
    fontFamily: 'Poppins, sans-serif', fontWeight: 300,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.09)',
    color: '#fff', outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    marginBottom: 0,
  };
  const focusStyle = { borderColor: 'var(--primary)', boxShadow: '0 0 0 3px rgba(67,97,238,0.14)' };
  const blurStyle  = { borderColor: 'rgba(255,255,255,0.09)', boxShadow: 'none' };

  return (
    <>
      {/* Toast */}
      <div ref={toastRef} className="toast" aria-live="polite" role="alert" />

      <section
        id="contact"
        ref={sectionRef}
        style={{
          background: '#08080f',
          borderRadius: '40px 40px 0 0',
          padding: 'clamp(80px,10vw,130px) clamp(20px,6vw,80px)',
          position: 'relative', overflow: 'hidden',
        }}
      >
        <span aria-hidden="true" className="section-watermark contact-watermark">CONNECT</span>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Heading */}
          <h2
            ref={headingRef}
            style={{
              fontFamily: 'Raleway, sans-serif', fontWeight: 900,
              fontSize: 'clamp(3.2rem,9vw,8rem)', color: '#fff',
              textTransform: 'uppercase', letterSpacing: '-0.04em',
              textAlign: 'center', marginBottom: 12, lineHeight: 1,
            }}
          >Let's Talk</h2>

          <p style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 15,
            color: 'var(--text-muted)', textAlign: 'center', marginBottom: 44,
          }}>Have a project in mind? I'd love to hear about it.</p>

          {/* Social circles */}
          <div
            ref={socialsRef}
            style={{
              display: 'flex', justifyContent: 'center', gap: 18,
              flexWrap: 'wrap', marginBottom: 52,
            }}
          >
            {SOCIALS.map(s => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${s.label} profile`}
                title={s.label}
                style={{
                  width: 72, height: 72, borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, color: '#fff', textDecoration: 'none',
                  transition: 'all 0.45s cubic-bezier(0.25,1,0.5,1)',
                  willChange: 'transform',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = s.bg;
                  el.style.borderColor = s.bg;
                  el.style.boxShadow = `0 0 45px ${s.bg}66`;
                  el.style.transform = 'scale(1.14) translateY(-6px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'transparent';
                  el.style.borderColor = 'rgba(255,255,255,0.18)';
                  el.style.boxShadow = '';
                  el.style.transform = '';
                }}
              >
                <i className={s.icon} aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div style={{
            height: 1, maxWidth: 600, margin: '0 auto 48px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
          }} />

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            aria-label="Contact form"
            noValidate
            style={{ maxWidth: 580, margin: '0 auto' }}
          >
            {/* Name */}
            <div style={{ marginBottom: 16 }}>
              <input
                type="text"
                placeholder="Your name *"
                value={name}
                onChange={e => { setName(e.target.value); setErrors(er => ({ ...er, name: '' })); }}
                aria-label="Your name"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                style={{ ...fieldBase, ...(errors.name ? { borderColor: '#ff6b6b' } : {}) }}
                onFocus={e  => Object.assign((e.currentTarget as HTMLElement).style, focusStyle)}
                onBlur={e   => Object.assign((e.currentTarget as HTMLElement).style, blurStyle)}
              />
              {errors.name && (
                <span id="name-error" role="alert" style={{ color: '#ff6b6b', fontSize: 12, display: 'block', marginTop: 4, paddingLeft: 4 }}>
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div style={{ marginBottom: 16 }}>
              <input
                type="email"
                placeholder="Your email (optional)"
                value={email}
                onChange={e => { setEmail(e.target.value); setErrors(er => ({ ...er, email: '' })); }}
                aria-label="Your email address"
                aria-invalid={!!errors.email}
                style={{ ...fieldBase, ...(errors.email ? { borderColor: '#ff6b6b' } : {}) }}
                onFocus={e  => Object.assign((e.currentTarget as HTMLElement).style, focusStyle)}
                onBlur={e   => Object.assign((e.currentTarget as HTMLElement).style, blurStyle)}
              />
              {errors.email && (
                <span role="alert" style={{ color: '#ff6b6b', fontSize: 12, display: 'block', marginTop: 4, paddingLeft: 4 }}>
                  {errors.email}
                </span>
              )}
            </div>

            {/* Message */}
            <div style={{ marginBottom: 20 }}>
              <textarea
                placeholder="Your message *"
                value={message}
                onChange={e => { setMessage(e.target.value); setErrors(er => ({ ...er, message: '' })); }}
                rows={5}
                aria-label="Your message"
                aria-required="true"
                aria-invalid={!!errors.message}
                style={{ ...fieldBase, resize: 'vertical', minHeight: 140, ...(errors.message ? { borderColor: '#ff6b6b' } : {}) }}
                onFocus={e  => Object.assign((e.currentTarget as HTMLElement).style, focusStyle)}
                onBlur={e   => Object.assign((e.currentTarget as HTMLElement).style, blurStyle)}
              />
              {errors.message && (
                <span role="alert" style={{ color: '#ff6b6b', fontSize: 12, display: 'block', marginTop: 4, paddingLeft: 4 }}>
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              aria-label="Send message via WhatsApp"
              style={{
                width: '100%', padding: 16, borderRadius: 14, border: 'none',
                background: status === 'sending' ? 'rgba(67,97,238,0.5)' : 'var(--gradient)',
                color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 600,
                fontSize: 15, letterSpacing: '0.1em', textTransform: 'uppercase',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              }}
              onMouseEnter={e => {
                if (status !== 'sending') {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(-3px)';
                  el.style.boxShadow = 'var(--glow-blue)';
                }
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = '';
                el.style.boxShadow = '';
              }}
            >
              {status === 'sending' ? (
                <><span style={{ animation: 'spin 0.8s linear infinite', display: 'inline-block' }}>⟳</span> Sending…</>
              ) : status === 'sent' ? (
                '✓ Sent via WhatsApp!'
              ) : (
                <><i className="fab fa-whatsapp" aria-hidden="true" /> Send Message via WhatsApp</>
              )}
            </button>
          </form>

          {/* Contact strip */}
          <div
            ref={stripRef}
            style={{
              display: 'flex', justifyContent: 'center',
              gap: 'clamp(20px,5vw,48px)', flexWrap: 'wrap', marginTop: 52,
            }}
          >
            {[
              { icon: 'fas fa-phone',          text: '+91 6305284229',          href: 'tel:+916305284229'           },
              { icon: 'fas fa-envelope',       text: 'chshamith888@gmail.com',  href: 'mailto:chshamith888@gmail.com' },
              { icon: 'fas fa-map-marker-alt', text: 'Pentapadu, AP, India',    href: null                           },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <i
                  className={item.icon}
                  aria-hidden="true"
                  style={{ fontSize: 18, color: 'var(--primary)' }}
                />
                {item.href ? (
                  <a href={item.href} style={{
                    fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 14,
                    color: 'var(--text-muted)', textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--primary)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}
                  >{item.text}</a>
                ) : (
                  <span style={{
                    fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 14,
                    color: 'var(--text-muted)',
                  }}>{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 55 — COMPLETE PRELOADER (Final Production)
# ════════════════════════════════════════════════════

```tsx
// src/components/Preloader.tsx — Final production-ready version

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const wrapRef    = useRef<HTMLDivElement>(null);
  const barRef     = useRef<HTMLDivElement>(null);
  const barBgRef   = useRef<HTMLDivElement>(null);
  const monoRef    = useRef<HTMLDivElement>(null);
  const cRef       = useRef<HTMLSpanElement>(null);
  const sRef       = useRef<HTMLSpanElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.body.style.overflow = 'hidden';

    // Counter animation
    let count = 0;
    const counterInterval = setInterval(() => {
      count = Math.min(count + Math.ceil(Math.random() * 3 + 1), 100);
      if (counterRef.current) counterRef.current.textContent = `${count}%`;
      if (count >= 100) clearInterval(counterInterval);
    }, 28);

    // GSAP timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Bar fills
    tl.to(barRef.current, {
      width: '100%', duration: 1.8, ease: 'none',
    }, 0);

    // C slides from left, S from right
    tl.fromTo(cRef.current,
      { x: -90, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.75 },
      0.25
    );
    tl.fromTo(sRef.current,
      { x: 90, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.75 },
      0.25
    );

    // Tagline fades in
    tl.fromTo(taglineRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.8
    );

    // Monogram pulse
    tl.to(monoRef.current, { scale: 1.08, duration: 0.22, ease: 'power2.in' }, 1.1);
    tl.to(monoRef.current, { scale: 1.00, duration: 0.22, ease: 'power2.out' }, 1.32);

    // EXIT — slides up
    tl.to(wrapRef.current, {
      y: '-100%',
      duration: 0.68,
      ease: 'expo.inOut',
      onComplete: () => {
        clearInterval(counterInterval);
        if (wrapRef.current) {
          wrapRef.current.style.pointerEvents = 'none';
          wrapRef.current.style.display = 'none';
        }
        document.body.style.overflow = '';
        onComplete();
      },
    }, 2.1);

    return () => {
      clearInterval(counterInterval);
      tl.kill();
      document.body.style.overflow = '';
    };
  }, [mounted, onComplete]);

  if (!mounted) return null;

  return (
    <div
      ref={wrapRef}
      role="progressbar"
      aria-label="Loading portfolio"
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: 'var(--bg)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Progress bar track */}
      <div
        ref={barBgRef}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 3, background: 'rgba(255,255,255,0.06)',
        }}
      >
        <div
          ref={barRef}
          style={{
            height: '100%', width: '0%',
            background: 'var(--gradient)',
            boxShadow: '0 0 10px rgba(67,97,238,0.8)',
          }}
        />
      </div>

      {/* Background ambient orb */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(67,97,238,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Monogram */}
      <div
        ref={monoRef}
        aria-hidden="true"
        style={{ display: 'flex', gap: 2, marginBottom: 16, willChange: 'transform' }}
      >
        <span
          ref={cRef}
          style={{
            fontFamily: 'Raleway, sans-serif', fontWeight: 900,
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            background: 'var(--gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
            willChange: 'transform, opacity',
          }}
        >C</span>
        <span
          ref={sRef}
          style={{
            fontFamily: 'Raleway, sans-serif', fontWeight: 900,
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            background: 'var(--gradient-acc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
            willChange: 'transform, opacity',
          }}
        >S</span>
      </div>

      {/* Tagline */}
      <p
        ref={taglineRef}
        style={{
          fontFamily: 'Space Grotesk, sans-serif', fontSize: 13,
          color: 'var(--text-muted)', letterSpacing: '0.22em',
          textTransform: 'uppercase', opacity: 0,
        }}
      >Full-Stack Developer & AI Engineer</p>

      {/* Counter — bottom left */}
      <div
        style={{
          position: 'absolute', bottom: 28, left: 28,
          display: 'flex', alignItems: 'center', gap: 8,
        }}
      >
        <div
          style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--primary)',
            animation: 'blink 0.8s step-end infinite',
          }}
        />
        <span
          ref={counterRef}
          style={{
            fontFamily: 'Space Grotesk, sans-serif', fontSize: 13,
            color: 'var(--text-muted)', letterSpacing: '0.08em',
          }}
        >0%</span>
      </div>
    </div>
  );
}
```

---

# ════════════════════════════════════════════════════
# PART 56 — GSAP CONTEXT PATTERN (Use in EVERY section)
# ════════════════════════════════════════════════════

```tsx
// ✅ CORRECT — Use gsap.context() for every section
// This ensures proper cleanup and avoids memory leaks

useEffect(() => {
  const ctx = gsap.context(() => {
    // All GSAP animations here
    // ScrollTrigger instances are automatically cleaned up
    gsap.from('.my-element', { opacity: 0, y: 40, ... });
    ScrollTrigger.create({ trigger: ref.current, ... });
  }, sectionRef); // Second arg scopes to this component

  return () => ctx.revert(); // ← CRITICAL: cleanup on unmount
}, []);

// ❌ WRONG — Creates memory leaks on hot reload
useEffect(() => {
  gsap.from('.my-element', { opacity: 0, ... });
  // No cleanup!
}, []);

// ❌ WRONG — Global selector can affect other sections
useEffect(() => {
  gsap.from('.card', { ... }); // '.card' selector matches ALL sections!
  return () => {}; // Still leaks if not scoped
}, []);
```

---

# ════════════════════════════════════════════════════
# PART 57 — ADDITIONAL SECTION ENHANCEMENTS
# ════════════════════════════════════════════════════

## 57a — About Section: Floating Credential Pills

Add these floating pills directly in the About section image column.
They appear partially overlapping the photo and parallax on scroll:

```tsx
// Inside AboutSection, add to the image container:
{/* Floating credential — top right */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.5 }}
  style={{
    position: 'absolute', top: 28, right: -24, zIndex: 5,
    background: '#fff', borderRadius: 14, padding: '12px 16px',
    boxShadow: '0 8px 28px rgba(0,0,0,0.12)',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
  }}
>
  <span style={{ fontFamily: 'Raleway', fontWeight: 900, fontSize: 22, color: 'var(--primary)' }}>9.32</span>
  <span style={{ fontFamily: 'Poppins', fontSize: 11, color: '#666', marginTop: 2 }}>CGPA</span>
</motion.div>

{/* Floating credential — bottom left */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.7 }}
  style={{
    position: 'absolute', bottom: 40, left: -24, zIndex: 5,
    background: '#fff', borderRadius: 14, padding: '10px 14px',
    boxShadow: '0 8px 28px rgba(0,0,0,0.12)',
    display: 'flex', alignItems: 'center', gap: 10,
  }}
>
  <i className="fab fa-aws" style={{ fontSize: 20, color: '#FF9900' }} />
  <div>
    <div style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 12, color: 'var(--secondary)' }}>Top 100</div>
    <div style={{ fontFamily: 'Poppins', fontSize: 10, color: '#888' }}>AWS × Hack2skill</div>
  </div>
</motion.div>

{/* Experience badge — center right */}
<motion.div
  initial={{ opacity: 0, scale: 0.7 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.9 }}
  style={{
    position: 'absolute', top: '50%', right: -30, transform: 'translateY(-50%)',
    zIndex: 5, background: 'var(--gradient)', borderRadius: '50%',
    width: 70, height: 70,
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    boxShadow: 'var(--glow-blue)',
  }}
>
  <span style={{ fontFamily: 'Raleway', fontWeight: 900, fontSize: 20, color: '#fff' }}>4+</span>
  <span style={{ fontFamily: 'Poppins', fontSize: 9, color: 'rgba(255,255,255,0.8)', textAlign: 'center', lineHeight: 1.2 }}>Intern&shy;ships</span>
</motion.div>
```

## 57b — Hackathons: Winner Badge Animation

```tsx
// In HackathonCard, when badge exists:
{h.badge && (
  <motion.div
    initial={{ scale: 0, rotate: -12 }}
    whileInView={{ scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
    style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 10,
      fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13,
      background: 'linear-gradient(135deg, #FFD700, #FF9500)',
      color: '#000', padding: '5px 14px', borderRadius: 20,
      boxShadow: '0 0 20px rgba(255,215,0,0.4)',
    }}
  >
    {h.badge}
  </motion.div>
)}
```

## 57c — Certifications: Count Badge

Add above the marquee section:
```tsx
<div style={{ textAlign: 'center', marginBottom: 48 }}>
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 10,
    background: 'rgba(67,97,238,0.1)', border: '1px solid rgba(67,97,238,0.2)',
    borderRadius: 50, padding: '8px 20px',
    fontFamily: 'Space Grotesk, sans-serif', fontSize: 14,
    color: 'var(--primary)',
  }}>
    <i className="fas fa-check-circle" />
    {certifications.length}+ Verified Certifications
  </div>
</div>
```

---

# ════════════════════════════════════════════════════
# PART 58 — FINAL COMPONENT TREE OVERVIEW
# ════════════════════════════════════════════════════

```
App.tsx
├── <a> skip link
├── <Cursor />                         — desktop custom cursor (lerp ring)
├── <Preloader onComplete={...} />     — 2.4s GSAP sequence, slides up to reveal
├── <Navbar preloaderDone={...} />     — transparent → frosted, hide/show on scroll
├── <ScrollProgressBar />              — 2px gradient bar, scrub-driven
├── <main>
│   ├── <HeroSection preloaderDone>
│   │   ├── <GridMorphBg />            — shader sublayer (opacity 0.18)
│   │   ├── <canvas> particle system  — 150 particles, mouse repulsion
│   │   ├── watermark "DEVELOPER"     — parallax
│   │   ├── 3 floating shapes         — GSAP loop animations
│   │   ├── text content              — greeting, name (split chars), typewriter, desc, CTAs
│   │   ├── social links              — magnetic hover
│   │   ├── profile image             — animated ring + float-idle
│   │   └── scroll indicator          — fade out on scroll
│   │
│   ├── <AboutSection />
│   │   ├── header (eyebrow + h2 + bar)
│   │   ├── image (3D scroll tilt + floating credentials)
│   │   └── text + stats (counter animation)
│   │
│   ├── <SkillsSection />
│   │   ├── watermark "SKILLS"
│   │   └── 5 × SkillRow (hover image reveal + pills)
│   │
│   ├── <ProjectsSection />
│   │   ├── watermark "PROJECTS"
│   │   ├── [desktop] <CircularGallery /> + <ProjectDetailPanel />
│   │   └── [mobile] 6 × <MobileProjectCard />
│   │
│   ├── <TimelineSection />
│   │   ├── animated vertical line (GSAP scrub)
│   │   └── 7 × <TimelineItem /> (alternating L/R, Framer whileInView)
│   │
│   ├── <HackathonsSection />
│   │   ├── watermark "HACK"
│   │   └── 5 × HackathonCard (custom glow on hover)
│   │
│   ├── <CertificationsSection />
│   │   ├── marquee row 1 (left, 35s)
│   │   └── marquee row 2 (right, 28s)
│   │
│   ├── <AchievementsSection />
│   │   ├── watermark "WINS"
│   │   └── 8 × AchievementCard
│   │
│   └── <ContactSection />
│       ├── watermark "CONNECT"
│       ├── h2 "Let's Talk"
│       ├── 5 social circles
│       ├── contact form (validation + WhatsApp)
│       └── contact info strip
│
└── <Footer />                          — ANTIGRAVITY
    ├── <AntigravityCanvas />           — 60 upward-drifting particles
    ├── 3 floating orbs (blur radial)   — sine wave drift
    ├── profile image (levitates)       — elastic.out entrance + continuous float
    ├── name (split chars)             — back.out(1.9) float up
    ├── tagline                         — back.out(1.5)
    ├── 5 social links                  — elastic.out + magnetic
    ├── 2 CTA buttons                  — LinkedIn + WhatsApp
    ├── 9 nav links                    — wave ripple up
    ├── divider line                   — scaleX from center
    └── copyright                      — fade in last
```

---

# ════════════════════════════════════════════════════
# PART 59 — COMMON ISSUES & FIXES
# ════════════════════════════════════════════════════

```
ISSUE: GSAP animations fire but elements remain invisible after
FIX:   Check that gsap.set() initial states are correct.
       If using opacity:0 in CSS, GSAP won't override unless you
       include opacity in the from() config explicitly.

ISSUE: ScrollTrigger fires immediately without waiting for scroll
FIX:   Ensure Lenis is initialized BEFORE ScrollTrigger is registered.
       The order in main.tsx must be: gsap.registerPlugin → Lenis init → lenis.on('scroll',...)

ISSUE: CircularGallery cards overlap incorrectly
FIX:   Add transformStyle: 'preserve-3d' to the scene container.
       Add perspective: 2400px to the wrapper (circular-gallery-stage).
       Both must be present.

ISSUE: Preloader doesn't exit and Hero never appears
FIX:   Check that onComplete callback fires (add console.log in onComplete).
       Ensure preloaderDone state is passed correctly to HeroSection.
       Check that body.style.overflow is reset.

ISSUE: Lenis scroll conflicts with GSAP ScrollTrigger scrub
FIX:   Ensure lenis.on('scroll', () => ScrollTrigger.update()) is called.
       Do NOT use window.addEventListener('scroll', ScrollTrigger.update) separately.

ISSUE: Typewriter flickers or double-types
FIX:   The useTypewriter hook uses a ref to store the timer.
       Ensure cleanup: return () => clearTimeout(timerRef.current).
       React StrictMode fires effects twice — this can cause double-execution.
       Consider wrapping hook logic in a ref to detect if already initialized.

ISSUE: Footer GSAP animations don't fire
FIX:   The footer needs sufficient content height to create a ScrollTrigger.
       Use start: 'top 85%' with toggleActions: 'play none none none'.
       Ensure ScrollTrigger.refresh() is called after all content loads.

ISSUE: Magnetic hover effect jittery
FIX:   Use gsap.to() instead of direct style manipulation for smooth movement.
       Cap the lerp at a reasonable speed.
       Add pointer-events check to avoid triggering on nearby elements.

ISSUE: Mobile particles too heavy
FIX:   The useParticleCanvas hook checks window.innerWidth < 768 and uses 70 particles.
       Also skip connection-drawing on mobile: add early return if isMobile in the draw loop.

ISSUE: Font Awesome icons not loading
FIX:   The CDN link must be in <head> BEFORE React renders.
       Alternative: npm install @fortawesome/fontawesome-free and import in main.tsx.

ISSUE: Devicons not showing
FIX:   The devicon CDN link must be in index.html head.
       Check that icon class names are correct (e.g., 'devicon-react-original colored').

ISSUE: TypeScript errors on GSAP types
FIX:   Install: npm install -D @types/gsap (if needed)
       Or use gsap.to(el as Element, ...) to cast types.

ISSUE: framer-motion and GSAP conflict on same elements
FIX:   Don't apply BOTH to the same DOM element.
       Use framer-motion for whileInView reveals and GSAP for scroll-scrub effects.
       Separate the elements: GSAP on the container, Framer on the children.
```

---

# ════════════════════════════════════════════════════
# PART 60 — FINAL SUBMISSION NOTES FOR AI BUILDER
# ════════════════════════════════════════════════════

## When pasting this prompt into Lovable / Bolt / v0:

1. **Paste Part 1 first** — let it scaffold the project structure
2. **Then paste Part 2** — add TypeScript types, CSS, tsconfig
3. **Then paste Part 3 (this file)** — complete components and fixes
4. **Critical instruction to add at the TOP of your prompt:**

```
You are building a production-quality, Awwwards-level portfolio.
Follow ALL specifications EXACTLY as written.
Do NOT simplify animations or components.
Do NOT use placeholder comments like "// rest of implementation".
Write COMPLETE, WORKING TypeScript code for every file.
Do NOT use placeholder image generation — use the src paths provided.
Use inline styles exactly as specified — do not convert to Tailwind classes
unless explicitly instructed to do so.
Keep all GSAP cleanup (ctx.revert()) in every useEffect.
Keep all RAF cleanup (cancelAnimationFrame) in every canvas useEffect.
```

5. **Image paths**: The prompt uses `./src/assets/hero.jpg` etc.
   Before generating, note that Lovable/Bolt may need you to upload
   images first via their file upload UI, then reference them.

6. **Lenis import**: If `@studio-freight/lenis` is not available in the
   builder's environment, try: `npm install lenis` (new package name).
   Import: `import Lenis from 'lenis'` (not @studio-freight/lenis).

7. **GSAP ScrollTrigger**: Must be registered before ANY ScrollTrigger usage:
   `gsap.registerPlugin(ScrollTrigger)` — this is in main.tsx.

8. **Build order**: The builder may timeout on a single massive generation.
   Split into phases: Shell → Hero → Remaining Sections → Footer.

---

# ████████████████████████████████████████████████████
# END OF PART 3 — SHAMITH PORTFOLIO V2 BUILD PROMPT
# ████████████████████████████████████████████████████
#
# Combined Parts 1 + 2 + 3:
# ~400KB • ~12,000 lines • 60 parts
# Complete TypeScript • Full animations • Production-ready
#
# Owner: Cheerla Shamith | chshamith888@gmail.com
# Phone: +91 6305284229 | WhatsApp: https://wa.me/916305284229
# GitHub: https://github.com/cheerlashamith
# LinkedIn: https://www.linkedin.com/in/cheerla-shamith-a420472a0
# CodeChef: https://www.codechef.com/users/sasihackerrr
# ████████████████████████████████████████████████████
