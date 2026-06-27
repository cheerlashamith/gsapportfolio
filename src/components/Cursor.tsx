// src/components/Cursor.tsx
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 1024) return;

    const dot  = dotRef.current!;
    const ring = ringRef.current!;

    let mx = 0, my = 0;   // target (mouse)
    let rx = 0, ry = 0;   // ring current (lerped)
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };

    const lerp = () => {
      rx += (mx - rx) * 0.10;
      ry += (my - ry) * 0.10;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(lerp);
    };
    lerp();

    document.addEventListener('mousemove', onMouseMove);

    // Hover state
    const interactables = document.querySelectorAll<HTMLElement>('a, button, .interactive');
    const enterHover = () => {
      ring.style.width = ring.style.height = '70px';
      ring.style.borderColor = 'var(--accent)';
      dot.style.transform = dot.style.transform + ' scale(0)';
      dot.style.opacity = '0';
    };
    const leaveHover = () => {
      ring.style.width = ring.style.height = '44px';
      ring.style.borderColor = 'var(--primary)';
      dot.style.opacity = '1';
    };
    interactables.forEach(el => {
      el.addEventListener('mouseenter', enterHover);
      el.addEventListener('mouseleave', leaveHover);
    });

    const onMouseDown = () => { ring.style.width = ring.style.height = '28px'; };
    const onMouseUp   = () => { ring.style.width = ring.style.height = '44px'; };
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(rafId);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', enterHover);
        el.removeEventListener('mouseleave', leaveHover);
      });
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 1024) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 99999,
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--primary)', pointerEvents: 'none',
          transition: 'opacity 0.3s',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 99998,
          width: 44, height: 44, borderRadius: '50%',
          border: '2px solid var(--primary)',
          pointerEvents: 'none',
          transition: 'width 0.25s, height 0.25s, border-color 0.25s',
        }}
      />
    </>
  );
}
