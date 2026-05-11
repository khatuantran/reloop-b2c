export default function PackageScene({ className = '' }) {
  return (
    <>
      <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="pk-bg" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#52E08D" stopOpacity="0.30"/>
            <stop offset="100%" stopColor="#52E08D" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="pk-top" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE9B3"/>
            <stop offset="100%" stopColor="#E8B340"/>
          </linearGradient>
          <linearGradient id="pk-front" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8B340"/>
            <stop offset="100%" stopColor="#A07033"/>
          </linearGradient>
          <linearGradient id="pk-side" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A07033"/>
            <stop offset="100%" stopColor="#5A3F1A"/>
          </linearGradient>
          <linearGradient id="pk-tape" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFD960"/>
            <stop offset="100%" stopColor="#E68A3F"/>
          </linearGradient>
          <radialGradient id="pk-leaf" cx="30%" cy="25%">
            <stop offset="0%" stopColor="#C8FAD9"/>
            <stop offset="60%" stopColor="#7AEFA8"/>
            <stop offset="100%" stopColor="#1F9956"/>
          </radialGradient>
        </defs>
      
        <circle cx="200" cy="200" r="180" fill="url(#pk-bg)"/>
      
        {/* Sparkle dots */}
        <g>
          <circle cx="50" cy="80" r="2.5" fill="#7AEFA8" opacity="0.7"/>
          <circle cx="350" cy="70" r="3" fill="#FFE9B3" opacity="0.7"/>
          <circle cx="40" cy="320" r="2.5" fill="#52E08D" opacity="0.7"/>
          <circle cx="370" cy="310" r="2.5" fill="#FFD960" opacity="0.7"/>
        </g>
      
        {/* Ground shadow */}
        <ellipse cx="200" cy="335" rx="130" ry="14" fill="#0F1F18" opacity="0.20"/>
      
        {/* Big package (isometric) */}
        <g>
          {/* top face */}
          <path d="M120 165 L200 130 L300 165 L220 200 Z" fill="url(#pk-top)"/>
          {/* front face */}
          <path d="M120 165 L120 270 L220 305 L220 200 Z" fill="url(#pk-front)"/>
          {/* side face */}
          <path d="M300 165 L300 270 L220 305 L220 200 Z" fill="url(#pk-side)"/>
          {/* edges */}
          <path d="M120 165 L200 130 L300 165 L220 200 Z M120 165 L120 270 L220 305 L220 200 Z M300 165 L300 270 L220 305" stroke="#5A3F1A" strokeWidth="1.5" fill="none" opacity="0.6"/>
          {/* vertical seam */}
          <line x1="220" y1="200" x2="220" y2="305" stroke="#5A3F1A" strokeWidth="1.2" opacity="0.5"/>
          {/* top tape */}
          <path d="M155 148 L235 113 L255 122 L175 158 Z" fill="url(#pk-tape)" opacity="0.92"/>
          {/* front tape vertical */}
          <path d="M165 175 L175 178 L175 285 L165 282 Z" fill="url(#pk-tape)" opacity="0.92"/>
          {/* "RE-LOOP" label */}
          <g transform="translate(170,235)">
            <rect x="-22" y="-12" width="44" height="24" rx="4" fill="white" opacity="0.95" stroke="#5A3F1A" strokeWidth="0.8"/>
            <text y="4" textAnchor="middle" fontSize="9" fontWeight="800" fill="#0F3D26" fontFamily="JetBrains Mono" letterSpacing="0.5">RE-LOOP</text>
          </g>
          {/* recycle stamp on side */}
          <g transform="translate(265,235)" opacity="0.85">
            <circle r="14" fill="none" stroke="#FFE9B3" strokeWidth="1.5"/>
            <text y="5" textAnchor="middle" fontSize="20" fill="#FFE9B3">♻</text>
          </g>
        </g>
      
        {/* Smaller box on top-left floating */}
        <g transform="translate(85,210)">
          <ellipse cx="0" cy="38" rx="34" ry="5" fill="#0F1F18" opacity="0.18"/>
          <path d="M-30 -5 L0 -18 L34 -5 L4 8 Z" fill="url(#pk-top)"/>
          <path d="M-30 -5 L-30 30 L4 43 L4 8 Z" fill="url(#pk-front)"/>
          <path d="M34 -5 L34 30 L4 43 L4 8 Z" fill="url(#pk-side)"/>
          <line x1="-12" y1="2" x2="-12" y2="35" stroke="#FFD960" strokeWidth="3" opacity="0.85"/>
        </g>
      
        {/* Floating leaf top-right */}
        <g transform="translate(310,110) rotate(25)">
          <path d="M0 0 Q22 -32 44 -8 Q35 28 0 0 Z" fill="url(#pk-leaf)"/>
          <path d="M5 -3 Q22 -18 38 -10" stroke="#0F3D26" strokeWidth="1.2" fill="none" opacity="0.55"/>
        </g>
      
        {/* Floating leaf bottom-left */}
        <g transform="translate(95,135) rotate(-30)">
          <path d="M0 0 Q15 -22 30 -5 Q25 22 0 0 Z" fill="#52E08D" opacity="0.85"/>
          <path d="M3 -3 Q15 -13 26 -8" stroke="#0F3D26" strokeWidth="0.8" fill="none" opacity="0.5"/>
        </g>
      
        {/* Status badge floating */}
        <g transform="translate(330,255)">
          <rect x="-38" y="-14" width="76" height="28" rx="14" fill="#0F1F18" opacity="0.18" transform="translate(0,3)"/>
          <rect x="-38" y="-14" width="76" height="28" rx="14" fill="white" stroke="#2BB36A" strokeWidth="2"/>
          <circle cx="-26" cy="0" r="4" fill="#2BB36A"/>
          <text x="3" y="4" textAnchor="middle" fontSize="11" fontWeight="800" fill="#2BB36A" fontFamily="Inter">SẴN SÀNG</text>
        </g>
      
        {/* Sparkle stars */}
        <g>
          <g transform="translate(75,115)">
            <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="#FFE9B3"/>
          </g>
          <g transform="translate(345,180)">
            <path d="M0 -8 L1.5 -1.5 L8 0 L1.5 1.5 L0 8 L-1.5 1.5 L-8 0 L-1.5 -1.5 Z" fill="#52E08D"/>
          </g>
        </g>
      </svg>
    </>
  );
}
