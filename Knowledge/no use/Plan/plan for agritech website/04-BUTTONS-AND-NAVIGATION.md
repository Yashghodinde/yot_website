# Phase 4 — Buttons & Navigation

---

## 4.1 Button System

### Button-Primary (Green Filled)
**Used on:** Main CTAs, "Send Enquiry", "View Products"
```tsx
<button className="
  inline-flex items-center gap-2
  bg-leaf hover:bg-leaf-dark text-white
  font-head text-sm font-semibold
  px-6 py-3 rounded-lg
  transition-all duration-160 ease-out
  hover:-translate-y-0.5
  hover:shadow-[0_4px_12px_rgba(47,125,50,0.30)]
  active:translate-y-0 active:shadow-none
">
  Button Text <ArrowRight className="w-4 h-4" />
</button>
```

### Button-Secondary (Outline/Ghost)
**Used on:** Secondary CTAs, "Learn More", "View Details"
```tsx
<button className="
  inline-flex items-center gap-2
  border border-ink/20 hover:border-leaf
  text-ink hover:text-leaf
  font-sans text-sm font-medium
  px-6 py-3 rounded-lg
  transition-all duration-160 ease-out
  hover:-translate-y-0.5
">
  Button Text
</button>
```

### Button-White (On Green/Dark Backgrounds)
**Used on:** CTA bands, footer CTAs
```tsx
<button className="
  inline-flex items-center gap-2
  bg-white hover:bg-paper text-leaf
  font-head text-sm font-semibold
  px-6 py-3 rounded-lg
  transition-all duration-160 ease-out
  hover:-translate-y-0.5 hover:shadow-md
">
  Button Text
</button>
```

### Button-Ghost-White (On Green/Dark, secondary)
```tsx
<button className="
  inline-flex items-center gap-2
  border border-white/40 hover:border-white/70
  text-white/80 hover:text-white
  font-sans text-sm font-medium
  px-6 py-3 rounded-lg
  transition-all duration-160
">
  Button Text
</button>
```

### Button-Text (Link style)
**Used on:** "View All Products →", card CTAs
```tsx
<button className="
  inline-flex items-center gap-1 hover:gap-2
  text-leaf font-sans text-sm font-medium
  underline-offset-4 hover:underline
  transition-all duration-160
">
  Link Text <ArrowRight className="w-4 h-4" />
</button>
```

### WhatsApp Float Button (All pages)
```tsx
// Fixed bottom-right on all pages
<a href="https://wa.me/91XXXXXXXXXX" target="_blank"
  className="
    fixed bottom-6 right-6 z-50
    w-14 h-14 rounded-full
    bg-[#25D366] hover:bg-[#128C7E]
    flex items-center justify-center
    shadow-lg hover:shadow-xl
    transition-all duration-220 hover:scale-110
  "
>
  <FaWhatsapp className="w-7 h-7 text-white" />
</a>
```

---

## 4.2 Navigation Component
**Source:** `navigation/navbar.md` (Radix UI NavigationMenu)

### Desktop Structure
```
Height: h-16
Layout: [Logo left] ··· [Links center] ··· [CTA button right]

Logo: "BhavarthFPC" — font-head font-bold text-ink + optional SVG mark

Links:
  Home | About | Business Model | Products ▾ | For Buyers | Compliance | Contact

Products Dropdown:
  ┌─────────────────────────┐
  │ Vegetables              │
  │   · Onion               │
  │   · Tomato              │
  │   · Other Vegetables    │
  │─────────────────────────│
  │ Grains & Pulses         │
  │   · Wheat               │
  │   · Pulses (Dal)        │
  │   · Other Grains        │
  └─────────────────────────┘

CTA: Button-Primary "Send Enquiry →" (smaller: px-4 py-2)
```

### Navbar States
```css
/* Default — top of page */
.navbar-top {
  background: transparent;
  border-bottom: 1px solid transparent;
}

/* Scrolled — after 60px */
.navbar-scrolled {
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 1px 8px rgba(0,0,0,0.06);
}

transition: all 300ms ease;
```

### Mobile Menu
```
Hamburger → slide-down full-width panel (not overlay)
Background: white, border-b border-border

Items (stacked):
  Home
  About
  Business Model
  Products
    └ Vegetables
    └ Grains & Pulses
  For Buyers
  For Farmers
  Compliance
  Contact

Bottom: Button-Primary "Send Enquiry" full-width
```
