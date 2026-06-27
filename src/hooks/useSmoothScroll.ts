// src/hooks/useSmoothScroll.ts
import { useCallback } from 'react';
import { lenis } from '../main';

export function useSmoothScroll() {
  const scrollTo = useCallback((target: string | HTMLElement, offset = -80) => {
    if (typeof target === 'string') {
      const el = document.getElementById(target);
      if (el) lenis?.scrollTo(el, { offset, duration: 1.4 });
    } else {
      lenis?.scrollTo(target, { offset, duration: 1.4 });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    lenis?.scrollTo(0, { duration: 1.8 });
  }, []);

  return { scrollTo, scrollToTop };
}
