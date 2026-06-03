# Dad Village — Project Framework

> Living doc. Pick up here in any future session. Update as decisions change.

---

## 1. Vision

**"The Reddit of safe, developmental content for kids — built for Dads."**

Dads juggle career, finance, home, and a hundred other things. Screen time is inevitable — so instead of shaming it, Dad Village makes the *content* as intentional as everything else a good dad does. We curate Montessori-aligned, repetition-friendly, developmentally excellent media (Miss Rachel–tier and beyond), and remove the friction of finding it.

**Principles**
- Adapt to screen time, don't shy away from it.
- Balance + excellence — calm systems, not guilt.
- The content the child watches matters as much as what Dad does.
- Safety is non-negotiable. Curation is the product.

---

## 2. Current State (beta-ready, 2026-06)

- `kreme-of-the-crop-scheduler.html` — single-file web app, ~4,000 lines (cleaned from ~4,850; removed ~850 lines of dead code). Tabbed shell: **Today** (dashboard) · **Plan** (two-pane curriculum+schedule, Schedule/Food view toggle) · **Kids** (pillars/progress/journal) · **Language** (stub).
- `curriculum/` — taxonomy.js, pillars.js (6 EF pillars), lessons-0-12mo/12-24mo/2-3y.js (84 science-backed lessons).
- `serve.js` — local static server (port 3012, in `.claude/launch.json` as "dadvillage").

**Backend = local-first (beta).** Single source of truth is localStorage (`dvLoad`/`dvStore`, `kreme_`/`dv_`/`dad_village_` prefixes). No accounts, works offline, zero children's-data surface. Full **backup/restore to file** in the account menu. `dvSync` is a clean off-by-default seam to add Supabase cloud sync post-beta without touching the rest of the app. Firebase placeholder fully removed.

**Cut for beta focus:** Family Columns view, Community/Forum/Dad Picks tab (+ all their code & modals), old onboarding tour, hero, duplicate-id old controls block.

The web platform is the **spine**. Future tablet/game work extends it; we don't throw it away.

---

## 3. Target Platform — Decided

**Game engine (Unity or Godot) for the kid-facing tablet experience.**

Why: kids interact through a game-feeling shell — characters, rewards, gentle gamification of routines and learning paths. Dad-facing tools stay web (faster iteration, no app-store gating for the parent side).

**Working split:**
- **Dad app** → web (current HTML, evolves into PWA). Scheduling, curation, progress, account.
- **Kid app** → game engine on tablet. Pulls curriculum + approved content from Dad's plan.
- **Shared backend** → curriculum data, content allowlist, child progress.

**Engine choice deferred** until we prototype one scene. Lean toward **Godot** (open source, lighter, 2D-friendly, free distribution) unless we need Unity's asset ecosystem.

---

## 4. Immediate Build Priority — Decided

**Curriculum Engine (Montessori-aligned).**

This is the moat. Anyone can list videos; nobody has a daily/weekly *path* that adapts.

**Sub-goals**
1. Define age bands (e.g., 0–12mo, 12–24mo, 2–3y, 3–4y, 4–5y, 5–6y).
2. Define Montessori skill domains: Practical Life, Sensorial, Language, Math, Cultural (Geography/Science/Art/Music).
3. Build a "lesson" data model: skill domain × age band × repetition cadence × media slot.
4. Wire lessons into the existing scheduler so Dad sees a daily plan, not just a content list.
5. Repetition rules — Miss Rachel works *because* of repetition. Codify that.

---

## 5. Content Safety Model — Decided

**AI pre-filter + human review.**

Pipeline:
1. **Ingest** — YouTube/Vimeo URL, channel, or upload.
2. **AI pre-filter** — transcript scan (language, themes), visual scan (sample frames), creator reputation signals. Score against a rubric.
3. **Queue** — items above a threshold enter human review queue; below → auto-reject with reason.
4. **Human review** — quick approve/reject + tags (age band, skill domain, repetition value, Montessori alignment).
5. **Publish** — approved content enters the library with full metadata.
6. **Ongoing** — parent flag button → re-review; periodic re-scans for changed/removed videos.

**Phase 2:** community voting (Reddit-style) once we have a trust base of reviewers. Not day one.

---

## 6. Architecture Sketch

```
┌─────────────────────┐         ┌─────────────────────┐
│  Dad Web App (PWA)  │         │  Kid Tablet (Godot) │
│  - Scheduler        │         │  - Lesson runner    │
│  - Curation review  │         │  - Reward shell     │
│  - Progress / dash  │         │  - Content player   │
└──────────┬──────────┘         └──────────┬──────────┘
           │                               │
           └───────────────┬───────────────┘
                           ▼
            ┌──────────────────────────────┐
            │  Backend (TBD: Supabase?)    │
            │  - Curriculum data           │
            │  - Content allowlist + tags  │
            │  - Child profiles & progress │
            │  - Review queue              │
            └──────────────┬───────────────┘
                           ▼
            ┌──────────────────────────────┐
            │  AI Pre-filter Worker        │
            │  - Transcript + frame scan   │
            │  - Rubric scoring            │
            └──────────────────────────────┘
```

Current HTML stores in IndexedDB only. Migration to a real backend is a near-term need once curriculum data grows.

---

## 7. Roadmap (Now / Next / Later)

### Now (next 2–4 weeks)
- [x] Define Montessori skill taxonomy + age bands (`/curriculum/taxonomy.js`).
- [x] Design lesson data model (JS global, schema documented in lesson files). Now includes `science: {notes[], citation, alternative}`.
- [x] Seed full weeks of lessons — **complete 0–3**: 0–12mo, 12–24mo, 2–3y (28 lessons each, all 7 days, science-backed).
- [x] **The Compounding Pillars** (`/curriculum/pillars.js`) — executive-function framework. Thesis: generational wealth is built through small daily decisions that compound 6 EF traits (focus, impulse control, working memory, flexibility, self-regulation, delayed gratification). "Character IS the wealth." Every lesson tagged to a pillar (explicit on 12–24mo, auto-mapped from skillDomain on the others) + a `compounds` payoff line. Manifesto card on Kids tab; pillar badge + "compounds into" on every curriculum card.
- [x] Wire lesson plan into scheduler UI — curriculum suggestion shelf + drag-to-schedule.
- [ ] Pick a backend (lean: Supabase) and migrate persistence off localStorage.

### Done since (2026-05): full UX overhaul
- [x] Left-rail tabbed shell: Today (dashboard) · Plan (two-pane) · Kids · Community · Language.
- [x] **Closed loop**: build day → mark done → streak earned → evening reflection → journal → all feeds dashboard + weekly targets.
- [x] Dashboard completion ring, one-tap add/commit from Today.
- [x] **Science made visible**: "Why this works" expandable on every curriculum card (notes + citation + fallback).
- [x] First-run **onboarding wizard**: captures dad name + kids' age bands → personalizes greeting, sets default curriculum band. Re-openable via account menu.
- [x] Persistence: active tab, age band, profile, streak, journal all in localStorage.
- [x] Visual polish pass: schedule blocks, "now" indicator, Community/Kids cards, compact header.
- Single file: `kreme-of-the-crop-scheduler.html`. Local server: `serve.js` (port 3012, in `.claude/launch.json` as "dadvillage").

### Next (1–3 months)
- [ ] Seed remaining age bands: 12–24mo, 3–4y, 4–5y, 5–6y (0–12mo + 2–3y done).
- [ ] Multi-child profiles wired to scheduling (onboarding already captures multiple kids).
- [ ] Caregiver/co-parent read-only share link (the "Village").
- [ ] Stand up AI pre-filter worker (start with transcript-only via youtube-transcript-api + Claude rubric).
- [ ] Build human review queue UI (web).
- [ ] Curate 100 reviewed pieces of content across age bands.
- [ ] Prototype one Godot scene: kid taps a lesson tile → video plays inside the shell → small reward.

### Later (3–6+ months)
- [ ] Full Godot tablet build with offline sync.
- [ ] Parent flagging + community voting tier.
- [ ] Multi-child profiles, sibling-aware scheduling.
- [ ] Progress reports that mean something (not vanity metrics).
- [ ] Creator partnerships (Miss Rachel-tier creators as featured channels).

---

## 8. Open Questions

- Backend: Supabase vs. Firebase vs. roll-our-own?
- Monetization: subscription? Freemium curated library? Sponsorships from vetted creators?
- COPPA / kid-data compliance — what's the bar before we ship the kid app?
- Brand: keep "Dad Village" + "Kreme of the Crop" as sub-brand for premium content tier? Or unify?
- Do we license/embed content, or always deep-link to YouTube? (Affects offline + ad exposure.)

---

## 9. How to Resume in a New Session

1. Read this file.
2. Read `memory/MEMORY.md` (auto-loaded) for any updates since.
3. Check git/file mtimes on the HTML to see what shifted.
4. Pick the next unchecked Now item.
