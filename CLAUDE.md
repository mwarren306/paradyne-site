# Paradyn Site — Design System Rules for Figma Integration

## Project Overview

**Framework:** Astro 5 (static output) + React + Framer Motion
**Styling:** Tailwind CSS 4 via `@tailwindcss/vite` (NOT `@astrojs/tailwind`)
**Package manager:** npm
**Build:** `npm run dev` / `npm run build` / `npm run preview`

---

## 1. Design Tokens

All tokens are defined as CSS custom properties inside a `@theme {}` block in:

**`src/styles/global.css`**

```css
@theme {
  /* Backgrounds */
  --color-bg:        #050508;           /* page background */
  --color-surface:   #06090a;           /* section variant bg (Contact) */
  --color-card:      rgba(255,255,255,0.03);
  --color-border:    rgba(255,255,255,0.07);
  --color-border-hi: rgba(255,255,255,0.12);

  /* Brand palette — derived from Paradyn logo gradient */
  --color-primary:   #37c2d7;           /* teal */
  --color-secondary: #59bf8e;           /* green */

  /* Text */
  --color-text:      #ffffff;
  --color-muted:     #7a8a88;
  --color-muted-hi:  #a0b8b4;

  /* Typography */
  --font-family-sans: 'Inter', system-ui, sans-serif;
}
```

**Token usage in components:** Always use `var(--color-bg)` etc. in inline `style` props. Do NOT hardcode raw hex values for backgrounds or borders; use the token.

**Hard-coded accent values** (not in `@theme`, but used consistently):
- `#37c2d7` — primary teal (matches `--color-primary`)
- `#59bf8e` — secondary green (matches `--color-secondary`)
- `#3ecfbe` — label/role text teal (slightly lighter)
- `#7dd8e8` — pill badge text / icon stroke
- `rgba(255,255,255,0.45)` — body paragraph muted text
- `rgba(255,255,255,0.25)` — secondary muted text
- `rgba(255,255,255,0.22)` — tertiary muted text

---

## 2. Brand Gradient

The core brand gradient runs **teal → green** at 135°:

```css
linear-gradient(135deg, #37c2d7 0%, #59bf8e 100%)
```

This appears in:
- `.g-text` — gradient clip on text spans
- Nav CTA button fill
- Contact CTA button fill
- Founder avatar backgrounds
- `.icon-box` background (at 20% opacity)

**Never use blue/violet or cyan-only.** The correct palette is teal→green derived from the Paradyn logo.

---

## 3. Utility Classes (Global CSS)

These classes are defined in `src/styles/global.css` and used directly via `className`:

| Class | Purpose |
|---|---|
| `.g-text` | Gradient text (teal→green clip) |
| `.card` | Glass card: `rgba(255,255,255,0.025)` bg, `0.07` border, `border-radius: 16px` |
| `.card-hi` | Elevated glass card: `rgba(255,255,255,0.045)` bg, `0.11` border, `border-radius: 16px` |
| `.icon-box` | 44×44px icon container, teal gradient bg at 20% opacity, `border-radius: 12px` |
| `.pill-badge` | Inline badge pill, teal bg at 9% opacity, pill shape |
| `.section-label` | 11px ALL CAPS label, `letter-spacing: 0.12em`, color `#3ecfbe` |
| `.glow-hero` | Full-bleed atmospheric glow overlay (Hero only) |
| `.glow-section` | Per-section radial glow, centered, 700×350px |
| `.star-field` | Absolute overlay with radial-gradient star dots |
| `.divider` | 1px horizontal gradient divider (teal fade) |

**Add new utility classes here only if they are reused across ≥2 components.** Otherwise use inline styles.

---

## 4. Component Architecture

### Location
All UI components live in `src/components/` as React TSX files. Each file exports a single default component corresponding to one page section.

### Component List (page order)
```
src/components/
├── Nav.tsx          # Fixed top nav with blur backdrop
├── Hero.tsx         # Full-screen hero with badge + headline + CTA
├── AnimateIn.tsx    # Reusable scroll-triggered animation wrapper
├── Problem.tsx      # 3-column card grid
├── Research.tsx     # Numbered research list
├── Approach.tsx     # 2-col interactive step selector (useState)
├── Impact.tsx       # 2-col: heading + checklist
├── Founders.tsx     # Founder profile cards
├── Contact.tsx      # Email CTA section
└── Footer.tsx       # Footer
```

### Astro Integration
All components are mounted with `client:load` in `src/pages/index.astro`:

```astro
<Nav client:load />
<Hero client:load />
<!-- etc. -->
```

Do NOT use `client:idle` or `client:visible` — all components use `client:load`.

### AnimateIn Wrapper
The `AnimateIn` component (`src/components/AnimateIn.tsx`) is a reusable scroll-triggered wrapper. Use it for any new content that should animate on scroll:

```tsx
import AnimateIn from './AnimateIn';

<AnimateIn delay={0.1} direction="up">
  <YourContent />
</AnimateIn>

// Props:
// delay?: number       — stagger delay in seconds (default: 0)
// direction?: 'up' | 'left' | 'none'   (default: 'up')
// className?: string
```

---

## 5. Styling Approach

### Hybrid: Inline Styles + Utility Classes

This project uses **inline `style` props** as the primary styling method inside React components, combined with **CSS utility classes** (via `className`) for repeating UI patterns.

```tsx
// Pattern: utility class for structure, inline style for one-off values
<div className="card" style={{ padding: 28, cursor: 'default' }}>
  <div className="icon-box" style={{ marginBottom: 20, color: '#a5b4fc' }}>
    ...
  </div>
  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Title</h3>
  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>Body</p>
</div>
```

### Tailwind 4 Usage
Tailwind 4 utility classes are used **sparingly**, mainly for:
- Responsive visibility: `className="hidden md:block"`
- Layout helpers: `className="flex-col md:grid"`
- Body base: `class="min-h-screen antialiased"` (in Layout.astro)

Do NOT use Tailwind for colors, spacing, or typography in components — use inline styles instead.

### Responsive Patterns

| Pattern | Implementation |
|---|---|
| Fluid typography | `fontSize: 'clamp(30px, 4vw, 48px)'` |
| Fluid hero headline | `fontSize: 'clamp(42px, 7vw, 80px)'` |
| Responsive grids | `gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'` |
| Max content width | `maxWidth: 1100` or `maxWidth: 1200` with `margin: '0 auto'` |
| Section padding | `padding: '120px 24px'` (top/bottom 120px, side 24px) |
| Hide on mobile | `className="hidden md:block"` |

---

## 6. Animation Patterns (Framer Motion)

### Entry Animation Variants
```tsx
// Standard "up" variant used in Hero:
const up = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }
  },
});

// Usage with variants:
<motion.div variants={up(0.18)} initial="hidden" animate="show">
```

### Scroll-triggered Pattern (most sections)
```tsx
const ref = useRef(null);
const inView = useInView(ref, { once: true, margin: '-80px' });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 24 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.65 }}
>
```

### Stagger Delays
Cards in a grid use staggered delays: `delay: 0.12 + i * 0.12`

### Hover / Tap Interactions
```tsx
// Card hover lift:
whileHover={{ y: -8, transition: { duration: 0.22 } }}

// Button hover/tap:
whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(55,194,215,0.45)' }}
whileTap={{ scale: 0.97 }}

// Nav link hover (inline handler):
onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
```

---

## 7. Section Heading Pattern

Every section follows this exact 2-line heading pattern:

```tsx
<p className="section-label" style={{ marginBottom: 16 }}>Section Name</p>
<h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
  Line one in white
  <br />
  <span className="g-text">Gradient line in teal-green</span>
</h2>
<p style={{ marginTop: 20, fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '20px auto 0', lineHeight: 1.7 }}>
  Supporting paragraph text.
</p>
```

---

## 8. Button / CTA Patterns

### Primary CTA (gradient fill)
```tsx
<motion.a
  href="..."
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
```

### Secondary CTA (ghost/outline)
```tsx
<motion.a
  href="..."
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
```

### White pill with dark arrow icon (Hero "See Our Research")
```tsx
style={{
  backgroundColor: '#fff', color: '#050508',
  padding: '14px 28px', borderRadius: 999,
  fontSize: 15, fontWeight: 700,
}}
// Contains a circular dark icon badge with white arrow SVG
```

---

## 9. Icon System

**No icon library.** All icons are inline SVGs in JSX.

### Icon attributes pattern:
```tsx
<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" strokeWidth="1.5"
  strokeLinecap="round" strokeLinejoin="round">
  <path d="..." />
</svg>
```

Use `stroke="currentColor"` so the parent's `color` CSS controls the icon color. Icon containers use `.icon-box` with `color: '#a5b4fc'` or `'#37c2d7'` inline.

**When adding icons from Figma:** extract the SVG path data and wrap in this pattern. Do not add icon library dependencies.

---

## 10. Asset Management

### Location: `public/`
```
public/
├── favicon.svg
├── paradyne-horz-white.svg           # logo, white on transparent
├── paradyne-horz.svg                 # logo, default
├── paradyne-horz_no-tag-white.svg    # logo without tagline, white (used in Nav)
└── paradyne-horz_no-tag.svg          # logo without tagline
```

### Usage
Assets in `public/` are referenced with a root-relative path directly in `src`:
```tsx
<img src="/paradyne-horz_no-tag-white.svg" alt="Paradyn" style={{ height: 30, width: 'auto' }} />
```

No import statement needed. No asset bundling or optimization pipeline — Astro serves them as-is.

**When adding Figma-exported assets:** export as SVG (vectors) or WebP (rasters), place in `public/`, reference with `/filename.ext`.

---

## 11. Typography

**Font:** Inter (Google Fonts, loaded in `src/layouts/Layout.astro`)
**Weights loaded:** 300, 400, 500, 600, 700, 800

| Role | Size | Weight | Notes |
|---|---|---|---|
| Hero headline | `clamp(42px, 7vw, 80px)` | 800 | `letterSpacing: '-0.03em'`, `lineHeight: 1.1` |
| Section headline | `clamp(30px, 4vw, 48px)` | 800 | `letterSpacing: '-0.02em'`, `lineHeight: 1.15` |
| Card title | `16px` | 700 | White |
| Body / paragraph | `16px` | 400 | `rgba(255,255,255,0.45)`, `lineHeight: 1.7` |
| Card body | `14px` | 400 | `rgba(255,255,255,0.45)`, `lineHeight: 1.7` |
| Section label | `11px` | 600 | ALL CAPS, `letterSpacing: 0.12em`, `color: #3ecfbe` |
| Pill badge | `12px` | 500 | `letterSpacing: 0.03em` |
| Nav links | `14px` | 400 | `rgba(255,255,255,0.5)` → white on hover |
| Nav CTA | `13px` | 700 | dark bg text |
| Small caption | `12–13px` | 400–500 | `rgba(255,255,255,0.22–0.28)` |

---

## 12. Layout Structure

```
├── Fixed Nav (z-index: 50, height: 64px, max-width: 1200px)
└── <main>
    └── Each section:
        ├── position: relative
        ├── padding: '120px 24px'          # or 140px for Contact
        ├── backgroundColor: var(--color-bg) or var(--color-surface)
        ├── overflow: hidden
        └── Inner container: maxWidth 1100px, margin: '0 auto'
```

### Glow Overlays (decorative, `pointerEvents: 'none'`)
- **`glow-hero`** — full-bleed absolute overlay on Hero
- **`glow-section`** — per-section: `<div className="glow-section" style={{ top: '20%' }} />`
- **`star-field`** — absolute star dot overlay (Hero only)

---

## 13. Figma → Code Workflow

When implementing a design from Figma into this codebase:

1. **Colors:** Map Figma color styles to the token variables above. Any teal→green gradient is `linear-gradient(135deg, #37c2d7, #59bf8e)`.

2. **Text styles:** Match by size/weight/opacity using the typography table above. Use Inter.

3. **Cards:** Use `.card` or `.card-hi` className. Do not replicate the glass background inline — use the class.

4. **Sections:** Follow the `<section>` wrapper pattern with `glow-section` overlay and `maxWidth: 1100` inner container.

5. **Section headings:** Always use the 2-line pattern: `.section-label` → `<h2>` with white + `.g-text` gradient span.

6. **Animations:** All new content-reveal animations should use `AnimateIn` wrapper or the `useInView` + Framer Motion pattern. Maintain `once: true` — animations do not replay on re-scroll.

7. **Icons:** Export SVG paths from Figma and inline them. Use `stroke="currentColor"` with `.icon-box` container.

8. **Assets:** Export Figma images as WebP or SVG, place in `public/`, reference as `/filename`.

9. **Interactive components:** Use React `useState` for tab/accordion state (see `Approach.tsx` for reference pattern).

10. **Do NOT:** install external icon libraries, add new CSS frameworks, or change the Tailwind 4 integration method.
