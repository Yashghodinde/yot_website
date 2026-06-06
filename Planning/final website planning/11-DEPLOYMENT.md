# 11 — Deployment Guide

## Stack: Vite → GitHub Pages → yotproductions.com

---

## STEP 1 — Configure Vite

`vite.config.js`:
```js
export default defineConfig({
  base: '/',  // '/' because we have a custom domain
  plugins: [react(), tailwindcss()]
})
```

---

## STEP 2 — Add CNAME

Create `/public/CNAME` (no extension):
```
yotproductions.com
```
This tells GitHub Pages to use your custom domain.

---

## STEP 3 — Add Deploy Scripts

`package.json`:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

---

## STEP 4 — Install gh-pages
```bash
npm install gh-pages --save-dev
```

---

## STEP 5 — Deploy
```bash
npm run deploy
```
This:
1. Builds the project to `/dist`
2. Pushes `/dist` to the `gh-pages` branch of your GitHub repo
3. GitHub Pages serves from that branch

---

## STEP 6 — Configure GitHub Pages

On GitHub repo → Settings → Pages:
- Source: Deploy from branch
- Branch: `gh-pages`
- Folder: `/ (root)`
- Custom domain: `yotproductions.com`
- ✓ Enforce HTTPS

---

## STEP 7 — Configure Domain DNS

At your domain registrar (GoDaddy/Namecheap etc), add these DNS records:

**A Records** (point to GitHub IPs):
```
Type: A  Name: @  Value: 185.199.108.153
Type: A  Name: @  Value: 185.199.109.153
Type: A  Name: @  Value: 185.199.110.153
Type: A  Name: @  Value: 185.199.111.153
```

**CNAME Record** (for www):
```
Type: CNAME  Name: www  Value: Yashghodinde.github.io
```

DNS propagation: 10 min – 24 hours.

---

## React Router — HashRouter

For GitHub Pages, use `HashRouter` (URLs use # so GitHub doesn't 404 on refresh):

```jsx
// main.jsx
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
```

URLs will look like: `yotproductions.com/#/video-editing`

---

## Update push.sh for New Project

Once React project is created, the push.sh will work the same. Just `cd` into the project folder and run it.

---

## Re-deploy After Changes
```bash
npm run deploy
```
That's it. Every time you make changes, run this one command to update the live site.
