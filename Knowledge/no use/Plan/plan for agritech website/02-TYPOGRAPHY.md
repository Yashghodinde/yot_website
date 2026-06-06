# Phase 2 — Typography System

## 2.1 Font Stack
| Font | Variable | Use |
|---|---|---|
| **Plus Jakarta Sans** | `font-head` | All headings (H1–H4), buttons |
| **Inter** | `font-sans` | Body text, nav links, descriptions, labels |
| **JetBrains Mono** | `font-mono` | CIN, GST, registration numbers, compliance labels, section tags |

---

## 2.2 Complete Type Scale

### Display (Hero H1)
```tsx
className="font-head text-5xl md:text-7xl font-bold leading-tight tracking-tight text-ink"
// Used on: Hero headline only
// Example: "Farmer-Owned. Market-Connected."
```

### Heading XL (Section H2)
```tsx
className="font-head text-3xl md:text-4xl font-semibold leading-tight text-ink"
// Used on: All main section headings
// Example: "From Farm to Market"
```

### Heading LG (Card/Sub-section H3)
```tsx
className="font-head text-2xl font-semibold text-ink"
// Used on: Card headings, sub-section titles
// Example: "Our Products"
```

### Heading MD (Minor H4)
```tsx
className="font-head text-xl font-semibold text-ink"
// Used on: Small sub-sections, feature names
```

### Body LG (Primary descriptions)
```tsx
className="font-sans text-lg leading-relaxed text-ink-mid"
// Used on: Hero subtext, section intros, main page descriptions
```

### Body MD (Secondary body)
```tsx
className="font-sans text-base leading-relaxed text-muted"
// Used on: Card descriptions, supporting text
```

### Body SM (Meta, footnotes)
```tsx
className="font-sans text-sm text-muted"
// Used on: Dates, meta info, secondary labels
```

### Label (Section identifier)
```tsx
className="font-mono text-xs tracking-widest uppercase text-leaf"
// Used on: Section eyebrow labels above H2
// Example: "Our Process", "Products", "Compliance"
```

### Compliance (Registration numbers)
```tsx
className="font-mono text-xs tracking-widest text-ink-mid"
// Used on: CIN, GST, FSSAI numbers, dates in Trust Strip
// Example: "CIN: U01XXXXX2022MH1234"
```

### Caption
```tsx
className="font-sans text-xs text-muted-light italic"
// Used on: Image captions, gallery descriptions
```

### Badge Text
```tsx
className="font-sans text-xs font-semibold"
// Used inside: Badges and tags
```

### Nav Link
```tsx
className="font-sans text-sm font-medium text-ink hover:text-leaf transition-colors duration-160"
// Used on: All navigation links
```

### CTA Primary Button Text
```tsx
className="font-head text-sm font-semibold"
// Used inside: Primary (green) buttons
```

### CTA Secondary Button Text
```tsx
className="font-sans text-sm font-medium"
// Used inside: Ghost/outline buttons
```

---

## 2.3 Text Color Rules
| Color | Hex | Used When |
|---|---|---|
| `text-ink` | #171914 | Headings on light backgrounds |
| `text-ink-mid` | #3d3d3a | Body text on white/paper |
| `text-muted` | #6b7280 | Supporting text, descriptions |
| `text-muted-light` | #9ca3af | Captions, footnotes, fine print |
| `text-leaf` | #2f7d32 | Labels, links, active states on light BG |
| `text-harvest` | #d7a928 | Special highlights, award callouts |
| `text-white` | #ffffff | ALL text on dark or green backgrounds |

---

## 2.4 Line Heights
| Context | Class | Value |
|---|---|---|
| Display / headings | `leading-tight` | 1.25 |
| Sub-headings | `leading-snug` | 1.375 |
| Body text | `leading-relaxed` | 1.625 |
| Small text | `leading-normal` | 1.5 |
| Compliance/mono | `leading-none` | 1.0 |

---

## 2.5 Letter Spacing
| Context | Class | Use |
|---|---|---|
| Display headings | `tracking-tight` | H1 only |
| Normal headings | default | H2–H4 |
| Section labels | `tracking-widest` | Mono eyebrow labels |
| Compliance numbers | `tracking-widest` | CIN, GST |
| Body | default | All body text |

---

## 2.6 Heading + Subtext Pairing Pattern
Every section that has a heading also has this 3-line opener:
```
[font-mono label in leaf]
[font-head H2 in ink]
[font-sans body-lg in muted, max-w-2xl]
```
Spacing: `mb-3` after label, `mb-4` after H2, `mb-12` after body before content.
