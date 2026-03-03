import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const founders = [
  {
    initials: 'RS',
    name: 'Rebecca A. Stevens',
    role: 'Co-Founder',
    quote: '"Understanding the real constraints of small businesses isn\'t a nice-to-have — it\'s the foundation of everything we build."',
    bio: 'Focused on use-case validation, operational research design, and ensuring Paradyn\'s solutions address the genuine constraints of SMB environments.',
    gradient: 'linear-gradient(135deg, #37c2d7, #59bf8e)',
  },
  {
    initials: 'MW',
    name: 'Matthew B. Warren',
    role: 'Co-Founder',
    quote: '"Responsible AI deployment starts with humility — you have to deeply understand a workflow before you try to change it."',
    bio: 'Leads technical architecture, AI system design, and the integration framework development across Paradyn\'s research initiatives.',
    gradient: 'linear-gradient(135deg, #3cc1cb, #63bf7a)',
  },
];

export default function Founders() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="founders" style={{ position: 'relative', padding: '120px 24px', backgroundColor: 'var(--color-bg)', overflow: 'hidden' }}>
      <div className="glow-section" style={{ top: '30%' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p className="section-label" style={{ marginBottom: 16 }}>The Team</p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Built by people who
            <br />
            <span className="g-text">understand the problem</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 480, margin: '20px auto 0', lineHeight: 1.7 }}>
            Together, the Paradyn founding team brings practitioner-driven perspective
            to applied AI research for small businesses.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, maxWidth: 800, margin: '0 auto' }}>
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.22 } }}
              className="card-hi"
              style={{ padding: 36, cursor: 'default', position: 'relative', overflow: 'hidden' }}
            >
              {/* Inner corner glow */}
              <div aria-hidden="true" style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 120, pointerEvents: 'none',
                background: 'linear-gradient(to bottom, rgba(55,194,215,0.07), transparent)',
              }} />

              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: 60, height: 60, borderRadius: 18,
                  background: f.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, fontWeight: 800, color: '#fff',
                  marginBottom: 24,
                  boxShadow: '0 8px 24px rgba(55,194,215,0.3)',
                }}
              >
                {f.initials}
              </motion.div>

              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{f.name}</h3>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3ecfbe', marginBottom: 20 }}>
                {f.role}
              </p>

              {/* Quote */}
              <blockquote style={{
                fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7,
                borderLeft: '2px solid rgba(55,194,215,0.5)', paddingLeft: 14, marginBottom: 16,
                fontStyle: 'italic',
              }}>
                {f.quote}
              </blockquote>

              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{f.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
