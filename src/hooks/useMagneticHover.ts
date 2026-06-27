// src/hooks/useMagneticHover.ts
import { useRef, useEffect } from 'react';

export function useMagneticHover(strength = 0.35, radius = 60) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < radius) {
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px) scale(1.12)`;
        el.style.transition = 'transform 0.15s ease-out';
      } else {
        el.style.transform = 'translate(0,0) scale(1)';
        el.style.transition = 'transform 0.5s ease-out';
      }
    };

    const onMouseLeave = () => {
      el.style.transform = 'translate(0,0) scale(1)';
      el.style.transition = 'transform 0.5s ease-out';
    };

    document.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [strength, radius]);

  return ref;
}
