# 03 — Home Page

## Route: `/`

---

## SECTION 1 — HERO

### Visual
- Full viewport height (100vh)
- Background: `#09090b` (near black)
- Atmospheric orbs: 2 large blurred circles (teal + cyan), positioned top-right and bottom-left
  - Orb 1: 600px circle, `#0d9488` at 15% opacity, top-right
  - Orb 2: 400px circle, `#06b6d4` at 10% opacity, bottom-left
  - Both slowly drift with CSS `@keyframes float` (20s infinite alternate)

### Content (centered)
```
[Small label chip]  "Video · Design · Web · Creator Outreach"

[Headline]
"We Make Creators
Look Unstoppable."

[Subtext]
"YOT Productions is a full-service creative studio helping brands
and creators grow through powerful content."

[CTAs]
[Get in Touch →]  [See Our Work ↓]
```

### Typography
- Label chip: Inter 500, 13px, teal color, teal border, rounded-full, 6px 14px padding
- Headline: Inter 800, 72px desktop / 48px mobile / 56px tablet, white, tracking -0.03em
- Line 1: "We Make Creators" — white
- Line 2: "Look Unstoppable." — teal color (#0d9488)
- Subtext: Inter 400, 18px, #94a3b8 (muted), max-width 540px, centered
- CTA Primary: teal bg, white text, 16px Inter 600, px-8 py-4, rounded-lg
- CTA Secondary: transparent, white border, white text, same size

### Animations (Framer Motion)
```jsx
// Staggered text reveal
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } }

// Order: chip → headline line 1 → headline line 2 → subtext → CTAs
// Total entry time: ~0.8s
```

### Scroll indicator
- Animated chevron-down icon at bottom center
- Bounces with CSS animation
- Fades out after scroll starts (useScroll hook)

---

## SECTION 2 — SERVICES

### Visual
- Background: `#f8fafb` (light)
- Max width: 1200px centered

### Content
```
[Section label]  "WHAT WE DO"
[Heading]  "One Studio. Every Service You Need."
[Subtext]  "From raw footage to viral content — we handle it all."

[4 Cards in grid]
```

### Cards (ServiceCard component)
Each card:
- White background, 16px rounded, 1px border (#e2e8f0)
- Icon (24px, teal)
- Title (Inter 700, 20px)
- Description (Inter 400, 15px, slate-500)
- "Explore →" link (teal, 14px)
- Hover: translateY(-4px), teal border, teal glow shadow

| Icon | Title | Description |
|---|---|---|
| 🎬 | Video Editing | "Short reels to long-form — edited to hook and convert." |
| 🎨 | Designing | "Logos, social media, brand kits — visuals that speak." |
| 🌐 | Website & Support | "Fast, beautiful websites built to grow your business." |
| 🤝 | Creator Outreach | "We connect the right brands with the right creators." |

### Grid
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column

### Animations
- Section heading: fade up on scroll (whileInView)
- Cards: staggered fade-up, 0.1s between each

---

## SECTION 3 — PORTFOLIO TICKER

### Visual
- Background: `#09090b` (dark)
- Heading: "Our Work" (white, centered, appears first with fade-in)
- Below: infinite horizontal scrolling strip

### Ticker
- Two rows of thumbnails (offset direction for visual depth)
- Row 1: scrolls left (infinite)
- Row 2: scrolls right (infinite)
- Each thumbnail: 280px × 160px, rounded-xl, object-cover
- Slight gap between items (16px)
- Pauses on hover (CSS `animation-play-state: paused`)
- Content: mix of YouTube video thumbnails + design work images

### CSS Animation
```css
@keyframes scrollLeft {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.ticker-left { animation: scrollLeft 30s linear infinite; }
.ticker-right { animation: scrollLeft 30s linear infinite reverse; }
```

---

## SECTION 4 — STATS

### Visual
- Background: `#f8fafb`
- 3 stats side by side (mobile: stacked)

### Stats
| Number | Label |
|---|---|
| 194+ | Videos Edited |
| 5 Years | In Business |
| 3 | Channels Managed |

### StatCounter Component
- Count from 0 → target over 2.5s using `requestAnimationFrame`
- Triggers when element enters viewport (IntersectionObserver)
- Font: Inter 800, 56px, teal color
- Label: Inter 500, 16px, slate-500

### Below stats
- Short paragraph: "YOT Productions was founded by Yash and Kunal in New Panvel, Navi Mumbai. We started as a video editing studio and grew into a full creative agency serving brands across India."

---

## SECTION 5 — WHY US

### Visual
- Background: white
- 3 feature rows, alternating layout (image left/right)

### Content
```
Why Choose YOT?

① Fast Turnarounds
"We deliver edited content within 24–48 hours without sacrificing quality."
[Icon: zap/lightning]

② Quality That Converts
"Our edits aren't just pretty — they're engineered to keep viewers watching."
[Icon: chart-line]

③ One Studio, Full Pipeline
"Brief to publish — we handle video, design, and web under one roof."
[Icon: layers]
```

### Animations
- Each item slides in from left/right alternately (whileInView)
- Subtle teal icon glow on scroll entry

---

## SECTION 6 — CREATOR OUTREACH CTA

### Visual
- Background: dark gradient (`from-[#09090b] to-[#0f1a19]`)
- Subtle teal glow in center

### Content (2 columns)
```
LEFT COLUMN                           RIGHT COLUMN
"Are you a Brand?"                    "Are you a Creator?"
"Reach new audiences through          "Get paid collaboration
 authentic creator partnerships."      opportunities with top brands."

[Get in Touch →]                      [Join as Creator →]
```

### Styling
- Divider line between columns (1px, white 10% opacity)
- On mobile: stacked vertically
- Both CTAs connect to Google Sheets forms

---

## SECTION 7 — CONTACT FORM

### Visual
- Background: `#f8fafb`
- Centered card, max-width 600px, white bg, shadow

### Fields
- Name (text)
- Email (email)
- Phone (tel, optional)
- Service Interest (select: Video Editing / Designing / Website / Creator Outreach / Other)
- Message (textarea, 4 rows)
- Submit button: "Send Message →" (teal, full width)

### States
- Default → Loading (spinner) → Success (green check + message) → Error
- On success: "We'll get back to you within 24 hours!"
- Data → Google Sheets via Apps Script POST

---

## FOOTER
See `02-NAVBAR-FOOTER.md`
