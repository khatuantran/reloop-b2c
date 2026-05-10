# Surface color switch — pure white → cream warm

## Context

User reviewed `design-system/light-v2.html` showcase và muốn surface (card/elevated) **không còn pure white**. Đã chọn:

- **Surface mới**: `#FAF5EC` (cream warm — paper notebook feel)
- Base, lime accent, tiers, clay pastels giữ nguyên

Lý do: pure white quá chói, cream warm dịu mắt hơn nhưng vẫn sáng hơn base #FAFAF7 để giữ hierarchy. Hợp với eco-friendly + thân thiện Bà Năm 50+.

Đây là update duy nhất trong showcase page — chưa rollout vào production tokens (sẽ làm sau khi user approve toàn bộ design v2).

## Approach

Chỉ edit 1 file: `design-system/light-v2.html`. Update Tailwind inline config + verify ripple effects.

### Critical change

```js
// In tailwind.config script tag
'bg-elevated': '#FFFFFF',  // OLD pure white
'bg-elevated': '#FAF5EC',  // NEW cream warm
```

### Ripple effect check & adjustments

1. **Border subtle** (`#ECECE6`) — hiện gần với pure white. Trên cream surface có thể blend mất visibility. **Bump thành `#E8E2D4`** (warm gray-beige, tone tương đồng cream). Cards vẫn có viền nhẹ rõ ràng.

2. **Pure white intentional usage** — giữ nguyên 3 chỗ (không đổi vì cần Google Maps fidelity + contrast với cream cards):
   - Map search bar pill (`bg-white`) — Google Maps style
   - Map zoom controls (`bg-white`) — Google Maps style
   - Map attribution stripe — Google Maps style

   Xác minh literal `bg-white` được dùng (không phải `bg-bg-elevated`) — nếu dùng class token thì cần đổi sang `bg-white` literal.

3. **Hero gradient** (`.grad-hero`) — radial gradient ends in `#FAFAF7`. Nếu hero chứa cards với surface cream, có thể cards bị "biến mất" khi nằm trên vùng base sáng hơn. **Adjust hero gradient end-stop xuống `#F2F1EA`** để hero không sáng hơn surface cream.

4. **Visual diff verify** — sau edit:
   - Card balance ZaloPay (white → cream): contrast text-primary `#0F1F18` trên cream pass WCAG AAA (~15:1)
   - Card Trust Score gauge: pass
   - Card Order rows: pass
   - Footer: pass
   - Phone mockup screen (inside SVG `#FAFAF7`): keep — đó là content "screen" trong illustration, giữ off-white để khác surface card chứa nó

### Files

| File | Action |
|---|---|
| `design-system/light-v2.html` | **MODIFY** — change `bg-elevated` token + `border-subtle` token; verify map literals use `bg-white` not token |

Không touch: `tailwind.config.ts` production, `src/styles/global.css`, components Astro — vì showcase chưa được approve, rollout sẽ là round riêng.

## Verification

1. Mở `design-system/light-v2.html` trong browser sau edit
2. Visually inspect các surface (card balance / Trust gauge / order rows / footer / map right panel) — màu cream warm rõ ràng, không còn pure white
3. Map search bar + zoom controls vẫn pure white (Google fidelity preserved)
4. Borders giữa card và base vẫn nhìn ra (border-subtle không mất hút)
5. Hero section: cards bên trong nổi bật, không lẫn với gradient bg
6. Text readability: tất cả heading/body/mono vẫn rõ trên cream

## Out of scope

- Không rollout vào production (`tailwind.config.ts`, `global.css`, src/components)
- Không đổi base, lime, tier, clay pastel, type, shadow tokens
- Không touch Map SVG nội dung (chỉ check class literals)
