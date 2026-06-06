# Phase 5 — Home Page (Section by Section)

URL: `/`
Purpose: First impression for banks, tax authorities, buyers. Communicates legitimacy, scale, professionalism.

---

## Section A: Navigation
→ See `04-BUTTONS-AND-NAVIGATION.md`

---

## Section B: Hero
**Background:** BG-6 (Infinite Grid on Paper)
**Height:** `min-h-[85vh] flex items-center`
**Component sources:** `elevate_vison.md` + `element/infinite_grid.md` + `grovey text prompt.md`

### Layer Stack (back to front)
1. `#f7f4ed` paper base
2. InfiniteGrid SVG (40px cells, `--border` color at 40% opacity)
3. Radial gradient mask: `radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, #f7f4ed 100%)`
4. Content block (centered, `max-w-3xl mx-auto text-center`)

### Content (top to bottom)
```
[Label]
font-mono text-xs tracking-widest text-leaf uppercase
"Farmers Producer Company · Maharashtra"

[H1 — display style, 2 lines]
"Farmer-Owned.
Market-Connected."

[GooeyText component — cycling]
font-head text-2xl text-ink-mid
"Onion  ·  Tomato  ·  Wheat  ·  Dal"
Morph: 1.5s, Cooldown: 2s

[Body-LG]
"BhavarthFPC is a registered Farmers Producer Company operating in
[Districts], [State]. We source directly from registered farmers
and supply to verified buyers."

[Compliance line]
font-mono text-xs tracking-widest text-muted
"CIN: XXXXXXXX | Est. YYYY | [State] | FPC Act 2013"

[Button row — gap-4 justify-center]
[Button-Primary "View Products →"] [Button-Secondary "Learn About FPC"]

[Glass CTA Cards — grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto]
Card-3 × 3: "For Buyers" | "For Farmers" | "Our Story"
```

### Entrance Animations (Framer Motion)
```ts
const container = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}
const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25,0.1,0.25,1] } }
}
// Animate in order: label → h1 → gooeytext → body → compliance → buttons → cards
```

---

## Section C: Trust Strip
**Background:** BG-2 (White)
**Height:** `py-4`
**Border:** `border-y border-border`

```tsx
<div className="overflow-x-auto">
  <div className="flex items-center gap-6 min-w-max mx-auto justify-center px-6">
    {[
      { label: 'CIN', value: 'U01XXXXX2022MH1234' },
      { label: 'GST', value: '27AAAAA0000A1Z5' },
      { label: 'Est.', value: '2022' },
      { label: 'State', value: 'Maharashtra' },
      { label: 'Districts', value: 'X Active' },
      { label: 'Act', value: 'FPC Act 2013' },
    ].map((item, i) => (
      <>
        <div key={item.label} className="flex items-center gap-1.5">
          <span className="font-mono text-xs text-muted tracking-widest">{item.label}:</span>
          <span className="font-mono text-xs text-ink-mid tracking-widest">{item.value}</span>
        </div>
        {i < 5 && <div className="w-px h-4 bg-border flex-shrink-0" />}
      </>
    ))}
  </div>
</div>
```

---

## Section D: How We Work (Business Overview)
**Background:** BG-3 (Paper Dark)
**Source:** `presentation blocks.md` (simplified, no tabs — just 3 cards)

```
[Label] "Our Process"
[H2] "From Farm to Market"
[Body-md] "A transparent, documented supply chain from registered farmers to verified buyers."

[3-column grid — grid-cols-1 md:grid-cols-3 gap-6]
Card-1 × 3:
  [Icon: Sprout] "Source"      — Procure from registered farmers in [Districts]
  [Icon: Scale]  "Grade & Pack" — Quality sorting, grading, and clean packaging
  [Icon: Truck]  "Deliver"     — Direct to verified buyers with full documentation
```
BorderBeam animation on hover from `presentation blocks.md` — green beam color.

---

## Section E: Products Showcase
**Background:** BG-1 (Paper)

```
[Label] "What We Supply"
[H2] "Fresh Vegetables & Grains"
[Body-md] "Sourced from registered farmers across [districts]."

[grid-cols-2 md:grid-cols-4 gap-6]
Row 1 (Vegetables):  Onion | Tomato | Potato | [Other Veg]
Row 2 (Grains):      Wheat | Tur Dal | Chana  | View All →

Each: Card-2

[Button-Text center] "View All Products →"
```

---

## Section F: Value Chain (Radial Orbital Timeline)
**Background:** BG-2 (White) + subtle `radial-gradient(circle at 50% 50%, rgba(47,125,50,0.04), transparent 70%)`
**Source:** `radialorbitaltimeline.md`

**8 Orbital Nodes:**
| # | Label | Status |
|---|---|---|
| 1 | Farmer Registration | completed |
| 2 | Crop Planning | completed |
| 3 | Procurement | completed |
| 4 | Sorting & Grading | in-progress |
| 5 | Storage | in-progress |
| 6 | Processing & Packing | pending |
| 7 | Dispatch to Buyer | pending |
| 8 | Records & Audit | pending |

Center core: BhavarthFPC logo + pulsing ring in `--leaf` color
Auto-rotate: 8s/node, pause on hover/click
Click → expand detail card (description of that stage)

**Color overrides for light theme:**
- Node completed: `--leaf` green
- Node in-progress: `--harvest` gold
- Node pending: `--border` grey
- Background: white
- Text: `--ink`

---

## Section G: Farmer Network Snapshot
**Background:** BG-1 (Paper)

```
[Label] "Our Network"
[H2] "Rooted in Farming Communities"

[grid-cols-2 md:grid-cols-4 gap-6]
Card-4 × 4:
  [Registered Farmers] [Districts] [Villages] [Seasons Active]
```
Each card footnote: "Per internal records, [Month Year]"
Numbers are static text — NOT animated.

---

## Section H: For Buyers CTA Band
**Background:** BG-4 (Leaf Green)

```
[H2 white] "Looking to source fresh produce directly from farmers?"
[Body white/80] "Documented supply chain, quality grading, and direct farmer linkage."

[gap-4 flex-wrap]
[Button-White "View Products"] [Button-Ghost-White "Send Enquiry"]
```

---

## Section I: Compliance Strip
**Background:** BG-2 (White)

```
[Label center] "Registrations & Compliance"

[flex flex-wrap gap-4 justify-center]
5–6 certification/registration badges:
Each: p-4 border border-border rounded-lg flex items-center gap-3
  [Logo/icon placeholder] [Name + number in mono font]

Items: FSSAI | FPC Act 2013 | GST Registered | State Reg. | [APEDA if applicable]

[Body-sm center text-muted mt-4]
"All registrations are maintained and available for verification on request."
```

---

## Section J: Footer
→ See `06-FOOTER.md`
