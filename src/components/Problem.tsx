import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  {
    icon: (
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="9" height="9" rx="2"/><rect x="13" y="7" width="9" height="9" rx="2"/>
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 16v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2"/>
      </svg>
    ),
    title: 'Disconnected Tools',
    body: 'Spreadsheets, email, accounting, POS, inventory, and CRM operating in silos — creating duplicated effort and inconsistent data.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Low Operational Visibility',
    body: 'Day-to-day operations lack real-time context, leaving businesses reactive rather than data-informed and proactive.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Blocked AI Adoption',
    body: 'Poor data structure, lack of integration, and unclear workflow design prevent small businesses from meaningfully adopting AI.',
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="problem" style={{ position: 'relative', padding: '120px 24px', backgroundColor: 'var(--color-bg)', overflow: 'hidden' }}>
      {/* Section glow */}
      <div className="glow-section" style={{ top: 0 }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p className="section-label" style={{ marginBottom: 16 }}>The Problem</p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Small businesses are drowning in
            <br />
            <span className="g-text">disconnected data</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 520, margin: '20px auto 0', lineHeight: 1.7 }}>
            Many SMBs operate across fragmented tools, resulting in duplicated effort,
            inconsistent data, and low visibility into day-to-day operations.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.22 } }}
              className="card"
              style={{ padding: 28, cursor: 'default' }}
            >
              {/* Icon box */}
              <div className="icon-box" style={{ marginBottom: 20, color: '#a5b4fc' }}>
                {c.icon}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{c.title}</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
