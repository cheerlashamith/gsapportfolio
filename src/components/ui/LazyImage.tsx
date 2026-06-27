// src/components/ui/LazyImage.tsx
import { useState, useRef, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderColor?: string;
}

export function LazyImage({
  src, alt, style, className, placeholderColor = 'rgba(67,97,238,0.1)', ...props
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { rootMargin: '200px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden', ...style as React.CSSProperties }}>
      {/* Skeleton */}
      {!loaded && (
        <div
          className="skeleton"
          style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(90deg, ${placeholderColor} 25%, rgba(255,255,255,0.06) 50%, ${placeholderColor} 75%)`,
            backgroundSize: '200% 100%',
          }}
        />
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          className={className}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.4s ease',
            width: '100%', height: '100%', objectFit: 'cover',
          }}
          {...props}
        />
      )}
    </div>
  );
}
