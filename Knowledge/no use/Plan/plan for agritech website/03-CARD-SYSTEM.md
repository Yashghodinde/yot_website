# Phase 3 — Card Design System

All 7 card types used across the website.

---

## Card-1: Standard Content Card
**Used on:** Products overview, Team, For Buyers benefits, For Farmers benefits

```tsx
<div className="
  bg-white rounded-xl border border-border
  p-6 md:p-8
  shadow-sm hover:shadow-md
  transition-all duration-220 ease-out
  hover:-translate-y-1.5
">
  {/* Icon block */}
  <div className="w-10 h-10 rounded-lg bg-paper flex items-center justify-center mb-4">
    <Icon className="w-5 h-5 text-leaf" />
  </div>
  <h3 className="font-head text-xl font-semibold text-ink mb-2">Card Title</h3>
  <p className="text-muted text-base leading-relaxed">Card description.</p>
</div>
```
Shadow: `0 1px 3px rgba(0,0,0,0.08)` → hover `0 4px 16px rgba(0,0,0,0.10)`
Border radius: `rounded-xl` (12px)

---

## Card-2: Product Card
**Used on:** Products grid, Home products section

```tsx
<div className="
  bg-white rounded-xl border border-border overflow-hidden
  hover:shadow-lg transition-all duration-220 hover:-translate-y-1.5
  group
">
  {/* Image */}
  <div className="aspect-[4/3] bg-paper-dark overflow-hidden">
    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
  </div>
  {/* Content */}
  <div className="p-5">
    <div className="flex items-center gap-2 mb-2">
      <Badge variant="outline" className="text-leaf border-leaf/40 text-xs font-mono">
        Seasonal
      </Badge>
    </div>
    <h3 className="font-head text-lg font-semibold text-ink mb-1">Product Name</h3>
    <p className="text-muted text-sm mb-4">Region · Grade info</p>
    <a className="text-leaf text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all duration-160">
      View Details <ArrowRight className="w-4 h-4" />
    </a>
  </div>
</div>
```

---

## Card-3: Glass CTA Card
**Used on:** Hero CTA row (3 cards), For Buyers quick links
**Source:** Adapted from `liquid glass.md` for light theme

```tsx
<div className="
  relative rounded-2xl border border-white/60
  bg-white/70 backdrop-blur-md
  p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]
  hover:bg-white/90 hover:shadow-[0_8px_32px_rgba(47,125,50,0.12)]
  transition-all duration-300 cursor-pointer group
">
  <Icon className="w-6 h-6 text-leaf mb-3" />
  <h3 className="font-head text-lg font-semibold text-ink mb-1">Title</h3>
  <p className="text-muted text-sm leading-relaxed">Short description</p>
  <ArrowRight className="w-4 h-4 text-leaf mt-4 group-hover:translate-x-1 transition-transform duration-160" />
</div>
```

---

## Card-4: Stat Card
**Used on:** Farmer Network Snapshot (4 stats), Impact section

```tsx
<div className="bg-white rounded-xl border border-border p-6 text-center">
  <p className="font-head text-4xl md:text-5xl font-bold text-leaf mb-1">42</p>
  <p className="font-sans text-sm font-medium text-ink-mid">Villages Covered</p>
  <p className="font-mono text-xs text-muted-light mt-3 tracking-wide">
    Per internal records, Jun 2025
  </p>
</div>
```
**IMPORTANT:** Numbers are static text, NOT animated counters. Compliance requirement.

---

## Card-5: Process Step Card
**Used on:** Business Overview (Home), Buyer Sourcing Process, Farmer Join Process

```tsx
{/* Vertical stepper */}
<div className="relative flex gap-4">
  {/* Step circle */}
  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-leaf text-white
    flex items-center justify-center font-head font-bold text-sm z-10">
    01
  </div>
  {/* Vertical connector line (omit on last item) */}
  <div className="absolute left-5 top-10 bottom-0 w-px bg-border" />
  {/* Content */}
  <div className="pb-10">
    <h4 className="font-head text-lg font-semibold text-ink mb-1 mt-1.5">Step Title</h4>
    <p className="text-muted text-base leading-relaxed">Step description.</p>
  </div>
</div>
```

---

## Card-6: Compliance / Legal Record Card
**Used on:** Compliance page, Trust Strip expanded, Certifications section

```tsx
<div className="bg-white rounded-xl border border-border p-6">
  <div className="flex items-start justify-between mb-4">
    <div>
      <p className="font-mono text-xs tracking-widest text-leaf uppercase mb-1">
        Registration Type
      </p>
      <h4 className="font-head text-lg font-semibold text-ink">Certificate Name</h4>
    </div>
    <Badge className="bg-leaf/10 text-leaf border-0 text-xs font-semibold">Active</Badge>
  </div>
  <dl className="space-y-2 border-t border-border pt-4">
    <div className="flex justify-between items-center">
      <dt className="font-mono text-xs text-muted tracking-wide">Number</dt>
      <dd className="font-mono text-xs text-ink font-medium">XXXXX</dd>
    </div>
    <div className="flex justify-between items-center">
      <dt className="font-mono text-xs text-muted tracking-wide">Issuing Body</dt>
      <dd className="font-mono text-xs text-ink">Authority Name</dd>
    </div>
    <div className="flex justify-between items-center">
      <dt className="font-mono text-xs text-muted tracking-wide">Valid Until</dt>
      <dd className="font-mono text-xs text-ink">MM/YYYY</dd>
    </div>
  </dl>
</div>
```

---

## Card-7: Team Member Card
**Used on:** About page team section

```tsx
<div className="bg-white rounded-xl border border-border p-6 text-center">
  <div className="w-16 h-16 rounded-full bg-paper-dark mx-auto mb-4 overflow-hidden">
    <img className="w-full h-full object-cover" alt="Name" />
  </div>
  <h4 className="font-head text-base font-semibold text-ink">Full Name</h4>
  <p className="font-sans text-sm text-muted mt-1">Designation</p>
</div>
```

---

## Badge Types
```tsx
// Status: Active/Valid (green)
<Badge className="bg-leaf/10 text-leaf border-0 text-xs">Active</Badge>

// Status: In Process (amber)
<Badge className="bg-harvest/10 text-harvest border-0 text-xs">In Process</Badge>

// Category tag (outline)
<Badge variant="outline" className="text-leaf border-leaf/40 font-mono text-xs">Vegetable</Badge>

// Season/period (muted)
<Badge variant="outline" className="text-muted border-border font-mono text-xs">Oct–Feb</Badge>
```
