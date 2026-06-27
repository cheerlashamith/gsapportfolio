// src/components/ui/ScrollingText.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollingTextProps {
  text: string;
  direction?: 'left' | 'right';
  fontSize?: string;
  opacity?: number;
}

export function ScrollingText({
  text,
  direction = 'left',
  fontSize = 'clamp(4rem, 10vw, 9rem)',
  opacity = 0.06,
}: ScrollingTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? ['0%', '-25%'] : ['-25%', '0%']
  );

  const repeated = `${text} • `.repeat(6);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ overflow: 'hidden', pointerEvents: 'none', width: '100%' }}
    >
      <motion.div
        style={{ x, opacity, whiteSpace: 'nowrap' }}
      >
        <span style={{
          fontFamily: "'Libre Baskerville', serif", fontWeight: 900,
          fontSize, color: 'currentColor',
          textTransform: 'uppercase', letterSpacing: '-0.04em',
        }}>
          {repeated}
        </span>
      </motion.div>
    </div>
  );
}

// Usage in AchievementsSection ABOVE the grid:
// <ScrollingText text="ACHIEVEMENTS" direction="left" opacity={0.05} />
// <ScrollingText text="RECOGNITION" direction="right" opacity={0.04} />
