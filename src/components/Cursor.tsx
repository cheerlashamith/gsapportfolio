// src/components/Cursor.tsx
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth <= 1024) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -100, my = -100; // mouse target
    let rx = -100, ry = -100; // ring position (lerped)
    let isRunning = false;
    let rafId: number;

    const lerp = () => {
      const dx = mx - rx;
      const dy = my - ry;
      rx += dx * 0.15;
      ry += dy * 0.15;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;

      // Sleep loop if close enough to mouse
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        rafId = requestAnimationFrame(lerp);
      } else {
        isRunning = false;
      }
    };

    const wakeLoop = () => {
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(lerp);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      wakeLoop();
    };

    // Event delegation for hover states
    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a, button, [role="button"], input, textarea, select, .interactive');
      if (target) {
        ring.style.width = '64px';
        ring.style.height = '64px';
        ring.style.borderColor = 'var(--secondary)';
        dot.style.opacity = '0';
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a, button, [role="button"], input, textarea, select, .interactive');
      if (target) {
        ring.style.width = '40px';
        ring.style.height = '40px';
        ring.style.borderColor = 'var(--primary)';
        dot.style.opacity = '1';
      }
    };

    const onMouseDown = () => {
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(0.8)`;
    };
    const onMouseUp = () => {
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(1)`;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 99999,
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--primary)', pointerEvents: 'none',
          transition: 'opacity 0.2s ease',
          willChange: 'transform, opacity',
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 99998,
          width: 40, height: 40, borderRadius: '50%',
          border: '2px solid var(--primary)',
          pointerEvents: 'none',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
          willChange: 'transform',
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />
    </>
  );
}
