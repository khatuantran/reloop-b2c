// Port từ src/components/illustrations/RecycleBin.astro.
// SVG tĩnh, tin cậy → giữ verbatim qua dangerouslySetInnerHTML (không phải đổi từng attr SVG sang camelCase).
// Đây là pattern khuyến nghị cho toàn bộ 24 illustration — xem CONVERSION.md §Illustrations.
export default function RecycleBin({ size = 360, className = '' }) {
  return (
    <svg
      viewBox="0 0 360 360"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{
        __html: `
  <defs>
    <radialGradient id="bin-light" cx="35%" cy="20%">
      <stop offset="0%" stop-color="#7AEFA8" />
      <stop offset="60%" stop-color="#52E08D" />
      <stop offset="100%" stop-color="#2BB36A" />
    </radialGradient>
    <radialGradient id="bottle-light" cx="35%" cy="20%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="50%" stop-color="#CFE6F5" />
      <stop offset="100%" stop-color="#86B5D6" />
    </radialGradient>
    <radialGradient id="leaf-light" cx="30%" cy="25%">
      <stop offset="0%" stop-color="#A0F2BD" />
      <stop offset="100%" stop-color="#52E08D" />
    </radialGradient>
  </defs>
  <ellipse cx="180" cy="320" rx="130" ry="14" fill="#0F1F18" opacity="0.10" />
  <path d="M70 130 Q70 110 90 110 L270 110 Q290 110 290 130 L275 305 Q273 325 250 325 L110 325 Q87 325 85 305 Z" fill="url(#bin-light)" />
  <path d="M85 140 Q85 125 100 125 L120 125 L110 305 Q108 315 100 315 L95 315 Q88 315 87 305 Z" fill="white" opacity="0.35" />
  <ellipse cx="180" cy="110" rx="115" ry="22" fill="#2BB36A" />
  <ellipse cx="180" cy="105" rx="115" ry="22" fill="#52E08D" />
  <ellipse cx="180" cy="100" rx="105" ry="16" fill="#7AEFA8" opacity="0.7" />
  <g transform="translate(180,210)">
    <path d="M-30 -25 L-15 -8 L-25 -8 Q-25 5 -10 12 L-5 5 L-2 18 L-15 16 L-10 9 Q-32 0 -32 -10 Z" fill="white" opacity="0.85" />
    <path d="M30 -25 L15 -8 L25 -8 Q25 5 10 12 L5 5 L2 18 L15 16 L10 9 Q32 0 32 -10 Z" fill="white" opacity="0.85" transform="rotate(120)" />
    <path d="M0 30 L-8 18 L-3 18 Q-3 8 5 5 L8 12 L18 5 L13 18 L8 13 Q-15 25 0 38 Z" fill="white" opacity="0.85" transform="rotate(240)" />
  </g>
  <g transform="translate(265,55) rotate(20)">
    <rect x="-18" y="-50" width="36" height="80" rx="14" fill="url(#bottle-light)" />
    <rect x="-8" y="-65" width="16" height="20" rx="4" fill="#86B5D6" />
    <ellipse cx="-8" cy="-40" rx="4" ry="14" fill="white" opacity="0.7" />
  </g>
  <g transform="translate(80,75) rotate(-25)">
    <path d="M0 0 Q20 -25 40 -10 Q35 15 0 0 Z" fill="url(#leaf-light)" />
    <path d="M5 -3 Q20 -15 35 -10" stroke="#1A8A4C" stroke-width="1.5" fill="none" opacity="0.5" />
  </g>
  <circle cx="50" cy="180" r="4" fill="#E8B340" />
  <circle cx="320" cy="220" r="5" fill="#52E08D" opacity="0.6" />
  <circle cx="40" cy="40" r="3" fill="#FFD9C2" />
`,
      }}
    />
  );
}
