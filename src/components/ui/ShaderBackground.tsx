// src/components/ui/ShaderBackground.tsx
// Grid Morph sublayer — used in Hero at opacity 0.18

import { useEffect, useRef } from 'react';

type ShaderVariant = 'grid-morph' | 'plasma' | 'radial-burst' | 'particle-field';

interface ShaderBackgroundProps {
  variant?: ShaderVariant;
  opacity?: number;
  className?: string;
}

// Grid Morph — wavy colored squares
function GridMorphCanvas({ opacity }: { opacity: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let t = 0;
    let rafId: number;
    let lastTime = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const animate = (now: number) => {
      // Cap at 60 FPS
      if (now - lastTime < 16.67) { rafId = requestAnimationFrame(animate); return; }
      lastTime = now;
      t += 0.007;

      const { width, height } = canvas;
      ctx.fillStyle = '#060610';
      ctx.fillRect(0, 0, width, height);

      const gridSize = 55;
      const cols = Math.ceil(width  / gridSize) + 1;
      const rows = Math.ceil(height / gridSize) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const wave1 = Math.sin(i * 0.22 + t * 1.1) * Math.cos(j * 0.22 + t);
          const wave2 = Math.sin((i + j) * 0.18 + t * 0.8);
          const brightness = ((wave1 + wave2 + 2) / 4);

          // Alternate between blue and purple tones
          const hue = 240 + Math.sin(i * 0.1 + t) * 30;
          ctx.fillStyle = `hsla(${hue}, 70%, ${40 + brightness * 25}%, ${brightness * 0.3})`;
          ctx.fillRect(i * gridSize, j * gridSize, gridSize - 1, gridSize - 1);
        }
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        opacity,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

// Plasma — classic demo-scene plasma
function PlasmaCanvas({ opacity }: { opacity: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let t = 0;
    let rafId: number;
    let lastTime = 0;

    // Use a small off-screen resolution, then scale up (performance)
    const W = 160, H = 90;
    canvas.width  = W;
    canvas.height = H;
    canvas.style.imageRendering = 'pixelated';

    const animate = (now: number) => {
      if (now - lastTime < 33) { rafId = requestAnimationFrame(animate); return; } // 30 FPS max for plasma
      lastTime = now;
      t += 0.025;

      const imageData = ctx.createImageData(W, H);
      const data = imageData.data;

      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const v =
            Math.sin(x * 0.06 + t) +
            Math.sin(y * 0.06 + t) +
            Math.sin((x + y) * 0.05 + t) +
            Math.sin(Math.sqrt(x * x + y * y) * 0.07 + t);

          const c = (v + 4) / 8;
          const idx = (y * W + x) * 4;
          data[idx    ] = Math.sin(c * Math.PI * 2)         * 60 + 40;
          data[idx + 1] = Math.sin(c * Math.PI * 2 + 2.094) * 40 + 30;
          data[idx + 2] = Math.sin(c * Math.PI * 2 + 4.188) * 127 + 120;
          data[idx + 3] = 255;
        }
      }
      ctx.putImageData(imageData, 0, 0);
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        opacity,
        pointerEvents: 'none',
        zIndex: 0,
        imageRendering: 'pixelated',
      }}
    />
  );
}

// Radial Burst — orbiting glowing spheres
function RadialBurstCanvas({ opacity }: { opacity: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let t = 0;
    let rafId: number;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      t += 0.018;
      const { width, height } = canvas;
      const cx = width / 2, cy = height / 2;

      ctx.fillStyle = 'rgba(6,6,16,0.08)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 9; i++) {
        const angle  = (i / 9) * Math.PI * 2 + t;
        const r      = (Math.min(width, height) * 0.28) + Math.sin(t * 1.5 + i) * 50;
        const x      = cx + Math.cos(angle) * r;
        const y      = cy + Math.sin(angle) * r * 0.6;
        const hue    = (i / 9) * 360 + t * 40;
        const size   = 40 + Math.sin(t * 2 + i) * 15;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, size);
        grad.addColorStop(0, `hsla(${hue}, 80%, 65%, 0.7)`);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        opacity,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

export function ShaderBackground({ variant = 'grid-morph', opacity = 0.18, className = '' }: ShaderBackgroundProps) {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null; // Respect motion preference
  }

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}
    >
      {variant === 'grid-morph'    && <GridMorphCanvas   opacity={opacity} />}
      {variant === 'plasma'        && <PlasmaCanvas       opacity={opacity} />}
      {variant === 'radial-burst'  && <RadialBurstCanvas  opacity={opacity} />}
    </div>
  );
}
