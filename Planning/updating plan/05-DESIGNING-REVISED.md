# 05 — Designing Page (REVISED)

## Route: `/designing`

---

## HERO HEADER (Dark)
- Headline: "Designs That Do the Talking."
- "Do the Talking." is gold
- Subtext: "Brand identity to social media — every pixel serves a purpose."

---

## CONCEPT: THE LIVING STORY SCROLL

Each design service is introduced as a story chapter revealed during scroll.
The page is not a grid of images — it is a journey through what design can do.

**Overall scroll narrative:**
```
Chapter 1: Brand Identity (for companies)
Chapter 2: Social Media Design (for creators & brands)
Chapter 3: Thumbnails (for YouTube)
Chapter 4: Print & Stationery
```

Each chapter has:
- A full-width scroll-triggered heading that slides in from side
- A unique visual presentation (not all the same layout)
- Story sentence in editorial style

---

## CHAPTER 1 — BRAND IDENTITY (For Companies)

### Heading Section
```
[Chapter label]: "01 / BRAND IDENTITY"  (gold, caps, 11px)
[Headline]: "A brand is a promise. We design the proof."
(Inter 700, 48px, warm near-black, tracking -0.02em)
[Body]: "Logos, visual systems, brand guidelines — built to last years, not weeks."

Animation: heading slides in from left as section enters viewport
```

### Portfolio Grid — Interactive Bento Gallery
Use the `InteractiveBentoGallery` component (from interactive_gallery.md) adapted for images:

```
Grid: auto-rows-[80px], grid-cols-4 (desktop)

Item layout (spanning):
- Jan Bima logo/stationery:   col-span-2, row-span-3  (large, landscape)
- LODHA industrial map:       col-span-2, row-span-2  (wide)
- Asian Paint Ezzy Bot:       col-span-1, row-span-3  (tall)
- Asian Paint Ezzy Bot 2:     col-span-1, row-span-2  (smaller)
```

### Card Hover Effect (Dynamic Shadow — "Alive" Effect)

The shadow must FOLLOW the mouse, not just appear statically.

```jsx
// DesignCard.jsx
const cardRef = useRef(null)
const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
const [isHovered, setIsHovered] = useState(false)

const handleMouseMove = (e) => {
  const rect = cardRef.current.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  setMousePos({ x, y })
}

// Shadow follows mouse position
const shadowX = mousePos.x * 0.15
const shadowY = mousePos.y * 0.15
const shadowBlur = isHovered ? 40 : 0
const shadowOpacity = isHovered ? 0.25 : 0

style={{
  transform: isHovered
    ? `translateY(-6px) rotateX(${-mousePos.y * 0.01}deg) rotateY(${mousePos.x * 0.01}deg)`
    : 'translateY(0)',
  boxShadow: `${shadowX}px ${shadowY + 8}px ${shadowBlur}px rgba(196,163,90,${shadowOpacity})`,
  transition: 'transform 200ms ease, box-shadow 200ms ease',
}}
```

This makes the card:
1. Lift 6px on hover
2. Shadow shifts based on where cursor is on the card
3. Subtle 3D tilt following cursor (using rotateX/Y)
4. All transitions smooth at 200ms

### Click to Zoom (Framer Motion Shared Layout)

```jsx
// When card is clicked, it expands to fill viewport:
const [selectedId, setSelectedId] = useState(null)

// Card in grid:
<motion.div
  layoutId={`card-${item.id}`}
  onClick={() => setSelectedId(item.id)}
  className="cursor-pointer"
>
  <img src={item.image} className="w-full h-full object-cover" />
</motion.div>

// Expanded overlay:
<AnimatePresence>
  {selectedId && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedId(null)}
    >
      <motion.div
        layoutId={`card-${selectedId}`}
        className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={fullImage} className="w-full h-full object-contain" />
        // Title, project name overlay at bottom
        // Close (X) button top-right
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
```

The card visually "flies out" from its position in the grid to become the full-screen modal.
Clicking outside or the X button closes it (flies back).

---

## CHAPTER 2 — SOCIAL MEDIA DESIGN (For Creators & Brands)

### Heading
```
[Label]: "02 / SOCIAL MEDIA"
[Headline]: "Content That Stops the Scroll."
[Body]: "Thumbnails, posts, stories, carousels — designed to earn the click."
Animation: slides in from RIGHT (alternating with Chapter 1 which was from left)
```

### The Problem: Vertical 9:16 Images

These are vertical images (9:16 aspect ratio). They must NOT be stretched to fill square or landscape cards.

### Layout Solution: 4-column vertical card grid

```
Container width: 1200px
4 columns, 12px gap
Each card: (1200 - 36) / 4 = ~291px wide
Height at 9:16: 291 × (16/9) = ~517px

This is perfect: not too large, clearly shows the design, easily clickable.
```

### Card Design
```
- aspect-ratio: 9/16 (enforce strictly — never crop awkwardly)
- border-radius: 12px
- overflow: hidden
- cursor: pointer

Hover state:
  - Same dynamic shadow + lift as brand cards
  - Overlay appears (gradient from bottom): rgba(0,0,0,0.65)
  - Gold "View Design" chip slides up from bottom

Click: Same layoutId expand animation to full-screen view
       In fullscreen: show at its natural 9:16 ratio, centered
```

### Scroll Reveal for Chapter 2
- Cards slide in from bottom in staggered sequence (0.08s between each)
- Section label and heading fade in first

---

## CHAPTER 3 — LOGO DESIGN (Story Animation)

### Unique Concept: Logo Assembly on Scroll

This is the signature section of the page.

**The Story Animation:**
As the user scrolls down through this section, logo elements animate INTO PLACE:
- Individual shapes appear from different directions
- Text letters slide in one by one
- Elements combine and "click" into the final logo
- This visually demonstrates what a logo design process looks like

**Implementation:**
```jsx
// Use Framer Motion + useScroll + useTransform
const { scrollYProgress } = useScroll({ target: sectionRef })

// Each element has its own transform mapped to scroll progress:
const element1X = useTransform(scrollYProgress, [0, 0.4], [-100, 0])
const element2Y = useTransform(scrollYProgress, [0, 0.4], [80, 0])
const element3Opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
const textX = useTransform(scrollYProgress, [0.3, 0.6], [40, 0])
const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
// Final assembled state reached at scrollYProgress = 0.7

// The logo itself is made of SVG paths — each path is a separate motion element
```

**What we show:** A generic stylized logo built of 3–4 shapes + text
(Do not use client's actual logos — use a demonstration/prototype logo)

### After the animation, show:
- 3 logo examples from portfolio (small, click to expand)
- Caption: "From concept to brand asset in 5–7 days."

---

## CHAPTER 4 — PRINT & STATIONERY

### Heading
```
[Label]: "04 / PRINT"
[Headline]: "On Paper. On Brand."
[Body]: "Business cards, letterheads, brochures — tangible design that works offline too."
```

### Layout: Full-width horizontal scroll
- Items arranged in a horizontal row
- User scrolls horizontally within this section (or use auto-scroll animation)
- Shows: business card mockups, letterhead, envelope mockup
- Each item shows a realistic 3D mockup style

### Items (use stock mockup frames if no real work):
- Business card (double-sided)
- Letterhead (A4)
- Envelope
- Brochure (trifold)

---

## WHAT WE DESIGN — Services Grid

### Layout: 3×2 grid, light background, below all chapters

| Service | Icon | Description |
|---|---|---|
| Logo Design | ✏️ | Custom logos built for longevity |
| Brand Identity | 🎨 | Full visual systems: colors, fonts, guidelines |
| Social Graphics | 📱 | Posts, stories, reels covers, carousels |
| Thumbnails | 🖼️ | YouTube thumbnails proven to get clicks |
| Print & Stationery | 🗂️ | Business cards, letterheads, brochures |
| Industrial Design | 🗺️ | Technical visual documents, maps, layouts |

### Card Design (light section)
- Background: white, border: `#e8e5df`, radius: 16px
- Icon: 28px, gold
- Title: 18px, Inter 600, `#1a1917`
- Description: 14px, Inter 400, `#6b6762`
- Hover: lift + gold border + gold shadow (same dynamic shadow)

---

## CTA SECTION
- Headline: "Want design that actually works?"
- Subtext: "Let's build the visual identity your brand deserves."
- Button: "Start a Project →" (gold bg, dark text)
