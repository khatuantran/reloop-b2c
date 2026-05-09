# RE-LOOP Design System

Single source of truth cho design tokens. Khi có conflict giữa file này và `design-system/code.html`, file này là canonical.

## 1. Color tokens

### Backgrounds & brand
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-base` | `#14201B` | Page background — dark forest green (Round 5 brighten) |
| `bg-elevated` | `#1B2D24` | Cards, sections cần nâng khỏi page |
| `bg-surface` | `#22372D` | Modals, popovers, hover states |
| `surface` | `#14201B` | M3 base surface |
| `surface-container` | `#25342B` | M3 container layer |
| `surface-container-high` | `#2F3F35` | M3 elevated container |
| `surface-bright` | `#3E4D44` | M3 brightest surface |

### Brand & accent
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#72fda7` | M3 primary |
| `primary-container` | `#52e08d` | M3 primary container |
| `success` | `#52E08D` | Lime green CTAs, highlights, confirmation |
| `surface-tint` | `#51df8d` | Tint accent |

### 4-Tier waste classification (RE-LOOP signature)
| Token | Hex | Tier |
|-------|-----|------|
| `tier-s` | `#52E0A8` | Standard — đồng nhất, AI confidence cao |
| `tier-b` | `#F4D060` | Bulky — cồng kềnh, dải giá |
| `tier-c` | `#F4A261` | Complex — phức tạp, tạm ứng + chốt sau |
| `tier-h` | `#E76F51` | Hazardous — nguy hại, cần giấy phép |

### Text
| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#F0F4F1` | Headings, primary content |
| `text-secondary` | `#A8B5AC` | Sub-headings, captions, body |
| `text-tertiary` | `#6B7C72` | Hints, metadata, disabled |
| `on-surface` | `#dde5db` | M3 on-surface |
| `on-surface-variant` | `#bccabc` | M3 on-surface variant |

### Borders
| Token | Hex | Usage |
|-------|-----|-------|
| `border-subtle` | `#1A2D24` | Default card and divider borders |
| `border-default` | `#2A4034` | Hover state borders, input borders |
| `outline` | `#869487` | M3 outline |
| `outline-variant` | `#3d4a3f` | M3 outline variant |

### Semantic
| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#52E08D` | Confirmation, completion |
| `warning` | `#F4B860` | Caution, attention required |
| `error` | `#E76F51` | Errors, destructive actions |
| `info` | `#5BC0EB` | Informational messages |

## 2. Typography scale

Fonts: **Plus Jakarta Sans** (display & headings), **Inter** (body & labels), **JetBrains Mono** (code, hex, numeric).

| Token | Size | Line height | Weight | Letter spacing | Family |
|-------|------|-------------|--------|----------------|--------|
| `display-xl` | 96px | 100px | 800 | -3% | Plus Jakarta Sans |
| `display-l` | 72px | 76px | 800 | -2.5% | Plus Jakarta Sans |
| `display-m` | 56px | 60px | 700 | -2% | Plus Jakarta Sans |
| `h1` | 40px | 48px | 700 | -1.5% | Plus Jakarta Sans |
| `h2` | 32px | 40px | 700 | -1% | Plus Jakarta Sans |
| `h3` | 24px | 32px | 600 | 0 | Plus Jakarta Sans |
| `h4` | 20px | 28px | 600 | 0 | Plus Jakarta Sans |
| `body-lg` | 18px | 28px | 400 | 0 | Inter |
| `body-md` | 16px | 24px | 400 | 0 | Inter |
| `mono-md` | 16px | 1.5 | 500 | 0 | JetBrains Mono |
| `eyebrow` | 12px | 1 | 600 | +12% | Inter (uppercase) |

Tailwind usage: `class="font-display-xl text-display-xl"` — cả family lẫn size đều cùng token name.

## 3. Spacing — 8-point grid

| Token | px |
|-------|-----|
| `space-4` | 4 |
| `space-8` | 8 |
| `space-12` | 12 |
| `space-16` | 16 |
| `space-24` | 24 |
| `space-32` | 32 |
| `space-48` | 48 |
| `space-64` | 64 |
| `space-96` | 96 |
| `space-128` | 128 |
| `space-160` | 160 |
| `space-240` | 240 |

Default gap giữa items: `space-24`. Default section margin: `space-64` (mobile) / `space-160` (desktop).

## 4. Border radius

| Token | Value |
|-------|-------|
| `rounded` (DEFAULT) | 0.25rem (4px) |
| `rounded-lg` | 0.5rem (8px) |
| `rounded-xl` | 0.75rem (12px) |
| `rounded-2xl` | 1rem (16px) |
| `rounded-3xl` | 1.5rem (24px) |
| `rounded-full` | 9999px |

Convention: input/small element 12px, medium card 16px, major section 24px, button/pill 9999px.

## 5. Motion

### Easings
| Token | cubic-bezier | Use |
|-------|--------------|-----|
| `ease/out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default 400ms |
| `ease/in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Page transitions 800ms |
| `ease/spring` | `spring(180, 22)` | Drag-drop 600ms |
| `ease/linear` | `linear` | Progress bars only 1200ms |

### Durations
| Token | ms | Use |
|-------|-----|-----|
| `motion/instant` | 100 | Micro feedback |
| `motion/medium` | 400 | Default transition |
| `motion/dramatic` | 1200 | Storytelling moments |

## 6. Components

### Button — 3 variants × 4 states
- **Primary**: bg `success` lime, text `bg-base`. Hover: bg `success/90`. Active: bg `success/80` scale `0.98`. Disabled: bg `border-default`, text `text-tertiary`.
- **Secondary**: border 1px `success`, text `success`, bg transparent. Hover: bg `success/10`. Active: bg `success/20` scale `0.98`. Disabled: border `border-subtle`, text `text-tertiary`.
- **Ghost**: text `success`, no border, no bg. Hover: bg `success/5`. Active: bg `success/10` scale `0.98`. Disabled: text `text-tertiary`.

Sizes: padding `space-12 space-24`, font Inter 14px semibold, radius `full`.

### Card
- **Default**: bg `bg-elevated`, border 1px `border-subtle`, radius 16px, padding 24px.
- **Hover/active**: bg `bg-surface`, border `border-default`, transform `-translate-y-1`, shadow lime 5%.

### TierBadge
Pill: bg `tier-X/10`, border 1px `tier-X/30`, text `tier-X`. Padding `space-4 space-12`. Font JetBrains Mono 12px. Có dot 1.5×1.5 fill `tier-X` ở trước.

### Input
bg `bg-base`, border 1px `border-subtle`, radius 8px, padding `space-12 space-16`. Focus: border `success` 2px, ring `success/20`. Label trên input: Inter 12px uppercase `text-secondary`.

### Pill (semantic chip)
Padding `space-4 space-12`, radius full, bg `<semantic>/10`, border 1px `<semantic>/30`, text `<semantic>`, Inter 12px medium.

## 7. Iconography

Material Symbols Outlined (Google Fonts). Default: weight 200, size 24-32px, color `text-secondary`. Active state: color `success`, weight 400.

Common icons used:
- `recycling` (logo, Tier S)
- `chair` / `weekend` (Tier B sofa)
- `settings_motion` (Tier C motor)
- `battery_alert` (Tier H pin)
- `photo_camera` (upload step)
- `auto_awesome` (AI step)
- `schedule` (đặt lịch step)
- `payments` / `account_balance_wallet` (ZaloPay step)
- `verified` (Trust Score)
- `arrow_forward` (CTA)
- `expand_more` (accordion)
