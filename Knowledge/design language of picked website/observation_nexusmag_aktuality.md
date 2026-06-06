# NexusMag Aktuality Animation Deep Dive

Source: https://www.nexusmag.eu/kategorie/aktuality  
Analysis date: 2026-06-04  
Purpose: Understand how this award-style editorial category page creates a polished, animated, modern feeling, so the useful ideas can later be adapted for the Bhavarth agricultural website.

## 1. High Level Impression

The NexusMag `Aktuality` page is a Framer-built editorial category page. It is not visually complex because of dense decoration. It feels premium because it combines a clean magazine grid with a few strong motion primitives:

- A custom animated page transition.
- A colorful RGB mouse trail.
- Lightweight hover lift on interactive items.
- Soft blur-gradient overlays.
- Framer route and component transitions.
- Strong typography, high contrast, and bright accent colors.

The most important lesson is that the animations are not random. Each one has a job:

- The cursor trail makes the page feel alive.
- The page transition makes navigation feel intentional.
- The hover lift makes cards and buttons feel tactile.
- Blur overlays make images and large sections feel smoother.
- The clean grid keeps the editorial content readable.

For Bhavarth, the exact neon/tech-magazine feeling should be adapted carefully. The behavior can be reused, but the visual language should become more agricultural, trustworthy, and compliance-safe.

## 2. Platform And Build

The site is made in Framer.

Evidence found in the page:

- HTML comment: `Made in Framer`
- Meta generator: `Framer c9c30df`
- Server header: `Framer/8c09469`
- Static route is optimized through Framer SSG.
- Page language: `cs-CZ`
- Page title: `Aktuality z kreativniho sveta a marketingu | NEXUSMAG`
- Category route: `/kategorie/aktuality`
- Route id in Framer script map: `zXBa4ZGY3`

Important public modules used by the page:

| Module | Purpose |
| --- | --- |
| `framer.DWm_3Y5u.mjs` | Framer runtime |
| `motion.DeJ4J5HQ.mjs` | Motion runtime |
| `script_main.DwqUZjPP.mjs` | Main route and page boot script |
| `BlurGradient_Prod.DH5LHsc9.mjs` | Custom blur-gradient visual component |
| `Float.CuOS1vc3.mjs` | Custom hover-lift override |
| `RGB_string_mouse_trail.BYcl5-5W.mjs` | Custom animated cursor trail |
| `SVG_Transition.DbSQq8RC.mjs` | Custom animated internal page transition |
| `CookieConsent.wUWHchgO.mjs` | Consent layer |
| `Time_to_read.wF4qvNpN.mjs` | Article read-time component |

This confirms that the page is a Framer composition with a few bespoke animation modules layered on top.

## 3. Page Structure

The page is an editorial category archive. The structure is simple and scannable:

1. Navigation/header area.
2. Category heading: `Aktuality`.
3. Article card grid.
4. Load-more button: `Nacist dalsi clanky`.
5. More articles/footer section: `Dalsi clanky`.
6. Newsletter CTA: `Odebirat newsletter`.
7. Footer category links.
8. Legal/company footer.

The article grid is the main experience. The animation does not replace the content. It supports the grid by making every interaction feel more considered.

Article examples found on the page include:

- OpenAI DevDay 2025 article.
- Google Nano Banana AI photo editing article.
- Eleven Music article.
- ChatGPT pause / OpenAI wellbeing feature article.

The footer has category links such as:

- Aktuality
- Marketing
- Rozhovory
- Technologie
- Kreativita
- Wellbeing
- Umeni
- AI
- Tiskove zpravy

This layout is useful for Bhavarth because an agricultural business website may also need:

- News and updates.
- Knowledge center.
- Market insights.
- Farmer stories.
- Process and compliance articles.
- Export or supply-chain updates.

## 4. Visual Language

The page blends editorial cleanliness with expressive digital details.

### Typography

Fonts detected:

- DM Sans
- IBM Plex Sans
- Instrument Sans
- Inter
- Inter Display
- Rubik in the mobile menu close label

The typography appears modern, geometric, and high-contrast. It uses large category labels and card titles, but keeps body copy readable.

### Color System

Important colors found in the page/modules:

- Deep black: `#000000`, `#0a0a0a`
- White/off-white backgrounds.
- Bright lime: `#d7ff37`, `#e5fb82`
- Lavender transition stroke: `#ceaeff`
- Cyan mouse trail default: `#00FFFF`
- Orange accent tokens: `#ff5602`, `#e16d28`

The site has a strong editorial black/white base, then uses bright accents for personality. This is why the animations feel exciting without the whole page becoming noisy.

For Bhavarth, this can translate into:

- Soil black or charcoal base.
- Leaf green or crop green accents.
- Harvest gold accents.
- Clean white content surfaces.
- Blue or teal for traceability, water, or technology.

Avoid using too much neon unless the page is specifically meant to feel experimental.

## 5. Animation System Overview

The animation system has five major layers:

| Layer | Trigger | Feeling Created |
| --- | --- | --- |
| SVG page transition | Internal link click | Premium navigation, memorable page change |
| RGB mouse trail | Mouse movement | Playful, alive, digital magazine feeling |
| Float hover | Hover on target elements | Tactile cards/buttons |
| Blur gradient | Static/animated visual treatment | Soft depth and polished section edges |
| Framer variants/routes | Page load, menu state, responsive states | Smooth component changes |

The magic is not in one huge animation. It is in the repeated use of small animated details.

## 6. SVG Page Transition

The strongest custom animation is the SVG page transition module.

Module: `SVG_Transition.DbSQq8RC.mjs`

### What It Does

It intercepts internal link clicks and plays a full-screen SVG stroke animation before navigation. After the next page loads, it plays the entrance part of the animation.

### Trigger Rules

The transition applies only to normal internal links:

- Same host links.
- Not hash-only links.
- Not `mailto:`.
- Not `tel:`.
- Not `javascript:`.
- Not the same pathname.

This is important because it prevents unnecessary animation on links where it would feel wrong.

### Technical Behavior

The component:

- Dynamically loads GSAP 3.14.1 if GSAP is not already available.
- Appends a fixed full-screen overlay to `document.body`.
- Uses `z-index: 9999`.
- Uses `pointer-events: none` normally.
- Temporarily blocks pointer events while transitioning.
- Creates an SVG larger than the viewport:
  - Width: `130%`
  - Height: `130%`
  - Top: `-15%`
  - Left: `-15%`
  - ViewBox: `0 0 1000 1000`
- Draws a large custom path across the screen.
- Animates `strokeDasharray`, `strokeDashoffset`, and `strokeWidth`.
- Uses `sessionStorage` key `pt_draw_active` to know whether the next page should play the enter animation.

### Default Visual Settings

- Stroke color: `#ceaeff`
- Leave duration: `1s`
- Enter duration: `1.25s`
- Stroke starts thin and expands.
- Stroke later retracts after page load.

### Motion Shape

On leaving the page:

- The SVG stroke draws across most of the path.
- It uses an ease similar to `power1.inOut`.
- Stroke width grows from about `5%` to `30%`.
- The page navigates after the drawing animation.

On entering the next page:

- The stroke begins thick and visible.
- After a short delay, it retracts away.
- Stroke width reduces back toward a thinner value.
- The overlay becomes non-interactive again.

### Why It Feels Good

This transition feels hand-crafted because it is not a generic fade. It resembles a drawn gesture or expressive streak. It makes navigation feel like a designed moment.

### Bhavarth Adaptation

For an agriculture website, do not copy the same lavender scribble exactly. Adapt the idea:

- Use an SVG path inspired by a field boundary, irrigation line, crop row, supply route, or river line.
- Use a more grounded color such as leaf green, harvest gold, or deep teal.
- Keep the duration shorter for business pages:
  - Leave: `0.45s` to `0.7s`
  - Enter: `0.6s` to `0.9s`
- Use it only on major navigation changes, not every small interaction.
- Disable it for reduced-motion users.

## 7. RGB Mouse Trail

The second most distinctive animation is the RGB mouse trail.

Module: `RGB_string_mouse_trail.BYcl5-5W.mjs`

### What It Does

It draws a smooth animated SVG path that follows the user's cursor.

The module appends an SVG to the document body and keeps it fixed over the entire viewport. The SVG does not block clicks because it uses `pointer-events: none`.

### Default Controls

The component exposes controls through Framer:

| Control | Default |
| --- | --- |
| Color mode | `rgb` |
| Solid color fallback | `#00FFFF` |
| Trail length | `24` |
| Thickness | `3` |
| Glow | `16` |
| Speed / flowiness | `0.22` |
| Opacity | `0.7` |

### Motion Logic

The animation stores a list of cursor positions. Each point follows the point before it using interpolation:

```text
newPoint = currentPoint + (previousPoint - currentPoint) * speed
```

Then it builds a smooth cubic Bezier path through those points.

This creates a soft elastic line, not a rigid pointer trail.

### RGB Color Logic

In RGB mode, it generates animated HSL colors based on time:

- Hue changes over time.
- Multiple hue offsets are used.
- A linear gradient is applied along the SVG path.
- A glow/drop-shadow makes it feel luminous.

### Why It Feels Good

The trail gives the page a sense of life even when the layout is static. Because the article grid is clean, the cursor trail has enough room to become the expressive layer.

### Risk For Bhavarth

This exact treatment is probably too playful for a compliance-heavy agricultural company website if used everywhere. It could distract from trust, legality, exports, tax clarity, farmer information, and company credentials.

### Bhavarth Adaptation

Use a calmer version:

- Disable on mobile and touch devices.
- Use only on the home hero or one interactive storytelling section.
- Use a single brand color instead of RGB.
- Make the trail shorter:
  - Trail length: `10` to `16`
  - Thickness: `1.5` to `2`
  - Glow: `4` to `8`
  - Opacity: `0.25` to `0.45`
- Use green/gold/teal rather than cyan rainbow.
- Respect `prefers-reduced-motion`.

Possible Bhavarth trail concepts:

- A thin line like an irrigation route.
- A crop-row line following the cursor.
- A supply-chain route line between farm, packhouse, storage, and market.

## 8. Float Hover Animation

Module: `Float.CuOS1vc3.mjs`

This is a simple Framer override:

```text
whileHover: y = -7
duration: 0.3s
ease: easeOut
```

### What It Does

When an element is hovered, it moves upward by 7 pixels. This is likely used on:

- Article cards.
- Buttons.
- Interactive visual blocks.
- Possibly category or footer items.

### Why It Works

The animation is small enough to feel premium. It does not bounce, shake, spin, or pull attention away from content.

### Bhavarth Adaptation

This is directly useful.

Use it for:

- Crop cards.
- Farmer story cards.
- Product/commodity cards.
- Process cards.
- Certification cards.
- News cards.
- CTA buttons.

Recommended settings:

```text
transform: translateY(-4px) to translateY(-8px)
duration: 180ms to 300ms
ease: cubic-bezier(0.22, 1, 0.36, 1)
```

Add a small shadow or border-color change if the design needs stronger feedback.

## 9. Blur Gradient Component

Module: `BlurGradient_Prod.DH5LHsc9.mjs`

### What It Does

This component creates a progressive blur overlay using multiple masked layers.

It creates 8 absolute layers. Each layer:

- Uses `backdrop-filter: blur(...)`.
- Uses `mask-image` / `-webkit-mask-image`.
- Applies a linear gradient mask to blur only part of the area.

The blur gets stronger layer by layer.

Default settings:

- Blur: `10`
- Border radius: `0px`
- Direction: `toBottom`
- Transition duration: `0.3s`

### Why It Feels Good

Progressive blur is smoother than one flat blur. It helps create polished image overlays, hero edges, footer transitions, and readable text over media.

### Bhavarth Adaptation

This is highly useful for an agriculture website.

Use cases:

- Hero image text readability.
- Farm photo overlays.
- Packhouse/process imagery.
- Certification or traceability visual sections.
- Footer image bands.
- Featured article cards.

Keep it subtle. Agricultural trust sites should not feel like a glassmorphism demo.

Recommended settings:

```text
blur: 6px to 14px
direction: toBottom or toTop
duration: 200ms to 300ms
border-radius: match image/card radius
```

## 10. Framer Route And Mask Transitions

The main Framer script includes route transition configuration using a mask/wipe style:

```text
mask angle: 270
type: wipe
width: 100%
opacity: 1
duration: 0.4s
ease: [0.27, 0, 0.51, 1]
```

This suggests that some route or layer transitions use Framer's built-in wipe/mask system in addition to the custom SVG transition.

### Why It Matters

Framer is doing a lot of invisible polish:

- Component mounting.
- Initial states.
- Responsive variants.
- Route-level transitions.
- Hidden/visible menu states.
- Layout interpolation.

The custom animation modules are memorable, but the Framer runtime gives everything a smooth baseline.

### Bhavarth Adaptation

If building in React/Next.js:

- Use Framer Motion for page and component transitions.
- Keep page transitions simple and fast.
- Use route transitions only where they add clarity.
- Avoid heavy motion on compliance, legal, and financial pages.

## 11. Menu And Navigation Animation

The page includes a mobile menu structure with:

- Hamburger icon.
- Close icon.
- Close text: `Zavrit`.
- Social links.
- Hidden menu overlay states.

The generated HTML includes menu labels with duplicated label layers, for example one label at normal position and another translated upward by around `-50%`. This is a common pattern for hover label slide animations:

- Label 1 is visible in the default state.
- Label 2 sits below or above.
- On hover, the first label moves out and the second moves in.

This gives menu links a slick, crafted feeling without needing a large animation.

### Bhavarth Adaptation

Use this kind of text-slide hover carefully:

- Good for main nav items.
- Good for footer links.
- Good for category links.
- Avoid on dense compliance tables or legal text.

Recommended interaction:

```text
default: label in place
hover: current label slides up 100%, duplicate label slides into place
duration: 180ms to 240ms
ease: easeOut
```

## 12. Article Card Animation

The article grid is the content heart of the page. Based on the presence of the Float module and Framer component variants, the cards likely use hover and state motion.

Observed/inferred card behavior:

- Card hover lift.
- Image or card surface subtle movement.
- Text/card metadata remains stable.
- Grid layout stays disciplined.
- CTA interactions likely use the same hover language.

This is important: the cards do not need heavy animation. The grid is elegant because it remains predictable.

### Bhavarth Adaptation

For Bhavarth, article/card motion can become a major design pattern:

- Product cards lift slightly.
- Crop variety cards reveal a small detail row.
- Farmer story cards zoom image subtly.
- Supply-chain cards show route progress on hover.
- Certification cards reveal issuing body/date.
- News cards use the same layout as the knowledge center.

Recommended card animation:

```text
card hover:
  translateY(-6px)
  shadow increases slightly
  image scale: 1.02
  duration: 220ms

card leave:
  return to normal
  duration: 180ms
```

## 13. Load More Button

The page includes a `Nacist dalsi clanky` load-more action.

This is a useful pattern because the category page does not overload the user with everything at once. It gives the page a magazine-like rhythm.

Expected interaction style:

- Hover state using border/fill/label movement.
- Possibly float hover.
- On click, more cards appear below the current grid.
- New cards may fade or slide in.

### Bhavarth Adaptation

Use this for:

- News.
- Market updates.
- Blog.
- Farmer stories.
- Press releases.
- Compliance notices.

Recommended reveal:

```text
new card reveal:
  opacity: 0 to 1
  y: 16px to 0
  stagger: 50ms to 80ms
  duration: 250ms to 350ms
```

## 14. Newsletter And Footer Motion

The footer has newsletter and category navigation. The page does not treat the footer as a dead area. It continues the visual language:

- Strong CTA.
- Category links.
- Social links.
- Legal details.

The animation likely remains lightweight:

- Link hover movement.
- Label slide.
- Button hover.
- Possible float on CTA.

### Bhavarth Adaptation

Footer motion should be restrained because company/legal details must remain clear.

Good animated footer elements:

- Newsletter/updates CTA.
- Social links.
- Category links.
- Contact buttons.

Do not animate:

- CIN/GST/PAN/company registration details.
- Tax/legal disclaimers.
- Address details in a way that reduces readability.

## 15. Reduced Motion And Accessibility

The SVG transition module checks `prefers-reduced-motion: reduce`. When reduced motion is enabled, it skips or minimizes the animation behavior.

The main Framer root also includes reduced motion handling.

This is essential for a serious business website.

For Bhavarth:

- Respect `prefers-reduced-motion`.
- Disable cursor trail for reduced-motion users.
- Disable cursor trail on mobile/touch.
- Do not trap clicks with overlays.
- Keep animated overlays `pointer-events: none` unless temporarily needed.
- Keep text readable during animation.
- Make sure page transitions do not hide critical state changes.

## 16. Performance Notes

The NexusMag page uses advanced effects, but these have performance cost.

Potentially expensive pieces:

- Full-screen cursor trail SVG updated on every animation frame.
- Backdrop-filter blur layers.
- Full-screen SVG route transition.
- Large Framer-generated JavaScript.
- Rich article images.

For Bhavarth:

- Use `requestAnimationFrame` for cursor/path animation.
- Avoid cursor trail on low-power devices.
- Lazy-load below-fold images.
- Keep blur areas small.
- Do not apply backdrop-filter to huge areas unnecessarily.
- Preload only essential fonts.
- Use static fallback for heavy animated sections.

## 17. What Makes The Animations Feel Great

The animations work because they are:

1. Small in number.
2. Strong in identity.
3. Reused consistently.
4. Triggered at meaningful moments.
5. Layered over a clean content system.

The page avoids turning every element into a separate animation. Instead, it repeats a small vocabulary:

- Drawn transition.
- Floating hover.
- Smooth cursor trail.
- Soft blur.
- Clean reveal.
- Link label movement.

This is exactly the kind of system that can be adapted into a polished agricultural company website.

## 18. What To Copy As Principles, Not As Exact Design

Copy the principles:

- Motion should have a reason.
- Article/card grids should stay readable.
- A small custom animation can define the whole brand feeling.
- Hover states should feel tactile.
- Route transitions can make the site feel premium.
- Footer and category pages deserve design attention.
- Accessibility and reduced motion must be respected.

Do not copy:

- The exact cursor trail style.
- The exact SVG transition path.
- The exact neon color palette.
- The exact editorial identity.
- NexusMag content, copy, branding, or structure too closely.

## 19. Recommended Bhavarth Animation Toolkit Inspired By NexusMag

| Component | Bhavarth Version |
| --- | --- |
| SVG page transition | Field-line or supply-route stroke transition |
| RGB cursor trail | Optional thin single-color crop/route trail |
| Float hover | Product, crop, story, certificate, and news cards |
| Blur gradient | Hero photo overlays and image readability |
| Card grid | Knowledge center, market updates, farmer stories |
| Label slide links | Nav, footer, category links |
| Load-more reveal | Blog/news/press/updates archive |
| Framer-style route motion | Subtle page fade/wipe for main sections |

## 20. Suggested Motion Values For Bhavarth

```text
page enter:
  opacity: 0 to 1
  y: 12px to 0
  duration: 350ms

card hover:
  y: -6px
  image scale: 1.02
  duration: 220ms

button hover:
  y: -2px
  background or border shift
  duration: 160ms

section reveal:
  opacity: 0 to 1
  y: 24px to 0
  duration: 450ms
  stagger: 80ms

optional route stroke:
  duration: 600ms to 900ms
  stroke color: brand green/gold/teal

optional cursor trail:
  trail length: 10 to 16
  thickness: 1.5px to 2px
  opacity: 0.25 to 0.45
  disabled on mobile
```

## 21. Compliance-Safe Guidance For Bhavarth

Because the future site needs to be tracked and understood by business, legal, and tax/compliance observers, animation must never obscure factual clarity.

Important rules:

- Keep company identity, address, registration, tax-related details, and ownership information visible and readable.
- Do not hide major information behind playful animation.
- Avoid vague claims without evidence.
- Avoid animated counters unless the values are accurate and sourced.
- For certifications, licenses, farmer numbers, acreage, production capacity, or revenue-related claims, show clear context.
- Keep legal/footer text static.
- Use animation to improve comprehension, not to distract from accountability.

This is especially important for an agricultural company website, where trust and documentation matter as much as beauty.

## 22. Final Takeaway

NexusMag's category page feels great because it uses a small, memorable motion system on top of a clean editorial layout.

The strongest reusable idea is not the neon cursor trail itself. The stronger idea is the system:

- One signature navigation animation.
- One expressive pointer/interaction detail.
- One consistent hover lift.
- One soft image/overlay treatment.
- One readable content grid.

For Bhavarth, this can become a grounded, premium agricultural website by replacing the tech-magazine visual flavor with field, crop, supply-chain, farmer, certification, and traceability metaphors.

