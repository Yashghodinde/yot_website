# 02 — Navbar & Footer

---

## NAVBAR

### States
1. **Top of page** — transparent background, logo + links white (on dark hero)
2. **Scrolled** — white/blur background (`backdrop-blur-md bg-white/80`), shadow appears, links dark
3. **Mobile** — hamburger icon, full-screen slide-down menu

### Elements
```
[YOT PRODUCTIONS logo/text]    [Home] [Video Editing] [Designing] [Web Support] [Creator Outreach]    [Get in Touch →]
```

### Desktop Layout
- Fixed position, full width, z-50
- Logo left: "YOT" in teal, "PRODUCTIONS" in dark text
- Nav links center (or right): Inter 500, 15px
- CTA button far right: `Get in Touch` — teal filled, rounded-lg
- Height: 64px default → 56px when scrolled (Framer Motion layout animation)
- Border bottom appears on scroll: 1px solid var(--border)

### Mobile Layout (< 768px)
- Logo left, hamburger icon right
- Hamburger: 3 bars → X animation (Framer Motion rotate)
- Menu: full-width dropdown, dark background (#09090b)
- Links stacked vertically, 48px tap targets
- CTA button full width at bottom of mobile menu
- Menu slides down with `AnimatePresence` height animation

### Framer Motion Code Pattern
```jsx
// Navbar scroll effect
const { scrollY } = useScroll()
const navBg = useTransform(scrollY, [0, 80], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.9)'])

// Mobile menu
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    />
  )}
</AnimatePresence>
```

### Links & Routes
| Label | Route |
|---|---|
| Home | `/` |
| Video Editing | `/video-editing` |
| Designing | `/designing` |
| Web Support | `/web-support` |
| Creator Outreach | `/creator-outreach` |
| Get in Touch | Scrolls to contact section on Home |

---

## FOOTER

### Layout (3-column grid, collapses to 1 on mobile)

**Column 1 — Brand**
- YOT PRODUCTIONS logo
- Tagline: "We make creators look unstoppable."
- Instagram button: teal filled

**Column 2 — Services**
- Heading: "Services"
- Links: Video Editing · Designing · Web Support · Creator Outreach · Careers

**Column 3 — Contact**
- Heading: "Get in Touch"
- Phone: Yash +91 97572 71093
- Phone: Kunal +91 85306 80455
- Email: contact@yotproductions.com
- Location: New Panvel, Navi Mumbai

**Bottom bar**
- Left: © 2025 YOT Productions
- Right: Instagram · Location (Google Maps)

### Styling
- Background: #09090b (dark)
- Text: white/slate-400
- Teal accents on links hover
- Top border: 1px solid rgba(255,255,255,0.08)
- Padding: 64px top, 32px bottom
