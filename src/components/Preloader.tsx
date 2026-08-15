import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRunRef = useRef(false);

  useEffect(() => {
    // Prevent duplicate runs in React StrictMode or re-renders
    if (hasRunRef.current) return;
    hasRunRef.current = true;

    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLElement>('.preloader-char');

      const tl = gsap.timeline({
        onComplete: () => {
          // Unlock scroll and notify parent to calibrate GSAP ScrollTrigger
          document.body.style.overflow = '';
          onComplete();

          // Smooth cinematic curtain slide-up
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.85,
            ease: 'power4.inOut',
            onComplete: () => {
              if (containerRef.current) {
                containerRef.current.style.display = 'none';
              }
            }
          });
        }
      });

      // Initial state: letters start in dark cinematic unlit mode
      gsap.set(chars, {
        color: '#1a1a26',
        textShadow: '0 0 0px transparent',
        opacity: 0.35,
        scale: 0.98,
      });

      // 1. Tagline fades in subtly
      tl.fromTo('.preloader-tag',
        { opacity: 0, y: 12 },
        { opacity: 0.8, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.2 }
      );

      // 2. Movie-style "Light-On" ignition letter-by-letter
      chars.forEach((char, idx) => {
        const charTl = gsap.timeline();

        // Ignition spark + voltage surge
        charTl
          .to(char, {
            color: '#ffffff',
            opacity: 1,
            scale: 1.05,
            textShadow: '0 0 25px #ffffff, 0 0 60px rgba(82, 39, 199, 0.9), 0 0 90px rgba(255, 109, 52, 0.8)',
            duration: 0.12,
            ease: 'power2.out',
          })
          .to(char, {
            scale: 1,
            opacity: 0.85,
            duration: 0.05,
            ease: 'power1.in',
          })
          .to(char, {
            opacity: 1,
            color: '#ffffff',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.9), 0 0 45px rgba(82, 39, 199, 0.8), 0 0 70px rgba(255, 109, 52, 0.6)',
            duration: 0.08,
            ease: 'power2.out',
          });

        tl.add(charTl, 0.35 + idx * 0.16);
      });

      // 3. Full neon harmonic surge once all letters are ignited
      tl.to(chars, {
        textShadow: '0 0 35px #ffffff, 0 0 70px #5227c7, 0 0 110px #ff6d34',
        scale: 1.02,
        duration: 0.35,
        ease: 'power2.out',
      }, '+=0.08');

      // 4. Subtitle turns on in sync
      tl.to('.preloader-sub', {
        opacity: 1,
        color: '#ff6d34',
        textShadow: '0 0 20px rgba(255, 109, 52, 0.6)',
        duration: 0.3,
        ease: 'power2.out',
      }, '<');

      // 5. Majestic hold to appreciate the fully lit glowing name
      tl.to({}, { duration: 0.45 });

      // 6. Smooth lift & dissolve before curtain opens
      tl.to('.preloader-content', {
        y: -30,
        opacity: 0,
        scale: 0.97,
        duration: 0.45,
        ease: 'power3.in',
      });

    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [onComplete]);

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
          gap: 'clamp(6px, 1.8vw, 20px)',
          padding: '10px 0',
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
                fontSize: 'clamp(3.5rem, 11vw, 8.5rem)',
                letterSpacing: '0.06em',
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
