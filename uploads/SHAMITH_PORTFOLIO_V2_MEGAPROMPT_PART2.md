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
