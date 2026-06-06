# Phase 6 — Footer

**Background:** BG-5 (Dark `#07080A`)
**Source:** `FOOTER/footer1.md` adapted
**Used on:** All pages via `layout.tsx`

---

## Structure

```
[Top section — grid-cols-1 md:grid-cols-4 gap-8 py-16]

Col 1: Company
  - BhavarthFPC logo (white version)
  - 2-line description: "A registered Farmers Producer Company
    connecting farmers to markets in [State]."
  - Full registered address (font-mono text-xs text-white/50)
  - CIN: XXXXXXXX (font-mono text-xs text-white/40)
  - GST: XXXXXXXX (font-mono text-xs text-white/40)

Col 2: Products
  - Section heading: font-sans text-sm font-semibold text-white/70 uppercase tracking-widest mb-4
  - Links: Vegetables → /products/vegetables
           Onion, Tomato, Potato
           Grains & Pulses → /products/grains
           Wheat, Dal

Col 3: Company
  - About Us → /about
  - Business Model → /business-model
  - For Buyers → /for-buyers
  - For Farmers → /for-farmers
  - Compliance → /compliance
  - Gallery → /gallery

Col 4: Contact
  - Phone: [number] (with phone icon)
  - WhatsApp: [number] (with WA icon, links to wa.me)
  - Email: [email]
  - Address: Short operational address
  - [Social icons row: LinkedIn, optional]

[Divider: border-t border-white/10 my-0]

[Bottom bar — py-6 flex justify-between flex-wrap gap-4]
Left:
  font-mono text-xs text-white/40
  "© 2025 BhavarthFPC. All rights reserved."

Center:
  font-mono text-xs text-white/40
  "Registered under FPC Act 2013 | [State] | CIN: XXXXXXXX"

Right:
  Links: Terms | Privacy Policy
  font-sans text-xs text-white/40 hover:text-white/70
```

---

## Link Hover Style
```css
.footer-link {
  color: rgba(255,255,255,0.55);
  font-size: 0.875rem; /* text-sm */
  transition: color 160ms ease;
}
.footer-link:hover {
  color: rgba(255,255,255,0.90);
}
```

---

## Social Icons
```tsx
// Only include verified/active accounts
<a href="https://linkedin.com/..." className="text-white/40 hover:text-white/80 transition-colors">
  <FaLinkedin className="w-4 h-4" />
</a>
<a href="https://wa.me/91XXXXXXXXXX" className="text-white/40 hover:text-white/80 transition-colors">
  <FaWhatsapp className="w-4 h-4" />
</a>
```
