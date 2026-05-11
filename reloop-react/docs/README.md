# `reloop-react` — Documentation

Technical docs for the **React + Vite** build of the RE-LOOP B2C web app.

RE-LOOP is a circular-economy B2C platform for Vietnamese households — sell recyclable
waste (PET, carton, scrap metal, e-waste, bulky appliances, hazardous waste) through a web
app. **This package has no backend, no database, no real auth.** All state comes from mock
data (`src/lib/mock.js`) plus local React `useState`. The app assumes the primary persona
"Linh" (Q.7, TP.HCM) is already signed in.

This is a 1:1 port of the original Astro project (one `src/pages/**/*.jsx` per Astro page).
The product spec, design tokens, feature tracker, and Figma/handoff guides live at the
**repo root** in [`../../docs/`](../../docs/) — those are canonical for *product* matters
and describe the Astro build; the docs in *this* folder are canonical for the *React* code.

## Docs in this folder

| Doc | What it covers |
|---|---|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | App wiring: entry chain, data-driven router, `AppLayout` shell + link interceptor, dynamic `:id` guards, build/tooling, deploy, known prototype gaps |
| [ROUTES.md](./ROUTES.md) | Full route map (every entry in `src/routes.js`), grouped, with page files and dynamic-route notes |
| [COMPONENTS.md](./COMPONENTS.md) | Component inventory by folder — `ui/`, `nav/`, `layout/`, `home/`, `order/`, `auth/`, `profile/`, `wallet/`, root fallbacks, and the 24 illustration SVGs |
| [DATA_MODEL.md](./DATA_MODEL.md) | `src/lib/mock.js` reference (types, mock objects with concrete values, helpers), plus `format.js` and `cx.js` |
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | React-specific styling: fonts/icons loading, `index.css`, `tailwind.config.js` token map, the no-hardcoded-hex / visual-first / illustration rules — links to the canonical root design system |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | How to add a page / component / illustration, wire static prototype UI to state, project conventions, commands |

## Root docs (product / spec / Astro build)

- [`../../docs/requirement.md`](../../docs/requirement.md) — v0.3 canonical spec: 125 features, 11 modules, 12 user journeys, 4-tier waste model, data model, roadmap
- [`../../docs/PRD.md`](../../docs/PRD.md) — Round 2 MVP scope (15 critical features, 8 flows, acceptance criteria)
- [`../../docs/FEATURE_TRACKER.md`](../../docs/FEATURE_TRACKER.md) — feature checklist + per-round changelog
- [`../../docs/DESIGN_SYSTEM.md`](../../docs/DESIGN_SYSTEM.md) — full canonical design tokens
- [`../../docs/AI_HANDOFF.md`](../../docs/AI_HANDOFF.md), [`../../docs/FIGMA_IMPORT_GUIDE.md`](../../docs/FIGMA_IMPORT_GUIDE.md), [`../../docs/DEPLOY.md`](../../docs/DEPLOY.md)
- [`../../CLAUDE.md`](../../CLAUDE.md) — repo-wide agent instructions (Astro context, fonts, tokens, visual-first/illustration rules)

## Commands

```bash
npm install        # Node 20+ (Netlify uses 22)
npm run dev        # http://localhost:5173
npm run build      # → dist/  (static SPA)
npm run preview    # serve dist/
```
