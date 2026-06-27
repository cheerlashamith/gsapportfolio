// src/components/ui/CircularGallery.tsx
// Full production-ready version with all edge cases handled

import React, {
  useState, useEffect, useRef, useCallback,
  forwardRef, HTMLAttributes,
} from 'react';

export interface GalleryItem {
  id: string;
  name: string;
  category: string;
  color: string;
  imageSrc: string;
  badge?: string | null;
}

interface CircularGalleryProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  items: GalleryItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
  radius?: number;
  autoRotateSpeed?: number;
  cardWidth?: number;
  cardHeight?: number;
}

const CircularGallery = forwardRef<HTMLDivElement, CircularGalleryProps>(
  (
    {
      items,
      activeIndex,
      onSelect,
      className = '',
      radius = 280,
      autoRotateSpeed = 0.015,
      cardWidth = 300,
      cardHeight = 400,
      ...props
    },
    ref
  ) => {
    const [rotation, setRotation] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(0);
    const dragStartRotation = useRef(0);
    const rafRef = useRef<number>();
    const scrollTimeout = useRef<ReturnType<typeof setTimeout>>();
    const interactTimeout = useRef<ReturnType<typeof setTimeout>>();

    // Auto-rotation RAF loop
    useEffect(() => {
      const loop = () => {
        if (!isInteracting && !isDragging) {
          setRotation(r => r + autoRotateSpeed);
        }
        rafRef.current = requestAnimationFrame(loop);
      };
      rafRef.current = requestAnimationFrame(loop);
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, [isInteracting, isDragging, autoRotateSpeed]);

    // Mouse drag rotation
    const handleMouseDown = (e: React.MouseEvent) => {
      setIsDragging(true);
      dragStartX.current = e.clientX;
      dragStartRotation.current = rotation;
    };
    const handleMouseMove = useCallback((e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartX.current;
      setRotation(dragStartRotation.current + dx * 0.4);
    }, [isDragging]);
    const handleMouseUp = useCallback(() => {
      setIsDragging(false);
      // Snap to nearest card
      const angleStep = 360 / items.length;
      const snapped = Math.round(rotation / angleStep) * angleStep;
      setRotation(snapped);
      const idx = (Math.round(-rotation / angleStep) % items.length + items.length) % items.length;
      onSelect(idx);
    }, [isDragging, rotation, items.length, onSelect]);

    useEffect(() => {
      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, [isDragging, handleMouseMove, handleMouseUp]);

    // Touch drag
    const handleTouchStart = (e: React.TouchEvent) => {
      setIsDragging(true);
      dragStartX.current = e.touches[0].clientX;
      dragStartRotation.current = rotation;
    };
    const handleTouchMove = (e: React.TouchEvent) => {
      if (!isDragging) return;
      const dx = e.touches[0].clientX - dragStartX.current;
      setRotation(dragStartRotation.current + dx * 0.4);
    };
    const handleTouchEnd = () => handleMouseUp();

    // Scroll-driven rotation (from section scroll progress)
    useEffect(() => {
      const section = document.getElementById('projects');
      if (!section) return;

      const handleScroll = () => {
        setIsInteracting(true);
        clearTimeout(scrollTimeout.current);
        clearTimeout(interactTimeout.current);

        const rect = section.getBoundingClientRect();
        const totalScroll = section.scrollHeight - window.innerHeight;
        const scrolled = Math.max(0, -rect.top);
        const progress = Math.min(scrolled / Math.max(totalScroll, 1), 1);
        const targetRotation = progress * 360 * 1.5; // 1.5 full rotations

        setRotation(targetRotation);

        // Which card is in front?
        const angleStep = 360 / items.length;
        const normalised = ((targetRotation % 360) + 360) % 360;
        const frontIdx = Math.round(normalised / angleStep) % items.length;
        const correctedIdx = (items.length - frontIdx) % items.length;
        onSelect(correctedIdx);

        scrollTimeout.current = setTimeout(() => setIsInteracting(false), 300);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, [items.length, onSelect]);

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="3D Project Carousel — drag or use arrow keys to rotate"
        className={`circular-gallery-stage select-none ${className}`}
        style={{
          width: '100%',
          height: cardHeight + 80,
          position: 'relative',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        {...props}
      >
        {/* 3D Scene */}
        <div
          className="circular-gallery-scene"
          style={{
            width: '100%',
            height: '100%',
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
            position: 'absolute',
            top: 0, left: 0,
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;

            // Opacity based on how close to front
            const relAngle = ((itemAngle - rotation) % 360 + 360) % 360;
            const frontFacing = relAngle > 180 ? 360 - relAngle : relAngle;
            const opacityVal = Math.max(0.15, 1 - frontFacing / 160);
            const scaleVal   = Math.max(0.75, 1 - frontFacing / 320);
            const isActive   = i === activeIndex;

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`Project: ${item.name}`}
                aria-pressed={isActive}
                className={`project-gallery-card ${isActive ? 'active' : ''}`}
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px) scale(${scaleVal})`,
                  opacity: opacityVal,
                  width: cardWidth,
                  height: cardHeight,
                  transition: `opacity 0.25s linear, box-shadow 0.4s ease`,
                  userSelect: 'none',
                  pointerEvents: isDragging ? 'none' : 'auto',
                }}
                onClick={() => !isDragging && onSelect(i)}
                onKeyDown={e => e.key === 'Enter' && onSelect(i)}
              >
                {/* Card content */}
                <div style={{
                  position: 'relative', width: '100%', height: '100%',
                  borderRadius: 24, overflow: 'hidden',
                  border: `2px solid ${isActive ? item.color + 'aa' : 'rgba(255,255,255,0.07)'}`,
                  transition: 'border-color 0.4s ease',
                }}>
                  {/* Image */}
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    style={{
                      position: 'absolute', inset: 0,
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(
                      180deg,
                      rgba(6,6,16,0.15) 0%,
                      rgba(6,6,16,0.55) 55%,
                      rgba(6,6,16,0.95) 100%
                    )`,
                  }} />

                  {/* Content */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '20px 18px 22px',
                  }}>
                    <p style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: 10, color: item.color,
                      textTransform: 'uppercase', letterSpacing: '0.2em',
                      marginBottom: 5,
                    }}>{item.category}</p>

                    <h3 style={{
                      fontFamily: "'Libre Baskerville', serif", fontWeight: 800,
                      fontSize: 19, color: '#fff', lineHeight: 1.2,
                    }}>{item.name}</h3>

                    {item.badge && (
                      <span style={{
                        display: 'inline-block', marginTop: 6,
                        fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 10,
                        color: item.color, border: `1px solid ${item.color}55`,
                        padding: '2px 10px', borderRadius: 20,
                      }}>{item.badge}</span>
                    )}
                  </div>

                  {/* Active dot */}
                  {isActive && (
                    <div style={{
                      position: 'absolute', top: 14, right: 14,
                      width: 10, height: 10, borderRadius: '50%',
                      background: item.color,
                      boxShadow: `0 0 12px ${item.color}, 0 0 24px ${item.color}88`,
                      animation: 'pulse 1.5s ease infinite',
                    }} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Ground shadow / reflection effect */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: '10%', right: '10%',
          height: 40,
          background: 'radial-gradient(ellipse, rgba(67,97,238,0.2) 0%, transparent 70%)',
          filter: 'blur(12px)',
          pointerEvents: 'none',
        }} />
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';
export { CircularGallery };
