# 10 — Animations Master Plan (REVISED — Full Granularity)

## Core Principle
The site must feel alive — not animated for show, but alive because every element
responds to the user naturally. Like a conversation, not a performance.

Inspiration sources applied:
- **ElevenLabs**: Floating atmospheric orbs, slow drift, editorial restraint
- **Framer**: Aggressive negative tracking on display, gradient spotlights
- **Linear**: Scroll-triggered reveals, surface elevation, product-first
- **HeroGeometric (elevate vision)**: ElegantShape floating pill shapes
- **Infinite Grid**: Mouse-reveal cursor tracking, subtle background grid
- **Liquid Glass**: Glassmorphism effect for specific UI moments
- **Interactive Bento Gallery**: Drag + layoutId expand + spring animations

---

## 1. HERO ENTRY SEQUENCE

### ElegantShape Floating Pills
```jsx
// 3 pill shapes in hero background
// Drop from top on load, then float forever

function ElegantShape({ delay, width, height, rotate, gradient, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 }
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}  // Float up and down
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
      >
        <div className={cn(
          "absolute inset-0 rounded-full",
          "bg-gradient-to-r to-transparent", gradient,
          "backdrop-blur-[2px] border-2 border-white/[0.08]",
          "shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]",
          "after:absolute after:inset-0 after:rounded-full",
          "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"
        )} />
      </motion.div>
    </motion.div>
  )
}

// Usage in Hero:
<ElegantShape delay={0.3} width={600} height={140} rotate={12}
  gradient="from-[#c4a35a]/15" className="left-[-5%] top-[20%]" />
<ElegantShape delay={0.5} width={500} height={120} rotate={-15}
  gradient="from-[#d4b878]/10" className="right-[0%] top-[75%]" />
<ElegantShape delay={0.4} width={300} height={80} rotate={-8}
  gradient="from-[#f59e0b]/10" className="left-[10%] bottom-[10%]" />
```

### Infinite Grid (Mouse-Reveal)
```jsx
// Behind hero content, very subtle
// Grid itself moves slowly
// Mouse position reveals a brighter circle of the grid

const mouseX = useMotionValue(0)
const mouseY = useMotionValue(0)
const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`

// Base grid: opacity-[0.03] (nearly invisible)
// Revealed grid: opacity-40, masked to cursor position
```

### Text Stagger Entry
```jsx
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.8 } }
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }
  }
}
// Apply to: label chip, headline line 1, headline line 2, subtext, CTAs
// Total time from first word to CTAs: ~1.5s
```

---

## 2. GLOBAL SCROLL REVEAL (AnimatedSection Component)

Used on every section — wrapper component:

```jsx
// src/components/AnimatedSection.jsx
import { motion } from 'framer-motion'

export function AnimatedSection({
  children,
  delay = 0,
  direction = 'up',  // 'up' | 'left' | 'right'
  className
}) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 32 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: {
      opacity: 1, y: 0, x: 0,
      transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }
    }
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

---

## 3. DESIGN CARD — LIVING SHADOW EFFECT

This is the most unique animation on the site. The shadow moves WITH the mouse.

```jsx
// src/components/DesignCard.jsx
const cardRef = useRef(null)
const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
const [isHovered, setIsHovered] = useState(false)

const handleMouseMove = useCallback((e) => {
  if (!cardRef.current) return
  const rect = cardRef.current.getBoundingClientRect()
  setMousePos({
    x: (e.clientX - rect.left - rect.width / 2),
    y: (e.clientY - rect.top - rect.height / 2)
  })
}, [])

// Mouse relative position → shadow offset
const shadowX = isHovered ? mousePos.x * 0.12 : 0
const shadowY = isHovered ? mousePos.y * 0.12 + 8 : 0
const shadowBlur = isHovered ? 40 : 0
const shadowOpacity = isHovered ? 0.22 : 0

// 3D tilt (subtle — max 3 degrees)
const rotateX = isHovered ? -mousePos.y * 0.008 : 0
const rotateY = isHovered ? mousePos.x * 0.008 : 0

style={{
  transform: `translateY(${isHovered ? -6 : 0}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
  boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(196,163,90,${shadowOpacity})`,
  transition: 'transform 150ms ease, box-shadow 150ms ease',
  willChange: 'transform, box-shadow',
  transformStyle: 'preserve-3d',
}}
```

---

## 4. DESIGN CARD — CLICK TO ZOOM (layoutId)

```jsx
// Shared layout animation — card flies to full screen
const [selectedId, setSelectedId] = useState(null)

// In grid:
<motion.div layoutId={`design-${item.id}`} onClick={() => setSelectedId(item.id)}>
  <img src={item.thumb} className="w-full h-full object-cover" />
</motion.div>

// Full screen overlay:
<AnimatePresence>
  {selectedId && (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/85 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedId(null)}
      />
      {/* Expanded card */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-8 pointer-events-none">
        <motion.div
          layoutId={`design-${selectedId}`}
          className="relative max-w-3xl max-h-[85vh] rounded-2xl overflow-hidden pointer-events-auto"
          style={{ maxWidth: 'min(800px, 90vw)' }}
        >
          <img src={fullSizeImage} className="w-full h-auto object-contain" />
          {/* Title overlay at bottom */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white text-xl font-bold">{title}</h3>
            <p className="text-gold text-sm mt-1">{projectType}</p>
          </motion.div>
          {/* Close button */}
          <motion.button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedId(null)}
          >
            ✕
          </motion.button>
        </motion.div>
      </div>
    </>
  )}
</AnimatePresence>
```

---

## 5. VIDEO EDITING — INFINITE SCROLL (No Load More)

```jsx
// Last card sentinel — IntersectionObserver pre-loads
const sentinelRef = useRef(null)
const [displayCount, setDisplayCount] = useState(4) // Start with 4
const allVideos = [...] // Full list

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && displayCount < allVideos.length) {
        // Pre-load next batch when sentinel is 200px away from viewport
        setDisplayCount(prev => Math.min(prev + 4, allVideos.length))
      }
    },
    { threshold: 0.1, rootMargin: '200px 0px' }  // 200px ahead!
  )
  if (sentinelRef.current) observer.observe(sentinelRef.current)
  return () => observer.disconnect()
}, [displayCount, allVideos.length])

// New cards animate in:
{videos.slice(0, displayCount).map((video, i) => (
  <motion.div
    key={video.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: i >= displayCount - 4 ? (i % 4) * 0.1 : 0 }}
    // Only new cards animate — existing ones don't re-animate
  >
    <VideoCard video={video} />
  </motion.div>
))}
<div ref={sentinelRef} className="h-4" /> {/* Invisible trigger */}
```

---

## 6. CREATOR OUTREACH — FLOW DIAGRAM ANIMATION

```jsx
// Scroll-driven sequential lighting of 6 steps
const containerRef = useRef(null)
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ['start 80%', 'end 40%']  // Starts when section enters, ends before leaving
})

// 6 steps lighting up at evenly spaced scroll positions
const stepThresholds = [0, 0.16, 0.32, 0.48, 0.64, 0.80]
const steps = stepThresholds.map(threshold => ({
  opacity: useTransform(scrollYProgress, [threshold, threshold + 0.16], [0.25, 1]),
  scale: useTransform(scrollYProgress, [threshold, threshold + 0.16], [0.95, 1]),
  color: // gold at and above threshold, muted below
}))

// Connecting lines (SVG):
// line1Progress = useTransform(scrollYProgress, [0.12, 0.20], [0, 1])
// Render as: strokeDasharray="100" strokeDashoffset={100 - (lineProgress * 100)}
```

---

## 7. STATS COUNT-UP

```js
// src/hooks/useCountUp.js
import { useState, useEffect, useRef } from 'react'

export function useCountUp(target, duration = 2500, suffix = '') {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = performance.now()

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
            else setCount(target)
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return { displayValue: count + suffix, ref }
}

// Usage:
const { displayValue: videosCount, ref: videosRef } = useCountUp(194, 2500, '+')
// Renders: 0 → 194+ over 2.5 seconds, ease-out, once only
```

---

## 8. NAVBAR SCROLL BEHAVIOR

```jsx
const { scrollY } = useScroll()

// Background: transparent → white/blur
const navBackground = useTransform(
  scrollY, [0, 80],
  ['rgba(15,14,13,0)', 'rgba(250,250,248,0.92)']
)
const navBorderOpacity = useTransform(scrollY, [0, 80], [0, 1])
const navHeight = useTransform(scrollY, [0, 80], ['72px', '60px'])

// Text color: white (on dark hero) → dark (on white bg)
const linkColor = useTransform(scrollY, [0, 80], ['#ffffff', '#1a1917'])

// Logo "YOT" text: white → gold on scroll? Or stays gold always.
// Recommendation: logo accent stays gold always (recognizable)
```

---

## 9. PORTFOLIO TICKER — CSS ONLY (Performant)

```css
/* Two rows, correct aspect ratios, opposite scroll directions */

/* ROW 1: Horizontal 16:9 */
.ticker-h-wrap {
  height: 157px;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
}
.ticker-h-inner {
  display: flex;
  gap: 12px;
  width: max-content;
  animation: scrollLeft 35s linear infinite;
}
.ticker-h-inner:hover { animation-play-state: paused; }
.ticker-h-img {
  width: 280px;
  height: 157px;  /* 16:9 exactly */
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
}

/* ROW 2: Vertical 9:16 */
.ticker-v-wrap {
  height: 220px;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
}
.ticker-v-inner {
  display: flex;
  gap: 12px;
  width: max-content;
  animation: scrollRight 28s linear infinite;
}
.ticker-v-inner:hover { animation-play-state: paused; }
.ticker-v-img {
  width: 124px;   /* 9:16: 220 * (9/16) = 123.75 ≈ 124px */
  height: 220px;  /* 9:16 exactly */
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
}

@keyframes scrollLeft {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }   /* Images duplicated, so -50% = seamless */
}
@keyframes scrollRight {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
```

---

## 10. PAGE TRANSITIONS

```jsx
// App.jsx — AnimatePresence wrapping routes
<AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
    ...
  </Routes>
</AnimatePresence>

// PageWrapper component:
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

---

## 11. TAB SWITCHING (Video Editing Page)

```jsx
// Animated pill indicator using layoutId
function TabNav({ activeTab, setActiveTab }) {
  return (
    <div className="inline-flex bg-dark-2 rounded-full p-1">
      {['long', 'short'].map(tab => (
        <button
          key={tab}
          className="relative px-6 py-2.5 rounded-full text-sm font-medium z-10"
          onClick={() => setActiveTab(tab)}
        >
          {/* Sliding gold background */}
          {activeTab === tab && (
            <motion.div
              layoutId="tab-bg"
              className="absolute inset-0 rounded-full bg-gold"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className={`relative ${activeTab === tab ? 'text-dark' : 'text-muted'}`}>
            {tab === 'long' ? 'Long Form' : 'Short Form'}
          </span>
        </button>
      ))}
    </div>
  )
}
```

---

## 12. REDUCED MOTION SUPPORT

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

```jsx
// In Framer Motion components:
import { useReducedMotion } from 'framer-motion'

function AnimatedComponent() {
  const prefersReduced = useReducedMotion()
  const variants = prefersReduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }  // No movement
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }
  // ...
}
```

---

## 13. MOBILE ANIMATION ADJUSTMENTS

On mobile (< 768px):
- All durations × 0.7 (faster, less delay feels snappier on touch)
- No 3D card tilt (touch devices can't hover)
- Reduced translateY values (24px → 16px)
- Ticker row heights scaled proportionally
- ElegantShape sizes halved
