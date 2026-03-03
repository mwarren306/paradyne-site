import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    return scrollYProgress.on('change', v => setVisible(v > 0.06));
  }, [scrollYProgress]);

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <motion.button
      onClick={handleClick}
      aria-label="Back to top"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.7 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        width: 52,
        height: 52,
        borderRadius: '50%',
        background: 'rgba(6, 9, 10, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.08)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 200,
        pointerEvents: visible ? 'auto' : 'none',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
      }}
    >
      {/* Progress ring */}
      <svg
        width="52"
        height="52"
        aria-hidden="true"
        style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}
      >
        <defs>
          <linearGradient id="stt-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#37c2d7" />
            <stop offset="100%" stopColor="#59bf8e" />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle
          cx="26" cy="26" r="23"
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="2"
        />
        {/* Animated progress arc */}
        <motion.circle
          cx="26" cy="26" r="23"
          fill="none"
          stroke="url(#stt-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength: progress }}
        />
      </svg>

      {/* Arrow icon */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <path
          d="M7 11V3M3.5 6.5L7 3l3.5 3.5"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.button>
  );
}
