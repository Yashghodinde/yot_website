# Phase 1 — Design Language & Base Backgrounds

## 1.1 Design Philosophy
- **Clean Light** — warm white base, not harsh digital white
- **Premium spacing** — every section breathes (80–112px vertical padding)
- **Compliance-safe** — no animated counters, no unverified claims in visual hierarchy
- **Authoritative** — typography-led, not decoration-led
- **Agricultural premium** — feels like a serious FPC, not a farm blog

---

## 1.2 Color Tokens (globals.css)
```css
:root {
  /* Brand */
  --leaf:          #2f7d32;   /* Primary green — trust, agriculture */
  --leaf-light:    #4caf50;   /* Hover state */
  --leaf-dark:     #1b5e20;   /* Active/pressed */
  --harvest:       #d7a928;   /* Gold accent — warmth, premium */
  --harvest-light: #f0c030;
  --sky:           #4ea3d8;   /* Trust, traceability */

  /* Surfaces */
  --paper:         #f7f4ed;   /* Warm white — main section BG */
  --paper-dark:    #ede9e0;   /* Alternate section BG */
  --white:         #ffffff;   /* Cards, navbar scrolled */

  /* Text */
  --ink:           #171914;   /* Primary headings */
  --ink-mid:       #3d3d3a;   /* Body text */
  --muted:         #6b7280;   /* Secondary/supporting text */
  --muted-light:   #9ca3af;   /* Captions, fine print */

  /* Borders */
  --border:        #e0ddd5;
  --border-dark:   #c8c4bb;

  /* Dark surfaces */
  --dark:          #07080A;   /* Footer */
  --dark-mid:      #111214;
  --dark-surface:  #1b1c1e;
}
```

---

## 1.3 Tailwind Config Extensions
```ts
// tailwind.config.ts
colors: {
  leaf:    { DEFAULT: '#2f7d32', light: '#4caf50', dark: '#1b5e20' },
  harvest: { DEFAULT: '#d7a928', light: '#f0c030' },
  sky:     '#4ea3d8',
  paper:   { DEFAULT: '#f7f4ed', dark: '#ede9e0' },
  ink:     { DEFAULT: '#171914', mid: '#3d3d3a' },
  muted:   { DEFAULT: '#6b7280', light: '#9ca3af' },
  border:  { DEFAULT: '#e0ddd5', dark: '#c8c4bb' },
  dark:    { DEFAULT: '#07080A', mid: '#111214', surface: '#1b1c1e' },
},
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  head: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
  mono: ['"JetBrains Mono"', 'monospace'],
},
```

---

## 1.4 Background Types (7 Named)

### BG-1: Paper (Default)
```css
background-color: #f7f4ed;
/* Used: Hero, Products, Farmer Network, About sections */
```

### BG-2: Pure White
```css
background-color: #ffffff;
/* Used: Cards, Navbar scrolled, Trust Strip, Compliance blocks */
```

### BG-3: Paper Dark (Alternating)
```css
background-color: #ede9e0;
/* Used: Every other section for rhythm — Business Overview, For Buyers band */
/* Creates subtle alternating rhythm without harsh contrast */
```

### BG-4: Leaf Green (CTA Bands)
```css
background-color: #2f7d32;
color: #ffffff;
/* Used: For Buyers band, primary CTA sections */
```

### BG-5: Dark (Footer)
```css
background-color: #07080A;
color: #ffffff;
/* Used: Footer, optional dark sections */
```

### BG-6: Infinite Grid (Hero Texture)
```
Source: element/infinite_grid.md
Base: BG-1 Paper
Grid: SVG pattern, cell-size 40px, color var(--border) at 40% opacity
Mouse reveal: radial gradient, radius 300px, leaf color glow
Edges: radial-gradient mask softening to paper color
```

### BG-7: Paper Shader (Transition Dividers)
```
Source: papershader.md
Used ONLY as 80px transition bands between sections on Compliance page
Colors: paper → paper-dark animated gently, very low amplitude
NOT used on main content areas
```

---

## 1.5 Section Structure Template
Every section follows this exact wrapper:
```tsx
<section className="py-20 md:py-28 bg-[BG-TYPE]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Optional section label */}
    <p className="font-mono text-xs tracking-widest text-leaf uppercase mb-3">
      Section Label
    </p>

    {/* Section heading */}
    <h2 className="font-head text-3xl md:text-4xl font-semibold text-ink mb-4">
      Heading
    </h2>

    {/* Section subtext */}
    <p className="text-muted text-lg max-w-2xl mb-12">
      Supporting description.
    </p>

    {/* Content */}

  </div>
</section>
```

## 1.6 Section Dividers
- Same-color adjacent sections: `border-t border-border`
- Different-color adjacent sections: no divider (natural break)
- Never use heavy `<hr>` or thick lines

---

## 1.7 Spacing Scale
| Token | Value | Usage |
|---|---|---|
| Section padding | `py-20 md:py-28` | 80px / 112px vertical |
| Container | `max-w-7xl mx-auto px-6 lg:px-8` | 1280px max |
| Card gap | `gap-6 md:gap-8` | 24px / 32px |
| Card padding | `p-6 md:p-8` | 24px / 32px inner |
| Between heading & content | `mb-12` | 48px |
| Between heading & subtext | `mb-4` | 16px |
| Between subtext & content | `mb-12` | 48px |
