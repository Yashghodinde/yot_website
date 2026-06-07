# 01 — Design Tokens (REVISED — Luxury Gold Psychology)

## Why We Changed From Teal to Gold

**Teal problem**: Teal reads as "tech startup" or "healthcare brand." It does not read as premium, creative, or trustworthy to a client considering spending money on video/design/web services.

**Gold psychology (studied from Rolex, Bugatti, Aston Martin, premium agencies):**
- Gold = achievement, success, quality without compromise
- Warm charcoal background = sophistication, authority, confidence
- The combination says: "We have been doing this for 5 years and we are very good at it."
- Critically: Gold works equally well on dark sections (gold on black = luxury) and light sections (gold on white = accent)

---

## Color System

```css
:root {
  /* === BACKGROUNDS === */
  --canvas:       #fafaf8;  /* Warm paper white — main light sections */
  --canvas-deep:  #f3f1ed;  /* Slightly deeper warm white — alternate sections */
  --dark:         #0f0e0d;  /* Warm near-black (NOT cold blue-black) — hero, footer */
  --dark-2:       #1a1917;  /* Dark elevated surfaces, cards on dark bg */
  --dark-3:       #242220;  /* Even lighter dark surface for layering */

  /* === GOLD ACCENT === */
  --gold:         #c4a35a;  /* Champagne gold — buttons, links, icons */
  --gold-light:   #d4b878;  /* Hover state */
  --gold-dark:    #a8893a;  /* Active/pressed state */
  --gold-bg:      #fdf8ee;  /* Warm gold tint — card backgrounds, highlights */
  --gold-border:  #e8d9a8;  /* Gold-tinted borders */

  /* === TEXT === */
  --text:         #1a1917;  /* Primary headlines — warm near-black */
  --text-2:       #3d3a35;  /* Secondary text */
  --text-muted:   #6b6762;  /* Muted/captions — warm gray */
  --text-inverse: #ffffff;  /* Text on dark backgrounds */
  --text-inverse-muted: #a8a39d; /* Muted text on dark backgrounds */

  /* === BORDERS & DIVIDERS === */
  --border:       #e8e5df;  /* Light section borders */
  --border-dark:  rgba(255,255,255,0.08); /* Dark section borders */
  --surface:      #ffffff;  /* Card backgrounds */

  /* === SHADOWS === */
  --shadow-sm:    0 1px 4px rgba(15,14,13,0.06);
  --shadow-md:    0 4px 20px rgba(15,14,13,0.10);
  --shadow-gold:  0 8px 32px rgba(196,163,90,0.20); /* Gold card hover glow */
  --shadow-gold-strong: 0 12px 48px rgba(196,163,90,0.30);
}
```

---

## Typography

```css
/* Google Fonts import — Inter only (clean, modern, editorial) */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;1,14..32,400&display=swap');

/* Display headlines */
--font-display: 'Inter', sans-serif;
font-weight: 700-800;
letter-spacing: -0.03em;   /* Tight tracking like Linear */

/* Body text */
--font-body: 'Inter', sans-serif;
font-weight: 400-500;
letter-spacing: 0;

/* Labels / Caps */
font-weight: 500-600;
letter-spacing: 0.06em;
text-transform: uppercase;
font-size: 11-12px;

/* Type Scale */
--text-xs:    0.75rem;    /* 12px */
--text-sm:    0.875rem;   /* 14px */
--text-base:  1rem;       /* 16px */
--text-lg:    1.125rem;   /* 18px */
--text-xl:    1.25rem;    /* 20px */
--text-2xl:   1.5rem;     /* 24px */
--text-3xl:   1.875rem;   /* 30px */
--text-4xl:   2.25rem;    /* 36px */
--text-5xl:   3rem;       /* 48px — hero mobile */
--text-6xl:   3.75rem;    /* 60px — hero tablet */
--text-7xl:   4.5rem;     /* 72px — hero desktop */
--text-8xl:   6rem;       /* 96px — huge display moments */
```

---

## Motion Design Tokens

```js
// Easing curves
const ease = {
  standard: [0.25, 0.1, 0.25, 1],      // Most animations
  enter:    [0.0, 0.0, 0.2, 1],         // Elements entering
  exit:     [0.4, 0.0, 1, 1],           // Elements leaving
  spring:   { type: 'spring', stiffness: 400, damping: 30 },
  springBounce: { type: 'spring', stiffness: 350, damping: 20 },
}

// Duration tokens
const duration = {
  instant:  0.1,
  fast:     0.2,
  normal:   0.4,
  slow:     0.6,
  verySlow: 1.0,
}
```

---

## Tailwind Config

```js
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#fafaf8',
        dark: {
          DEFAULT: '#0f0e0d',
          2: '#1a1917',
          3: '#242220',
        },
        gold: {
          DEFAULT: '#c4a35a',
          light: '#d4b878',
          dark: '#a8893a',
          bg: '#fdf8ee',
          border: '#e8d9a8',
        },
        text: {
          DEFAULT: '#1a1917',
          2: '#3d3a35',
          muted: '#6b6762',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.03em',
        tighter: '-0.04em',
        caps: '0.06em',
      },
      boxShadow: {
        gold: '0 8px 32px rgba(196,163,90,0.20)',
        'gold-lg': '0 12px 48px rgba(196,163,90,0.30)',
      }
    },
  },
}
```

---

## Component Token Usage

| Component | Background | Border | Accent | Text |
|---|---|---|---|---|
| Light card | `surface` | `border` | `gold` icon | `text` |
| Dark card | `dark-2` | `border-dark` | `gold` icon | `text-inverse` |
| CTA button (primary) | `gold` | — | — | `dark` |
| CTA button (ghost) | transparent | `gold-border` | `gold` text | `gold` |
| Section dark | `dark` | — | `gold` accents | `text-inverse` |
| Section light | `canvas` | — | `gold` accents | `text` |
| Label chip | `gold-bg` | `gold-border` | — | `gold-dark` |
| Stats numbers | — | — | `gold` | — |
