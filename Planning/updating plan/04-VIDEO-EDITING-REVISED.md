# 04 — Video Editing Page (REVISED)

## Route: `/video-editing`

---

## HERO HEADER (Dark)
- Background: `#0f0e0d`
- Label: "VIDEO EDITING" (gold caps)
- Headline: "We Edit. You Grow."
- "Grow." is gold (#c4a35a)
- Subtext: "From 60-second hooks to 20-minute deep dives — every frame earns its place."
- Fade-up animation on page load (staggered, 0.12s between elements)

---

## TAB NAVIGATION (Below Hero)

### Two Pills Tabs — "Long Form" and "Short Form"
```
[Long Form Videos]     [Short Form / Shorts]
```

**Tab Design:**
- Wrapper: centered, inline-flex, background `#1a1917`, border-radius 999px, padding 4px
- Active tab: background `#c4a35a` (gold), text `#0f0e0d` (dark), font-weight 600
- Inactive tab: text `#a8a39d`, background transparent
- Transition: Framer Motion `layoutId="tab-pill"` for smooth sliding gold indicator

**Tab switching**: No page reload. React state `activeTab: 'long' | 'short'`

---

## LONG FORM TAB (16:9 Horizontal Videos)

### Grid Layout
- Desktop: 2 columns, gap 24px
- Tablet: 2 columns
- Mobile: 1 column
- Each card: 16:9 aspect ratio iframe (560×315 at desktop scale)

### VideoCard Component (Long Form)
```
Card container:
  - background: #1a1917
  - border: 1px solid rgba(255,255,255,0.06)
  - border-radius: 12px
  - overflow: hidden

Top: iframe (aspect-ratio: 16/9, width 100%)
  - loading="lazy" on iframe
  - pointer-events: none until user clicks (prevents accidental scroll-swipe)

Bottom: Info row
  - Title: Inter 600, 16px, white
  - "Watch on YouTube →": Inter 500, 13px, gold, external link icon
  - Padding: 16px
```

### Infinite Scroll (NO Load More Button)
```
Logic:
1. Start with 4 videos visible in `displayedVideos` state
2. Place an invisible `<div ref={sentinelRef} />` AFTER the last card
3. IntersectionObserver watches the sentinel div
4. When sentinel enters viewport (threshold: 0.1):
   - Append next 4 videos to displayedVideos
   - New cards fade in with staggered Framer Motion animation
5. When all videos shown, sentinel disappears, observer disconnects

Code pattern:
const sentinelRef = useRef(null)
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && displayedVideos.length < allVideos.length) {
        setDisplayedVideos(prev => [
          ...prev,
          ...allVideos.slice(prev.length, prev.length + 4)
        ])
      }
    },
    { threshold: 0.1, rootMargin: '200px' }  // 200px pre-load buffer
  )
  if (sentinelRef.current) observer.observe(sentinelRef.current)
  return () => observer.disconnect()
}, [displayedVideos, allVideos])
```

### New Cards Reveal Animation
```jsx
// Wrap each new card in:
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.45, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
>
```

### Long Form Videos (from youtube-portfolio-links.json)
MoneyPandits channel:
1. Controversy Economics
2. Steel War
3. DeepSeek Revolution
4. Cement War
5. Mahindra VS Tata Motors
6. BlinkIt Case Study
7. Why Ola is Having Problem
+ Additional from Kropbook/Big Jaws channels

---

## SHORT FORM TAB (9:16 Vertical Shorts)

### Problem Solved
Previous plan had shorts in a 2-column side-by-side grid — they appeared too large.
Solution: 3-column grid at desktop (vertical cards are narrow, so 3 fit perfectly).

### Grid Layout
- Desktop: 3 columns, gap 16px
- Tablet: 2 columns
- Mobile: 2 columns (small enough to fit 2 verticals side by side)
- Each card: 9:16 aspect ratio (width: 100%, padding-top: 177.78% trick, or aspect-ratio: 9/16)

### VideoCard Component (Short Form)
```
Card container:
  - background: #1a1917
  - border: 1px solid rgba(255,255,255,0.06)
  - border-radius: 12px
  - overflow: hidden
  - aspect-ratio: 9/16

Content:
  iframe:
    - width: 100%, height: 100%, position: absolute, inset: 0
    - src: YouTube Shorts embed URL
    - loading="lazy"

Bottom overlay (absolute, bottom of card):
  - gradient: linear-gradient(to top, rgba(0,0,0,0.8), transparent)
  - Title text (white, 13px, Inter 500)
  - Niche tag (gold, 11px, caps)
  - Padding: 12px
```

### Sizing Reference (Desktop 3-col grid at 1200px container)
```
Container width: 1200px
Gap: 16px × 2 = 32px
Each card width: (1200 - 32) / 3 = ~389px
Height at 9:16: 389 × (16/9) = ~692px
```
This is a comfortable height — not too large, not too small.

### Infinite Scroll (same pattern as Long Form)
- Start with 6 shorts (fills 2 rows of 3)
- Load 6 more when sentinel hit
- Smooth stagger animation on new cards

### Short Form Videos (from youtube-portfolio-links.json)
MoneyPandits Shorts (138 videos):
- Vedanta Demerger
- Mahindra & Mahindra
- Steel Sector In Problem
- DeepSeek
- [remaining 134 shorts available]

---

## SECTION — CHANNELS WE MANAGE

### Layout: 3 cards in a row (dark background section)

**Channel Card:**
```
- background: #1a1917
- border: 1px solid rgba(255,255,255,0.06)
- border-radius: 16px
- padding: 28px

Top row:
  - Channel avatar (48px circle image)
  - Channel name (Inter 700, 18px, white)
  - Verified badge (if applicable)

Middle:
  - Niche tag chip (gold bg, gold text, rounded-full, caps 11px)
  - e.g., "Finance & Business", "Music", "Corporate"

Bottom:
  - "View Channel →" (gold link, Inter 500, 14px, external icon)
```

Channels:
1. @MoneyPandits — Finance & Business
2. @big_jaws — Music
3. @Kropbook — Corporate

---

## SCROLL EFFECTS (Detailed)

### Section Entry
Every section heading uses the global `AnimatedSection` component:
```jsx
<motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-80px' }}
  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
>
```

### Horizontal scroll hint on mobile
On mobile, for the tab area, add a subtle horizontal scrollbar indicator so users know tabs are there.

---

## CTA SECTION
- Background: dark gradient
- Headline: "Need content that actually grows your channel?"
- Subtext: "We've edited 194+ videos. We know what works."
- Button: "Start a Project →" (gold bg, dark text)
- Links to: Home contact form
