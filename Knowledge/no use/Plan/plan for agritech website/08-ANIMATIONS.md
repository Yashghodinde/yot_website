# Phase 8 — Animation System

---

## Core Principle
Animations serve **comprehension and credibility** — not spectacle.
For a compliance-focused website (banks, income tax, govt agencies):
- No cursor trails
- No RGB effects
- No full-screen page transitions
- No animated counters (numbers stay static)
- Animations must not obscure or delay factual content

---

## 8.1 Scroll Reveal (All Sections)

Every section content fades in as it enters the viewport.

```tsx
// useInView + Framer Motion
const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 24 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
>
```

**For child elements with stagger:**
```tsx
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25,0.1,0.25,1] } }
}
```

---

## 8.2 Hero Entrance (Home Page)

Staggered fade-up for each hero element in order:
```
label → h1 line 1 → h1 line 2 → gooey text → body → compliance line → buttons → glass cards
```
```ts
staggerChildren: 0.12
delayChildren: 0.1
each item: { duration: 0.45, ease: [0.25,0.1,0.25,1], y: 20→0, opacity: 0→1 }
```

---

## 8.3 Card Hover Animations

### Standard Card (Card-1, Card-2, Card-3)
```css
transition: transform 220ms ease-out, box-shadow 220ms ease-out;
hover: translateY(-6px), shadow increase
```

### Product Image Hover (Card-2)
```css
img transition: transform 300ms ease-out;
hover: scale(1.05)
```

### Glass Card (Card-3)
```css
transition: background 300ms, box-shadow 300ms;
hover: bg-white/90, shadow with leaf color glow
```

### Compliance Card (Card-6)
```
NO animation — factual data must feel stable and serious
```

### Stat Card (Card-4)
```
NO animation — numbers must feel measured, not playful
```

---

## 8.4 Button Hover
```css
transition: transform 160ms ease-out, box-shadow 160ms ease-out, background 160ms;
hover: translateY(-2px)
active: translateY(0)
```

---

## 8.5 GooeyText (Hero)
**Source:** `grovey text prompt.md`
```
Morphs between: "Onion" → "Tomato" → "Wheat" → "Dal" → (repeat)
Morph duration: 1.5s
Cooldown between: 2s
Effect: blur + opacity cross-fade
```

---

## 8.6 Radial Orbital Timeline
**Source:** `radialorbitaltimeline.md`
```
Auto-rotate: 8 seconds per node
Pause on: hover or click
Click: expand detail card (AnimatePresence fade-in)
Node transition: ease-in-out 0.4s between positions
```

---

## 8.7 Zoom Parallax
**Source:** `zoomparalax.md`
```
Container: sticky, height 300vh
Images: scale from 1x → 4x–9x as user scrolls
Scroll tracking: useScroll + useTransform (framer-motion)
Smooth scroll: @studio-freight/lenis
Caption: fade in at specific scroll positions
```

---

## 8.8 InfiniteGrid (Hero Background)
**Source:** `element/infinite_grid.md`
```
Grid: SVG pattern, static
Mouse reveal: radial gradient mask follows cursor
Reveal radius: 300px
Reveal color: leaf green glow at very low opacity
Transition: 60fps via requestAnimationFrame
```

---

## 8.9 Navbar Scroll Transition
```ts
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 60)
  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
// Apply: scrolled ? 'bg-white/95 backdrop-blur-sm border-b shadow-sm' : 'bg-transparent'
// Transition: 'transition-all duration-300'
```

---

## 8.10 Bento Gallery
**Source:** `Gallery/interactive_gallery.md`
```
Card hover: Float y -6px, 220ms (from NexusMag float pattern)
Modal open: AnimatePresence, scale 0.95→1, opacity 0→1, 250ms
Video autoplay: only when in viewport (IntersectionObserver)
Drag: framer-motion drag on dock thumbnails
```

---

## 8.11 Presentation Blocks Tabs
**Source:** `presentation blocks.md`
```
Tab switch: content fade opacity 0→1, y 8→0, 300ms
Border beam: follows active tab, leaf color, continuous loop
```

---

## 8.12 Complete Animation Reference

| Element | Animation | Duration | Ease |
|---|---|---|---|
| Section reveal | opacity 0→1, y 24→0 | 450ms | [0.25,0.1,0.25,1] |
| Stagger children | 80ms between items | - | - |
| Hero items | opacity 0→1, y 20→0 | 450ms | same |
| Hero stagger | 120ms between items | - | - |
| Card hover | y -6px, shadow+ | 220ms | ease-out |
| Button hover | y -2px | 160ms | ease-out |
| Product image | scale 1.05 | 300ms | ease-out |
| GooeyText morph | blur + opacity | 1500ms | linear |
| Navbar BG | all properties | 300ms | ease |
| Tab content | opacity 0→1, y 8→0 | 300ms | ease |
| Modal open | scale 0.95→1, opacity 0→1 | 250ms | ease-out |
| Arrow on hover | translateX 4px | 160ms | ease-out |
| Gallery float | y -6px | 220ms | ease-out |

---

## 8.13 Reduced Motion (Non-Negotiable)
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
In Framer Motion:
```ts
import { useReducedMotion } from 'framer-motion'
const shouldReduceMotion = useReducedMotion()
// Pass: animate={shouldReduceMotion ? {} : animateVariant}
```
