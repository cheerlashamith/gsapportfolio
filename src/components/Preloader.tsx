import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FIRST_NAME = ['C', 'H', 'E', 'E', 'R', 'L', 'A'];
const LAST_NAME = ['S', 'H', 'A', 'M', 'I', 'T', 'H'];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);
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

    // Safety fallback: finishes under 3 seconds
    const fallbackTimer = setTimeout(() => {
      finish();
    }, 2800);

    const ctx = gsap.context(() => {
      const strips = gsap.utils.toArray<HTMLElement>('.shutter-strip');
      const chars = gsap.utils.toArray<HTMLElement>('.ignition-char');

      const tl = gsap.timeline({
        onComplete: () => {
          clearTimeout(fallbackTimer);
          finish();
        },
      });

      // 1. Initial pitch black states
      gsap.set(strips, { yPercent: 0 });
      gsap.set(flareRef.current, { scaleX: 0, opacity: 0, scaleY: 1 });
      gsap.set(chars, {
        opacity: 0.08,
        scale: 0.88,
        y: 10,
        filter: 'drop-shadow(0 0 0px rgba(255, 215, 120, 0))',
      });
      gsap.set([ruleLeftRef.current, ruleRightRef.current], { scaleX: 0 });
      gsap.set(subtitleWrapRef.current, { opacity: 0, y: 12 });

      // 2. Anamorphic horizontal optical beam ignition
      tl.to(flareRef.current, {
        scaleX: 1,
        opacity: 1,
        duration: 0.38,
        ease: 'power3.out',
      })
      // 3. Racing car / Lights-Camera-Action: Letter-by-letter lights turning ON
      .to(
        chars,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: 'drop-shadow(0 0 24px rgba(255, 220, 130, 0.95)) drop-shadow(0 0 50px rgba(255, 185, 60, 0.6))',
          duration: 0.16,
          stagger: 0.042, // high-speed ignition: all 14 letters ignite in ~0.58s
          ease: 'back.out(2.2)',
        },
        '-=0.22'
      )
      // Flare dissolves into subtle ambient light
      .to(
        flareRef.current,
        {
          opacity: 0,
          scaleY: 10,
          filter: 'blur(30px)',
          duration: 0.45,
          ease: 'power2.out',
        },
        '-=0.35'
      );

      // 4. Hairline rules expand and subtitle lights up in goldish-white
      tl.to(
        [ruleLeftRef.current, ruleRightRef.current],
        {
          scaleX: 1,
          duration: 0.32,
          ease: 'power2.out',
        },
        '-=0.25'
      )
      .to(
        subtitleWrapRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.28,
          ease: 'power2.out',
        },
        '-=0.28'
      );

      // 5. Brief cinematic hold to admire fully illuminated gold name (~0.35s)
      tl.to({}, { duration: 0.35 });

      // 6. Typography surges forward into light
      tl.to(contentRef.current, {
        opacity: 0,
        scale: 1.05,
        y: -18,
        filter: 'blur(8px)',
        duration: 0.26,
        ease: 'power2.in',
      });

      // 7. High-speed 5-Column Shutter Wave curtain reveal into portfolio (~0.6s)
      tl.to(
        strips,
        {
          yPercent: -100,
          duration: 0.6,
          stagger: {
            each: 0.05,
            from: 'start', // wave from left to right
          },
          ease: 'power4.inOut',
        },
        '-=0.08'
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
        background: '#000000', // 100% PURE PITCH DARK BLACK
      }}
    >
      {/* 5 VERTICAL PURE BLACK SHUTTER STRIPS (Seamless Shutter Wave Reveal) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="shutter-strip"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${i * 20}%`,
              width: '20.2%', // subpixel overlap guarantees zero vertical lines on any DPI display
              background: '#000000', // PURE PITCH BLACK
              border: 'none',
              outline: 'none',
              willChange: 'transform',
            }}
          />
        ))}
      </div>

      {/* ANAMORPHIC HORIZONTAL OPTICAL BEAM (Lights Camera Action Lens Line) */}
      <div
        ref={flareRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(280px, 80vw, 850px)',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 215, 120, 0.5) 20%, #ffffff 50%, rgba(255, 190, 60, 0.6) 80%, transparent 100%)',
          boxShadow: '0 0 25px rgba(255, 230, 140, 0.95), 0 0 55px rgba(255, 185, 50, 0.7)',
          borderRadius: '999px',
          pointerEvents: 'none',
          zIndex: 3,
          willChange: 'transform, opacity, filter',
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
          willChange: 'transform, opacity, filter',
          maxWidth: '94vw',
          margin: '0 auto',
        }}
      >
        {/* BOLD GOLDISH-WHITE RACING IGNITION TYPOGRAPHY (LETTER-BY-LETTER) */}
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
                  background: 'linear-gradient(135deg, #ffffff 0%, #fff7dc 25%, #ffd97d 55%, #fffbf0 78%, #f6c050 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: '#fff8e7',
                  willChange: 'transform, opacity, filter',
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
                  background: 'linear-gradient(135deg, #ffffff 0%, #fff7dc 25%, #ffd97d 55%, #fffbf0 78%, #f6c050 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: '#fff8e7',
                  willChange: 'transform, opacity, filter',
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
                color: '#fff8e7', // GOLDISH WHITE
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
