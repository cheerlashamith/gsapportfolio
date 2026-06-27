// src/components/ScrollProgressBar.tsx
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'var(--gradient)',
        transformOrigin: 'left',
        zIndex: 10001,
        pointerEvents: 'none',
      }}
    />
  );
}
// Add <ScrollProgressBar /> to App.tsx after <Navbar />
