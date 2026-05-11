export default function MilestoneCelebration({ className = '' }) {
  return (
    <>
      <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="mc-bg" cx="50%" cy="45%">
            <stop offset="0%" stopColor="#7AEFA8" stopOpacity="0.40"/>
            <stop offset="100%" stopColor="#7AEFA8" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="mc-disc" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#9CF5BF"/>
            <stop offset="55%" stopColor="#2BB36A"/>
            <stop offset="100%" stopColor="#0F6635"/>
          </radialGradient>
          <radialGradient id="mc-disc-inner" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#2BB36A"/>
            <stop offset="100%" stopColor="#0F3D26"/>
          </radialGradient>
        </defs>
      
        <circle cx="200" cy="200" r="180" fill="url(#mc-bg)"/>
      
        {/* Confetti & sparkles spread around */}
        <g>
          <rect x="60" y="60" width="8" height="3" rx="1" fill="#FFD960" transform="rotate(25 64 61.5)"/>
          <rect x="320" y="50" width="8" height="3" rx="1" fill="#52E08D" transform="rotate(-30 324 51.5)"/>
          <rect x="350" y="140" width="9" height="3" rx="1" fill="#FFB8A8" transform="rotate(45 354.5 141.5)"/>
          <rect x="40" y="160" width="9" height="3" rx="1" fill="#7AEFA8" transform="rotate(-15 44.5 161.5)"/>
          <rect x="65" y="320" width="9" height="3" rx="1" fill="#FFE066" transform="rotate(60 69.5 321.5)"/>
          <rect x="335" y="320" width="9" height="3" rx="1" fill="#52E08D" transform="rotate(-40 339.5 321.5)"/>
          <circle cx="100" cy="100" r="3" fill="#FFD960"/>
          <circle cx="310" cy="100" r="3" fill="#52E08D"/>
          <circle cx="60" cy="240" r="2.5" fill="#FFB8A8"/>
          <circle cx="345" cy="220" r="2.5" fill="#7AEFA8"/>
        </g>
      
        {/* Sparkle stars */}
        <g>
          <g transform="translate(85,150)">
            <path d="M0 -14 L3 -3 L14 0 L3 3 L0 14 L-3 3 L-14 0 L-3 -3 Z" fill="#FFE9B3"/>
          </g>
          <g transform="translate(330,170)">
            <path d="M0 -12 L2.5 -2.5 L12 0 L2.5 2.5 L0 12 L-2.5 2.5 L-12 0 L-2.5 -2.5 Z" fill="#7AEFA8"/>
          </g>
          <g transform="translate(120,300)">
            <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="#FFD960"/>
          </g>
          <g transform="translate(290,310)">
            <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="#FFB8A8"/>
          </g>
        </g>
      
        {/* Burst rays behind disc */}
        <g stroke="#52E08D" strokeWidth="3" strokeLinecap="round" opacity="0.40">
          <line x1="200" y1="60" x2="200" y2="80"/>
          <line x1="200" y1="320" x2="200" y2="340"/>
          <line x1="60" y1="200" x2="80" y2="200"/>
          <line x1="320" y1="200" x2="340" y2="200"/>
          <line x1="100" y1="100" x2="115" y2="115"/>
          <line x1="285" y1="285" x2="300" y2="300"/>
          <line x1="100" y1="300" x2="115" y2="285"/>
          <line x1="285" y1="115" x2="300" y2="100"/>
        </g>
      
        {/* Big check disc */}
        <g transform="translate(200,200)">
          {/* shadow */}
          <circle r="100" fill="#0F1F18" opacity="0.22" cy="10"/>
          {/* outer disc */}
          <circle r="100" fill="url(#mc-disc)"/>
          {/* edge highlight */}
          <circle r="100" fill="none" stroke="#9CF5BF" strokeWidth="2.5" opacity="0.55"/>
          {/* inner ring notches */}
          <g stroke="#9CF5BF" strokeWidth="2" opacity="0.55">
            <line x1="0" y1="-92" x2="0" y2="-82"/>
            <line x1="65" y1="-65" x2="58" y2="-58"/>
            <line x1="92" y1="0" x2="82" y2="0"/>
            <line x1="65" y1="65" x2="58" y2="58"/>
            <line x1="0" y1="92" x2="0" y2="82"/>
            <line x1="-65" y1="65" x2="-58" y2="58"/>
            <line x1="-92" y1="0" x2="-82" y2="0"/>
            <line x1="-65" y1="-65" x2="-58" y2="-58"/>
          </g>
          {/* inner darker disc */}
          <circle r="78" fill="url(#mc-disc-inner)"/>
          {/* check mark */}
          <path d="M-28 4 L-8 24 L30 -18" stroke="white" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          {/* shine arc */}
          <path d="M-58 -42 Q-30 -72 14 -68" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.45"/>
          {/* gloss highlight */}
          <ellipse cx="-26" cy="-50" rx="42" ry="20" fill="white" opacity="0.20" transform="rotate(-25 -26 -50)"/>
          <ellipse cx="-34" cy="-62" rx="20" ry="6" fill="white" opacity="0.40" transform="rotate(-25 -34 -62)"/>
        </g>
      
        {/* Floating coin top-right */}
        <g transform="translate(330,90)">
          <ellipse cx="0" cy="3" rx="20" ry="5" fill="#0F1F18" opacity="0.18"/>
          <circle r="20" fill="#8B6D14"/>
          <circle r="20" fill="#E8B340" cx="-2" cy="-2"/>
          <circle r="14" fill="#FFEFC8" opacity="0.7"/>
          <text y="6" textAnchor="middle" fontSize="20" fontWeight="800" fill="#8B6D14" fontFamily="JetBrains Mono">đ</text>
        </g>
      
        {/* Floating leaf bottom-left */}
        <g transform="translate(80,280) rotate(-25)">
          <path d="M0 0 Q18 -25 36 -6 Q30 24 0 0 Z" fill="#52E08D" opacity="0.85"/>
          <path d="M3 -3 Q18 -16 32 -10" stroke="#0F3D26" strokeWidth="0.8" fill="none" opacity="0.5"/>
        </g>
      
        {/* "+125 GP" badge */}
        <g transform="translate(80,90)">
          <rect x="-38" y="-16" width="76" height="32" rx="16" fill="#0F1F18" opacity="0.18" transform="translate(0,3)"/>
          <rect x="-38" y="-16" width="76" height="32" rx="16" fill="white" stroke="#2BB36A" strokeWidth="2"/>
          <text y="6" textAnchor="middle" fontSize="14" fontWeight="800" fill="#2BB36A" fontFamily="Inter">+125 GP</text>
        </g>
      
        {/* "HOÀN TẤT" badge below */}
        <g transform="translate(200,355)">
          <rect x="-58" y="-14" width="116" height="28" rx="14" fill="#0F1F18" opacity="0.20" transform="translate(0,3)"/>
          <rect x="-58" y="-14" width="116" height="28" rx="14" fill="#0F3D26"/>
          <text y="5" textAnchor="middle" fontSize="11" fontWeight="800" fill="#9CF5BF" fontFamily="Inter" letterSpacing="2">HOÀN TẤT</text>
        </g>
      </svg>
    </>
  );
}
