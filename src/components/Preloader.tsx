import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';

    let isFinished = false;
    const finish = () => {
      if (isFinished) return;
      isFinished = true;
      document.body.style.overflow = '';
      if (containerRef.current) {
        containerRef.current.style.display = 'none';
        containerRef.current.style.pointerEvents = 'none';
      }
      onCompleteRef.current();
    };

    // Fail-safe timeout: guarantees the portfolio is always revealed even if animation is blocked
    const fallbackTimer = setTimeout(() => {
      finish();
    }, 3800);

    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLElement>('.preloader-char');

      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        onComplete: () => {
          clearTimeout(fallbackTimer);
          finish();
        }
      });

      // Initial state: subtle unlit letters with gentle opacity
      gsap.set(chars, {
        color: '#2a2a3c',
        textShadow: '0 0 0px transparent',
        opacity: 0.4,
        scale: 0.96,
      });

      // 1. Tagline fades and floats in smoothly
      tl.fromTo(
        '.preloader-tag',
        { opacity: 0, y: 15, letterSpacing: '0.2em' },
        { opacity: 0.85, y: 0, letterSpacing: '0.35em', duration: 0.6, ease: 'power3.out' },
        0.1
      );

      // 2. Buttery smooth sequential letter ignition
      chars.forEach((char, idx) => {
        tl.to(
          char,
          {
            color: '#ffffff',
            opacity: 1,
            scale: 1.06,
            textShadow: '0 0 25px #ffffff, 0 0 50px rgba(82, 39, 199, 0.95), 0 0 85px rgba(255, 109, 52, 0.85)',
            duration: 0.18,
            ease: 'power2.out',
          },
          0.3 + idx * 0.14
        ).to(
          char,
          {
            scale: 1,
            color: '#ffffff',
            textShadow: '0 0 18px rgba(255, 255, 255, 0.9), 0 0 40px rgba(82, 39, 199, 0.8), 0 0 65px rgba(255, 109, 52, 0.6)',
            duration: 0.12,
            ease: 'power1.out',
          },
          0.44 + idx * 0.14
        );
      });

      // 3. Harmonic neon surge across all letters
      tl.to(
        chars,
        {
          textShadow: '0 0 30px #ffffff, 0 0 65px #5227c7, 0 0 100px #ff6d34',
          scale: 1.03,
          duration: 0.35,
          ease: 'power2.out',
        },
        '+=0.05'
      );

      // 4. Subtitle fades in with orange neon glow
      tl.fromTo(
        '.preloader-sub',
        { opacity: 0, y: -8 },
        {
          opacity: 1,
          y: 0,
          color: '#ff6d34',
          textShadow: '0 0 25px rgba(255, 109, 52, 0.7)',
          duration: 0.35,
          ease: 'power2.out',
        },
        '<'
      );

      // 5. Brief cinematic pause to appreciate the illumination
      tl.to({}, { duration: 0.35 });

      // 6. Smooth dissolve of preloader typography
      tl.to('.preloader-content', {
        y: -35,
        opacity: 0,
        scale: 0.95,
        duration: 0.45,
        ease: 'power3.inOut',
      });

      // 7. Butter-like curtain slide-up revealing the portfolio
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
      }, '-=0.1');

    }, containerRef);

    return () => {
      clearTimeout(fallbackTimer);
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, []); // Run once on mount

  const name = "SHAMITH".split('');

  return (
    <div
      ref={containerRef}
      className="preloader-wrap"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#07070e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        willChange: 'transform',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background cinematic spotlight */}
      <div style={{
        position: 'absolute',
        width: '650px',
        height: '650px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(82,39,199,0.22) 0%, rgba(255,109,52,0.1) 40%, transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none',
      }} />

      {/* Main Content */}
      <div className="preloader-content" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        willChange: 'transform, opacity',
      }}>
        {/* Top cinematic label */}
        <div className="preloader-tag" style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(11px, 1.3vw, 13px)',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.5)',
          marginBottom: '18px',
          fontWeight: 600,
          opacity: 0,
        }}>
          CHEERLA SHAMITH
        </div>

        {/* Cinematic Movie Title Letters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 'clamp(4px, 1.8vw, 20px)',
          padding: '10px 0',
          maxWidth: '96vw',
          userSelect: 'none',
        }}>
          {name.map((char, i) => (
            <span
              key={i}
              className="preloader-char"
              style={{
                display: 'inline-block',
                fontFamily: "'Libre Baskerville', serif",
                fontWeight: 900,
                fontSize: 'clamp(2.4rem, 10vw, 8.5rem)',
                letterSpacing: '0.04em',
                lineHeight: 1,
                willChange: 'color, text-shadow, opacity, transform',
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Bottom accent glow tagline */}
        <div className="preloader-sub" style={{
          marginTop: '22px',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(11px, 1.2vw, 13px)',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'rgba(255, 109, 52, 0.4)',
          fontWeight: 700,
          opacity: 0,
        }}>
          PORTFOLIO • 2026
        </div>
      </div>
    </div>
  );
}
