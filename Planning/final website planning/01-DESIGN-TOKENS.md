# 01 — Design Tokens

## Color Palette (Electric Teal — Professional)

```css
:root {
  /* Backgrounds */
  --bg-light: #f8fafb;       /* Main light sections */
  --bg-white: #ffffff;       /* Cards, surfaces */
  --bg-dark: #09090b;        /* Hero, footer, dark sections */
  --bg-dark-2: #111114;      /* Slightly lighter dark (for variety) */

  /* Text */
  --text-primary: #0f172a;   /* Headlines */
  --text-secondary: #64748b; /* Body copy, subtitles */
  --text-inverse: #ffffff;   /* Text on dark backgrounds */
  --text-muted: #94a3b8;     /* Placeholder, captions */

  /* Accent — Electric Teal */
  --accent: #0d9488;         /* Primary teal */
  --accent-light: #14b8a6;   /* Hover state */
  --accent-dark: #0f766e;    /* Active/pressed state */
  --accent-bg: #f0fdfa;      /* Teal tint backgrounds */
  --accent-border: #99f6e4;  /* Teal borders */

  /* Borders & Dividers */
  --border: #e2e8f0;
  --border-dark: #1e293b;    /* Border on dark sections */

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.10);
  --shadow-teal: 0 4px 24px rgba(13,148,136,0.18); /* Card hover glow */
}
```

## Typography

```css
/* Import in index.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

font-family: 'Inter', sans-serif;

/* Scale */
--text-xs:   0.75rem;   /* 12px — labels */
--text-sm:   0.875rem;  /* 14px — captions */
--text-base: 1rem;      /* 16px — body */
--text-lg:   1.125rem;  /* 18px — large body */
--text-xl:   1.25rem;   /* 20px — card titles */
--text-2xl:  1.5rem;    /* 24px — section subtitles */
--text-3xl:  1.875rem;  /* 30px — section titles */
--text-4xl:  2.25rem;   /* 36px — page headers */
--text-5xl:  3rem;      /* 48px — hero mobile */
--text-6xl:  3.75rem;   /* 60px — hero tablet */
--text-7xl:  4.5rem;    /* 72px — hero desktop */

/* Letter spacing */
Display headlines: -0.02em to -0.03em (tight, like Linear)
Body: 0 (normal)
Labels/caps: 0.05em (slightly open)
```

## Spacing System (8px base)
```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 96px, 128px
```

## Border Radius
```
Cards: 16px
Buttons: 8px (filled) / 8px (outline)
Chips/tags: 999px (fully rounded)
Images: 12px
```

## Breakpoints (Tailwind default)
```
sm: 640px   (large phones)
md: 768px   (tablets)
lg: 1024px  (desktop)
xl: 1280px  (wide desktop)
```

## Tailwind Config (tailwind.config.js)
```js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0d9488',
          light: '#14b8a6',
          dark: '#0f766e',
          bg: '#f0fdfa',
        },
        dark: '#09090b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
```
