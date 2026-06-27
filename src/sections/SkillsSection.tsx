import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories } from '../data/skills';
import aboutImg from '../assets/about.jpg';
import heroImg from '../assets/hero.jpg';

function SkillPill({ name, icon, color }: { name: string; icon: string; color?: string }) {
  return (
    <div
      role="listitem"
      aria-label={`Skill: ${name}`}
      style={{
        height: 56, padding: '0 24px', borderRadius: 50,
        display: 'flex', alignItems: 'center', gap: 14,
        background: '#f8f5ff', 
        border: '1px solid rgba(82,39,199,0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', cursor: 'default',
        fontFamily: 'Poppins, sans-serif', fontSize: 16, fontWeight: 500,
        color: '#1a1a2e', userSelect: 'none',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(82,39,199,0.5)';
        el.style.boxShadow = '0 0 16px rgba(82,39,199,0.2)';
        el.style.transform = 'translateY(-4px) scale(1.05)';
        el.style.background = 'rgba(82,39,199,0.12)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(82,39,199,0.1)';
        el.style.boxShadow = '';
        el.style.transform = '';
        el.style.background = '#f8f5ff';
      }}
    >
      <i className={icon} style={{ fontSize: 20, color: color || undefined }} />
      {name}
    </div>
  );
}

function SkillRow({
  category,
  index
}: {
  category: typeof skillCategories[0];
  index: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleEnter = () => {
    setHovered(true);
    gsap.to(nameRef.current, { x: 20, duration: 0.5, ease: 'back.out(1.5)' });
  };

  const handleLeave = () => {
    setHovered(false);
    gsap.to(nameRef.current, { x: 0, duration: 0.5, ease: 'back.out(1.5)' });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const hoverColor = index % 2 === 0 ? '#5227c7' : '#ff6d34';

  return (
    <div
      ref={rowRef}
      className="skill-row flex flex-col md:flex-row items-start md:items-center py-10 md:py-12 relative overflow-visible border-b border-[rgba(82,39,199,0.08)] transition-colors duration-300 gap-6 md:gap-0"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Floating Images (Follow Cursor) */}
      <div style={{
        position: 'absolute',
        left: mousePos.x,
        top: mousePos.y,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
        zIndex: 20
      }} className="hidden md:block">
        <img src={heroImg} alt="" style={{
          width: 140, height: 180, objectFit: 'cover', borderRadius: 12,
          position: 'absolute', top: -90, left: -90,
          transform: hovered ? 'translateY(0px) rotate(-12deg) scale(1)' : 'translateY(20px) rotate(-20deg) scale(0.8)',
          transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        }} />
        <img src={aboutImg} alt="" style={{
          width: 160, height: 200, objectFit: 'cover', borderRadius: 12,
          position: 'absolute', top: -60, left: 10,
          transform: hovered ? 'translateY(-10px) rotate(8deg) scale(1)' : 'translateY(20px) rotate(20deg) scale(0.8)',
          transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        }} />
      </div>

      {/* Category name — Left area */}
      <div className="w-full md:w-[35%] md:min-w-[250px] md:max-w-[380px] relative z-10 md:pr-5">
        <style>{`
          @media (max-width: 767px) {
            .skill-title-${index} {
              color: ${hoverColor} !important;
            }
          }
        `}</style>
        <h2
          ref={nameRef}
          className={`skill-title-${index}`}
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            transition: 'color 0.4s ease',
            userSelect: 'none',
            wordBreak: 'break-word',
            color: hovered ? hoverColor : 'rgba(26,26,46,0.08)',
          }}
        >
          {category.name}
        </h2>
      </div>

      {/* Skills pills — Right Area */}
      <div
        className="flex-1 flex flex-wrap gap-3 md:gap-4 items-center z-10 w-full md:pl-8"
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
      gsap.registerPlugin(ScrollTrigger);
      gsap.from('.skill-row', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={{ background: '#ffffff', padding: 'clamp(80px,10vw,140px) 0', position: 'relative', overflow: 'hidden' }}>
      <span className="section-watermark" style={{ color: 'rgba(0,0,0,0.02)' }}>MY SKILLS</span>
      <div className="container mx-auto px-6 max-w-[1200px]" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="heading-container" style={{ textAlign: 'center', marginBottom: 100 }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, color: '#ff6d34', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 12, fontWeight: 600 }}>TECHNICAL ARSENAL</p>
          <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.5rem)' }}>Skills & Tools</h2>
          <div className="heading-underline" style={{ height: 4, width: 80, background: 'var(--gradient)', margin: '18px auto 0', borderRadius: 2 }} />
        </div>

        {/* Rows */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {skillCategories.map((category, i) => (
            <SkillRow
              key={category.name}
              category={category}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
