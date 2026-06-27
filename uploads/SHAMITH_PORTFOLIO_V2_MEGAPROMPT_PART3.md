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
