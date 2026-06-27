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
