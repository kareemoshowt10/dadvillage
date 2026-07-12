# Dad Village

Science-backed daily-content platform for dads. Thesis: **small daily decisions compound executive function** — the real generational inheritance. Adapt to screen time; curation is the product.

## Run locally
```bash
node serve.js     # serves on http://localhost:3012
```
Visit `/` for the marketing site or `/app` for the planner. (Don't open via `file://` — the `curriculum/*.js` files need a server.)

## Structure
- `index.html` — marketing/content site landing page (SEO/AEO).
- `guides/` — age-band guide pages (`0-12-months`, `12-24-months`, `2-3-years`) and `why-repetition-works.html` at the root.
- `app.html` — the app itself (single file, local-first, no backend), served at `/app`.
- `curriculum/` — taxonomy, the 6 Compounding Pillars, and lesson plans for 0–12mo, 12–24mo, 2–3y (84 science-backed lessons).
- `serve.js` — tiny static server for local dev (mirrors Vercel's `cleanUrls`).
- `robots.txt`, `sitemap.xml`, `llms.txt` — technical SEO/AEO.
- `FRAMEWORK.md` — living design doc.

## Features
Tabbed shell (Today · Plan · Kids · Language), drag-and-drop + tap-to-add period scheduler, executive-function pillar framework, spaced-repetition recall engine, evening reflection journal, streaks, local-first persistence with file backup/restore.

Beta: local-first (localStorage, offline, no accounts). Cloud sync is a clean future seam.
