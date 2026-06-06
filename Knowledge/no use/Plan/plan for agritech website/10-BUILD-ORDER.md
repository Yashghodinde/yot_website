# Phase 10 — Build Order

Each step = one focused Claude session.
Each step is self-contained and testable before moving on.

---

## Step-by-Step Sequence

| Step | Task | Ref Plan File | Time Est. |
|---|---|---|---|
| 1 | Next.js init + deps + folder structure | 00-PROJECT-SETUP.md | 15 min |
| 2 | globals.css design tokens + Tailwind config | 01-DESIGN-LANGUAGE.md | 10 min |
| 3 | Font setup (Plus Jakarta Sans, Inter, JetBrains Mono) | 02-TYPOGRAPHY.md | 10 min |
| 4 | Navbar component (Radix UI, all states) | 04-BUTTONS-AND-NAVIGATION.md | 45 min |
| 5 | Footer component | 06-FOOTER.md | 30 min |
| 6 | Button system (all 5 types) + WhatsApp float | 04-BUTTONS-AND-NAVIGATION.md | 20 min |
| 7 | Home Hero (InfiniteGrid + GooeyText + animations) | 05-HOME-PAGE.md §B | 60 min |
| 8 | Home Trust Strip | 05-HOME-PAGE.md §C | 15 min |
| 9 | Home Business Overview (3 cards + BorderBeam) | 05-HOME-PAGE.md §D | 30 min |
| 10 | Home Products Grid | 05-HOME-PAGE.md §E | 30 min |
| 11 | RadialTimeline component (value chain) | 05-HOME-PAGE.md §F | 60 min |
| 12 | Home Farmer Stats + Buyers CTA + Compliance Strip | 05-HOME-PAGE.md §G–I | 30 min |
| 13 | About page (all sections) | 07-INNER-PAGES.md | 60 min |
| 14 | Business Model page (tabs + ZoomParallax) | 07-INNER-PAGES.md | 60 min |
| 15 | Products pages (overview + vegetables + grains) | 07-INNER-PAGES.md | 60 min |
| 16 | For Buyers page | 07-INNER-PAGES.md | 45 min |
| 17 | Compliance page | 07-INNER-PAGES.md | 45 min |
| 18 | Gallery page (BentoGallery + ZoomParallax) | 07-INNER-PAGES.md | 45 min |
| 19 | Contact page | 07-INNER-PAGES.md | 30 min |
| 20 | For Farmers page | 07-INNER-PAGES.md | 30 min |
| 21 | Mobile responsiveness pass (all pages, 375px) | — | 60 min |
| 22 | Reduced motion + accessibility pass | 08-ANIMATIONS.md | 30 min |
| 23 | SEO metadata + JSON-LD schema per page | — | 30 min |
| 24 | Claim register JSON + content audit | 09-COMPLIANCE-ARCHITECTURE.md | 45 min |
| 25 | Vercel deploy + domain setup | — | 20 min |

---

## How to Work with Claude on Each Step

### Prompt Pattern for Each Step
```
"Using the plan in /Users/yash/Documents/CODE/Bhavarth_Website/Knowledge/Plan/[file].md,
build [specific step]. 

Key constraints:
- Clean Light design, paper (#f7f4ed) background
- Plus Jakarta Sans headings, Inter body, JetBrains Mono compliance labels
- No animation on compliance/stat elements
- All numbers must be placeholder text [bracket notation] for me to fill in
- Mobile first, then desktop"
```

### Testing After Each Step
```bash
npm run dev
# Open: http://localhost:3000
# Check: Desktop (1440px) + Mobile (375px) in DevTools
# Check: Spacing, typography, hover states, no layout breaks
```

---

## Component Sources from `/additional prompts`

| Step | Component to Adapt | Source File |
|---|---|---|
| 7 | InfiniteGrid background | `element/infinite_grid.md` |
| 7 | GooeyText | `grovey text prompt.md` |
| 7 | ElevateHero shapes (adapted) | `elevate_vison.md` |
| 7 | LiquidGlassCard (hero cards) | `liquid glass.md` |
| 9 | BorderBeam | `presentation blocks.md` |
| 11 | RadialOrbitalTimeline | `radialorbitaltimeline.md` |
| 14 | PresentationBlocks tabs | `presentation blocks.md` |
| 14 | ZoomParallax | `zoomparalax.md` |
| 15 | ZoomParallax | `zoomparalax.md` |
| 16 | ZoomParallax | `zoomparalax.md` |
| 18 | InteractiveBentoGallery | `Gallery/interactive_gallery.md` |
| 18 | ZoomParallax (opening) | `zoomparalax.md` |
| All | Navbar | `navigation/navbar.md` |
| All | Footer | `FOOTER/footer1.md` |

---

## Placeholder Convention
All real data should use bracket placeholders:
```
[Company Full Name]     — Full legal name
[CIN]                   — Certificate of Incorporation number
[GST Number]           — GST registration
[State]                — Maharashtra or correct state
[Districts]            — District names
[Registered Address]   — Full registered office address
[Farmers Count]        — From internal records + date
[Villages Count]       — From internal records + date
[Founded Year]         — Year of incorporation
[Director 1 Name]      — As per ROC
[FSSAI Number]         — If obtained
[Phone]                — Business phone
[Email]                — Business email
[WhatsApp]             — WhatsApp number
```
