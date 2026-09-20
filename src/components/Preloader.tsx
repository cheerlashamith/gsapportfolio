import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const STATUS_MESSAGES = [
  'INITIALIZING WORKSPACE...',
  'BOOTING MULTI-AGENT RUNTIMES...',
  'OPTIMIZING NEURAL PIPELINES...',
  'COMPILING FULL-STACK CANVAS...',
  'SYSTEM ONLINE • ACCESS GRANTED',
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topCurtainRef = useRef<HTMLDivElement>(null);
  const bottomCurtainRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);

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
    }, 4000);

    const ctx = gsap.context(() => {
      const counterObj = { value: 0 };

      const tl = gsap.timeline({
        onComplete: () => {
          clearTimeout(fallbackTimer);
          finish();
        },
      });

      // 1. Initial State
      gsap.set([topCurtainRef.current, bottomCurtainRef.current], { yPercent: 0 });
      gsap.set(contentRef.current, { opacity: 0, y: 20 });
      gsap.set(progressBarRef.current, { scaleX: 0, transformOrigin: 'left center' });
      gsap.set(emblemRef.current, { scale: 0.85, opacity: 0 });

      // 2. Fade in central content & emblem
      tl.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      })
      .to(
        emblemRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.4)',
        },
        '-=0.3'
      );

      // 3. Counter & Progress Bar smoothly rise from 0 to 100 via direct DOM manipulation
      tl.to(
        counterObj,
        {
          value: 100,
          duration: 1.6,
          ease: 'power2.inOut',
          onUpdate: () => {
            const val = Math.floor(counterObj.value);
            const formatted = val < 10 ? `0${val}` : `${val}`;
            if (counterRef.current) {
              counterRef.current.textContent = formatted;
            }

            // Change status text at key milestones
            if (statusRef.current) {
              if (val < 25) {
                statusRef.current.textContent = STATUS_MESSAGES[0];
              } else if (val < 55) {
                statusRef.current.textContent = STATUS_MESSAGES[1];
              } else if (val < 80) {
                statusRef.current.textContent = STATUS_MESSAGES[2];
              } else if (val < 98) {
                statusRef.current.textContent = STATUS_MESSAGES[3];
              } else {
                statusRef.current.textContent = STATUS_MESSAGES[4];
              }
            }
          },
        },
        '-=0.2'
      );

      tl.to(
        progressBarRef.current,
        {
          scaleX: 1,
          duration: 1.6,
          ease: 'power2.inOut',
        },
        '<'
      );

      // 4. Milestone 100% Impact Pulse
      tl.to(counterRef.current, {
        scale: 1.08,
        color: '#ffffff',
        textShadow: '0 0 30px rgba(255, 109, 52, 0.9), 0 0 65px rgba(82, 39, 199, 1)',
        duration: 0.18,
        ease: 'power2.out',
      })
      .to(counterRef.current, {
        scale: 1,
        duration: 0.15,
      });

      // 5. Quick hold for visual appreciation
      tl.to({}, { duration: 0.25 });

      // 6. Content dissolves
      tl.to(contentRef.current, {
        opacity: 0,
        scale: 0.95,
        y: -20,
        duration: 0.35,
        ease: 'power3.in',
      });

      // 7. Dual Shutter Curtains split apart (Top goes UP, Bottom goes DOWN)
      tl.to(
        topCurtainRef.current,
        {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
        },
        '-=0.1'
      )
      .to(
        bottomCurtainRef.current,
        {
          yPercent: 100,
          duration: 0.8,
          ease: 'power4.inOut',
        },
        '<'
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
        pointerEvents: 'auto',
        overflow: 'hidden',
      }}
    >
      {/* TOP CURTAIN HALF */}
      <div
        ref={topCurtainRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50.5%', // slight overlap to prevent 1px subpixel seam
          background: '#07070e',
          zIndex: 2,
          willChange: 'transform',
        }}
      >
        {/* Subtle top tech grid ambient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(82, 39, 199, 0.12) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.7,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* BOTTOM CURTAIN HALF */}
      <div
        ref={bottomCurtainRef}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50.5%', // slight overlap
          background: '#07070e',
          zIndex: 2,
          willChange: 'transform',
        }}
      >
        {/* Subtle bottom tech grid ambient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255, 109, 52, 0.08) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.7,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* CENTRAL CONTENT CONTAINER */}
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
          userSelect: 'none',
          willChange: 'transform, opacity',
        }}
      >
        {/* Ambient Center Glow */}
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(82, 39, 199, 0.28) 0%, rgba(255, 109, 52, 0.12) 40%, transparent 70%)',
            filter: 'blur(70px)',
            pointerEvents: 'none',
            zIndex: -1,
          }}
        />

        {/* 1. Monogram Crest with spinning conic aura */}
        <div
          ref={emblemRef}
          style={{
            position: 'relative',
            width: '74px',
            height: '74px',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Spinning Conic Glow Ring */}
          <div
            className="animate-[spin_4s_linear_infinite]"
            style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '24px',
              background: 'conic-gradient(from 0deg, #5227c7, #ff6d34, #5227c7)',
              opacity: 0.85,
              filter: 'blur(8px)',
            }}
          />

          {/* Inner Emblem Card */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              background: 'linear-gradient(145deg, #161626, #0c0c16)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: '24px',
                background: 'linear-gradient(135deg, #ffffff 30%, #ff6d34 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '1px',
              }}
            >
              CS
            </span>
          </div>
        </div>

        {/* 2. Candidate Name & Specialization Tag */}
        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <h1
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '0.06em',
              marginBottom: '6px',
            }}
          >
            CHEERLA SHAMITH
          </h1>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(11px, 1.2vw, 13px)',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.5)',
              fontWeight: 600,
            }}
          >
            Full-Stack Developer & AI Engineer
          </p>
        </div>

        {/* 3. High-Tech Giant Number Counter */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <span
            ref={counterRef}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
              lineHeight: 1,
              background: 'linear-gradient(180deg, #ffffff 40%, rgba(255, 255, 255, 0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
              display: 'inline-block',
              minWidth: '2.3ch',
              textAlign: 'right',
            }}
          >
            00
          </span>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.4rem, 2.5vw, 2.4rem)',
              color: '#ff6d34',
              marginLeft: '4px',
            }}
          >
            %
          </span>
        </div>

        {/* 4. Precision Progress Bar */}
        <div
          style={{
            width: 'clamp(240px, 45vw, 340px)',
            height: '3px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '999px',
            overflow: 'hidden',
            marginBottom: '18px',
            position: 'relative',
          }}
        >
          <div
            ref={progressBarRef}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, #5227c7 0%, #ff6d34 100%)',
              borderRadius: '999px',
              boxShadow: '0 0 12px rgba(255, 109, 52, 0.8)',
            }}
          />
        </div>

        {/* 5. Live Technical Status Ticker */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '9px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#ff6d34',
              boxShadow: '0 0 8px #ff6d34',
            }}
            className="animate-pulse"
          />
          <p
            ref={statusRef}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              color: 'rgba(255, 255, 255, 0.65)',
              margin: 0,
              textTransform: 'uppercase',
            }}
          >
            INITIALIZING WORKSPACE...
          </p>
        </div>
      </div>
    </div>
  );
}
