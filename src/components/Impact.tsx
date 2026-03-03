import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const impacts = [
  {
    icon: (
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Reduced Admin Burden',
    body: 'Reduce administrative overhead for small businesses by automating data collection and workflow management.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Improved Visibility',
    body: 'Improve operational visibility across disconnected systems with unified, real-time context for decision-making.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Accessible AI Adoption',
    body: 'Lower the barriers to adopting modern AI tools — particularly for organizations without dedicated technical teams.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'SMB-First Design',
    body: 'Solutions designed from the ground up for small and mid-market businesses — not adapted from enterprise tools.',
  },
];

export default function Impact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="impact" className="section-pad" style={{ position: 'relative', backgroundColor: 'var(--color-surface)', overflow: 'hidden' }}>
      <div className="glow-section" style={{ top: -60 }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p className="section-label" style={{ marginBottom: 16 }}>Broader Impacts</p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Transforming Operations
            <br />
            <span className="g-text">for Real-World Businesses</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 520, margin: '20px auto 0', lineHeight: 1.7 }}>
            If validated, Paradyn's research may meaningfully reduce the gap between
            AI capability and adoption in the businesses that need it most.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="card"
              style={{ padding: 28, cursor: 'default' }}
            >
              <div className="icon-box" style={{ marginBottom: 20, color: '#a5b4fc' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
