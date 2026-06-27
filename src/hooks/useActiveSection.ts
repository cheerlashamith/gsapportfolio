// src/hooks/useActiveSection.ts
import { useState, useEffect } from 'react';

const SECTIONS = ['hero','about','skills','projects','timeline','hackathons','certifications','achievements','contact'];

export function useActiveSection() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();

    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActive(id);
          }
        },
        { threshold: [0.3], rootMargin: '-70px 0px 0px 0px' }
      );
      observer.observe(el);
      observers.set(id, observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return active;
}

// Usage in Navbar.tsx:
// const active = useActiveSection();
// Then use active === link.id to show the active underline
