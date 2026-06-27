import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const textRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to('.preloader-wrap', {
          y: '-100%',
          duration: 1.2,
          ease: 'power4.inOut',
          onComplete: () => {
            document.body.style.overflow = '';
            onComplete();
          }
        });
      }
    });

    // Light up animation from left to right
    tl.to('.preloader-char', {
      color: '#ffffff',
      textShadow: '0 0 20px rgba(255,255,255,0.8)',
      stagger: 0.15,
      duration: 0.1,
      ease: 'none'
    })
    // Hold it lit up for a tiny bit
    .to({}, { duration: 0.3 })
    // Fade out text
    .to('.preloader-char', {
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power2.inOut'
    });

  }, [mounted, onComplete]);

  const name = "SHAMITH".split('');

  return (
    <div className="preloader-wrap" style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#000000', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
    }}>
      <div ref={textRef} style={{
        fontFamily: "'Libre Baskerville', serif", fontWeight: 700,
        fontSize: 'clamp(3rem, 10vw, 8rem)',
        letterSpacing: '0.1em',
        display: 'flex', gap: '2vw'
      }}>
        {name.map((char, i) => (
          <span key={i} className="preloader-char" style={{ color: '#333333', transition: 'color 0.1s' }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
