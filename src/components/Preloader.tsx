import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const line4Ref = useRef<HTMLDivElement>(null);
  const line5Ref = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
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
      const tl = gsap.timeline({
        onComplete: () => {
          clearTimeout(fallbackTimer);
          finish();
        },
      });

      // Initial States
      gsap.set(terminalRef.current, { scale: 0.9, opacity: 0, y: 30 });
      gsap.set([line1Ref.current, line2Ref.current, line3Ref.current, line4Ref.current, line5Ref.current], {
        opacity: 0,
        x: -10,
      });

      // Cursor blinking
      gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.45,
        ease: 'power1.inOut',
      });

      // 1. Terminal Window Floats in
      tl.to(terminalRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: 'power3.out',
      });

      // 2. Line 1: Command initialization
      tl.to(
        line1Ref.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.2,
          ease: 'power2.out',
        },
        '+=0.08'
      );

      // 3. Line 2: Module loading [LOADED]
      tl.to(
        line2Ref.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.2,
          ease: 'power2.out',
        },
        '+=0.12'
      );

      // 4. Line 3: Compiling AI & Projects [100%]
      tl.to(
        line3Ref.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.2,
          ease: 'power2.out',
        },
        '+=0.12'
      );

      // 5. Line 4: Welcome Highlight (CHEERLA SHAMITH)
      tl.to(
        line4Ref.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.25,
          ease: 'back.out(1.2)',
        },
        '+=0.1'
      );

      // 6. Line 5: Launch trigger
      tl.to(
        line5Ref.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.2,
          ease: 'power2.out',
        },
        '+=0.08'
      );

      // 7. Power surge glow on terminal window
      tl.to(terminalRef.current, {
        boxShadow: '0 0 50px rgba(82,39,199,0.7), 0 0 90px rgba(255,109,52,0.6)',
        borderColor: 'rgba(255, 109, 52, 0.6)',
        duration: 0.3,
        ease: 'power2.out',
      });

      // 8. Hold for a moment to appreciate
      tl.to({}, { duration: 0.5 });

      // 9. Zoom-burst transition
      tl.to(terminalRef.current, {
        scale: 1.08,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.35,
        ease: 'power3.in',
      });

      // 10. Curtain lift revealing the portfolio
      tl.to(
        curtainRef.current,
        {
          yPercent: -100,
          duration: 0.75,
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
      <div
        ref={curtainRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: '#06060c',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          willChange: 'transform',
        }}
      >
        {/* Ambient Backlight Glows */}
        <div
          style={{
            position: 'absolute',
            width: '550px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(82, 39, 199, 0.25) 0%, rgba(255, 109, 52, 0.12) 40%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        {/* TERMINAL WINDOW CARD */}
        <div
          ref={terminalRef}
          style={{
            position: 'relative',
            width: 'clamp(320px, 92vw, 680px)',
            borderRadius: '18px',
            background: 'linear-gradient(160deg, rgba(20, 20, 32, 0.95), rgba(10, 10, 18, 0.98))',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            boxShadow: '0 25px 70px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.1)',
            backdropFilter: 'blur(25px)',
            overflow: 'hidden',
            willChange: 'transform, opacity, box-shadow',
            userSelect: 'none',
          }}
        >
          {/* Terminal Title Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {/* macOS Frosted Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block', boxShadow: '0 0 6px rgba(255,95,86,0.6)' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block', boxShadow: '0 0 6px rgba(255,189,46,0.6)' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'inline-block', boxShadow: '0 0 6px rgba(39,201,63,0.6)' }} />
            </div>

            {/* Title / Host prompt */}
            <div
              style={{
                fontFamily: "'Space Grotesk', monospace",
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span style={{ color: '#5227c7' }}>●</span> shamith@portfolio-os:~
            </div>

            {/* Version Badge */}
            <span
              style={{
                fontFamily: "'Space Grotesk', monospace",
                fontSize: '11px',
                color: '#ff6d34',
                fontWeight: 700,
                background: 'rgba(255, 109, 52, 0.12)',
                padding: '2px 8px',
                borderRadius: '6px',
                border: '1px solid rgba(255, 109, 52, 0.25)',
              }}
            >
              v2.0
            </span>
          </div>

          {/* Terminal Console Content */}
          <div
            style={{
              padding: '24px 22px',
              fontFamily: "'Space Grotesk', monospace",
              fontSize: 'clamp(12px, 1.4vw, 14.5px)',
              lineHeight: 1.8,
              color: '#e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {/* Line 1: Init */}
            <div ref={line1Ref} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#ff6d34', fontWeight: 800 }}>❯</span>
              <span style={{ color: '#5227c7', fontWeight: 700 }}>shamith.init</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>--runtime=multi-agent-ai</span>
            </div>

            {/* Line 2: Modules Loaded */}
            <div ref={line2Ref} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
              <span style={{ color: 'rgba(255,255,255,0.65)' }}>
                ⚙ Loading Cores: <span style={{ color: '#fff', fontWeight: 600 }}>Multi-Agent Systems, Generative AI, Full-Stack</span>
              </span>
              <span style={{ color: '#27c93f', fontWeight: 700, background: 'rgba(39,201,63,0.12)', padding: '1px 8px', borderRadius: '4px', border: '1px solid rgba(39,201,63,0.3)' }}>
                ✔ LOADED
              </span>
            </div>

            {/* Line 3: Project Compilation */}
            <div ref={line3Ref} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
              <span style={{ color: 'rgba(255,255,255,0.65)' }}>
                ⚡ Deploying Artifacts: <span style={{ color: '#ff9e75' }}>MAESTRO, Gramin Sahayak, SmartSupport</span>
              </span>
              <span style={{ color: '#ff6d34', fontWeight: 700, background: 'rgba(255,109,52,0.12)', padding: '1px 8px', borderRadius: '4px', border: '1px solid rgba(255,109,52,0.3)' }}>
                ✔ 100%
              </span>
            </div>

            {/* Line 4: Welcome Highlight */}
            <div
              ref={line4Ref}
              style={{
                marginTop: '4px',
                padding: '12px 14px',
                borderRadius: '10px',
                background: 'linear-gradient(90deg, rgba(82, 39, 199, 0.25), rgba(255, 109, 52, 0.15))',
                borderLeft: '4px solid #ff6d34',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
              }}
            >
              <span style={{ color: '#ff6d34', fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                ACCESS GRANTED
              </span>
              <span style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 800, fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)', color: '#ffffff', letterSpacing: '0.04em' }}>
                Cheerla Shamith • AI & Full-Stack Engineer
              </span>
            </div>

            {/* Line 5: Launching with Blinking Cursor */}
            <div ref={line5Ref} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38ef7d', fontWeight: 600 }}>
              <span>🚀 Launching interface</span>
              <span
                ref={cursorRef}
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '16px',
                  background: '#ff6d34',
                  borderRadius: '1px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
