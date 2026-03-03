import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const steps = [
  {
    num: '01',
    label: 'Define',
    detail: 'Define the operational constraints and data requirements within each business environment before any technical work begins.',
    preview: 'Scope · Constraints · Requirements',
  },
  {
    num: '02',
    label: 'Structure',
    detail: 'Structure raw business data into clean, AI-ready knowledge representations using validated architectural patterns.',
    preview: 'Data Modeling · Knowledge Graphs · Schemas',
  },
  {
    num: '03',
    label: 'Validate',
    detail: 'Validate with real workflows through pilot-based learning and iterative feedback loops with actual business operators.',
    preview: 'Pilot Testing · Operator Feedback · Iteration',
  },
  {
    num: '04',
    label: 'Measure',
    detail: 'Measure outcomes rigorously before scaling — ensuring responsible, evidence-based deployment at every stage.',
    preview: 'Metrics · Outcome Tracking · Evidence',
  },
];

export default function Approach() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  return (
    <section id="approach" className="section-pad" style={{ position: 'relative', backgroundColor: 'var(--color-bg)', overflow: 'hidden' }}>
      <div className="glow-section" style={{ top: '20%' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p className="section-label" style={{ marginBottom: 16 }}>Our Approach</p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            AI That Works for You
            <br />
            <span className="g-text">Explore the Process</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '20px auto 0', lineHeight: 1.7 }}>
            Responsible deployment means defining constraints, structuring data,
            validating with real workflows, and measuring before scaling.
          </p>
        </motion.div>

        {/* Two-col: nav list + preview */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="approach-grid"
        >
          {/* Left: step list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {steps.map((s, i) => (
              <motion.button
                key={s.num}
                type="button"
                aria-pressed={active === i}
                aria-label={`Step ${s.num}: ${s.label}`}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.18 }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 16,
                  padding: '20px 24px', borderRadius: 14, cursor: 'pointer',
                  textAlign: 'left', border: 'none',
                  background: active === i ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)',
                  borderWidth: 1, borderStyle: 'solid',
                  borderColor: active === i ? 'rgba(55,194,215,0.35)' : 'rgba(255,255,255,0.06)',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
              >
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
                  color: active === i ? '#37c2d7' : 'rgba(255,255,255,0.55)',
                  paddingTop: 3, flexShrink: 0,
                  transition: 'color 0.2s',
                }}>
                  {s.num}
                </span>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: active === i ? '#fff' : 'rgba(255,255,255,0.7)', marginBottom: 4, transition: 'color 0.2s' }}>
                    {s.label}
                  </p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{s.detail}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: preview panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="card-hi"
            style={{
              padding: 40, display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center', textAlign: 'center',
              minHeight: 280, position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Inner glow */}
            <div aria-hidden="true" style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(55,194,215,0.10) 0%, transparent 70%)',
            }} />
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
              color: '#37c2d7', marginBottom: 16, textTransform: 'uppercase',
            }}>
              Step {steps[active].num}
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 16, letterSpacing: '-0.01em' }}>
              {steps[active].label}
            </h3>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center',
            }}>
              {steps[active].preview.split(' · ').map(tag => (
                <span key={tag} className="pill-badge" style={{ fontSize: 12 }}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
