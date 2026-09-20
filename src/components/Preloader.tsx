import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FIRST_NAME = ['C', 'H', 'E', 'E', 'R', 'L', 'A'];
const LAST_NAME = ['S', 'H', 'A', 'M', 'I', 'T', 'H'];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const centerSeamRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleWrapRef = useRef<HTMLDivElement>(null);
  const ruleLeftRef = useRef<HTMLDivElement>(null);
  const ruleRightRef = useRef<HTMLDivElement>(null);

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

    // Safety fallback: guaranteed to release under 2.5 seconds
    const fallbackTimer = setTimeout(() => {
      finish();
    }, 2500);

    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLElement>('.ignition-char');

      const tl = gsap.timeline({
        onComplete: () => {
          clearTimeout(fallbackTimer);
          finish();
        },
      });

      // 1. Initial GPU-accelerated hardware states
      gsap.set([leftCurtainRef.current, rightCurtainRef.current], { xPercent: 0, force3D: true });
      gsap.set(centerSeamRef.current, { scaleY: 0, opacity: 0, force3D: true });
      gsap.set(chars, {
        opacity: 0.1,
        scale: 0.88,
        y: 8,
      });
      gsap.set([ruleLeftRef.current, ruleRightRef.current], { scaleX: 0 });
      gsap.set(subtitleWrapRef.current, { opacity: 0, y: 10 });

      // 2. High-speed racing car letter-by-letter ignition in goldish-white
      tl.to(chars, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.14,
        stagger: 0.038, // 14 letters ignite in ~0.53s
        ease: 'back.out(2)',
      })
      // 3. Hairlines & subtitle reveal immediately
      .to(
        [ruleLeftRef.current, ruleRightRef.current],
        {
          scaleX: 1,
          duration: 0.22,
          ease: 'power2.out',
        },
        '-=0.15'
      )
      .to(
        subtitleWrapRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: 'power2.out',
        },
        '-=0.18'
      )

      // 4. Center vertical golden seam illuminates at curtain split line
      .to(
        centerSeamRef.current,
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.12,
          ease: 'expo.out',
        },
        '+=0.03'
      )

      // 5. GRAND THEATRICAL CURTAIN OPENING (force3D hardware layer for 60/120fps in Chrome)
      .to(
        leftCurtainRef.current,
        {
          xPercent: -100,
          force3D: true,
          duration: 0.75,
          ease: 'power3.inOut',
        },
        'curtainOpen'
      )
      .to(
        rightCurtainRef.current,
        {
          xPercent: 100,
          force3D: true,
          duration: 0.75,
          ease: 'power3.inOut',
        },
        'curtainOpen'
      )
      .to(
        contentRef.current,
        {
          scale: 1.06,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        },
        'curtainOpen'
      )
      .to(
        centerSeamRef.current,
        {
          opacity: 0,
          scaleX: 3,
          duration: 0.25,
          ease: 'power2.out',
        },
        'curtainOpen'
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
        background: 'transparent',
        contain: 'strict', // isolates preloader layout/paint from main page
      }}
    >
      {/* THEATRICAL LEFT CURTAIN (Pure Black with Golden Trim Seam) */}
      <div
        ref={leftCurtainRef}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '50.2%', // subpixel overlap prevents center seam line
          background: '#000000',
          borderRight: '1px solid rgba(255, 217, 125, 0.35)',
          boxShadow: '10px 0 30px rgba(0, 0, 0, 0.9)',
          zIndex: 3,
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />

      {/* THEATRICAL RIGHT CURTAIN (Pure Black with Golden Trim Seam) */}
      <div
        ref={rightCurtainRef}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          width: '50.2%', // subpixel overlap prevents center seam line
          background: '#000000',
          borderLeft: '1px solid rgba(255, 217, 125, 0.35)',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.9)',
          zIndex: 3,
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />

      {/* CENTER VERTICAL GOLDEN LIGHT SEAM */}
      <div
        ref={centerSeamRef}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '2px',
          background: 'linear-gradient(180deg, transparent 0%, #ffd97d 20%, #ffffff 50%, #ffd97d 80%, transparent 100%)',
          boxShadow: '0 0 15px rgba(255, 217, 125, 0.9), 0 0 35px rgba(255, 109, 52, 0.6)',
          zIndex: 6,
          pointerEvents: 'none',
          willChange: 'transform, opacity',
        }}
      />

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
          maxWidth: '94vw',
          margin: '0 auto',
        }}
      >
        {/* GOLDISH-WHITE RACING IGNITION TYPOGRAPHY */}
        <h1
          ref={titleRef}
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 'clamp(2.3rem, 6.4vw, 4.8rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: '22px',
            textTransform: 'uppercase',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            columnGap: 'clamp(14px, 2.8vw, 32px)',
            rowGap: '6px',
            letterSpacing: '0.08em',
          }}
        >
          {/* First Word: CHEERLA */}
          <div style={{ display: 'inline-flex' }}>
            {FIRST_NAME.map((char, index) => (
              <span
                key={`first-${index}`}
                className="ignition-char"
                style={{
                  display: 'inline-block',
                  color: '#fffaf0',
                  textShadow: '0 0 20px rgba(255, 220, 130, 0.9), 0 0 45px rgba(255, 185, 60, 0.6)',
                  willChange: 'transform, opacity',
                }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Second Word: SHAMITH */}
          <div style={{ display: 'inline-flex' }}>
            {LAST_NAME.map((char, index) => (
              <span
                key={`last-${index}`}
                className="ignition-char"
                style={{
                  display: 'inline-block',
                  color: '#fffaf0',
                  textShadow: '0 0 20px rgba(255, 220, 130, 0.9), 0 0 45px rgba(255, 185, 60, 0.6)',
                  willChange: 'transform, opacity',
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </h1>

        {/* GOLDISH-WHITE HAIRLINE RULES & SUBTITLE */}
        <div
          ref={subtitleWrapRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(12px, 2.5vw, 24px)',
            width: '100%',
            maxWidth: '680px',
          }}
        >
          {/* Left Golden Hairline Rule */}
          <div
            ref={ruleLeftRef}
            style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255, 215, 120, 0.6), #ffffff)',
              transformOrigin: 'right center',
            }}
          />

          {/* Subtitle with Gold Star Accents */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ color: '#ffd97d', fontSize: '11px', textShadow: '0 0 10px rgba(255,217,125,0.8)' }}>✦</span>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(11.5px, 1.4vw, 13.5px)',
                fontWeight: 600,
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: '#fff8e7',
                textShadow: '0 0 16px rgba(255, 215, 120, 0.4)',
              }}
            >
              FULL-STACK DEVELOPER • AI SYSTEMS ENGINEER
            </span>
            <span style={{ color: '#ffd97d', fontSize: '11px', textShadow: '0 0 10px rgba(255,217,125,0.8)' }}>✦</span>
          </div>

          {/* Right Golden Hairline Rule */}
          <div
            ref={ruleRightRef}
            style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(90deg, #ffffff, rgba(255, 215, 120, 0.6), transparent)',
              transformOrigin: 'left center',
            }}
          />
        </div>
      </div>
    </div>
  );
}
