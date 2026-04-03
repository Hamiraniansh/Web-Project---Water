# AQUA — 3D Water Scrollytelling Website

> An immersive, glassmorphic scroll-driven storytelling experience built with Next.js 14, Three.js, GSAP, and TailwindCSS.

![AQUA Preview](https://via.placeholder.com/1200x630/0a1628/5dd3ff?text=AQUA+%E2%80%94+Water+Scrollytelling)

---

## ✨ Features

- **Three.js GLSL Water Shader** — Real-time animated water surface with scroll-reactive color shifts and camera movement
- **5 Narrative Chapters** — Calm → Storm → Deep → Quote → Purity
- **Glassmorphism UI** — Frosted glass cards with `backdrop-filter: blur()`, layered transparency, and depth
- **Smooth Scrolling** — Lenis smooth scroll with 0.08 lerp for buttery-smooth feel
- **GSAP Animations** — ScrollTrigger-powered reveals, parallax, text clip-path transitions, count-up numbers
- **Canvas Wave Animation** — Chapter II features a live multi-layer 2D canvas wave renderer
- **Depth + Caustics Canvas** — Chapter III renders rising bubbles and light rays dynamically
- **Custom Cursor** — Magnetic trailing cursor with hover enlargement and screen blend mode
- **Scroll Progress Bar** — Gradient teal progress indicator at the top
- **Animated Ticker** — Marquee strip of water facts between hero and chapters
- **Ambient Background Blobs** — Three slow-drifting light blobs for atmospheric depth
- **Typography Pairing** — Cormorant Garamond (editorial display) + DM Sans (clean body)
- **Fully Responsive** — Adapts to mobile/tablet with stacked layouts

---

## 🏗 Project Structure

```
aqua-water/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout: fonts, metadata, viewport
│   │   └── page.tsx            # Main page assembling all sections
│   ├── components/
│   │   ├── three/
│   │   │   └── WaterScene.tsx  # Three.js GLSL shader water + particles (SSR-disabled)
│   │   ├── ui/
│   │   │   ├── Nav.tsx         # Sticky glassmorphic nav + progress dots
│   │   │   ├── Cursor.tsx      # Custom trailing cursor
│   │   │   ├── ProgressBar.tsx # Scroll progress bar
│   │   │   ├── AmbientBlobs.tsx# Background atmospheric light blobs
│   │   │   └── Ticker.tsx      # Animated marquee strip
│   │   └── sections/
│   │       ├── Hero.tsx        # Hero with staggered entrance + scroll CTA
│   │       ├── ChapterCalm.tsx # Ch1: Calm ripples with CSS ripple animation
│   │       ├── ChapterStorm.tsx# Ch2: Storm with live 2D canvas waves
│   │       ├── ChapterDeep.tsx # Ch3: Deep with canvas bubbles + caustic rays
│   │       ├── ChapterQuote.tsx# Interlude: da Vinci glass quote card
│   │       ├── ChapterPurity.tsx# Ch5: Sustainability with orbiting H₂O orb
│   │       └── Footer.tsx      # Footer with mini-nav
│   ├── lib/
│   │   ├── reveal.ts           # IntersectionObserver scroll-reveal utility
│   │   └── gsapAnimations.ts   # GSAP ScrollTrigger helpers (parallax, count-up, etc.)
│   └── styles/
│       └── globals.css         # CSS variables, glassmorphism utilities, reveal animations
├── public/                     # Static assets
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json                 # Vercel deployment config
└── .env.example
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ (required for Next.js 14)
- npm 9+ or yarn 1.22+

### Installation

```bash
# 1. Clone / unzip the project
cd aqua-water

# 2. Install dependencies
npm install

# 3. Copy environment file
cp .env.example .env.local

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you should see the full site.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment

### Vercel (Recommended — Zero Config)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Or link to existing project
vercel --prod
```

The `vercel.json` is pre-configured with security headers and caching rules.

### Netlify

```bash
# Build command:  npm run build
# Publish dir:    .next
# Add plugin:     @netlify/plugin-nextjs
```

---

## 🎨 Design System

### Color Palette

| Token | Value | Use |
|-------|-------|-----|
| `--c-accent` | `#5dd3ff` | Primary accent, ripples, highlights |
| `--c-teal` | `#00d4aa` | Chapter V (sustainability) accent |
| `--c-deep` | `#0a1628` | Page background |
| `--c-mid` | `#0d2a4a` | Mid-depth surfaces |
| `--c-white` | `rgba(255,255,255,0.92)` | Primary text |
| `--c-muted` | `rgba(255,255,255,0.50)` | Secondary text |

### Typography

| Role | Font | Weight | Use |
|------|------|--------|-----|
| Display | Cormorant Garamond | 300, 400 italic | Hero, chapter titles, quotes |
| Body | DM Sans | 200–500 | Paragraphs, labels, UI |

### Glass Utilities

```css
.glass        /* Standard frosted glass card */
.glass-heavy  /* Heavier blur for quote/overlay panels */
.stat-card    /* Semi-transparent stat container */
.btn-glass    /* Rounded pill glass button */
```

### Scroll Reveal

Add `reveal` to any element for scroll-triggered fade-in. Use delay classes for staggering:

```jsx
<h2 className="chapter-title reveal">Title</h2>
<p className="chapter-body reveal reveal-delay-2">Body text</p>
<div className="stat-card reveal reveal-delay-3">Stats</div>
```

### GSAP Data Attributes

```jsx
data-parallax="0.3"    /* Vertical parallax on scroll (0–1 intensity) */
data-scale-in          /* Scale from 0.88 → 1 on enter */
data-text-reveal       /* Horizontal clip-path text reveal */
data-count="96.5"      /* Count-up animation to target number */
data-suffix="%"        /* Suffix for count-up (optional) */
```

---

## 🔧 Customization

### Adding a New Chapter

1. Create `src/components/sections/ChapterNew.tsx`
2. Add the section `id` to `CHAPTERS` array in `Nav.tsx`
3. Import and render in `page.tsx`
4. Use `.reveal` classes for scroll animations

### Changing the Three.js Shader Colors

In `WaterScene.tsx`, modify the `uniforms` object:

```ts
uColor1: { value: new THREE.Color(0x0a2a50) }, // deep color
uColor2: { value: new THREE.Color(0x1a6b9e) }, // mid color
uColor3: { value: new THREE.Color(0x5dd3ff) }, // highlight/crest
```

Or change how colors shift on scroll in the `onScroll` handler.

### Tuning Wave Physics (Chapter II)

In `ChapterStorm.tsx → WaveCanvas`, adjust:

```ts
const amp   = 12 + i * 18;   // wave height
const freq  = 0.009 - i * 0.001; // horizontal frequency
const speed = 1 + i * 0.35;  // animation speed
```

### Lenis Scroll Config

In `page.tsx`:

```ts
lenis = new Lenis({
  lerp: 0.08,        // 0.05 = very smooth/slow, 0.15 = snappier
  smoothWheel: true,
  duration: 1.2,     // optional fixed duration
});
```

---

## ♿ Accessibility

- All decorative elements have `aria-hidden="true"`
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`, `<blockquote>`, `<cite>`
- Section `aria-label` attributes for screen readers
- Custom cursor hidden via `display: none` on touch devices (CSS `@media`)
- Minimum font size 12px throughout
- Color contrast: all body text passes WCAG AA against dark backgrounds

---

## ⚡ Performance

- **Three.js** lazy-loaded via `next/dynamic` with `ssr: false` — prevents SSR crash
- `optimizePackageImports` in `next.config.js` tree-shakes Three.js + R3F
- `requestAnimationFrame` loops cleaned up on component unmount
- Particle count capped at 250; wave canvas renders at `devicePixelRatio` ≤ 2
- Google Fonts loaded via `next/font` with `display: swap`
- `console.log` stripped in production builds

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2 | React framework, routing, SSR |
| React | 18.3 | UI library |
| Three.js | 0.165 | 3D water shader + particles |
| GSAP | 3.12 | ScrollTrigger animations |
| Lenis | 1.1 | Smooth scroll |
| TailwindCSS | 3.4 | Utility styling |
| TypeScript | 5 | Type safety |
| Framer Motion | 11 | (available for additional motion) |

---

## 📄 License

MIT — use freely, attribution appreciated.

---

*"Water is the driving force of all nature." — Leonardo da Vinci*
