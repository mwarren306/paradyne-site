export default function Footer() {
  return (
    <footer id="footer" style={{
      padding: '32px 24px',
      backgroundColor: 'var(--color-bg)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>
          Paradyn<span style={{ background: 'linear-gradient(135deg,#37c2d7,#59bf8e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>.ai</span>
        </p>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>
          © {new Date().getFullYear()} Paradyn, LLC · All rights reserved · Tupelo, MS
        </p>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>
          R&amp;D Stage — Not yet offering public software access.
        </p>
      </div>
    </footer>
  );
}
