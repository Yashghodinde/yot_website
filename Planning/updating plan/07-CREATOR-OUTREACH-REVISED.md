# 07 — Creator Outreach Page (REVISED — Full Depth)

## Route: `/creator-outreach`

---

## HERO HEADER (Dark)
- Headline: "The Bridge Between Brands and Creators."
- "Bridge" is gold
- Subtext: "We match the right voice to the right brand. Every time."
- Below headline: TWO audience buttons
  ```
  [For Brands]          [For Creators]
  (gold filled)         (ghost/outline)
  ```
  Clicking scrolls to respective section.

---

## WHAT THIS PAGE DOES (Core Understanding)

**Two completely different audiences land on this page:**

1. **Brands** — want to find creators to promote their product
2. **Creators** — want to find paid brand deal opportunities

Both need to feel this page was made for THEM. So the page has two distinct sections,
and the scroll journey addresses both, one after the other.

---

## SECTION 1 — FOR BRANDS

### Opening Statement
```
[Gold label]: "FOR BRANDS"

[Headline]: "Your Product Deserves the Right Voice."
(Inter 800, 52px, dark)

[Body — 2 sentences]:
"We maintain a curated pool of creators across categories — finance, lifestyle,
tech, food, regional languages. Tell us who you want to reach. We handle the rest."
```

### Visual 1 — The Creator Pool Visualization

**Concept:** Show a filterable visual grid of creator "cards" by category and follower count.
This is not real creator data — it's a demo representation that shows scale.

**Filter Controls (above the grid):**
```
Category:    [All]  [Finance]  [Lifestyle]  [Tech]  [Food/Kitchen]  [Regional]
Followers:   [Micro: 10K–100K]  [Mid: 100K–1M]  [Macro: 1M+]
```

Filter interaction: Clicking a filter smoothly hides/shows cards (Framer Motion AnimatePresence with stagger)

**Creator Card (generic, non-real):**
```
- Avatar: colored circle with initials (not real faces — privacy)
- Pseudonym: "Creator A" / "Finance Voice" etc.
- Platform icon: YouTube / Instagram
- Follower count: "320K followers"
- Niche tag: "Finance & Business"
- Language: "Hindi" / "Marathi" / "English"
- Engagement rate: "4.2% avg engagement"
```

**Follower count categories shown:**
- Nano: 1K–10K
- Micro: 10K–100K
- Mid-tier: 100K–1M
- Macro: 1M+

**Visual note:** Cards are slightly blurred/masked — they show scale without revealing actual creator identities.
Below the grid: "Your brand's specific requirements unlock our full creator database."

### Visual 2 — The Flow Diagram (Animated)

This shows HOW the process works. Animated nodes that connect sequentially.

```
Step 1: BRAND                    Step 2: YOT                     Step 3: CREATOR POOL
"You tell us your goal"    →     "We define creator criteria"  →  "We shortlist matched creators"
        ↓
Step 4: SELECTION               Step 5: CONTENT                  Step 6: PAYMENT
"You approve 3–5 creators"  →   "Creators make content"       →  "Deliverables reviewed, payment released"
```

**Animation:**
- On scroll, each step lights up sequentially (gold color, opacity 0 → 1)
- Connecting lines animate left-to-right (CSS stroke-dashoffset animation)
- Each step has a small icon above it
- Timing: 0.3s between steps, 0.8s per step animation

**Implementation:**
```jsx
const { scrollYProgress } = useScroll({ target: sectionRef })

// 6 steps, each lights up at 0, 0.15, 0.30, 0.45, 0.60, 0.75 scroll progress
const step1Opacity = useTransform(scrollYProgress, [0, 0.15], [0.2, 1])
const step2Opacity = useTransform(scrollYProgress, [0.1, 0.25], [0.2, 1])
// ... etc for all 6 steps

// Connecting lines (SVG):
const line1Length = useTransform(scrollYProgress, [0.1, 0.2], [0, 100]) // % of line drawn
```

### What Brands Get (Feature Cards — 3 cards)

```
[Card 1]: Macro to Micro
"Whether you need a celebrity creator or a niche micro-influencer —
 we have the right match for your budget and goal."

[Card 2]: Regional Diversity
"Hindi, Marathi, Gujarati, Tamil, English — we source creators
 who speak directly to your target demographic."

[Card 3]: Performance Guaranteed
"We handle negotiation, briefing, delivery, and review.
 You get the content. We handle the complexity."
```

**Card style:** Dark background (#1a1917), gold icon, white headline, muted body text

### CTA for Brands
```
[Gold filled button]: "Find Creators for My Brand →"
Links to: Brand Google Sheets form

Form fields:
  - Brand/Company Name
  - Contact Name
  - Email
  - Phone
  - Industry/Product Category
  - Target Audience (text)
  - Creator Category needed (select: Finance / Lifestyle / Tech / Food / Regional / Other)
  - Follower Range needed (select: Nano / Micro / Mid / Macro / Any)
  - Budget Range (select: < ₹10K / ₹10–50K / ₹50K–2L / ₹2L+ / Discuss)
  - Campaign Brief (textarea)
```

---

## DIVIDER — "OR"

```
[Gold horizontal line]       OR       [Gold horizontal line]
                   "Are you a creator?"
```

---

## SECTION 2 — FOR CREATORS

### Opening Statement
```
[Gold label]: "FOR CREATORS"

[Headline]: "Start Earning. Right From Your First 10K."
(Inter 800, 52px, dark)

[Body]:
"You don't need a million followers to work with brands. We connect creators of
 all sizes to brand deals that match their niche, audience, and content style.
 We handle the negotiations. You create."
```

### Why Join YOT (3 benefit cards with icons)

```
[Card 1]: Get Paid Deals
"Stop waiting for brands to discover you. We actively match you
 with brands looking for creators in your exact niche."
Icon: 💰

[Card 2]: Grow Your Brand
"We don't just hand you a deal — we provide briefs, direction,
 and feedback that makes your content sharper."
Icon: 📈

[Card 3]: Build a Track Record
"Every deal completed with us becomes part of your portfolio.
 Macro brands trust creators with proven collaboration history."
Icon: ⭐
```

### The Creator Journey (Visual Flow)

A horizontal step flow showing a creator's journey through YOT:

```
① Apply              ② Profile Created      ③ Matched to Brand
"Fill a short form"  "We review and          "We propose your
                      build your creator       profile to relevant
                      profile"                 brand campaigns"

④ Brief Received    ⑤ Content Created       ⑥ Paid
"You get a          "You make the           "50% advance.
 detailed brief"     content, submit         50% on delivery.
                      for review"             Always."
```

**Payment policy prominently displayed:**
```
[Gold badge/callout]:
"50% advance before you start.
 50% after delivery. Always.
 No exceptions."
```

### Creator Categories We Need (visual chips grid)

```
[Finance & Business]   [Technology]   [Lifestyle]   [Food & Kitchen]
[Fitness & Health]     [Gaming]       [Education]   [Travel]
[Regional — Hindi]     [Regional — Marathi]   [Regional — Gujarati]
[Entertainment]        [News]         [Fashion]
```

Each chip: gold border, gold text, rounded-full, hover → gold bg, dark text

### CTA for Creators
```
[Gold outlined button]: "Join Our Creator Network →"
Links to: Creator Google Sheets form

Form fields:
  - Full Name
  - Email
  - Phone
  - Primary Platform (select: YouTube / Instagram / Both)
  - Content Niche/Category
  - Language of Content
  - YouTube Channel Link (if applicable)
  - Instagram Profile Link (if applicable)
  - Current Followers/Subscribers count
  - Avg. views per video/post
  - Past brand collaborations? (Y/N, brief description)
  - Why do you want to join YOT? (textarea)
```

**Google Sheets tab**: "Creator Applications"
**Columns**: Timestamp | Name | Email | Phone | Platform | Niche | Language | YT Link | IG Link | Followers | Avg Views | Past Brands | Why Join

---

## SCROLL ANIMATIONS (Granular)

### Section 1 for Brands
- Heading: fade up, viewport trigger
- Creator pool cards: stagger in from bottom (0.06s between each), on tab filter change: AnimatePresence exit/enter with scale
- Flow diagram: scroll-driven sequential lighting (see above)
- Feature cards: stagger fade-up

### Section 2 for Creators
- Heading: fade up
- Benefit cards: slide in from left, staggered
- Creator journey steps: sequential fade-up on scroll
- Payment badge: scale-in with gold glow on scroll entry
- Category chips: stagger in, top row first then bottom rows
