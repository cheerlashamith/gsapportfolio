// src/sections/ProjectsSection.tsx
import React, { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';

// ── Storytelling Scroll — Desktop ──────────────────────────────────────────────
import { useInView } from 'framer-motion';

function StorytellingDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isInView = useInView(containerRef, { margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Each project scene is pinned for scroll-through
      projects.forEach((_, i) => {
        const scene = `.project-scene-${i}`;

        // Animate elements within the scene as it scrolls into view
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
            onEnter: () => setActiveIndex(i),
            onEnterBack: () => setActiveIndex(i),
          },
        });

        // Add animations - Adjusted durations for a buttery storytelling feel
        tl.fromTo(`${scene} .story-number`, { opacity: 0, y: 80, scale: 0.7 }, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }, 0)
          .fromTo(`${scene} .story-category`, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }, 0.2)
          .fromTo(`${scene} .story-name`, { opacity: 0, y: 40, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }, 0.3)
          .fromTo(`${scene} .story-image`, { clipPath: 'inset(50% 50% 50% 50%)', opacity: 0 }, { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1.0, ease: 'power4.out' }, 0.4)
          .fromTo(`${scene} .story-desc`, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 0.6)
          .fromTo(`${scene} .story-tech-tag`, { opacity: 0, y: 15, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, stagger: 0.05, duration: 0.5, ease: 'back.out(1.7)' }, 0.7)
          .fromTo(`${scene} .story-cta`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }, 0.9);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {projects.map((project, i) => (
        <div
          key={project.id}
          className={`project-scene-${i}`}
          style={{
            minHeight: '100vh',
            padding: '100px 0',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'var(--bg)',
          }}
        >
          {/* Background glow */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
            background: `radial-gradient(ellipse at 70% 50%, ${project.color}08 0%, transparent 70%)`,
          }} />

          <div className="container mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,5vw,80px)', alignItems: 'center' }}>

              {/* Text content */}
              <div style={{ paddingRight: i % 2 === 0 ? 20 : 0, paddingLeft: i % 2 !== 0 ? 20 : 0, order: i % 2 === 0 ? 1 : 2 }}>
                {/* Number */}
                <span className="story-number" style={{
                  fontFamily: "'Libre Baskerville', serif", fontWeight: 900,
                  fontSize: 'clamp(3.5rem, 6vw, 6rem)', lineHeight: 0.9,
                  background: 'var(--gradient)', WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  display: 'block', marginBottom: 8, opacity: 0,
                }}>{project.number}</span>

                {/* Category */}
                <span className="story-category" style={{
                  fontFamily: 'Space Grotesk, sans-serif', fontSize: 13,
                  textTransform: 'uppercase', letterSpacing: '0.22em',
                  color: project.color, display: 'block', marginBottom: 6, opacity: 0,
                }}>{project.category}</span>

                {/* Badge */}
                {project.badge && (
                  <div style={{
                    display: 'inline-block', marginBottom: 10,
                    fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 12,
                    background: `${project.color}20`, color: project.color,
                    padding: '5px 16px', borderRadius: 20,
                    border: `1px solid ${project.color}40`,
                  }}>{project.badge}</div>
                )}

                {/* Name */}
                <h2 className="story-name" style={{
                  fontFamily: "'Libre Baskerville', serif", fontWeight: 900,
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', color: '#1a1a2e',
                  lineHeight: 1.08, marginBottom: 20, opacity: 0,
                }}>{project.name}</h2>

                {/* Description */}
                <p className="story-desc" style={{
                  fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 15,
                  color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 24,
                  maxWidth: 520, opacity: 0,
                }}>{project.description}</p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {project.tech.map(t => (
                    <span key={t} className="story-tech-tag" style={{
                      fontFamily: 'Space Grotesk, sans-serif', fontSize: 12,
                      background: 'rgba(82,39,199,0.08)', color: '#5227c7',
                      padding: '5px 16px', borderRadius: 20,
                      border: '1px solid rgba(82,39,199,0.15)', opacity: 0,
                    }}>{t}</span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  {project.liveUrl && project.liveUrl !== '#' ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="story-cta"
                      style={{
                        fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14,
                        color: '#fff', background: 'linear-gradient(135deg, #5227c7, #7c3aed)',
                        padding: '12px 30px', borderRadius: 50, textDecoration: 'none',
                        transition: 'transform 0.3s, box-shadow 0.3s', opacity: 0,
                      }}
                      onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 12px 30px rgba(82,39,199,0.3)'; }}
                      onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = ''; }}
                    >View Live →</a>
                  ) : project.badge?.includes('Progress') ? (
                    <span className="story-cta" style={{
                      fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14,
                      color: '#f39c12', border: '2px solid #f39c12',
                      padding: '12px 28px', borderRadius: 50, opacity: 0,
                    }}>🔧 In Progress</span>
                  ) : null}
                  {project.codeUrl && project.codeUrl !== '#' && (
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
                      className="story-cta"
                      style={{
                        fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14,
                        color: '#ff6d34', border: '2px solid #ff6d34',
                        padding: '12px 28px', borderRadius: 50, textDecoration: 'none',
                        transition: 'all 0.3s', opacity: 0,
                      }}
                      onMouseEnter={e => { const el = e.currentTarget; el.style.background = '#ff6d34'; el.style.color = '#fff'; }}
                      onMouseLeave={e => { const el = e.currentTarget; el.style.background = ''; el.style.color = '#ff6d34'; }}
                    >GitHub ↗</a>
                  )}
                </div>
              </div>

              {/* Image */}
              <div style={{ position: 'relative', order: i % 2 === 0 ? 2 : 1 }}>
                <div className="story-image" style={{
                  borderRadius: 20, overflow: 'hidden',
                  boxShadow: `0 30px 80px ${project.color}25, 0 0 0 1px rgba(255,255,255,0.06)`,
                  opacity: 0, clipPath: 'inset(50% 50% 50% 50%)',
                }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy" decoding="async"
                    style={{
                      width: '100%', aspectRatio: '16/10',
                      objectFit: 'cover', display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.25,1,0.5,1)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = '')}
                  />
                </div>
                {/* Floating accent decoration */}
                <div style={{
                  position: 'absolute', top: -20, right: i % 2 === 0 ? -20 : 'auto', left: i % 2 !== 0 ? -20 : 'auto',
                  width: 120, height: 120, borderRadius: '50%',
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}20`,
                  pointerEvents: 'none', zIndex: -1,
                }} />
                <div style={{
                  position: 'absolute', bottom: -30, left: i % 2 === 0 ? -30 : 'auto', right: i % 2 !== 0 ? -30 : 'auto',
                  width: 80, height: 80,
                  border: `2px solid ${project.color}30`,
                  transform: 'rotate(45deg)',
                  pointerEvents: 'none', zIndex: -1,
                }} />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Side progress indicator */}
      <div style={{
        position: 'fixed', right: 28, top: '50%', transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', gap: 12, zIndex: 100,
        opacity: isInView ? 1 : 0,
        pointerEvents: isInView ? 'auto' : 'none',
        transition: 'opacity 0.4s ease',
      }}>
        {projects.map((p, i) => (
          <div
            key={p.id}
            style={{
              width: i === activeIndex ? 12 : 8,
              height: i === activeIndex ? 12 : 8,
              borderRadius: '50%',
              background: i === activeIndex ? p.color : 'rgba(255,255,255,0.2)',
              boxShadow: i === activeIndex ? `0 0 14px ${p.color}` : 'none',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
            }}
            title={p.name}
          />
        ))}
      </div>
    </div>
  );
}

// ── Mobile: Story Scroll Cards ─────────────────────────────────────────────────
function MobileProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass-card"
      style={{ padding: 'clamp(20px,3vw,32px)', marginBottom: 24, overflow: 'hidden' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <span style={{
          fontFamily: "'Libre Baskerville', serif", fontWeight: 900, fontSize: 48,
          background: 'var(--gradient)', WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1,
        }}>{project.number}</span>
        {project.badge && <span style={{
          fontFamily: 'Poppins, sans-serif', fontSize: 11, fontWeight: 600,
          color: project.color, border: `1px solid ${project.color}44`,
          padding: '3px 10px', borderRadius: 20,
        }}>{project.badge}</span>}
      </div>
      <p style={{
        fontFamily: 'Space Grotesk, sans-serif', fontSize: 11,
        color: project.color, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 4,
      }}>{project.category}</p>
      <h3 style={{
        fontFamily: "'Libre Baskerville', serif", fontWeight: 800, fontSize: 24,
        color: '#1a1a2e', marginBottom: 10,
      }}>{project.name}</h3>
      <p style={{
        fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 14,
        color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 14,
      }}>{project.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
        {project.tech.map(t => <span key={t} style={{
          fontSize: 11, background: 'rgba(67,97,238,0.15)',
          color: 'var(--primary)', padding: '3px 10px', borderRadius: 20,
        }}>{t}</span>)}
      </div>
      {/* Real project image */}
      <div style={{ borderRadius: 14, overflow: 'hidden', marginBottom: 14 }}>
        <img src={project.image} alt={project.name} loading="lazy" decoding="async"
          style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {project.liveUrl && project.liveUrl !== '#' && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 13,
              color: '#fff', background: 'var(--gradient)',
              padding: '8px 20px', borderRadius: 50, textDecoration: 'none',
            }}
          >Live →</a>
        )}
        {project.codeUrl && project.codeUrl !== '#' && (
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 13,
              color: 'var(--primary)', border: '2px solid var(--primary)',
              padding: '8px 20px', borderRadius: 50, textDecoration: 'none',
            }}
          >Code ↗</a>
        )}
      </div>
    </motion.div>
  );
}

// ── MAIN EXPORT ────────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 1024);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-header', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { 
          trigger: sectionRef.current, 
          start: 'top 85%', 
          end: 'bottom 15%', 
          toggleActions: 'play reverse play reverse' 
        },
      });
      gsap.to('.projects-watermark', {
        y: -140, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} style={{ background: 'var(--bg)', position: 'relative', overflow: 'visible' }}>
      <span className="section-watermark projects-watermark">PROJECTS</span>

      {/* Header */}
      <div className="container mx-auto px-6" style={{ position: 'relative', zIndex: 1, paddingTop: 'clamp(80px,8vw,120px)', paddingBottom: 60 }}>
        <div className="projects-header heading-container" style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif', fontSize: 12,
            color: 'var(--primary)', textTransform: 'uppercase',
            letterSpacing: '0.22em', marginBottom: 10,
          }}>WHAT I'VE BUILT</p>
          <h2 style={{
            fontFamily: "'Libre Baskerville', serif", fontWeight: 900,
            fontSize: 'clamp(2rem,4vw,3.5rem)',
          }}>My Projects</h2>
          <div className="heading-underline" style={{
            height: 4, width: 70, background: 'var(--gradient)',
            margin: '14px auto 0', borderRadius: 2,
          }} />
        </div>
      </div>

      {/* Desktop: Storytelling scroll */}
      {!isMobile ? (
        <StorytellingDesktop />
      ) : (
        /* Mobile: vertical story-scroll cards */
        <div className="container mx-auto px-6" style={{ paddingBottom: 'clamp(60px,8vw,100px)' }}>
          {projects.map((proj, i) => <MobileProjectCard key={proj.id} project={proj} index={i} />)}
        </div>
      )}
    </section>
  );
}
