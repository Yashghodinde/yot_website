# Bhavarth FPC Website Plan

This is the Claude-friendly master plan for designing and building the Bhavarth FPC website.

The goal is a detailed multipage frontend for a farmers producer company that can serve farmers, buyers, partners, auditors, banks, vendors, job applicants, and public reviewers.

## 1. Source Material

Use these folders as context:

- `Knowledge/` - Strategic observations and Bhavarth-specific design direction.
- `additional prompts/` - Reusable UI component prompts and interaction references.
- `icons/` - Existing agriculture, compliance, finance, and operations icon assets.
- `3D_model/` - Optional visual assets for future immersive sections. Use sparingly.

Important research conclusions:

- Bhavarth should not look like a generic farm template.
- Bhavarth should not look like a fake SaaS startup.
- Bhavarth should feel like an organized agricultural operations company.
- Agriculture, farmer trust, supply reliability, documentation, quality checks, and traceability are the core story.
- Public claims must be compliance-safe because buyers, lenders, auditors, tax reviewers, farmers, vendors, and competitors may read the website.

## 2. Brand Positioning

Working positioning:

> Bhavarth is a farmers producer company building a transparent, traceable, and organized agriculture value chain from farmers to markets.

Frontend feeling:

- Premium but earthy.
- Serious but human.
- Modern but not artificial.
- Data-rich but readable.
- Farmer-first and buyer-ready.
- Compliance-aware without looking bureaucratic.

Avoid:

- Generic "organic farm" template language.
- Fake growth claims.
- Fake dashboards, fake testimonials, fake counters, fake customer logos.
- Overused green gradients.
- Dark portfolio clone styling.
- Decorative motion that does not explain anything.

## 3. Recommended Stack

Use this stack unless the project has already chosen something else:

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- shadcn/ui structure for base primitives.
- Framer Motion for controlled animations.
- lucide-react for icons.
- MD/JSON content files for factual content.
- Optional CMS later: Sanity, Storyblok, Contentful, or Strapi.

Recommended app structure:

```text
src/
  app/
    page.tsx
    about/page.tsx
    farmers/page.tsx
    products/page.tsx
    products/[slug]/page.tsx
    infrastructure/page.tsx
    traceability/page.tsx
    quality/page.tsx
    sustainability/page.tsx
    stories/page.tsx
    careers/page.tsx
    contact/page.tsx
  components/
    layout/
    sections/
    ui/
    diagrams/
    forms/
  content/
    company.ts
    claims.ts
    navigation.ts
    products.ts
    regions.ts
    certifications.ts
    stories.ts
  styles/
    globals.css
```

## 4. Design System

Use an industrial-agri premium design language.

Suggested color tokens:

```css
:root {
  --color-soil-950: #070806;
  --color-soil-900: #10120d;
  --color-ink: #171914;
  --color-muted-ink: #5f6659;
  --color-paper: #f7f4ed;
  --color-paper-2: #ece7dc;
  --color-leaf-700: #1f5f32;
  --color-leaf-600: #2f7d32;
  --color-leaf-400: #69b34c;
  --color-harvest-500: #d7a928;
  --color-clay-500: #a65f3b;
  --color-sky-500: #4ea3d8;
  --line-soft: rgba(23, 25, 20, 0.12);
  --line-inverse: rgba(255, 255, 255, 0.12);
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --container: 1200px;
}
```

Typography:

- Use a strong sans-serif for headings.
- Use a readable sans-serif for body.
- Use mono text only for IDs, dates, certification numbers, batch codes, and document metadata.
- Avoid giant headings inside dense sections.
- Letter spacing should stay at `0` unless a tiny uppercase label needs subtle spacing.

Layout:

- Use full-width bands with constrained inner content.
- Do not nest cards inside cards.
- Cards should be individual repeated items, not generic page wrappers.
- Use 8px radius for most cards and controls.
- Use strong section rhythm: hero, proof, process, products, quality, CTA.
- Every page should have a clear primary action.

## 5. Global Navigation

Primary nav:

- Home
- About
- Farmers
- Products
- Infrastructure
- Traceability
- Quality
- Sustainability
- Stories
- Contact

Header CTA:

- Primary: `Discuss Supply Requirement`
- Secondary option on mobile or footer: `Partner With Bhavarth`

Use `additional prompts/navigation/navbar.md` as the reference for a responsive mega-nav pattern, but adapt labels and content for Bhavarth.

Mega menu groups:

- Products: Fresh Fruits, Fresh Vegetables, Processed Produce, Specialty Crops, Seasonal Availability.
- Farmers: Farmer Network, Advisory, Procurement Process, Payment and Documentation, Join as Farmer.
- Quality: Traceability, Food Safety, Certifications, Quality Checks, Documentation.
- Company: About, Infrastructure, Sustainability, Stories, Careers, Contact.

Mobile navigation:

- Full-screen or drawer menu.
- Keep CTAs visible.
- Use clear hierarchy, not a flat long list.

## 6. Page Map

Build these pages:

1. Home
2. About Bhavarth
3. Farmer Network
4. Products
5. Product Detail pages
6. Infrastructure
7. Traceability
8. Quality and Certifications
9. Sustainability
10. Stories and Media
11. Careers
12. Contact
13. Legal and Policies

Optional later:

- Buyer Portal
- Farmer App
- Download Catalogue
- Facility Visit Request
- Claims and Certifications Index

## 7. Homepage Specification

### 7.1 Hero

Purpose: make the company immediately clear.

Content:

- Company name: Bhavarth FPC.
- One factual positioning sentence.
- Short proof-led paragraph.
- Primary CTA: `Discuss Supply Requirement`.
- Secondary CTA: `View Traceability`.
- Status pill: example `Farmer producer company | Traceable supply | Quality-led sourcing`.
- Visual: real farm, produce, facility, logistics image/video, or an operations dashboard built from real concepts.

Do:

- Keep a hint of the next section visible below the fold.
- Show agricultural reality in the first viewport.
- Use glass cards only for high-value proof, not as decoration.

Do not:

- Use a purely abstract gradient hero.
- Use the geometric hero prompt as-is if it hides the agriculture identity.
- Use unsupported metrics.

Prompt references:

- `additional prompts/elevate vision prompt.md` can inspire geometric layering.
- `additional prompts/liquid glass.md` can inspire hero proof cards.
- `additional prompts/element/infinite_grid.md` can inspire a subtle operations-grid background, but only if it does not dominate.

### 7.2 Trust Strip

Show verified facts with dates.

Possible slots:

- Legal entity status.
- Operating regions.
- Product categories.
- Farmer network size, only if verified.
- Certifications, only if verified.
- Dispatch or quality process, only if verified.

Every metric must include a source or `To be verified`.

### 7.3 Value Chain

Show the journey:

```text
Grow -> Source -> Sort -> Grade -> Pack -> Document -> Dispatch -> Trace
```

Use an interactive process module. The visitor should understand how Bhavarth works in 20 seconds.

Prompt references:

- `additional prompts/radialorbitaltimeline.md` can inspire a process system, but adapt it into a farm-to-market value-chain diagram.
- `additional prompts/presentation blocks.md` can inspire tabbed capability sections.

### 7.4 Traceability Console

This should become a signature section.

Show a sample batch journey:

- Batch ID.
- Crop.
- Source region.
- Farmer or farmer group.
- Harvest date.
- Quality check.
- Packaging.
- Dispatch.
- Documents available.

Use clearly marked sample data until real data exists.

### 7.5 Products and Crops

Use product cards with:

- Image.
- Category.
- Season.
- Source region.
- Grade options.
- Packaging options.
- Buyer use cases.
- Inquiry CTA.

Suggested categories:

- Fresh Fruits.
- Fresh Vegetables.
- Processed Produce.
- Dried or Frozen Products.
- Specialty Ingredients.

### 7.6 Farmer Network

Explain farmer value:

- Market access.
- Transparent procurement.
- Advisory support.
- Input or crop planning support, only if real.
- Payment and documentation process.
- Community and training, only if real.

Use real farmer portraits later. Until then, use neutral placeholders and avoid pretending the photos are actual Bhavarth farmers.

### 7.7 Infrastructure

Show serious operating capability:

- Collection centers.
- Sorting and grading.
- Pack house.
- Cold storage.
- Quality lab.
- Logistics network.
- Documentation process.

Use a facility gallery when real assets are available.

Prompt reference:

- `additional prompts/Gallery/interactive_gallery.md` can become the operations and facility gallery.
- `additional prompts/zoomparalax.md` can be used for an immersive farm/facility media section if performance remains good.

### 7.8 Quality and Compliance

Show:

- Quality check stages.
- Documentation available.
- Certification wall.
- GST/invoice process if public and approved.
- Lot-level inspection.
- Rejection/claim handling process.

Do not hide legal details behind hover only. Dates and statuses must be visible.

### 7.9 Sustainability

Frame sustainability as operational proof, not vague branding.

Possible topics:

- Waste reduction.
- Water stewardship.
- Responsible sourcing.
- Farmer income resilience.
- Climate-smart crop planning.

Only publish claims with source backing.

### 7.10 Stories and Media

Use cards for:

- Farmer stories.
- Field updates.
- Infrastructure updates.
- Product availability updates.
- Media coverage.
- Community initiatives.

Avoid long text-heavy blog styling. Make it scannable.

### 7.11 Final CTA

End with clear actions:

- `Source from Bhavarth`
- `Partner as Farmer`
- `Request Product Catalogue`
- `Book Facility Visit`

## 8. Inner Page Specifications

### 8.1 About Bhavarth

Sections:

- Hero with mission and factual company identity.
- Why Bhavarth exists.
- Operating model.
- Governance and legal identity.
- Farmer producer company context.
- Leadership or team, only with approved names/photos.
- Timeline, only with real milestones.
- CTA to contact or partner.

### 8.2 Farmer Network

Sections:

- Farmer-first hero.
- How farmers work with Bhavarth.
- Procurement process.
- Documentation and payment transparency.
- Advisory and training programs.
- Region map.
- FAQ.
- Farmer inquiry CTA.

### 8.3 Products

Sections:

- Product categories overview.
- Seasonal availability.
- Source regions.
- Buyer use cases.
- Packaging and dispatch overview.
- Inquiry form.

### 8.4 Product Detail

Each product page should include:

- Product name.
- Category.
- Source regions.
- Seasonality.
- Grade or quality options.
- Packaging options.
- Storage conditions.
- Dispatch conditions.
- Available documents.
- Buyer use cases.
- Last updated date.
- Inquiry CTA.

### 8.5 Infrastructure

Sections:

- Operations hero.
- Collection and aggregation.
- Sorting and grading.
- Pack house or processing.
- Cold chain or storage.
- Dispatch and logistics.
- Operations gallery.
- CTA for facility visit or buyer discussion.

### 8.6 Traceability

Sections:

- Traceability promise.
- Sample batch lookup.
- Batch journey timeline.
- Quality and document cards.
- QR concept.
- FAQ around what traceability proves and does not prove.

### 8.7 Quality and Certifications

Sections:

- Quality framework.
- Food safety process.
- Certifications with validity.
- Document availability.
- Audit readiness.
- Compliance contact.

### 8.8 Sustainability

Sections:

- Practical sustainability position.
- Farmer resilience.
- Waste reduction.
- Water and soil stewardship.
- Responsible sourcing.
- Evidence-backed impact.

### 8.9 Stories and Media

Sections:

- Filterable story grid.
- Categories: Farmer Stories, Field Notes, Company Updates, Media, Infrastructure.
- Story detail pages later.

### 8.10 Careers

Sections:

- Why work with Bhavarth.
- Open roles.
- Field, operations, quality, finance, technology categories.
- Hiring contact.

### 8.11 Contact

Sections:

- Buyer inquiry form.
- Farmer inquiry form.
- Vendor/partner inquiry form.
- Compliance/document inquiry.
- Office/contact details.
- Map or operating regions.

Use accessible forms with labels, validation, and clear success/error states.

## 9. Component Plan

Build reusable components:

```text
layout/
  SiteHeader
  MegaMenu
  MobileNav
  SiteFooter
  PageShell

sections/
  HeroOperations
  TrustStrip
  ValueChainFlow
  TraceabilityConsole
  ProductShowcase
  FarmerNetworkPanel
  InfrastructureGallery
  QualityFramework
  CertificationWall
  SustainabilityProof
  StoryGrid
  ContactCtaBand

diagrams/
  FarmToMarketDiagram
  TraceabilityFlow
  QualityCheckFlow
  ComplianceLedger

forms/
  BuyerInquiryForm
  FarmerInquiryForm
  PartnerInquiryForm
```

## 10. Prompt Asset Mapping

Use `additional prompts/` like this:

- `navigation/navbar.md`: adapt for responsive public-site mega nav.
- `FOOTER/footer1.md`: adapt for compliance-heavy footer.
- `Gallery/interactive_gallery.md`: use for operations, field, product, and facility media gallery.
- `radialorbitaltimeline.md`: adapt for traceability or value-chain system. Reduce visual complexity on mobile.
- `presentation blocks.md`: adapt for capability tabs, quality cards, and proof panels.
- `liquid glass.md`: use sparingly for hero proof cards or floating status cards.
- `zoomparalax.md`: use only for a high-impact real media section.
- `element/infinite_grid.md`: use only as a subtle operations/data background.
- `elevate vision prompt.md`: use only for shape layering inspiration, not as final generic hero.
- `grovey text prompt.md`: avoid on the main corporate site unless used very subtly for a small word transition.
- `element/wave_sphere.md`: avoid for the public site unless converted into a meaningful data/traceability visual.
- `sidebar/sleek_gptstyle side bar.md`: not needed for public marketing pages. Save for future admin/portal UI.
- `papershader.md`: avoid as a primary visual style unless a future section needs a tactile paper/soil texture.

Rule: adapt patterns, do not copy placeholder copy or unrelated visual identity.

## 11. Content and Claim Safety

Create a claim registry before final copy.

Recommended files:

```text
src/content/company.ts
src/content/claims.ts
src/content/products.ts
src/content/certifications.ts
src/content/regions.ts
src/content/stories.ts
```

Every claim should include:

- Claim text.
- Claim type.
- Source document.
- Source date.
- Public visibility.
- Last reviewed date.
- Approval status.

Claim types:

- Legal identity.
- Registration.
- GST/tax.
- Certification.
- Farmer network.
- Acreage/crop.
- Procurement volume.
- Revenue or finance.
- Infrastructure.
- Export or buyer.
- Social impact.

Use this behavior:

- If verified, publish with date/context.
- If not verified, use general language.
- If sensitive, keep it out of public copy.

Bad copy:

- `India's fastest growing agri company.`
- `Guaranteed income for every farmer.`
- `Government approved supply chain.`

Safer copy:

- `Working with farmer groups across selected operating regions, based on internal onboarding records.`
- `Quality checks and documentation are maintained for eligible lots.`
- `Product availability depends on season, source region, and quality requirements.`

## 12. Motion Rules

Motion should explain operations.

Use:

- Hero reveal.
- Value-chain stage activation.
- Traceability timeline expansion.
- Capability tabs.
- Button and card hover polish.
- Mobile sticky CTA.

Avoid:

- Constant background motion.
- Decorative cursor trails.
- Unreadable text transitions.
- Autoplay legal/certification carousels.
- Motion that causes layout shift.

Reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

For marquee or animated grids, show a static layout under reduced motion.

## 13. Accessibility and Responsiveness

Minimum requirements:

- Works from 360px mobile to large desktop.
- No overlapping text.
- All buttons and links have accessible names.
- All forms have labels.
- Sufficient color contrast.
- Keyboard navigation for menus and forms.
- Reduced motion respected.
- Images have useful alt text.
- No important legal information hidden only on hover.

Test viewports:

- 360 x 740
- 390 x 844
- 768 x 1024
- 1024 x 768
- 1440 x 900

## 14. Build Phases

### Phase 1: Foundation

- Scaffold Next.js, TypeScript, Tailwind, shadcn/ui.
- Add design tokens.
- Add base layout.
- Add navigation and footer.
- Add content files with safe placeholders.

Acceptance:

- App runs locally.
- Header/footer responsive.
- No console errors.

### Phase 2: Homepage

- Build hero.
- Build trust strip.
- Build value-chain flow.
- Build traceability console.
- Build product showcase.
- Build farmer panel.
- Build quality/compliance section.
- Build final CTA.

Acceptance:

- Homepage communicates Bhavarth clearly in first viewport.
- CTAs are visible.
- Mobile layout works.
- Claims are safe placeholders or verified facts.

### Phase 3: Core Pages

- About.
- Farmers.
- Products.
- Product detail template.
- Infrastructure.
- Traceability.
- Quality.
- Sustainability.
- Contact.

Acceptance:

- Every page has unique purpose.
- No page is a thin copy of another page.
- Forms are accessible.
- Product pages are useful for B2B buyers.

### Phase 4: Polish

- Add real media.
- Optimize images.
- Add motion.
- Add SEO metadata.
- Add structured data.
- Add analytics with consent if needed.

Acceptance:

- Lighthouse performance checked.
- Playwright screenshots reviewed.
- No layout overlap.
- Reduced motion checked.

### Phase 5: Content Hardening

- Replace placeholders with approved copy.
- Add claim registry.
- Add certification validity.
- Add legal pages.
- Add media permissions.

Acceptance:

- Every public claim has a source or is neutral.
- Sensitive details are not accidentally published.

## 15. Claude Execution Protocol

When implementing:

1. Read this plan.
2. Read the relevant `Knowledge/` sections for the page or component.
3. Read only the specific `additional prompts/` file needed for the current component.
4. Build one vertical slice at a time.
5. Keep components reusable and content-driven.
6. Do not add unsupported business claims.
7. Do not invent farmer counts, acre counts, buyer names, certifications, revenue, export status, or legal numbers.
8. Verify with browser screenshots after frontend changes.
9. Keep mobile quality equal to desktop quality.
10. Commit in meaningful milestones.

Preferred commit milestones:

- `Scaffold Bhavarth frontend`
- `Add design tokens and layout`
- `Build homepage hero and trust sections`
- `Add traceability and value chain sections`
- `Add products and farmer pages`
- `Add quality sustainability and contact pages`
- `Polish responsive UI and motion`

## 16. Data Needed From Bhavarth

Before final production content, collect:

- Legal company name.
- Registration details approved for public display.
- GST details approved for public display.
- Operating regions.
- Product categories.
- Product seasonality.
- Packaging options.
- Quality process.
- Certifications and validity dates.
- Farmer network data.
- Facility photos or videos.
- Product photos.
- Leadership names/photos, if public.
- Contact emails and phone numbers.
- Inquiry routing rules.
- Privacy policy and legal text.

Until these are available, use clearly neutral placeholder copy.

## 17. Final Design Decision

The website should feel like:

> A clean agricultural control room with real farmer grounding, serious buyer information, visible quality process, and compliance-ready proof.

It should not feel like:

> A farm blog, a generic organic store, a pitch-deck landing page, or a copied animation showcase.

