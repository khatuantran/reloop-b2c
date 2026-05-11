# Design system (React build)

The **canonical** design system — full token rationale, the visual-first density rules, the
8-criteria illustration standard — lives at the repo root: [`../../docs/DESIGN_SYSTEM.md`](../../docs/DESIGN_SYSTEM.md)
and [`../../CLAUDE.md`](../../CLAUDE.md). This page only covers what's specific to *this*
React package: where styling lives and the token names you'll actually type.

## Where styling lives

- **`index.html`** — loads the only fonts and the icon set via Google Fonts `<link>`:
  - **Plus Jakarta Sans** 600/700/800 — headings/display
  - **Inter** 400/500/600/700 — body, labels, buttons
  - **JetBrains Mono** 400/500 — numbers, money, codes, token names
  - **Roboto** 400/500/700 — legacy/compat
  - **Material Symbols Rounded** + **Material Symbols Outlined** (`opsz,wght,FILL,GRAD`) — all icons via `<span class="material-symbols-rounded">name</span>`
- **`src/index.css`** — `@tailwind base/components/utilities` + a `@layer base` block: page background (`#E5EDDD`)/text (`#0F1F18`) on `html`/`body`, lime `::selection`, and an overflow-safety net (`overflow-wrap: break-word` on `p,h1..h6,span,li,a,button,strong,em,…`) so long Việt-Anh strings don't blow out cards.
- **`tailwind.config.js`** — the canonical token→class map (1:1 with the root design system). `content: ['./index.html', './src/**/*.{js,jsx}']`. No plugins.

## The one hard rule: no hardcoded values

Always use token classes — `bg-bg-elevated`, `text-text-primary`, `border-border-subtle`,
`text-tier-s`, `shadow-clay`, `p-space-24`, `font-display text-h2`. **Never** `bg-[#52E08D]`
or raw px where a `space-*` token exists. (A handful of ported components have inline
`style={{...}}` with literal hex/rgba — that's pre-existing debt from auto-conversion, not a
pattern to copy.)

## Token cheat-sheet (from `tailwind.config.js`)

**Backgrounds / surfaces** — `bg-base #E5EDDD` (sage page), `bg-elevated #D6E3CC` (cream-sage card), `bg-surface #C8D6BE`, `bg-tinted #DCEDDF`. Aliases: `background`, `surface`.

**Borders** — `border-subtle #B8C9AE`, `border-default #A0B496`, `border-strong #6F8567` (alias `outline`).

**Text** — `text-primary #0F1F18`, `text-secondary #41524A`, `text-tertiary #7C8A82`, `text-on-lime #0A1F12`.

**Brand (lime DNA)** — `lime-soft #C7F2D6`, `lime #52E08D`, `lime-deep #2BB36A`, `forest #0F3D26`. Legacy aliases kept for compat: `primary`, `on-primary`, `primary-container`, `on-primary-container`.

**4-tier waste** — `tier-s #2BB36A`, `tier-b #E8B340`, `tier-c #E68A3F`, `tier-h #D14B3B`.

**Status** — `success #2BB36A`, `warning #E8B340`, `error #D14B3B`, `info #3B8DD1`.

**Clay pastels** (3D backdrops + status-chip BGs) — `clay-mint #BFE8CE`, `clay-butter #F2D58F`, `clay-peach #F2C2A6`, `clay-blush #E8B0AB`, `clay-sky #B5D2E5`, `clay-lavender #C7BCE8`. Also `amber-deep #7A5410` (dark text for chips on butter — better contrast than `tier-b`).

**Type scale** (`font-*` family + `text-*` size, all weights/line-heights baked into the size token):
`display-xl` 96px · `display-l` 72px · `display-m` 56px · `h1` 40px · `h2` 32px · `h3` 24px · `h4` 20px · `body-lg` 18px · `body-md` 16px · `mono-md` 16px · `eyebrow` 12px (uppercase, +0.12em). Families: `font-display`/`font-h1..h4` → Plus Jakarta Sans; `font-body`/`font-body-lg`/`font-body-md`/`font-eyebrow`/`font-sans` → Inter; `font-mono`/`font-mono-md` → JetBrains Mono; `font-roboto` → Roboto.

**Spacing** (8-point-ish grid) — `space-4 8 12 16 20 24 28 32 40 48 64 96 128 160 240` (px). Page horizontal padding is `px-[80px]`, content max-width `max-w-[1280px] mx-auto`.

**Radius** — `sm` 6px · `md`/`DEFAULT` 8px · `lg` 12px · `xl` 16px · `2xl` 20px · `3xl` 28px · `full`. Big cards typically `rounded-3xl`/`rounded-[28px]`, buttons `rounded-2xl`, chips `rounded-full`.

**Shadows (claymorphism)** — `shadow-clay-sm`, `shadow-clay`, `shadow-clay-lg`, `shadow-clay-lime` (lime-tinted), `shadow-inset-soft`.

**Easing** — `ease-out-expo` `cubic-bezier(0.16,1,0.3,1)`, `ease-in-out-smooth` `cubic-bezier(0.65,0,0.35,1)`.

## Visual-first & illustration rules (summary — see root docs for the full text)

- Every page/section should be **visual-rich**: SVG illustrations + Material icons in clay rounded boxes + clay pastel cards + chips/badges should fill ≥40% of each section. No text-only "Word doc" pages.
- Illustrations are **self-drawn inline SVG** in `src/components/illustrations/` — multi-layer composition, 3-stop gradients, depth shadows, brand-palette only, themed sparkles, context-specific objects, Vietnamese brand markers. **Not** stock photos (only allowed for sample product photos, BOM before/after, and map backgrounds), **not** Material icons (those are just small icons). New illustration → new file, follow the 8 criteria, register it in [COMPONENTS.md](./COMPONENTS.md) and the root [`FEATURE_TRACKER.md`](../../docs/FEATURE_TRACKER.md).
- Copy is **Vietnamese**; money is `213.700đ`; dates `dd/MM/yyyy`; never use the word "demo".

See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to apply these when adding pages/components.
