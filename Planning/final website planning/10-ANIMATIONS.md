# 10 — Animations Master Plan

## Philosophy
- Every animation has a purpose (not decoration)
- Nothing moves unless it adds meaning or guides attention
- Mobile: same animations, shorter durations (0.6x)
- Respect `prefers-reduced-motion`

---

## 1. PAGE LOAD / HERO ENTRY

### Sequence (total: 0.9s)
```
0ms    → Atmospheric orbs appear (CSS fade, 1s)
100ms  → Label chip fades up
220ms  → Headline line 1 fades up
340ms  → Headline line 2 fades up (teal)
460ms  → Subtext fades up
580ms  → CTA buttons fade up
700ms  → Scroll indicator bounces in
```

### Framer Motion Config
```js
const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }
  }
}
const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}
```

---

## 2. SCROLL REVEAL (Global — AnimatedSection component)

Used on every section heading, card group, feature row.

```js
// AnimatedSection.jsx
const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
}

<motion.div
  variants={variants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
>
  {children}
</motion.div>
```

- `once: true` — animates only first time (no re-trigger on scroll up)
- `margin: '-80px'` — triggers 80px before element reaches viewport

---

## 3. CARD HOVER

### Service Cards, Design Cards, Career Cards
```js
<motion.div
  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(13,148,136,0.18)' }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
>
```

### Video Cards (Portfolio)
```js
whileHover={{ scale: 1.02 }}
transition={{ duration: 0.2 }}
```

---

## 4. NAVBAR SCROLL ANIMATION

```js
const { scrollY } = useScroll()

// Background blur
const navBg = useTransform(
  scrollY, [0, 60],
  ['rgba(9,9,11,0)', 'rgba(255,255,255,0.92)']
)

// Text color
const textColor = useTransform(
  scrollY, [0, 60],
  ['#ffffff', '#0f172a']
)

// Height
const navHeight = useTransform(scrollY, [0, 60], ['72px', '60px'])
```

---

## 5. STATS COUNT-UP

```js
// useCountUp.js hook
export function useCountUp(target, duration = 2500) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}
```

---

## 6. PORTFOLIO TICKER (Infinite Scroll)

```css
@keyframes tickerLeft {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes tickerRight {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.ticker-row-1 {
  animation: tickerLeft 35s linear infinite;
}
.ticker-row-2 {
  animation: tickerRight 35s linear infinite;
}
.ticker-row-1:hover,
.ticker-row-2:hover {
  animation-play-state: paused;
}
```

Each row contains the images duplicated (A B C D A B C D) so it loops seamlessly.

---

## 7. MOBILE MENU

```js
// Full screen dropdown with staggered links
const menuVariants = {
  closed: { opacity: 0, height: 0 },
  open: {
    opacity: 1, height: 'auto',
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }
  }
}
const linkVariants = {
  closed: { opacity: 0, x: -16 },
  open: { opacity: 1, x: 0 }
}
const linkContainer = {
  open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
}
```

---

## 8. PAGE TRANSITIONS

```jsx
// App.jsx — wrap routes with AnimatePresence
<AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    ...
  </Routes>
</AnimatePresence>

// Each page component wraps content in:
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
```

---

## 9. HERO ORB DRIFT (CSS)

```css
@keyframes orbFloat1 {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(30px, -20px) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
}
@keyframes orbFloat2 {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(-20px, 30px) scale(0.95); }
  100% { transform: translate(0, 0) scale(1); }
}

.orb-1 { animation: orbFloat1 18s ease-in-out infinite; }
.orb-2 { animation: orbFloat2 24s ease-in-out infinite; }
```

---

## 10. FORM SUCCESS STATE

```js
<AnimatePresence>
  {status === 'success' && (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'backOut' }}
    >
      ✓ We'll get back to you within 24 hours!
    </motion.div>
  )}
</AnimatePresence>
```

---

## 11. REDUCED MOTION

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

And in Framer Motion components: check `useReducedMotion()` hook.
