---
name: RE-LOOP Design System
colors:
  surface: '#0e1510'
  surface-dim: '#0e1510'
  surface-bright: '#333b34'
  surface-container-lowest: '#09100a'
  surface-container-low: '#161d17'
  surface-container: '#1a211b'
  surface-container-high: '#242c26'
  surface-container-highest: '#2f3730'
  on-surface: '#dde5db'
  on-surface-variant: '#bccabc'
  inverse-surface: '#dde5db'
  inverse-on-surface: '#2b322c'
  outline: '#869487'
  outline-variant: '#3d4a3f'
  surface-tint: '#51df8d'
  primary: '#72fda7'
  on-primary: '#00391c'
  primary-container: '#52e08d'
  on-primary-container: '#006034'
  inverse-primary: '#006d3b'
  secondary: '#a3d0bb'
  on-secondary: '#093729'
  secondary-container: '#265140'
  on-secondary-container: '#95c2ad'
  tertiary: '#ffddc2'
  on-tertiary: '#4c2700'
  tertiary-container: '#ffb879'
  on-tertiary-container: '#794711'
  error: '#E76F51'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#71fda6'
  primary-fixed-dim: '#51df8d'
  on-primary-fixed: '#00210e'
  on-primary-fixed-variant: '#00522b'
  secondary-fixed: '#beedd7'
  secondary-fixed-dim: '#a3d0bb'
  on-secondary-fixed: '#002116'
  on-secondary-fixed-variant: '#244e3e'
  tertiary-fixed: '#ffdcc1'
  tertiary-fixed-dim: '#ffb879'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6b3b05'
  background: '#0e1510'
  on-background: '#dde5db'
  surface-variant: '#2f3730'
  bg-base: '#0A1410'
  bg-elevated: '#0F1F18'
  bg-surface: '#162A22'
  text-primary: '#F0F4F1'
  text-secondary: '#A8B5AC'
  text-tertiary: '#6B7C72'
  border-subtle: '#1A2D24'
  border-default: '#2A4034'
  tier-s: '#52E0A8'
  tier-b: '#F4D060'
  tier-c: '#F4A261'
  tier-h: '#E76F51'
  success: '#52E08D'
  warning: '#F4B860'
  info: '#5BC0EB'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 96px
    fontWeight: '800'
    lineHeight: 100px
    letterSpacing: -3%
  display-l:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 76px
    letterSpacing: -2.5%
  display-m:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -2%
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -1.5%
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -1%
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  h4:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  mono-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.5'
  eyebrow:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: +12%
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-4: 4px
  space-8: 8px
  space-12: 12px
  space-16: 16px
  space-24: 24px
  space-32: 32px
  space-48: 48px
  space-64: 64px
  space-96: 96px
  space-128: 128px
  space-160: 160px
  space-240: 240px
---

Design a comprehensive design system reference page for a Vietnamese eco-tech app called "RE-LOOP". This is a single long scrollable dark-mode documentation page showcasing all design tokens, components, and patterns — similar to Stripe's color page or Linear's design system docs, but rendered in deep forest green dark mode. The page is meant to serve as a visual reference for designers and developers.

Page dimensions: 1440px wide, approximately 4800px tall total (long vertical scroll). Background: deep forest green #0A1410. Maximum content width 1280px, centered with 80px horizontal page padding. Typography: Plus Jakarta Sans for headings (weights 700 and 800), Inter for body (weights 400 and 500), JetBrains Mono for token names, hex codes, and numeric values.

— STICKY TOP HEADER (80px tall, position sticky, background rgba(10,20,16,0.85) with 16px backdrop blur, 1px bottom border #1A2D24): Left side has a 32x32px lime green (#52E08D) rounded square logo with a white recycle icon centered inside, next to "RE-LOOP" wordmark in Plus Jakarta Sans 800, 20px, near-white #F0F4F1, with a small "Design System v1.0" tag below it in JetBrains Mono 11px, color #A8B5AC. Center: a horizontal row of 7 anchor link buttons in Inter 14px medium, color #A8B5AC, with 24px gap, hover state lime green: "Colors", "Typography", "Components", "Tiers", "Spacing", "Motion", "Composition". Right side: a small pill chip with a tiny lime green dot on the left and the text "Dark mode" in Inter 12px medium, lime green color, on a transparent background with a 1px lime green border at 30% opacity.

— HERO INTRO BANNER (480px tall, full content width 1280px, centered): A large soft mesh gradient blob in lime green (#52E08D) at 10% opacity, blurred 120px, fills the center-left area of the banner. Content stacked vertically with 24px gap, left-aligned: a small uppercase eyebrow "DESIGN SYSTEM" in Inter 12px bold uppercase, letter-spacing +12%, lime green color; a giant headline "Một hệ thống. Tám màn hình. Một câu chuyện." in Plus Jakarta Sans 800, 88px, line-height 92, letter-spacing -3%, near-white, with the word "câu chuyện" in lime green; a sub-paragraph "Toàn bộ tokens, component, motion principles dùng xuyên suốt landing page RE-LOOP. Bản v1.0 — cập nhật cho dark mode forest green với 4 tier waste classification." in Inter 18px, color #A8B5AC, max-width 640px. Below the headline, a row of three small inline metric chips with bg-elevated #0F1F18 background, 1px border #1A2D24, 999px radius, 8px padding 16px: "▧ 24 color tokens", "Aa 11 type tokens", "◐ 4 motion easings".

— SECTION 1: COLOR TOKENS (height ~1100px). A horizontal divider 1px #1A2D24 separates each major section. Section header row: a small "01" in JetBrains Mono 14px lime green on the left, then "Color Tokens" in Plus Jakarta Sans 800, 56px, near-white, with a sub-line below in Inter 16px color #A8B5AC: "All colors in the RE-LOOP visual language. Dark mode optimized, WCAG AA verified." 64px margin-bottom after section header.

Sub-section heading "Backgrounds & brand greens" in Plus Jakarta Sans 600, 20px, color #F0F4F1, 24px margin-bottom. A 5-column grid of color swatch cards with 24px gap. Each swatch card is 240x280px, dark elevated background #0F1F18, 1px border #1A2D24, 16px border radius, 24px internal padding, layout vertical. Inside each card top to bottom with 16px gap: a large color preview block (full width, 120px tall, 12px border radius) filled with the swatch color; the token name in JetBrains Mono 14px medium, near-white; the hex value in JetBrains Mono 14px medium, lime green; a 1px divider #1A2D24; a description paragraph in Inter 12px, color #A8B5AC, line-height 1.5.

Card 1: fill #0A1410 (with a 1px inner border #1A2D24 since it matches page bg), name "bg/base", hex "#0A1410", description "Page background. Almost black with green undertone."
Card 2: fill #0F1F18, name "bg/elevated", hex "#0F1F18", description "Cards, sections that need to lift off the page."
Card 3: fill #162A22, name "bg/surface", hex "#162A22", description "Modals, popovers, hover states."
Card 4: fill #1F4A3A, name "brand/primary", hex "#1F4A3A", description "Forest green for secondary buttons, borders."
Card 5: fill #52E08D, name "brand/accent", hex "#52E08D", description "Vibrant lime for CTAs, highlights, success states."

Sub-section heading "Tier colors — 4-tier waste classification" in Plus Jakarta Sans 600, 20px, with a small lime green badge "RE-LOOP signature" next to it. 24px margin-bottom. A 4-column grid of LARGER tier swatch cards (300x340px each, same structure but with the large color block 160px tall and an additional bottom row showing example items). Each card has a 2px solid border in its respective tier color (instead of the default subtle border).

Card 1: tier S, fill #52E0A8, name "tier/S — Standard", description "Chai PET, lon nhôm, giấy carton. AI confidence 95%. Pricing CHẮC CHẮN."
Card 2: tier B, fill #F4D060, name "tier/B — Bulky", description "Tủ lạnh, máy giặt, sofa. AI confidence 88%. Pricing có DẢI."
Card 3: tier C, fill #F4A261, name "tier/C — Complex", description "Mô tơ điện, dây điện, mainboard. AI confidence 78%. Tạm ứng 70% + chốt sau."
Card 4: tier H, fill #E76F51, name "tier/H — Hazardous", description "Pin Li-ion, ắc quy, hóa chất. AI confidence 90%. Quy trình có giấy phép."

Sub-section heading "Text & borders" in Plus Jakarta Sans 600, 20px. A 5-column grid of standard swatch cards.

Card 1: fill #F0F4F1, name "text/primary", description "Headings and primary content."
Card 2: fill #A8B5AC, name "text/secondary", description "Sub-headings, captions, body."
Card 3: fill #6B7C72, name "text/tertiary", description "Hints, metadata, disabled states."
Card 4: fill #1A2D24, name "border/subtle", description "Default card and divider borders."
Card 5: fill #2A4034, name "border/default", description "Hover state borders, input borders."

Sub-section heading "Semantic" in Plus Jakarta Sans 600, 20px. A 4-column grid of small swatch cards (200x220px).

Card 1: fill #52E08D, name "success", description "Confirmation, completion states."
Card 2: fill #F4B860, name "warning", description "Caution, attention required."
Card 3: fill #E76F51, name "error", description "Errors, destructive actions."
Card 4: fill #5BC0EB, name "info", description "Informational messages."

— SECTION 2: TYPOGRAPHY (height ~1100px). Section header "02" + "Typography Scale" + sub-line "Plus Jakarta Sans for headings, Inter for body, JetBrains Mono for code and numbers. Mobile scale reduces display tokens by ~30%."

Below the header, a single large card spanning full width, dark elevated bg #0F1F18, 1px border #1A2D24, 24px radius, 48px padding. Inside the card, a vertical list of 11 type sample rows. Each row has 3 columns separated by horizontal padding: left column 140px wide showing the token name in JetBrains Mono 13px color #6B7C72; center column flexible, showing actual sample text rendered at the spec size; right column 140px wide right-aligned showing "size / weight" in JetBrains Mono 13px color #6B7C72. Each row separated by a 1px #1A2D24 divider, with 20px vertical padding per row.

Row 1: token "display/xl", sample "Bán rác trong 60 giây" in Plus Jakarta Sans 800, 96px, line-height 100, letter-spacing -3%, near-white, spec "96 / 800"
Row 2: token "display/l", sample "Vấn đề thực tế của Việt Nam" in Plus Jakarta Sans 800, 72px, line-height 76, letter-spacing -2.5%, near-white, spec "72 / 800"
Row 3: token "display/m", sample "AI 4 tier phân loại rác" in Plus Jakarta Sans 700, 56px, line-height 60, letter-spacing -2%, near-white, spec "56 / 700"
Row 4: token "h1", sample "Truy xuất minh bạch hành trình" in Plus Jakarta Sans 700, 40px, line-height 48, letter-spacing -1.5%, near-white, spec "40 / 700"
Row 5: token "h2", sample "Pricing minh bạch theo BOM" in Plus Jakarta Sans 700, 32px, line-height 40, letter-spacing -1%, near-white, spec "32 / 700"
Row 6: token "h3", sample "Đặt lịch thu gom" in Plus Jakarta Sans 600, 24px, line-height 32, near-white, spec "24 / 600"
Row 7: token "h4", sample "Card title block" in Plus Jakarta Sans 600, 20px, line-height 28, near-white, spec "20 / 600"
Row 8: token "body/lg", sample "RE-LOOP định giá minh bạch bằng AI và chuyển tiền vào ZaloPay/MoMo của bạn trong 60 giây." in Inter 400, 18px, line-height 28, color #A8B5AC, spec "18 / 400"
Row 9: token "body/md", sample "Default body text used across most paragraphs and descriptions." in Inter 400, 16px, line-height 24, color #A8B5AC, spec "16 / 400"
Row 10: token "mono/md", sample "228.000 ₫" in JetBrains Mono 500, 16px, lime green color, spec "16 / 500"
Row 11: token "eyebrow", sample "BẮT ĐẦU NGAY" in Inter 600, 12px uppercase, letter-spacing +12%, lime green, spec "12 / 600"

— SECTION 3: COMPONENTS (height ~1400px). Section header "03" + "Components". A 12-column grid layout with multiple component groups.

Group A: Buttons (full width). Heading "Buttons" in Plus Jakarta Sans 600, 24px. Sub-text "Primary for main CTAs. Secondary for alternate actions. Ghost for tertiary nav and inline links." in Inter 14px color #A8B5AC. Below, a 2-row layout. Top row: 4 button states for primary — default, hover (lifted with subtle accent glow), active (pressed scale 0.98), disabled (50% opacity). Each button is a pill-shape "Tải app miễn phí" in lime green bg #52E08D with dark text #0A1410, Inter 14px medium, 56px height, 32px horizontal padding, 999px radius, with a download icon on the left. Below each button a small label in JetBrains Mono 11px color #6B7C72: "default" / "hover" / "active" / "disabled". Bottom row: same 4 states for secondary button (transparent bg, 1px border #3D5849, near-white text, label "Xem cách hoạt động" with play icon) and ghost button (transparent bg, lime green text, label "Tìm hiểu thêm" with arrow icon, no border, underline animates on hover).

Group B: Inputs and Cards (2 columns 50/50). Left column "Inputs": a stack of 3 input field examples — a default text input "email@cua.ban" in dark surface bg #162A22, 1px border #2A4034, 12px radius, 56px height, 16px padding; a focused state of the same input but with a 2px lime green border and a subtle 4px lime green glow ring; a select dropdown showing "Quận 7, TP.HCM" with a chevron icon. Each labeled below in JetBrains Mono 11px.

Right column "Cards": a single example tier card showing the structure — dark elevated bg #0F1F18, 24px radius, 32px padding, with a tier S badge at top-left, a 3D PET bottle illustration centered (or a placeholder rectangle), title "Standard waste", price "10.000 — 35.000đ/kg" in JetBrains Mono lime green, a thin progress bar at bottom showing "AI confidence 95%". A second smaller card showing the hover state with the card lifted -8px, border changed to #2A4034, with "Hover state" labeled below.

Group C: Badges & Pills (full width). Heading "Badges & Pills" in Plus Jakarta Sans 600, 24px. A row showing all 4 tier badges side by side: "S · Standard" in mint, "B · Bulky" in gold, "C · Complex" in orange, "H · Hazardous" in coral — each pill shape with tier color background at 12% opacity, tier color text, 1px tier color border at 30% opacity, Inter 12px medium, 8px vertical 16px horizontal padding. Below them, a row of semantic chips: "✓ Verified" in lime green, "⚠ Pending" in warning yellow, "✕ Rejected" in coral red, "ℹ Info" in info blue.

Group D: Navigation Bar (full width). Heading "Navigation". Show the actual sticky navbar from the top of the page, but freeze it inside a frame to demonstrate it as a component, with a label "Used on all 8 screens. Sticky on scroll, transparent background with backdrop blur."

— SECTION 4: SPACING & GRID (height ~700px). Section header "04" + "Spacing Scale" + sub-line "8-point grid. All spacing values are multiples of 4."

Below the header, a single card 1280px wide, dark elevated bg, 24px radius, 48px padding. Inside, a vertical list of 12 spacing rows. Each row has 3 columns: left 120px showing token name "space/4" through "space/240" in JetBrains Mono 14px color #6B7C72; center flexible showing a horizontal lime green bar (height 8px, border-radius 4px) with width equal to the actual spacing value; right 120px right-aligned showing the px value plus a usage hint in JetBrains Mono 13px color #A8B5AC.

Row 1: "space/4" / 4px bar / "4px"
Row 2: "space/8" / 8px bar / "8px"
Row 3: "space/12" / 12px bar / "12px"
Row 4: "space/16" / 16px bar / "16px"
Row 5: "space/24" / 24px bar / "24px · default gap"
Row 6: "space/32" / 32px bar / "32px"
Row 7: "space/48" / 48px bar / "48px"
Row 8: "space/64" / 64px bar / "64px"
Row 9: "space/96" / 96px bar / "96px · mobile section"
Row 10: "space/128" / 128px bar / "128px"
Row 11: "space/160" / 160px bar / "160px · desktop section"
Row 12: "space/240" / 240px bar / "240px · hero pad"

Below the spacing card, a 2-column grid showing the GRID system. Left card: "Desktop grid — 12 columns" with a small visual diagram of 12 vertical lime-green columns at 20% opacity, 24px gutter between, with "max-width 1440px / 80px page padding / 24px gutter" in JetBrains Mono. Right card: "Mobile grid — 4 columns" with 4 columns visual, "16px margin / 16px gutter" labels.

— SECTION 5: MOTION (height ~700px). Section header "05" + "Motion Principles" + sub-line "Premium feel through ease/out-expo by default. Spring for tactile drag interactions. Linear only for progress meters."

Below the header, a single card 1280px wide, dark elevated bg, 24px radius, 48px padding. Inside, 4 motion easing rows stacked vertically. Each row has 4 columns: left 160px the easing token name "ease/out-expo" in JetBrains Mono 14px medium near-white; second column 200px the cubic-bezier value in JetBrains Mono 12px color #A8B5AC; third column flexible — a horizontal track (background #162A22, height 40px, 8px radius) with a 24px lime green dot at the left edge representing the start state; right 120px the duration "400ms" in JetBrains Mono.

Row 1: token "ease/out-expo", value "cubic-bezier(0.16, 1, 0.3, 1)", duration "400ms (default)"
Row 2: token "ease/in-out", value "cubic-bezier(0.65, 0, 0.35, 1)", duration "800ms (page transitions)"
Row 3: token "ease/spring", value "spring(180, 22)", duration "600ms (drag-drop)"
Row 4: token "ease/linear", value "linear", duration "1200ms (progress only)"

Below the motion table, a smaller info panel with 3 columns showing duration tokens: "motion/instant 100ms — micro feedback" / "motion/medium 400ms — default transition" / "motion/dramatic 1200ms — storytelling moments". Each in a small bg-elevated card.

— SECTION 6: ICONOGRAPHY (height ~400px). Section header "06" + "Iconography" + sub-line "Lucide icons. 1.5px stroke. 24px default size. Color inherited from text/secondary, switches to accent on active states."

Below the header, a single card 1280px wide, dark elevated bg, 24px radius, 48px padding. Inside, an 8-column grid of 16 icon examples (each cell 96x96px with an icon centered, small JetBrains Mono 11px label below). Icons: home, settings, user, search, x (close), check, plus, trash, edit, download, upload, calendar, clock, arrow-right, chevron-down, external-link. All icons rendered as outline strokes in color #A8B5AC, 1.5px stroke width, 32px size. Two of the icons (download and check) are highlighted in lime green to show the "active" state.

— SECTION 7: SAMPLE COMPOSITION (height ~700px). Section header "07" + "Sample Composition" + sub-line "All tokens combined into a hero section preview. This is what Screen 1 of the landing page should feel like."

Below the header, a large mockup frame (1280px wide, 600px tall, 24px radius, 1px border #1A2D24). Inside the frame, render an actual mini hero composition: two-column 60/40 split with the left column showing the same eyebrow + headline + sub + buttons + trust strip from Screen 1 (slightly smaller scale, headline 64px instead of 96px), and the right column showing a placeholder photo area with a clear PET bottle on a Saigon alleyway background, plus 2 floating 3D objects (a coin and a leaf). Below the mockup, a row of small token chips in JetBrains Mono 11px showing what was used: "bg/base · brand/accent · display/xl · body/lg · btn/primary · ease/out-expo".

— FOOTER (120px tall, 1px top border #1A2D24, 64px top padding). Centered content: "RE-LOOP Design System v1.0" in Plus Jakarta Sans 600, 18px near-white. Below it in Inter 14px color #A8B5AC: "Last updated May 2026 · Built for Vietnam B2C circular economy app." Below that, a small inline row: "← Back to top" link in lime green Inter 14px on the left, "Generated by Stitch · Designed by RE-LOOP team" on the right in JetBrains Mono 12px color #6B7C72.

Overall mood throughout: clean, premium, dark, trustworthy. The page should feel like a serious design system documentation — comparable to Stripe's, Linear's, or Vercel's docs — but expressed in the RE-LOOP brand language of deep forest green dark mode. Generous whitespace, consistent rhythm, no decorative noise. Every element is purposeful. No gradients in card backgrounds (only the hero banner has the soft mesh gradient blob). All borders are precise 1px lines. All radii follow the token system: 12px for inputs and small elements, 16px for medium cards, 24px for major sections, 999px for buttons and pills.