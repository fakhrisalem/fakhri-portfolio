# Mona Fakhri — Portfolio (React + Vite)

Pure React project — no Next.js. Built with React, Vite, Tailwind CSS, and Framer Motion.

## Stack
- React 19 + Vite (plain client-side React, no SSR/Next.js)
- Tailwind CSS v4
- Framer Motion (animations)
- lucide-react (icons)

## Run locally
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure
```
src/
  components/
    common/      Navigation, Footer, FloatingParticles, BackToTop
    sections/    Hero, About, Education, Experience, Projects, Skills, Leadership, Dreams, Certifications, Contact
    ui/          GlassCard, PremiumButton, ProgressBar, AnimatedCounter
  lib/           utils.js (cn helper), animations.js (framer-motion variants)
  App.jsx
  main.jsx
  index.css
public/          images, icons
```
