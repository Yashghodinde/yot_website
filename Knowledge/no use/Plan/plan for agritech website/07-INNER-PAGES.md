# Phase 7 — Inner Pages

---

## About Page (`/about`)

### Section Order

**1. Page Hero**
- Background: BG-1
- `pt-32 pb-20` (extra top for navbar clearance)
- H1: "About BhavarthFPC"
- Body-LG: "A farmer-owned enterprise built to connect agricultural communities to markets."
- Founding year + state (compliance label)

**2. Legal Identity Block**
- Background: BG-2
- Title: "Company Registration"
- Card-6 layout with full legal details:
  - Full Legal Name
  - CIN
  - Registered Address
  - Date of Incorporation
  - Directors (names only, no unverified titles)
  - State
  - Registrar of Companies
- Footer note: "As per MCA records. Contact [email] for certified copies."

**3. Mission & Vision**
- Background: BG-3
- 2-col layout
- Left: Mission — green left border `border-l-4 border-leaf pl-6`, italic quote style
- Right: Vision — same treatment
- Below: 3 value pills (e.g., Transparency | Farmer Welfare | Quality)

**4. Our Story Timeline**
- Background: BG-1
- Source: `radialorbitaltimeline.md` (horizontal milestone mode)
- Nodes = company history milestones (founding, first procurement, first sale, certifications, etc.)
- Only documented, dated events

**5. Team**
- Background: BG-2
- `grid-cols-2 md:grid-cols-4 gap-6`
- Card-7 × N members
- Only name + designation — no unverified titles

**6. Infrastructure**
- Background: BG-3
- Icon + stat list (NOT cards — simple `dl` list)
- Only verified, documented facts with dates
- Examples: Warehouse area (sqft), Grading capacity (tonnes/day), Vehicles, Districts

---

## Business Model Page (`/business-model`)

### Section Order

**1. Page Hero**
- Background: BG-1, `pt-32 pb-16`
- H1: "How a Farmers Producer Company Works"
- Body-LG: Explanation of FPC Act 2013 concept

**2. FPC Structure Explainer**
- Background: BG-2
- 2-col: Text (left) + SVG org chart (right)
- SVG shows: Farmers (shareholders) → FPC (entity) → Serves Buyers
- Text explains: legal basis, ownership structure, governance

**3. Tabbed Deep Dive**
- Background: BG-3
- Source: `presentation blocks.md` — full tab system
- Tab 1: "Structure" — FPC Act 2013, legal form, ownership
- Tab 2: "Farmer Membership" — join process, equity, voting, benefits
- Tab 3: "Procurement" — sourcing, pricing, documentation
- Tab 4: "Sales & Distribution" — buyer onboarding, dispatch, invoicing
- Tab 5: "Compliance & Audit" — board meetings, annual returns, records

**4. Visual Operations (Zoom Parallax)**
- Background: BG-1, `h-[300vh]` sticky scroll
- Source: `zoomparalax.md`
- 5 images: Farm → Sorting → Packing → Dispatch → Delivery
- Each zooms in as user scrolls through sticky container
- Caption text fades in per image

**5. Revenue Flow Diagram**
- Background: BG-2
- Inline SVG: Farmer → [FPC adds value] → Buyer → Revenue → FPC → Farmer Payment
- Simple horizontal flow with arrows
- No financial numbers

**6. CTA**
- Background: BG-4 (green)
- "Want to source from us?" + Button-White "Send Enquiry"

---

## Products Pages (`/products`, `/products/vegetables`, `/products/grains`)

### `/products` — Overview
- Category tabs: Vegetables | Grains & Pulses
- Each tab: Card-2 grid of products
- Each card links to `/products/[category]`

### Per Category Page
**1. Hero** — Category name, sourcing region, season range

**2. Product Detail Blocks** (repeat per crop)
```
[Product Name — H3]
[Compliance labels row: Region | Grade | Season | Packaging]
[Body-MD description]
[Variety badges: e.g., "Nasik Red", "White Onion"]
[font-mono text-xs] "Last updated: [date]"
```

**3. Bento Gallery**
- Source: `Gallery/interactive_gallery.md`
- Farm + crop photos, optional videos
- Categories: Farm | Processing | Packaged

**4. Quality Process**
- 3 Card-5 steps: Sorting → Grading → Packaging

**5. Inquiry Form**
- Name | Mobile | Company | Product | Quantity | Delivery State | Message
- Submit via Formspree

---

## For Buyers Page (`/for-buyers`)

**1. Hero** — "Direct Sourcing. Full Documentation."
**2. 4 Benefits** — Card-1 grid: Traceability | Quality Grading | Compliance Docs | Competitive Pricing
**3. Sourcing Process** — Card-5 vertical (5 steps): Enquiry → Sample → Agreement → Dispatch → Invoice
**4. Zoom Parallax** — Packhouse/grading visuals (source: `zoomparalax.md`)
**5. Certifications** — Card-6 grid of available docs
**6. Inquiry Form** — Full Formspree form (Name, Company, Product, Quantity, Delivery State, Message)

---

## For Farmers Page (`/for-farmers`)

**1. Hero** — "Join BhavarthFPC — Grow Together"
**2. Benefits** — Card-1 grid (4): Fair Pricing | Documentation | Input Support | Market Access
**3. Join Process** — Card-5 vertical (4 steps)
**4. Crops We Procure** — Badge tag cloud: Onion | Tomato | Wheat | Dal | etc.
**5. Contact/Registration** — Contact form or description of offline process

---

## Compliance Page (`/compliance`)

**Most important page. Every element must be factual and dated.**

**1. Page Hero** — "Registrations & Compliance" — BG-2
**2. Legal Identity** — Full official details in Card-6 format
**3. Registrations Grid** — Card-6 cards: FPC Reg | GST | FSSAI | APEDA | MSME | PAN
**4. Certifications** — Same card format, with validity dates
**5. Governance** — Board structure, meeting frequency, auditor
**6. Claim Register Notice**
```
Background: BG-3, border-l-4 border-harvest pl-6
Text: "All claims on this website are backed by internal documentation.
      Copies available on written request at [email/address]."
```
**7. Last Reviewed**
```
font-mono text-xs text-muted
"This page was last reviewed: [date]. Next scheduled review: [date]."
```

---

## Gallery Page (`/gallery`)

**1. Opening Zoom Parallax** — 3 hero farm images with scroll-zoom (source: `zoomparalax.md`)
**2. Filter Tabs** — All | Farms | Processing | Team | Products
**3. Bento Gallery** — Full interactive grid (source: `Gallery/interactive_gallery.md`)
   - Videos + images, lazy loaded
   - Modal on click
   - Draggable dock thumbnail preview

---

## Contact Page (`/contact`)

**2-column layout:**

Left column:
- Registered address (font-mono block)
- Operational address if different
- Phone (with tel: link)
- WhatsApp button (wa.me link)
- Email (with mailto: link)
- Business hours

Right column:
- Formspree contact form
- Fields: Name | Mobile | Company | Query Type | Message | Send

Below full-width:
- Google Maps embed (registered address)

---

## Page Hero Standard (All Inner Pages)
Every inner page uses this hero pattern:
```tsx
<section className="pt-32 pb-16 bg-paper border-b border-border">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Breadcrumb */}
    <nav className="font-mono text-xs text-muted tracking-widest mb-6">
      <a href="/" className="hover:text-leaf">Home</a>
      <span className="mx-2">/</span>
      <span>Page Name</span>
    </nav>
    <h1 className="font-head text-4xl md:text-5xl font-bold text-ink mb-4">
      Page Title
    </h1>
    <p className="text-muted text-lg max-w-2xl">
      Page description.
    </p>
  </div>
</section>
```
