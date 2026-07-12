# Dad Village

Science-backed daily-content platform for dads. Thesis: **small daily decisions compound executive function** — the real generational inheritance. Adapt to screen time; curation is the product.

## Run locally
```bash
node serve.js     # serves on http://localhost:3012
```
Open `index.html`. (Don't open via `file://` — the `curriculum/*.js` files need a server.)

## Structure
- `index.html` — the app (single file, local-first, no backend).
- `curriculum/` — taxonomy, the 6 Compounding Pillars, and lesson plans for 0–12mo, 12–24mo, 2–3y (84 science-backed lessons).
- `serve.js` — tiny static server for local dev.
- `FRAMEWORK.md` — living design doc.

## Features
Tabbed shell (Today · Plan · Kids · Language), drag-and-drop + tap-to-add period scheduler, executive-function pillar framework, spaced-repetition recall engine, evening reflection journal, streaks, local-first persistence with file backup/restore.

Beta: local-first (localStorage, offline, no accounts). Cloud sync is a clean future seam.
