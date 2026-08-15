import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Unlock scroll and notify parent to refresh ScrollTrigger
          document.body.style.overflow = '';
          onComplete();

          // Smooth curtain slide-up
          gsap.to('.preloader-wrap', {
            yPercent: -100,
            duration: 1.1,
            ease: 'expo.inOut',
            onComplete: () => {
              const wrap = containerRef.current;
              if (wrap) wrap.style.display = 'none';
            }
          });
        }
      });

      // 1. Initial letters entrance: mask-reveal sliding up smoothly
      tl.fromTo('.preloader-char', 
        { yPercent: 130, opacity: 0 },
        { 
          yPercent: 0, 
          opacity: 1, 
          stagger: 0.07, 
          duration: 0.9, 
          ease: 'power4.out' 
        }
      );

      // 2. Subtitle & Tagline fade in
      tl.fromTo('.preloader-sub',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.5'
      );

      // 3. Progress bar line and counter (0 -> 100%)
      const counterObj = { val: 0 };
      tl.to(counterObj, {
        val: 100,
        duration: 1.4,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText = `${Math.round(counterObj.val)}%`;
          }
        }
      }, '-=0.6');

      tl.fromTo('.preloader-progress-fill',
        { scaleX: 0 },
        { scaleX: 1, duration: 1.4, ease: 'power2.inOut' },
        '<'
      );

      // 4. Subtle shimmer glow wave across letters
      tl.to('.preloader-char', {
        color: '#ffffff',
        textShadow: '0 0 30px rgba(82, 39, 199, 0.8), 0 0 50px rgba(255, 109, 52, 0.5)',
        stagger: 0.05,
        duration: 0.35,
        ease: 'power2.out'
      }, '-=0.7');

      // Brief hold at 100%
      tl.to({}, { duration: 0.25 });

      // 5. Elegant fade out of text & bar
      tl.to(['.preloader-content'], {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.in'
      });

    }, containerRef);

    return () => ctx.revert();
  }, [mounted, onComplete]);

  const name = "SHAMITH".split('');

  return (
    <div
      ref={containerRef}
      className="preloader-wrap"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#0c0c16',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        willChange: 'transform',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient radial glow */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(82,39,199,0.18) 0%, rgba(255,109,52,0.08) 45%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      {/* Main Content */}
      <div className="preloader-content" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Monogram / Tag */}
        <div className="preloader-sub" style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(11px, 1.4vw, 13px)',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#ff6d34',
          marginBottom: '16px',
          fontWeight: 700,
        }}>
          CREATIVE DEVELOPER
        </div>

        {/* Masked Letter Reveal */}
        <div style={{
          display: 'flex',
          gap: 'clamp(8px, 2vw, 24px)',
          overflow: 'hidden',
          padding: '10px 0',
        }}>
          {name.map((char, i) => (
            <div key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
              <span
                className="preloader-char"
                style={{
                  display: 'inline-block',
                  fontFamily: "'Libre Baskerville', serif",
                  fontWeight: 900,
                  fontSize: 'clamp(3.5rem, 10vw, 8.5rem)',
                  letterSpacing: '0.04em',
                  lineHeight: 1,
                  color: '#e2e8f0',
                  willChange: 'transform, opacity',
                }}
              >
                {char}
              </span>
            </div>
          ))}
        </div>

        {/* Minimal Progress Bar & Percentage */}
        <div style={{
          marginTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          width: 'clamp(200px, 35vw, 320px)',
        }}>
          <div style={{
            width: '100%',
            height: '2px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '4px',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div
              className="preloader-progress-fill"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, #5227c7, #ff6d34)',
                transformOrigin: 'left',
                transform: 'scaleX(0)',
                willChange: 'transform',
                boxShadow: '0 0 12px rgba(255, 109, 52, 0.8)',
              }}
            />
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.15em',
            color: 'rgba(255, 255, 255, 0.4)',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            <span>LOADING</span>
            <span ref={counterRef} style={{ color: '#fff' }}>0%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
