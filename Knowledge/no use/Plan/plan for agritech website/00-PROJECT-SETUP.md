# Phase 0 — Project Setup

## 0.1 Init Next.js Project
```bash
npx create-next-app@latest bhavarth-website \
  --typescript --tailwind --eslint --app \
  --src-dir=false --import-alias="@/*"
cd bhavarth-website
```

## 0.2 Install All Dependencies
```bash
# shadcn/ui init
npx shadcn@latest init

# shadcn components
npx shadcn@latest add button card badge tabs navigation-menu
npx shadcn@latest add separator skeleton avatar scroll-area
npx shadcn@latest add dropdown-menu popover dialog

# Animation
npm install framer-motion

# Icons
npm install lucide-react react-icons

# Forms
npm install @formspree/react
```

## 0.3 Folder Structure
```
/app
  /page.tsx                     ← Home
  /about/page.tsx
  /business-model/page.tsx
  /products/page.tsx
  /products/vegetables/page.tsx
  /products/grains/page.tsx
  /for-buyers/page.tsx
  /for-farmers/page.tsx
  /compliance/page.tsx
  /gallery/page.tsx
  /contact/page.tsx
  layout.tsx                    ← Navbar + Footer wrapper

/components
  /ui/                          ← shadcn auto-generated
  /sections/                    ← Page sections
  /elements/                    ← Reusable atoms
  /prompts/                     ← Adapted from /additional prompts
    RadialTimeline.tsx
    ElevateHero.tsx
    ZoomParallax.tsx
    BentoGallery.tsx
    GooeyText.tsx
    LiquidGlassCard.tsx
    PresentationBlocks.tsx
    InfiniteGrid.tsx

/content
  /products/vegetables.json
  /products/grains.json
  /compliance/certifications.json
  /team.json
  /claim-register.json          ← CRITICAL: every public claim documented

/public
  /images/
  /fonts/
```

## 0.4 Fonts (in layout.tsx)
```ts
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-head' })
// JetBrains Mono via @fontsource or local
```
