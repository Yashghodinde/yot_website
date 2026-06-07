# 03 — Home Page (REVISED)

## Route: `/`

---

## SECTION 1 — HERO (Dark, Full Viewport)

### Background Treatment
- Background: `#0f0e0d` (warm near-black)
- **ElegantShape floating pill shapes** (from elevate_vison.md component):
  - Shape 1: 600px × 140px pill, rotated 12°, gold gradient `from-[#c4a35a]/15`, top-left
  - Shape 2: 500px × 120px pill, rotated -15°, gold/amber gradient `from-[#d4b878]/10`, bottom-right
  - Shape 3: 300px × 80px pill, rotated -8°, warm amber `from-[#f59e0b]/10`, bottom-left
  - Each shape has `backdrop-blur-[2px]`, `border-2 border-white/[0.08]`, floats on 12–24s loop
- **Subtle grid pattern** behind content (from infinite_grid.md): moving grid at 4% opacity, mouse-reveal at 30% opacity — creates depth without distraction

### Content Layout (centered, max-width 700px)

```
[Label chip — small, rounded]
"Video · Design · Web · Creator Outreach"
(gold text, gold-bordered chip, 12px caps tracking)

[Headline — staggered entry]
"We Make Creators
Look Unstoppable."
(Inter 800, 72px/48px mobile, white, tracking -0.03em)
Line 2 "Look Unstoppable." — gold color (#c4a35a)

[Subtext]
"YOT Productions is a full-service creative studio in Mumbai.
We turn ideas into content that actually grows."
(Inter 400, 18px, #a8a39d, max-width 500px)

[CTAs — side by side]
[Get in Touch →]          [See Our Work ↓]
(gold bg, dark text)      (transparent, gold border, gold text)
px-8 py-4, rounded-lg    same size

[Scroll indicator — bottom center]
Thin line pulsing downward, fades in at 1.2s
```

### Animation Sequence (Framer Motion + CSS)
```
0ms    → Grid appears (CSS, opacity 0 → 0.04, 1s)
200ms  → Shape 1 drops from top (ElegantShape, 2.4s ease)
400ms  → Shape 2 drops (staggered)
600ms  → Shape 3 drops
800ms  → Label chip fades up (opacity 0→1, y 30→0, 0.55s)
960ms  → Headline line 1 fades up (staggered 0.12s)
1080ms → Headline line 2 (gold) fades up
1200ms → Subtext fades up
1350ms → CTAs fade up
1500ms → Scroll indicator pulses in
```

---

## SECTION 2 — SERVICES (Light Canvas)

### Content
```
[Label]  "WHAT WE DO"  (gold, caps, 11px, letter-spacing 0.06em)

[Heading]  "One Studio."
           "Every Service You Need."
(Inter 700, 48px, warm near-black, tracking -0.02em)

[4 Cards — 2×2 desktop, 1 col mobile]
```

### ServiceCard Anatomy (exact)
```
Card container:
  - background: #ffffff
  - border: 1px solid #e8e5df
  - border-radius: 16px
  - padding: 32px
  - transition: all 200ms ease

Card interior:
  - Icon: 28px, gold color (#c4a35a)
  - Title: Inter 700, 20px, #1a1917
  - Tagline: Inter 400, 15px, #6b6762, margin-top 8px
  - "Explore →": Inter 500, 14px, gold, margin-top 24px

Hover state (Framer Motion whileHover):
  - translateY: -5px
  - border-color: #e8d9a8 (gold border)
  - box-shadow: 0 12px 40px rgba(196,163,90,0.18)
  - "Explore →" gets → shifted 4px right
```

### Cards (Revised Copy — Crisp & Impactful)
| Icon | Title | Tagline |
|---|---|---|
| 🎬 | Video Editing | "Reels to long-form — edited to hook and convert." |
| 🎨 | Designing | "Logos, social kits, brand systems that speak." |
| 🌐 | Website & Support | "Built fast, built right, built to last." |
| 🤝 | Creator Outreach | "Your brand, amplified by the right voices." |

---

## SECTION 3 — PORTFOLIO TICKER (Dark)

### Problem Fixed: Two Separate Rows With Correct Aspect Ratios

**Row 1 — Horizontal Thumbnails (16:9 YouTube videos)**
- Container: `overflow-hidden, height: 157px`
- Each thumbnail: `width: 280px, height: 157px` (16:9 ratio, exactly)
- `border-radius: 10px`, `object-fit: cover`
- Source: Long-form YouTube video thumbnails from MoneyPandits, Big Jaws
- Scrolls: LEFT, `animation: tickerLeft 35s linear infinite`

**Gap between rows: 16px**

**Row 2 — Vertical Thumbnails (9:16 YouTube Shorts)**
- Container: `overflow-hidden, height: 220px`
- Each thumbnail: `width: 124px, height: 220px` (9:16 ratio, exactly)
- `border-radius: 10px`, `object-fit: cover`
- Source: YouTube Shorts thumbnails from MoneyPandits Shorts
- Scrolls: RIGHT (opposite), `animation: tickerRight 28s linear infinite`

### CSS (exact)
```css
@keyframes tickerLeft {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }  /* content duplicated so seamless */
}
@keyframes tickerRight {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.ticker-horizontal { animation: tickerLeft 35s linear infinite; }
.ticker-vertical   { animation: tickerRight 28s linear infinite; }

/* Pause on hover */
.ticker-horizontal:hover,
.ticker-vertical:hover {
  animation-play-state: paused;
}

/* Fade edges */
.ticker-wrapper {
  -webkit-mask-image: linear-gradient(
    to right, transparent 0%, black 8%, black 92%, transparent 100%
  );
  mask-image: linear-gradient(
    to right, transparent 0%, black 8%, black 92%, transparent 100%
  );
}
```

### Section Structure
```
[Section label]: "OUR WORK"  (gold, centered)
[Section heading]: "5 Years. 194 Videos. Zero Compromises."
(white, large, centered)
[Subtext]: "A sample of what we've built for our clients."
(muted, centered)

[Ticker Row 1 — Horizontal 16:9 — scrolls left]
[16px gap]
[Ticker Row 2 — Vertical 9:16 — scrolls right]

[CTA below]: "See All Work →"  (ghost button, gold border)
```

---

## SECTION 4 — STATS (Light Canvas)

### Layout: 3 stats, centered row (mobile: stacked)

```
194+              5 Years           3
Videos Edited     In Business       Channels Managed
```

### StatCounter Component
- Number: Inter 800, 64px, gold color
- Label: Inter 500, 15px, text-muted, margin-top 6px
- Count animation: 0 → target, 2.5s, easeOut, triggers on IntersectionObserver

### Paragraph Below
```
"YOT Productions was founded by Yash and Kunal in New Panvel, Navi Mumbai.
What started as a video editing studio has grown into a full creative agency —
serving brands, creators, and businesses across India."
```
(Inter 400, 17px, text-muted, max-width 560px, centered)

---

## SECTION 5 — WHY US (REVISED — Luxury Brand Statement Style)

### Problem with Previous Version
The old "Why Us" was a boring bulleted list. Luxury brands like Rolex and Bugatti
make ONE bold statement per card. No fluff. Complete confidence.

### New Approach: 3 Statement Cards (Dark Background)

**Background**: `#0f0e0d` (dark)
**Layout**: 3 equal cards side by side (desktop), stacked (mobile)

#### Card Design
```
Card:
  - background: #1a1917
  - border: 1px solid rgba(255,255,255,0.06)
  - border-radius: 16px
  - padding: 40px 32px
  - gold top accent line: 2px × 40px, gold color, at top-left

Top: Small gold label (caps, 11px)
Middle: ONE bold statement (Inter 700, 24px, white)
Bottom: Short support sentence (Inter 400, 15px, #a8a39d)
```

#### Card Content

**Card 1**
- Label: `SPEED`
- Statement: **"24–48 Hours. Every Time."**
- Support: "Deadlines are not suggestions. We ship, always."

**Card 2**
- Label: `QUALITY`
- Statement: **"If It Doesn't Convert, It's Not Done."**
- Support: "We measure success in views retained, not pixels placed."

**Card 3**
- Label: `SCOPE`
- Statement: **"Brief In. Published Out."**
- Support: "Video, design, web — one team handles the full pipeline."

### Animation
- Section heading fades up on scroll
- Cards stagger in from bottom: 0.12s between each

---

## SECTION 6 — CREATOR OUTREACH CTA (Dark, Split)

### Layout: 2 equal columns with gold vertical divider (mobile: stacked)

```
LEFT: FOR BRANDS                    | RIGHT: FOR CREATORS
                                    |
"Want to reach                      | "Want paid brand
 more people?"                      |  deals?"
                                    |
"We connect you with creators       | "Join our creator network.
 who genuinely influence your       |  Get matched with brands
 target audience."                  |  that fit your niche."
                                    |
[Get in Touch →]                    | [Join as Creator →]
(gold filled, dark text)            | (gold outline, gold text)
```

**Background**: Dark gradient `from-[#0f0e0d] to-[#1a1917]`
**Divider**: `1px solid rgba(196,163,90,0.2)` vertical line

---

## SECTION 7 — CONTACT FORM (Light Canvas)

### Card: white, shadow-md, max-width 600px, centered, 48px radius

**Form Fields (with gold focus states)**
- Name* (text)
- Email* (email)
- Phone (tel, optional)
- Service Interest (select dropdown):
  - Video Editing
  - Designing
  - Website & Support
  - Creator Outreach
  - Other
- Message (textarea, 4 rows)
- Submit: "Send Message →" (gold bg, dark text, full width, 16px, py-4)

**Field focus state**: `border-color: #c4a35a; box-shadow: 0 0 0 3px rgba(196,163,90,0.12)`

**States**: idle → loading (spinner in gold) → success (gold checkmark + message) → error (red)

**Success message**: "Got it. We'll get back to you within 24 hours."

**Connects to**: Google Sheets "Get in Touch" tab via Apps Script POST

---

## FOOTER
See `02-NAVBAR-FOOTER.md` (updated with gold accent colors)
