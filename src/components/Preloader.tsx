import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subWrapRef = useRef<HTMLDivElement>(null);
  const ruleLeftRef = useRef<HTMLDivElement>(null);
  const ruleRightRef = useRef<HTMLDivElement>(null);
  const footerTagRef = useRef<HTMLDivElement>(null);

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

    // Safety fallback
    const fallbackTimer = setTimeout(() => {
      finish();
    }, 4200);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          clearTimeout(fallbackTimer);
          finish();
        },
      });

      // 1. Initial CSS states
      gsap.set(flareRef.current, { scaleX: 0, opacity: 0, scaleY: 1 });
      gsap.set(emblemRef.current, { scale: 0.6, opacity: 0, filter: 'blur(12px)' });
      gsap.set(titleRef.current, { opacity: 0, y: 30, letterSpacing: '0.04em' });
      gsap.set([ruleLeftRef.current, ruleRightRef.current], { scaleX: 0 });
      gsap.set(subWrapRef.current, { opacity: 0, y: 14 });
      gsap.set(footerTagRef.current, { opacity: 0, y: 10 });

      // 2. Anamorphic Lens Flare expands across screen horizontally
      tl.to(flareRef.current, {
        scaleX: 1,
        opacity: 1,
        duration: 0.55,
        ease: 'power3.out',
      })
      // 3. Studio Monogram rises from flare
      .to(
        emblemRef.current,
        {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.65,
          ease: 'back.out(1.5)',
        },
        '-=0.3'
      )
      // Flare dissolves into an ambient background bloom
      .to(
        flareRef.current,
        {
          opacity: 0,
          scaleY: 15,
          filter: 'blur(25px)',
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.45'
      );

      // 4. Headline CHEERLA SHAMITH enters with cinematic tracking
      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          letterSpacing: '0.12em',
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.45'
      );

      // 5. Specular metallic light sweep across the typography
      tl.fromTo(
        titleRef.current,
        { backgroundPosition: '200% center' },
        {
          backgroundPosition: '-50% center',
          duration: 1.0,
          ease: 'power2.inOut',
        },
        '-=0.5'
      );

      // 6. Hairline Rules expand outward and Subtitle reveals
      tl.to(
        [ruleLeftRef.current, ruleRightRef.current],
        {
          scaleX: 1,
          duration: 0.55,
          ease: 'power2.out',
        },
        '-=0.6'
      )
      .to(
        subWrapRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        '-=0.5'
      )
      .to(
        footerTagRef.current,
        {
          opacity: 0.85,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        },
        '-=0.3'
      );

      // 7. Cinematic pause to admire the composition
      tl.to({}, { duration: 0.45 });

      // 8. Content zoom-dissolve
      tl.to(contentRef.current, {
        opacity: 0,
        scale: 1.05,
        y: -25,
        filter: 'blur(8px)',
        duration: 0.45,
        ease: 'power3.in',
      });

      // 9. Luxury Curtain lift revealing the Hero section
      tl.to(
        curtainRef.current,
        {
          yPercent: -100,
          duration: 0.85,
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
      {/* LUXURY CURTAIN WRAPPER */}
      <div
        ref={curtainRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: '#06060c',
          zIndex: 1,
          willChange: 'transform',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Ambient Luxury Spotlights */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '30%',
            width: '600px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(82, 39, 199, 0.22) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '30%',
            width: '550px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255, 109, 52, 0.16) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        {/* Cinematic Anamorphic Horizontal Lens Line */}
        <div
          ref={flareRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(280px, 80vw, 750px)',
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(82, 39, 199, 0.7) 20%, #ffffff 50%, rgba(255, 109, 52, 0.7) 80%, transparent 100%)',
            boxShadow: '0 0 25px rgba(255, 255, 255, 0.9), 0 0 50px rgba(82, 39, 199, 0.8), 0 0 80px rgba(255, 109, 52, 0.6)',
            borderRadius: '999px',
            pointerEvents: 'none',
            zIndex: 2,
            willChange: 'transform, opacity',
          }}
        />

        {/* MAIN CINEMATIC CONTENT */}
        <div
          ref={contentRef}
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            textAlign: 'center',
            userSelect: 'none',
            willChange: 'transform, opacity, filter',
            maxWidth: '92vw',
          }}
        >
          {/* 1. Studio Monogram Emblem */}
          <div
            ref={emblemRef}
            style={{
              position: 'relative',
              width: '84px',
              height: '84px',
              marginBottom: '32px',
              willChange: 'transform, opacity, filter',
            }}
          >
            {/* Luminous Pulsing Halo */}
            <div
              style={{
                position: 'absolute',
                inset: '-6px',
                borderRadius: '28px',
                background: 'linear-gradient(135deg, rgba(82, 39, 199, 0.8), rgba(255, 109, 52, 0.7))',
                filter: 'blur(12px)',
                opacity: 0.85,
              }}
            />

            {/* Frosted Glass Emblem */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '22px',
                background: 'linear-gradient(145deg, rgba(30, 30, 48, 0.95), rgba(12, 12, 22, 0.98))',
                border: '1.5px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 12px 35px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.4)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 900,
                  fontSize: '28px',
                  background: 'linear-gradient(135deg, #ffffff 40%, #ff6d34 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '1px',
                }}
              >
                CS
              </span>
            </div>
          </div>

          {/* 2. Bold Metallic Typographic Title */}
          <h1
            ref={titleRef}
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: 'clamp(2rem, 5.5vw, 4.2rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: '20px',
              textTransform: 'uppercase',
              willChange: 'transform, opacity, letter-spacing, background-position',
              // Liquid metallic sweep gradient
              background: 'linear-gradient(105deg, #a0a0b8 0%, #ffffff 25%, #ff9e75 50%, #ffffff 75%, #8c7ae6 100%)',
              backgroundSize: '250% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 10px 40px rgba(0,0,0,0.4)',
            }}
          >
            CHEERLA SHAMITH
          </h1>

          {/* 3. Hairline Rule & Subtitle Presentation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(12px, 2.5vw, 24px)',
              width: '100%',
              maxWidth: '680px',
              marginBottom: '28px',
            }}
          >
            {/* Left Rule */}
            <div
              ref={ruleLeftRef}
              style={{
                flex: 1,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255, 109, 52, 0.5), rgba(255, 255, 255, 0.7))',
                transformOrigin: 'right center',
              }}
            />

            {/* Subtitle with Star Gem */}
            <div
              ref={subWrapRef}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ color: '#ff6d34', fontSize: '11px' }}>✦</span>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(11px, 1.4vw, 13.5px)',
                  fontWeight: 600,
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.85)',
                }}
              >
                FULL-STACK & AI ENGINEER
              </span>
              <span style={{ color: '#ff6d34', fontSize: '11px' }}>✦</span>
            </div>

            {/* Right Rule */}
            <div
              ref={ruleRightRef}
              style={{
                flex: 1,
                height: '1px',
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.7), rgba(82, 39, 199, 0.5), transparent)',
                transformOrigin: 'left center',
              }}
            />
          </div>

          {/* 4. Luxury Edition Stamp Tagline */}
          <div
            ref={footerTagRef}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              PORTFOLIO // 2026 EDITION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
