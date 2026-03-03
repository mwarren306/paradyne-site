import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="section-pad-contact" style={{ position: 'relative', backgroundColor: 'var(--color-surface)', overflow: 'hidden' }}>
      {/* Large atmospheric glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background:
          'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(55,194,215,0.18) 0%, transparent 65%), ' +
          'radial-gradient(ellipse 50% 40% at 50% 80%, rgba(89,191,142,0.11) 0%, transparent 55%)',
      }} />

      <div ref={ref} style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label" style={{ marginBottom: 16 }}>Partnerships &amp; Research Collaboration</p>

          <h2 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24 }}>
            Let's Build Something
            <br />
            <span className="g-text">Intelligent Together</span>
          </h2>

          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: 500, margin: '0 auto 48px' }}>
            We're exploring partnerships with research institutions, SMB pilot partners,
            and organizations that support rigorous, applied AI research.
          </p>

          {/* CTA button — Ganify dark-pill style */}
          <motion.a
            href="mailto:contact@paradyn.ai"
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(55,194,215,0.45)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '16px 32px', borderRadius: 999,
              background: 'linear-gradient(135deg, #37c2d7, #59bf8e)',
              color: '#050508', fontSize: 16, fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 0 28px rgba(55,194,215,0.30)',
            }}
          >
            <span aria-hidden="true" style={{
              width: 32, height: 32, borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </span>
            Get in Touch
          </motion.a>

          <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
            contact@paradyn.ai · Tupelo, MS · Paradyn, LLC
          </p>
        </motion.div>
      </div>
    </section>
  );
}
