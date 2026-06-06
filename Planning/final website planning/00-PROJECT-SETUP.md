# 00 — Project Setup

## Stack
- Vite + React 18
- Tailwind CSS 3
- Framer Motion
- React Router v6 (HashRouter for GitHub Pages)
- React Hook Form
- gh-pages (deployment)

## Commands
```bash
npm create vite@latest yot-agency -- --template react
cd yot-agency
npm install tailwindcss @tailwindcss/vite framer-motion react-router-dom react-hook-form gh-pages
```

## vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',  // '/' when using custom domain yotproductions.com
})
```

## package.json scripts to add
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

## Folder Structure
```
src/
  components/
    Navbar.jsx
    Footer.jsx
    AnimatedSection.jsx
    ServiceCard.jsx
    VideoCard.jsx
    DesignCard.jsx
    StatCounter.jsx
    ContactForm.jsx
    CreatorForm.jsx
    PortfolioTicker.jsx
  pages/
    Home.jsx
    VideoEditing.jsx
    Designing.jsx
    WebSupport.jsx
    CreatorOutreach.jsx
    Careers.jsx
  hooks/
    useCountUp.js
  utils/
    submitToSheets.js
  styles/
    index.css
  App.jsx
  main.jsx
public/
  CNAME          ← yotproductions.com
  assets/
    design/      ← design portfolio images
    logo/        ← YOT logo
```
