import { motion } from 'framer-motion';

const links = [
  { label: 'Research', href: '#research' },
  { label: 'Approach', href: '#approach' },
  { label: 'Founders', href: '#founders' },
  { label: 'Contact',  href: '#contact'  },
];

export default function Nav() {
  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        backgroundColor: 'rgba(5,5,8,0.75)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 32px', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href={import.meta.env.BASE_URL} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{ width: 131, height: 44, flexShrink: 0 }}>
            <img
              src={`${import.meta.env.BASE_URL}/paradyne-horz_no-tag.svg`}
              alt="Paradyn"
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'left center', display: 'block' }}
            />
          </div>
        </a>

        {/* Links */}
        <ul style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map(l => (
            <li key={l.href} className="hidden md:block">
              <a
                href={l.href}
                style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(55,194,215,0.45)' }}
          whileTap={{ scale: 0.96 }}
          style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '9px 22px', borderRadius: 999,
            background: 'linear-gradient(135deg, #37c2d7, #59bf8e)',
            color: '#050508', fontSize: 13, fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 0 16px rgba(55,194,215,0.25)',
          }}
        >
          Contact
        </motion.a>
      </div>
    </motion.nav>
  );
}
