import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
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

      // 1. Initial CSS states
      gsap.set(strips, { yPercent: 0 });
      gsap.set(flareRef.current, { scaleX: 0, opacity: 0, scaleY: 1 });
      gsap.set(emblemRef.current, { scale: 0.65, opacity: 0, filter: 'blur(10px)' });
      gsap.set(titleRef.current, { opacity: 0, y: 30, letterSpacing: '0.04em' });
      gsap.set([ruleLeftRef.current, ruleRightRef.current], { scaleX: 0 });
      gsap.set(subtitleWrapRef.current, { opacity: 0, y: 14 });

      // 2. Anamorphic horizontal lens flare expands from center
      tl.to(flareRef.current, {
        scaleX: 1,
        opacity: 1,
        duration: 0.55,
        ease: 'power3.out',
      })
      // 3. Studio Monogram CS rises from the flare with spring physics
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
          scaleY: 12,
          filter: 'blur(25px)',
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.45'
      );

      // 4. Headline CHEERLA SHAMITH enters with tracking expansion
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

      // 5. Specular metallic shimmer sweeps across the typography
      tl.fromTo(
        titleRef.current,
        { backgroundPosition: '220% center' },
        {
          backgroundPosition: '-50% center',
          duration: 1.1,
          ease: 'power2.inOut',
        },
        '-=0.55'
      );

      // 6. Hairline rules expand and subtitle reveals
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
        subtitleWrapRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        '-=0.5'
      );

      // 7. Cinematic hold to admire
      tl.to({}, { duration: 0.45 });

      // 8. Typography dissolves forward with depth
      tl.to(contentRef.current, {
        opacity: 0,
        scale: 1.05,
        y: -25,
        filter: 'blur(6px)',
        duration: 0.4,
        ease: 'power3.in',
      });

      // 9. Concept 4 Staggered 5-Column Shutter Wave Reveal
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
      {/* 5 VERTICAL PURE BLACK SHUTTER STRIPS (Seamless Wave Reveal) */}
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
              width: '20.2%', // slight overlap guarantees zero subpixel lines on any DPI scaling
              background: '#000000', // PURE BLACK
              border: 'none',
              outline: 'none',
              willChange: 'transform',
            }}
          />
        ))}
      </div>

      {/* AMBIENT LUXURY SPOTLIGHTS */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '30%',
          width: '600px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(82, 39, 199, 0.24) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '30%',
          width: '550px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255, 109, 52, 0.16) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* ANAMORPHIC HORIZONTAL LENS FLARE */}
      <div
        ref={flareRef}
        style={{
          position: 'absolute',
          top: '46%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(280px, 80vw, 750px)',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(82, 39, 199, 0.7) 20%, #ffffff 50%, rgba(255, 109, 52, 0.7) 80%, transparent 100%)',
          boxShadow: '0 0 25px rgba(255, 255, 255, 0.9), 0 0 50px rgba(82, 39, 199, 0.8), 0 0 80px rgba(255, 109, 52, 0.6)',
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
          maxWidth: '92vw',
          margin: '0 auto',
        }}
      >
        {/* 1. Studio Monogram Emblem */}
        <div
          ref={emblemRef}
          style={{
            position: 'relative',
            width: '84px',
            height: '84px',
            marginBottom: '30px',
            willChange: 'transform, opacity, filter',
          }}
        >
          {/* Luminous Pulsing Halo */}
          <div
            style={{
              position: 'absolute',
              inset: '-5px',
              borderRadius: '28px',
              background: 'linear-gradient(135deg, rgba(82, 39, 199, 0.75), rgba(255, 109, 52, 0.65))',
              filter: 'blur(12px)',
              opacity: 0.85,
            }}
          />

          {/* Pure Black Frosted Glass Emblem */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '22px',
              background: 'linear-gradient(145deg, #11111a, #07070d)',
              border: '1.5px solid rgba(255, 255, 255, 0.22)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 35px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.3)',
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
            fontSize: 'clamp(2.1rem, 5.8vw, 4.2rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: '20px',
            textTransform: 'uppercase',
            willChange: 'transform, opacity, letter-spacing, background-position',
            // Liquid metallic shimmer gradient (silver, white, orange, purple)
            background: 'linear-gradient(105deg, #a0a0b8 0%, #ffffff 25%, #ff9e75 50%, #ffffff 75%, #8c7ae6 100%)',
            backgroundSize: '250% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 10px 40px rgba(0,0,0,0.5)',
          }}
        >
          CHEERLA SHAMITH
        </h1>

        {/* 3. Hairline Rule & Subtitle Presentation */}
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
          {/* Left Hairline Rule */}
          <div
            ref={ruleLeftRef}
            style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255, 109, 52, 0.5), rgba(255, 255, 255, 0.7))',
              transformOrigin: 'right center',
            }}
          />

          {/* Subtitle with Star Gem Accents */}
          <div
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
                fontSize: 'clamp(11.5px, 1.4vw, 13.5px)',
                fontWeight: 600,
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.85)',
              }}
            >
              FULL-STACK DEVELOPER • AI SYSTEMS ENGINEER
            </span>
            <span style={{ color: '#ff6d34', fontSize: '11px' }}>✦</span>
          </div>

          {/* Right Hairline Rule */}
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
      </div>
    </div>
  );
}
