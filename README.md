# Portfolio — Kudurupaka Upender

Personal developer portfolio built with **Next.js 14 (App Router)**, TypeScript, and CSS Modules.
Fully static — no backend required. Content lives in a single data file, and each project ships
with animated **architecture, ER, and workflow diagrams**.

## Tech
- Next.js 14 (App Router, static export-friendly)
- React 18, animated SVG diagrams (no chart libraries)
- `react-icons`

## Edit your content
Everything — profile, skills, experience, education, and projects (including diagram data) — lives in:

```
src/data/portfolio.js
```

Update that one file and the whole site updates. No database, no API.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy (recommended: Vercel — free)
1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset auto-detects **Next.js** — click **Deploy**. Done.

Vercel gives you a live `https://<name>.vercel.app` URL (add a custom domain later if you want).
Every `git push` redeploys automatically.

## Structure
```
src/
  app/                 # routes: /, /about, /projects, /projects/[slug], /contact, /blog
  components/
    diagrams/          # ArchitectureDiagram, ERDiagram, WorkflowDiagram (animated SVG)
  data/portfolio.js    # ← single source of truth for all content
  styles/              # global theme + CSS modules
```

## Notes
- **Personal projects** (RateGuard, EventPulse) are clearly labeled. They demonstrate backend
  systems concepts aligned with the rest of the profile — keep, build out, or remove them in
  `src/data/portfolio.js`. Make sure you can speak to anything you keep.
