# 08 — Careers Page (REVISED)

## Route: `/careers`
Note: Accessible from Footer only — not in main nav.

---

## HERO (Dark)
- Headline: "Build Something Great With Us."
- "Great" is gold
- Subtext: "We're a small team that does big work. If you're exceptional at what you do, we want to hear from you."

---

## SECTION 1 — CULTURE (3 values)

### Layout: 3 cards, dark background
```
[Card 1] ⚡ Move Fast
"We ship real work quickly. No endless reviews.
 No corporate approval chains. You own your output."

[Card 2] 🎯 Obsess Over Quality
"We don't count hours. We count results.
 Every deliverable must meet a standard we're proud of."

[Card 3] 🤝 Small Team, Big Trust
"Everyone here wears multiple hats.
 We trust each other's judgment. Hierarchy is minimal."
```

---

## SECTION 2 — OPEN ROLES (4 cards)

### Card Design (REVISED — Not Just a Button)

Each role card has:
```
Top: Gold icon (large, 40px)
Role title: Inter 700, 22px, white (on dark card) or dark (on light card)
2-line role description: 15px, muted text
What we're looking for: 3 bullet points with gold checkmarks
Apply Now button: gold outline → fills gold on hover (Framer whileHover)
```

### Roles (with requirements)

**Video Editor**
- Icon: 🎬
- Description: "Edit short and long-form content for YouTube, Reels, and Shorts."
- What we look for:
  - ✓ Strong storytelling sense (pacing, cuts, music sync)
  - ✓ Experience with Premiere Pro, DaVinci, or CapCut
  - ✓ Can deliver 24–48 hour turnaround consistently
- Apply: forms.gle/nxonjtpSJvXeVJRs8

**Designer**
- Icon: 🎨
- Description: "Create brand identities, social graphics, and visual systems that convert."
- What we look for:
  - ✓ Strong portfolio across logos, social, and brand work
  - ✓ Figma proficiency
  - ✓ Eye for typography and white space
- Apply: forms.gle/x7AzJ8wrrRrA1qJv5

**Web & Software Developer**
- Icon: 💻
- Description: "Build fast, beautiful websites and web applications for our clients."
- What we look for:
  - ✓ React / Next.js experience
  - ✓ Clean code, performance-conscious builds
  - ✓ Can work independently with minimal hand-holding
- Apply: forms.gle/xHcQhsnFFyGzw2s56

**Creator / Content Producer**
- Icon: 🚀
- Description: "Create and grow content on YouTube and social platforms."
- What we look for:
  - ✓ At least one active social channel with consistent uploads
  - ✓ On-camera confidence or strong off-camera storytelling
  - ✓ Understanding of what makes content perform
- Apply: forms.gle/fsCXfvzSK61Jvwax6

### Card Grid
- Desktop: 2×2
- Mobile: 1 column, full width

---

## SECTION 3 — GOOGLE SHEETS CONNECTED CAREER FORMS

### Each "Apply Now" button does TWO things:
1. Opens the corresponding Google Form (existing links above)
2. **Also shows an inline mini-form on the page** so basic info is captured immediately

### Inline Mini-Form (on card expand — Framer Motion height animation)

When "Apply Now" is clicked:
```
Card expands downward with smooth height animation:

  Name: [_____________]
  Email: [_____________]
  Role: [pre-filled to this role]
  Portfolio/Channel Link: [_____________]
  "Continue on Google Form →" button (gold, full width)
     → opens the Google Form in new tab
  "Submit Basic Info" button (gold outline)
     → submits just the name/email/link to Google Sheets directly
```

This way even if they don't complete the Google Form, you capture their name and email.

### Google Sheets Tab: "Career Applications"
Columns: `Timestamp | Name | Email | Role | Portfolio Link`

### Apps Script doPost addition (for career form):
```javascript
} else if (data.type === 'career') {
  sheet = ss.getSheetByName('Career Applications');
  sheet.appendRow([
    new Date(),
    data.name || '',
    data.email || '',
    data.role || '',
    data.portfolioLink || ''
  ]);
}
```

---

## ANIMATIONS

- Role cards stagger in on scroll (0.1s between cards)
- "Apply Now" hover: `whileHover={{ scale: 1.02 }}`, gold bg fills in
- Card expansion (inline form): Framer Motion `animate={{ height: 'auto' }}`
- Culture cards: slide up with stagger

---

## FOOTER NOTE
Below all roles:
```
"Don't see your role listed? We're always open to exceptional people.
 Send your portfolio to contact@yotproductions.com"
```
