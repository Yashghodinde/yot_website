# 04 — Video Editing Page

## Route: `/video-editing`

---

## HERO HEADER
- Background: `#09090b` (dark)
- Headline: "We Edit. You Grow."
- Subtext: "From 60-second reels to 20-minute deep dives — we make every frame count."
- Teal accent underline on "Grow."
- Fade-in animation on load

---

## SECTION 1 — SHORT VIDEOS (9:16 Vertical)

### Header
- Section label: "SHORT FORM"
- Title: "Reels & Shorts That Hook in 3 Seconds"
- Subtext: "Vertical content for Instagram, YouTube Shorts, and TikTok."

### Layout
- Default: show 4 videos in 2×2 grid
- "Load More" button reveals remaining videos
- Mobile: 1 column

### Video Card
- Aspect ratio: 9:16 (315px × 560px)
- YouTube iframe embed
- Below: video title + channel/client name
- Hover: slight scale(1.02) with shadow

### Portfolio Videos (from youtube-portfolio-links.json)
**MoneyPandits Shorts (Finance/Business):**
- Vedanta Demerger — Social Media Reel
- Mahindra & Mahindra — Social Media Reel
- Steel Sector In Problem — Social Media Reel
- DeepSeek — Social Media Reel
- (+ more from the 138 shorts)

Show 4 initially, "Load More" shows 4 more at a time.

### Load More Button
- Teal outline button
- Click → shows next 4 with fade-in animation
- When all loaded: button disappears
- "See More on Instagram →" link below (instagram.com/yotproductions)

---

## SECTION 2 — LONG VIDEOS (16:9 Horizontal)

### Header
- Section label: "LONG FORM"
- Title: "YouTube Videos That Keep Viewers Watching"
- Subtext: "Storytelling-driven edits for finance, business, and lifestyle creators."

### Layout
- Default: show 4 videos in 2×2 grid
- Each card: 16:9 iframe (560×315)
- Below iframe: title + "Watch on YouTube →" link

### Portfolio Videos (from youtube-portfolio-links.json)
**MoneyPandits Long Form:**
- Controversy Economics
- Steel War
- DeepSeek Revolution
- Cement War
- Mahindra VS Tata Motors
- BlinkIt Case Study
- Why Ola is Having Problem

**Big Jaws:**
- (music-related long videos)

Show 4 first, load more 4 at a time.

---

## SECTION 3 — CHANNELS WE MANAGE

### Visual
- Dark background section
- 3 channel cards in a row

### Channel Card
- Channel thumbnail/icon
- Channel name
- Subscriber count (if public)
- Niche tag (Finance / Music / Corporate)
- "View Channel →" link

Channels:
1. @MoneyPandits — Finance/Business
2. @big_jaws — Music
3. @Kropbook — Corporate

---

## CTA SECTION
- Background: teal gradient
- Headline: "Need top-tier video editing?"
- Subtext: "Let's build content that actually grows your channel."
- Button: "Get in Touch →" → scrolls to contact form / links to home#contact
