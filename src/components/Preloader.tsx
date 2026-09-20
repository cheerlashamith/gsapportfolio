import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const yearTagRef = useRef<HTMLDivElement>(null);
  const lineAccentRef = useRef<HTMLDivElement>(null);

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

    const fallbackTimer = setTimeout(() => {
      finish();
    }, 4200);

    const ctx = gsap.context(() => {
      const strips = gsap.utils.toArray<HTMLElement>('.shutter-strip');

      const tl = gsap.timeline({
        onComplete: () => {
          clearTimeout(fallbackTimer);
          finish();
        },
      });

      // Initial States
      gsap.set(strips, { yPercent: 0 });
      gsap.set(emblemRef.current, { scale: 0.7, opacity: 0, y: -20 });
      gsap.set(titleRef.current, { opacity: 0, y: 35, letterSpacing: '0.02em' });
      gsap.set(lineAccentRef.current, { scaleX: 0 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 15 });
      gsap.set(yearTagRef.current, { opacity: 0, scale: 0.9 });

      // 1. Emblem drops in with spring physics
      tl.to(emblemRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'back.out(1.5)',
      });

      // 2. Bold Name CHEERLA SHAMITH rises and tracks out
      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          letterSpacing: '0.14em',
          duration: 0.65,
          ease: 'power3.out',
        },
        '-=0.3'
      );

      // 3. Central glowing accent line extends outward
      tl.to(
        lineAccentRef.current,
        {
          scaleX: 1,
          duration: 0.55,
          ease: 'power2.inOut',
        },
        '-=0.35'
      );

      // 4. Subtitle & Year tag reveal
      tl.to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power2.out',
        },
        '-=0.3'
      )
      .to(
        yearTagRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'back.out(1.3)',
        },
        '-=0.25'
      );

      // 5. Brief hold for visual impact
      tl.to({}, { duration: 0.45 });

      // 6. Central typography dissolves slightly forward
      tl.to(contentRef.current, {
        opacity: 0,
        scale: 1.06,
        y: -25,
        duration: 0.35,
        ease: 'power3.in',
      });

      // 7. Staggered Multi-Column Shutter Wave (Striking Vertical Slice Reveal)
      tl.to(
        strips,
        {
          yPercent: -100,
          duration: 0.75,
          stagger: {
            each: 0.08,
            from: 'start', // wave from left to right
          },
          ease: 'power4.inOut',
        },
        '-=0.1'
      );

    }, containerRef);

    return () => {
      clearTimeout(fallbackTimer);
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        overflow: 'hidden',
        pointerEvents: 'auto',
      }}
    >
      {/* 5 VERTICAL PURE BLACK SHUTTER STRIPS (Wave Reveal) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="shutter-strip"
            style={{
              flex: 1,
              height: '100%',
              background: '#000000', // PURE BLACK
              position: 'relative',
              willChange: 'transform',
              borderRight: i < 4 ? '1px solid rgba(255, 255, 255, 0.03)' : 'none',
            }}
          />
        ))}
      </div>

      {/* CENTRAL TYPOGRAPHIC CONTENT */}
      <div
        ref={contentRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          textAlign: 'center',
          userSelect: 'none',
          willChange: 'transform, opacity',
        }}
      >
        {/* Soft Ambient Spotlight (Royal Purple & Solar Orange, strictly no red/maroon) */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(82, 39, 199, 0.28) 0%, rgba(255, 109, 52, 0.12) 40%, transparent 70%)',
            filter: 'blur(90px)',
            pointerEvents: 'none',
            zIndex: -1,
          }}
        />

        {/* 1. Monogram Crest */}
        <div
          ref={emblemRef}
          style={{
            position: 'relative',
            width: '80px',
            height: '80px',
            marginBottom: '26px',
            willChange: 'transform, opacity',
          }}
        >
          {/* Subtle Outer Conic Aura */}
          <div
            style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '26px',
              background: 'linear-gradient(135deg, #5227c7, #ff6d34)',
              opacity: 0.7,
              filter: 'blur(10px)',
            }}
          />

          {/* Pure Black Inner Card with Crisp Border */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '22px',
              background: '#0a0a12',
              border: '1.5px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 30px rgba(0,0,0,0.8)',
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: '26px',
                color: '#ffffff',
                letterSpacing: '1px',
              }}
            >
              CS
            </span>
          </div>
        </div>

        {/* 2. Bold Name Title (Pure White with Subtle Lighting) */}
        <h1
          ref={titleRef}
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 'clamp(2.1rem, 6vw, 4.4rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#ffffff', // PURE WHITE
            textTransform: 'uppercase',
            marginBottom: '16px',
            willChange: 'transform, opacity, letter-spacing',
            textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 0 50px rgba(82, 39, 199, 0.4)',
          }}
        >
          CHEERLA SHAMITH
        </h1>

        {/* 3. Glowing Center Accent Line */}
        <div
          ref={lineAccentRef}
          style={{
            width: 'clamp(180px, 35vw, 360px)',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #5227c7, #ff6d34, transparent)',
            boxShadow: '0 0 12px rgba(255, 109, 52, 0.8)',
            borderRadius: '999px',
            marginBottom: '20px',
            transformOrigin: 'center',
            willChange: 'transform',
          }}
        />

        {/* 4. Subtitle: Clean & Architectural */}
        <div
          ref={subtitleRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '24px',
            willChange: 'transform, opacity',
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(11.5px, 1.3vw, 14px)',
              fontWeight: 600,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.75)',
            }}
          >
            Full-Stack Developer <span style={{ color: '#ff6d34', margin: '0 4px' }}>•</span> AI Systems Engineer
          </span>
        </div>

        {/* 5. Minimalist Glass Year Badge */}
        <div
          ref={yearTagRef}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '5px 16px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            willChange: 'transform, opacity',
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#ff6d34',
            }}
          >
            PORTFOLIO // 2026
          </span>
        </div>
      </div>
    </div>
  );
}
