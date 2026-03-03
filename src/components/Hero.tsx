import { motion } from 'framer-motion';

const up = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay } },
});

/* Tiny SVG chip icon for the badge */
const ChipIcon = ({ 'aria-hidden': ariaHidden }: { 'aria-hidden'?: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden={ariaHidden}>
    <rect x="3" y="3" width="8" height="8" rx="2" stroke="#7dd8e8" strokeWidth="1.2"/>
    <path d="M5 1v2M7 1v2M9 1v2M5 11v2M7 11v2M9 11v2M1 5h2M1 7h2M1 9h2M11 5h2M11 7h2M11 9h2" stroke="#7dd8e8" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '120px 24px 80px', textAlign: 'center',
      overflow: 'hidden', backgroundColor: 'var(--color-bg)',
    }}>
      {/* Star field */}
      <div className="star-field" aria-hidden="true" />

      {/* Atmospheric glow */}
      <div className="glow-hero" aria-hidden="true" />

      {/* Pill badge */}
      <motion.div
        variants={up(0.05)}
        initial="hidden"
        animate="show"
        className="pill-badge"
        style={{ marginBottom: 32 }}
        aria-label="Start Your Journey with AI Research"
      >
        <ChipIcon aria-hidden="true" />
        Start Your Journey with AI Research
      </motion.div>

      {/* Headline */}
      <motion.h1
        variants={up(0.18)}
        initial="hidden"
        animate="show"
        style={{
          fontSize: 'clamp(42px, 7vw, 80px)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          maxWidth: 820,
          margin: '0 auto 20px',
        }}
      >
        Applied AI Infrastructure
        <br />
        <span className="g-text">for Real Businesses</span>
      </motion.h1>

      {/* Sub */}
      <motion.p
        variants={up(0.32)}
        initial="hidden"
        animate="show"
        style={{
          fontSize: 18, lineHeight: 1.7, maxWidth: 560,
          color: 'rgba(255,255,255,0.7)', margin: '0 auto 40px',
        }}
      >
        From research to innovation — our applied AI solutions help service-oriented
        businesses structure data, reduce friction, and grow stronger.
      </motion.p>

      {/* CTA row */}
      <motion.div
        variants={up(0.44)}
        initial="hidden"
        animate="show"
        style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {/* Primary: dark pill with arrow */}
        <motion.a
          href="#research"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 28px', borderRadius: 999,
            backgroundColor: '#fff', color: '#050508',
            fontSize: 15, fontWeight: 700, textDecoration: 'none',
          }}
        >
          <span aria-hidden="true" style={{
            width: 28, height: 28, borderRadius: '50%',
            backgroundColor: '#050508',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          See Our Research
        </motion.a>

        {/* Secondary: ghost */}
        <motion.a
          href="#founders"
          whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.25)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 28px', borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.14)',
            color: 'rgba(255,255,255,0.7)', fontSize: 15, fontWeight: 600,
            textDecoration: 'none', backgroundColor: 'transparent',
          }}
        >
          Meet the Team
        </motion.a>
      </motion.div>

      {/* Trusted-by bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        style={{ marginTop: 72 }}
      >
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', marginBottom: 20, textTransform: 'uppercase' }}>
          NSF-aligned · R&amp;D Stage · Pilot-Based Research
        </p>
        <div style={{ display: 'flex', gap: 40, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Data Structuring', 'Knowledge Layers', 'Voice AI', 'SMB Integration', 'Pilot Programs'].map(tag => (
            <span key={tag} style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{tag}</span>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue — decorative only */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
