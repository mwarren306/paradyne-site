import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const items = [
  {
    num: '01',
    title: 'Structured Knowledge Representations',
    body: 'Structuring operational data into usable knowledge representations that AI systems can reason over accurately and reliably.',
    wide: false,
  },
  {
    num: '02',
    title: 'Vectorized Knowledge Layers',
    body: 'Building vectorized knowledge layers for search, retrieval, and intelligent assistance across business operations.',
    wide: false,
  },
  {
    num: '03',
    title: 'Voice & Text Interaction Patterns',
    body: 'Designing voice-first and text-based interaction patterns tailored for real operators in everyday service environments.',
    wide: false,
  },
  {
    num: '04',
    title: 'Actionable Dashboard Environments',
    body: 'Prototyping dashboard environments that surface actionable operational context and support faster, better decisions.',
    wide: false,
  },
  {
    num: '05',
    title: 'SMB Integration & Adoption Framework',
    body: 'Establishing a repeatable integration and adoption framework for AI tools across the common systems SMBs already use.',
    wide: true,
  },
];

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="research" style={{ position: 'relative', padding: '120px 24px', backgroundColor: 'var(--color-surface)', overflow: 'hidden' }}>
      <div className="glow-section" style={{ top: -100 }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p className="section-label" style={{ marginBottom: 16 }}>What We're Researching</p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Built Intelligence Inside
            <br />
            <span className="g-text">Our AI Capabilities</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 520, margin: '20px auto 0', lineHeight: 1.7 }}>
            Each research thread is grounded in real-world pilot engagement and
            iterative prototyping across common SMB environments.
          </p>
        </motion.div>

        {/* Grid: 2-col then 1 wide */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="card"
              style={{
                padding: '28px 28px 32px',
                cursor: 'default',
                gridColumn: item.wide ? '1 / -1' : undefined,
              }}
            >
              <span style={{
                display: 'inline-block', marginBottom: 18,
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                color: '#37c2d7',
              }}>
                {item.num}
              </span>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 10, lineHeight: 1.4 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
