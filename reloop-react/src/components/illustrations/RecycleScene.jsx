export default function RecycleScene({ className = '' }) {
  return (
    <>
      <svg viewBox="0 0 480 480" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="rs2-bin" cx="35%" cy="20%">
            <stop offset="0%" stopColor="#A0F2BD"/>
            <stop offset="55%" stopColor="#52E08D"/>
            <stop offset="100%" stopColor="#1F9956"/>
          </radialGradient>
          <radialGradient id="rs2-bin-lid" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#9CF5BF"/>
            <stop offset="100%" stopColor="#2BB36A"/>
          </radialGradient>
          <radialGradient id="rs2-bottle" cx="40%" cy="20%">
            <stop offset="0%" stopColor="#FFFFFF"/>
            <stop offset="40%" stopColor="#DEEEFB"/>
            <stop offset="100%" stopColor="#5C9DC4"/>
          </radialGradient>
          <radialGradient id="rs2-can" cx="40%" cy="25%">
            <stop offset="0%" stopColor="#FFEFC8"/>
            <stop offset="100%" stopColor="#C99820"/>
          </radialGradient>
          <radialGradient id="rs2-leaf" cx="30%" cy="25%">
            <stop offset="0%" stopColor="#B8F5CC"/>
            <stop offset="100%" stopColor="#2BB36A"/>
          </radialGradient>
          <radialGradient id="rs2-sun" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FFE9B3" stopOpacity="0.85"/>
            <stop offset="60%" stopColor="#FFE9B3" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#FFE9B3" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="rs2-coin" cx="35%" cy="25%">
            <stop offset="0%" stopColor="#FFEFC8"/>
            <stop offset="55%" stopColor="#E8B340"/>
            <stop offset="100%" stopColor="#8B6D14"/>
          </radialGradient>
          <linearGradient id="rs2-ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#BFE8CE"/>
            <stop offset="100%" stopColor="#7FCFA0"/>
          </linearGradient>
        </defs>
      
        {/* Sun glow backdrop */}
        <circle cx="370" cy="100" r="140" fill="url(#rs2-sun)"/>
      
        {/* Ground curve */}
        <path d="M0 400 Q240 365 480 405 L480 480 L0 480 Z" fill="url(#rs2-ground)"/>
        {/* Grass tufts */}
        <g stroke="#1F9956" strokeWidth="2" strokeLinecap="round" opacity="0.5">
          <path d="M40 405 L44 395 M48 408 L48 396 M52 405 L56 395"/>
          <path d="M120 410 L124 398 M128 413 L128 400 M132 410 L136 398"/>
          <path d="M340 415 L344 402 M348 418 L348 404 M352 415 L356 402"/>
          <path d="M420 410 L424 398 M428 413 L428 400 M432 410 L436 398"/>
        </g>
      
        {/* Shadow under bin */}
        <ellipse cx="240" cy="430" rx="155" ry="14" fill="#0F1F18" opacity="0.20"/>
      
        {/* BIN body — clean trapezoidal shape */}
        <path d="M120 178 Q120 156 144 156 L336 156 Q360 156 360 178 L344 410 Q341 432 318 432 L162 432 Q139 432 136 410 Z"
              fill="url(#rs2-bin)"/>
        {/* Bin highlight stripe */}
        <path d="M138 195 Q138 175 154 175 L172 175 L160 410 Q158 422 148 422 L142 422 Q134 422 133 410 Z"
              fill="white" opacity="0.35"/>
        {/* Bin vertical ribs */}
        <g stroke="#1A8A4C" strokeWidth="2" fill="none" opacity="0.30" strokeLinecap="round">
          <path d="M210 180 L202 420"/>
          <path d="M260 180 L260 420"/>
          <path d="M310 180 L318 420"/>
        </g>
      
        {/* Lid (3-layer for depth) */}
        <ellipse cx="240" cy="160" rx="140" ry="22" fill="#1F9956"/>
        <ellipse cx="240" cy="153" rx="140" ry="22" fill="url(#rs2-bin-lid)"/>
        <ellipse cx="240" cy="146" rx="122" ry="14" fill="#9CF5BF" opacity="0.6"/>
        {/* Lid handle slot */}
        <ellipse cx="240" cy="148" rx="36" ry="4" fill="#0F3D26" opacity="0.25"/>
      
        {/* Big recycle symbol on bin (cleaner triangle arrows) */}
        <g transform="translate(240,295)">
          {/* 3 arrows in triangle pattern */}
          <g fill="white" opacity="0.95">
            {/* Arrow 1 */}
            <path d="M -4 -42 L 30 -22 L 16 -22 Q 16 -8 4 0 L -10 -10 Q 0 -16 0 -22 L -14 -22 Z"/>
            {/* Arrow 2 */}
            <path d="M -4 -42 L 30 -22 L 16 -22 Q 16 -8 4 0 L -10 -10 Q 0 -16 0 -22 L -14 -22 Z" transform="rotate(120)"/>
            {/* Arrow 3 */}
            <path d="M -4 -42 L 30 -22 L 16 -22 Q 16 -8 4 0 L -10 -10 Q 0 -16 0 -22 L -14 -22 Z" transform="rotate(240)"/>
          </g>
        </g>
      
        {/* PET bottle floating left */}
        <g transform="translate(105,150) rotate(-22)">
          <ellipse cx="0" cy="68" rx="22" ry="6" fill="#0F1F18" opacity="0.18"/>
          <path d="M-22 -50 Q-22 -68 -10 -68 L10 -68 Q22 -68 22 -50 L22 60 Q22 70 10 70 L-10 70 Q-22 70 -22 60 Z" fill="url(#rs2-bottle)"/>
          <rect x="-9" y="-86" width="18" height="22" rx="4" fill="#5C9DC4"/>
          <rect x="-9" y="-72" width="18" height="6" rx="1" fill="#86B5D6"/>
          <ellipse cx="-12" cy="-15" rx="4" ry="35" fill="white" opacity="0.6"/>
          {/* Label */}
          <rect x="-22" y="-5" width="44" height="22" fill="#2BB36A"/>
          <rect x="-22" y="-5" width="44" height="3" fill="#1F9956"/>
          <text x="0" y="9" textAnchor="middle" fontSize="10" fontWeight="800" fill="white" fontFamily="Inter" letterSpacing="0.5">PET</text>
        </g>
      
        {/* Aluminum can floating right */}
        <g transform="translate(390,180) rotate(18)">
          <ellipse cx="0" cy="62" rx="18" ry="5" fill="#0F1F18" opacity="0.18"/>
          <rect x="-18" y="-40" width="36" height="92" rx="6" fill="url(#rs2-can)"/>
          <ellipse cx="0" cy="-40" rx="18" ry="4" fill="#FFEFC8"/>
          <ellipse cx="0" cy="-40" rx="14" ry="2.5" fill="#C99820"/>
          {/* Pull tab */}
          <path d="M-3 -42 Q0 -47 3 -42 L3 -38 Q0 -36 -3 -38 Z" fill="#A88040"/>
          <ellipse cx="-7" cy="-10" rx="3" ry="22" fill="white" opacity="0.55"/>
          {/* Label band */}
          <rect x="-18" y="-5" width="36" height="22" fill="#D14B3B"/>
          <rect x="-18" y="-5" width="36" height="3" fill="#A03020"/>
          <text x="0" y="9" textAnchor="middle" fontSize="10" fontWeight="800" fill="white" fontFamily="Inter" letterSpacing="0.5">ECO</text>
        </g>
      
        {/* Cardboard box top-left */}
        <g transform="translate(75,80) rotate(-12)">
          <ellipse cx="32" cy="92" rx="40" ry="6" fill="#0F1F18" opacity="0.18"/>
          {/* Box top face */}
          <path d="M0 30 L32 12 L64 30 L32 48 Z" fill="#FFE9B3"/>
          {/* Left face */}
          <path d="M0 30 L0 76 L32 92 L32 48 Z" fill="#A86A2C"/>
          {/* Right face */}
          <path d="M64 30 L64 76 L32 92 L32 48 Z" fill="#E8B340"/>
          {/* Edges */}
          <line x1="0" y1="30" x2="32" y2="48" stroke="#5A3F1A" strokeWidth="0.8"/>
          <line x1="64" y1="30" x2="32" y2="48" stroke="#5A3F1A" strokeWidth="0.8"/>
          <line x1="32" y1="48" x2="32" y2="92" stroke="#5A3F1A" strokeWidth="0.8"/>
          {/* Tape strip on top */}
          <path d="M0 30 L32 12 L64 30 L32 48 Z" fill="none" stroke="#C99820" strokeWidth="1.5" opacity="0.6"/>
          <line x1="32" y1="12" x2="32" y2="48" stroke="#C99820" strokeWidth="1.5" opacity="0.6"/>
          {/* Label */}
          <rect x="20" y="55" width="24" height="12" fill="white" opacity="0.85" rx="1"/>
          <text x="32" y="64" textAnchor="middle" fontSize="6" fontWeight="700" fill="#A86A2C" fontFamily="Inter">RECYCLE</text>
        </g>
      
        {/* Big leaf bottom-right (more leaf-like) */}
        <g transform="translate(395,355) rotate(20)">
          <path d="M0 0 Q20 -50 60 -25 Q70 10 30 18 Q12 18 0 0 Z" fill="url(#rs2-leaf)"/>
          <path d="M3 -3 Q25 -30 55 -22" stroke="#0F3D26" strokeWidth="1.8" fill="none" opacity="0.55" strokeLinecap="round"/>
          <path d="M12 -8 L20 -22 M22 -10 L30 -24 M32 -12 L40 -22 M42 -10 L48 -20" stroke="#0F3D26" strokeWidth="0.8" fill="none" opacity="0.4"/>
        </g>
        {/* Small leaf */}
        <g transform="translate(80,360) rotate(-32)">
          <path d="M0 0 Q15 -32 40 -10 Q35 18 0 0 Z" fill="url(#rs2-leaf)" opacity="0.85"/>
          <path d="M3 -3 Q18 -18 35 -12" stroke="#0F3D26" strokeWidth="1" fill="none" opacity="0.5"/>
        </g>
      
        {/* Floating coin */}
        <g transform="translate(155,100) rotate(8)">
          <ellipse cx="0" cy="3" rx="22" ry="5" fill="#0F1F18" opacity="0.15"/>
          <circle r="22" fill="#8B6D14"/>
          <circle r="22" fill="url(#rs2-coin)" cx="-2" cy="-2"/>
          <circle r="16" fill="#FFEFC8" opacity="0.7"/>
          <text y="6" textAnchor="middle" fontSize="22" fontWeight="800" fill="#8B6D14" fontFamily="JetBrains Mono">đ</text>
        </g>
      
        {/* Sparkles set */}
        <g>
          {/* Big 4-point star */}
          <g transform="translate(60,180)">
            <path d="M0 -12 L3 -3 L12 0 L3 3 L0 12 L-3 3 L-12 0 L-3 -3 Z" fill="#E8B340"/>
          </g>
          <g transform="translate(425,260)">
            <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="#52E08D"/>
          </g>
          <g transform="translate(170,75)">
            <path d="M0 -8 L1.5 -1.5 L8 0 L1.5 1.5 L0 8 L-1.5 1.5 L-8 0 L-1.5 -1.5 Z" fill="#FFE9B3"/>
          </g>
          <g transform="translate(380,80)">
            <path d="M0 -7 L1 -1 L7 0 L1 1 L0 7 L-1 1 L-7 0 L-1 -1 Z" fill="#FFE9B3"/>
          </g>
          {/* Small dots */}
          <circle cx="50" cy="295" r="3" fill="#FFD9C2"/>
          <circle cx="430" cy="200" r="3" fill="#FFD9C2"/>
          <circle cx="295" cy="65" r="2.5" fill="#52E08D" opacity="0.7"/>
          <circle cx="195" cy="50" r="2" fill="#E8B340" opacity="0.7"/>
        </g>
      </svg>
    </>
  );
}
