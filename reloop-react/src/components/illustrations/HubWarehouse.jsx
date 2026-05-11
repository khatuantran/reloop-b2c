export default function HubWarehouse({ className = '' }) {
  return (
    <>
      <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="hw-bg" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#FFE066" stopOpacity="0.30"/>
            <stop offset="100%" stopColor="#FFE066" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="hw-roof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A07033"/>
            <stop offset="100%" stopColor="#5A3F1A"/>
          </linearGradient>
          <linearGradient id="hw-wall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFEFC8"/>
            <stop offset="100%" stopColor="#E8B340"/>
          </linearGradient>
          <linearGradient id="hw-door" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0F6635"/>
            <stop offset="100%" stopColor="#0F3D26"/>
          </linearGradient>
          <linearGradient id="hw-box-top" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE9B3"/>
            <stop offset="100%" stopColor="#E8B340"/>
          </linearGradient>
          <linearGradient id="hw-box-front" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8B340"/>
            <stop offset="100%" stopColor="#A07033"/>
          </linearGradient>
          <linearGradient id="hw-scale" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9CF5BF"/>
            <stop offset="100%" stopColor="#2BB36A"/>
          </linearGradient>
        </defs>
      
        <circle cx="200" cy="190" r="180" fill="url(#hw-bg)"/>
      
        {/* Sun */}
        <g transform="translate(330,75)">
          <g stroke="#FFD960" strokeWidth="2.5" strokeLinecap="round" opacity="0.65">
            <line x1="0" y1="-32" x2="0" y2="-24"/>
            <line x1="0" y1="32" x2="0" y2="24"/>
            <line x1="-32" y1="0" x2="-24" y2="0"/>
            <line x1="32" y1="0" x2="24" y2="0"/>
            <line x1="-22" y1="-22" x2="-17" y2="-17"/>
            <line x1="22" y1="22" x2="17" y2="17"/>
            <line x1="-22" y1="22" x2="-17" y2="17"/>
            <line x1="22" y1="-22" x2="17" y2="-17"/>
          </g>
          <circle r="20" fill="#FFD960"/>
          <circle r="14" fill="#FFE066"/>
        </g>
      
        {/* Cloud */}
        <g transform="translate(80,80)" fill="white" opacity="0.85">
          <ellipse cx="0" cy="0" rx="26" ry="11"/>
          <ellipse cx="-18" cy="4" rx="15" ry="9"/>
          <ellipse cx="18" cy="4" rx="16" ry="10"/>
        </g>
      
        {/* Ground */}
        <path d="M0 305 L400 295 L400 400 L0 400 Z" fill="#9CB87A" opacity="0.6"/>
        <path d="M0 320 L400 312 L400 400 L0 400 Z" fill="#88AA77" opacity="0.6"/>
      
        {/* Warehouse building */}
        <g>
          {/* shadow */}
          <ellipse cx="220" cy="318" rx="155" ry="9" fill="#0F1F18" opacity="0.22"/>
          {/* back wall */}
          <rect x="100" y="160" width="240" height="155" fill="url(#hw-wall)"/>
          {/* roof */}
          <path d="M85 165 L220 105 L355 165 L340 175 L220 120 L100 175 Z" fill="url(#hw-roof)"/>
          {/* roof front face */}
          <path d="M100 175 L220 120 L340 175 L340 168 L220 113 L100 168 Z" fill="#3F2A0F" opacity="0.5"/>
          {/* chimney */}
          <rect x="280" y="110" width="14" height="28" fill="#5A3F1A"/>
          <rect x="278" y="106" width="18" height="6" fill="#3F2A0F"/>
      
          {/* horizontal stripes */}
          <g stroke="#A07033" strokeWidth="1" opacity="0.4">
            <line x1="100" y1="200" x2="340" y2="200"/>
            <line x1="100" y1="240" x2="340" y2="240"/>
            <line x1="100" y1="280" x2="340" y2="280"/>
          </g>
      
          {/* big garage door */}
          <rect x="135" y="200" width="100" height="115" rx="6" fill="url(#hw-door)"/>
          <g stroke="#9CF5BF" strokeWidth="1" opacity="0.45">
            <line x1="135" y1="225" x2="235" y2="225"/>
            <line x1="135" y1="250" x2="235" y2="250"/>
            <line x1="135" y1="275" x2="235" y2="275"/>
            <line x1="135" y1="300" x2="235" y2="300"/>
          </g>
          <text x="185" y="265" textAnchor="middle" fontSize="34" fill="#9CF5BF" fontWeight="800">♻</text>
      
          {/* side window */}
          <rect x="270" y="210" width="50" height="40" rx="4" fill="#C8FAD9" stroke="#5A3F1A" strokeWidth="2"/>
          <line x1="295" y1="210" x2="295" y2="250" stroke="#5A3F1A" strokeWidth="1.5"/>
          <line x1="270" y1="230" x2="320" y2="230" stroke="#5A3F1A" strokeWidth="1.5"/>
      
          {/* HUB sign */}
          <g transform="translate(220,148)">
            <rect x="-46" y="-15" width="92" height="30" rx="6" fill="#0F3D26" stroke="#9CF5BF" strokeWidth="1.5"/>
            <text y="5" textAnchor="middle" fontSize="14" fontWeight="800" fill="#9CF5BF" fontFamily="Inter" letterSpacing="2">HUB Q.7</text>
          </g>
        </g>
      
        {/* Stack of boxes in front */}
        <g>
          {/* shadow */}
          <ellipse cx="80" cy="328" rx="48" ry="6" fill="#0F1F18" opacity="0.22"/>
      
          {/* box bottom */}
          <g>
            <path d="M40 290 L80 275 L120 290 L80 305 Z" fill="url(#hw-box-top)"/>
            <path d="M40 290 L40 322 L80 337 L80 305 Z" fill="url(#hw-box-front)"/>
            <path d="M120 290 L120 322 L80 337 L80 305 Z" fill="#5A3F1A"/>
            <line x1="60" y1="297" x2="60" y2="330" stroke="#FFD960" strokeWidth="2.5" opacity="0.85"/>
          </g>
          {/* box top */}
          <g transform="translate(0,-30)">
            <path d="M50 290 L80 278 L110 290 L80 302 Z" fill="url(#hw-box-top)"/>
            <path d="M50 290 L50 312 L80 324 L80 302 Z" fill="url(#hw-box-front)"/>
            <path d="M110 290 L110 312 L80 324 L80 302 Z" fill="#5A3F1A"/>
            <rect x="64" y="293" width="32" height="10" fill="white" opacity="0.85"/>
            <text x="80" y="300" textAnchor="middle" fontSize="6" fontWeight="800" fill="#5A3F1A" fontFamily="JetBrains Mono">RECYCLE</text>
          </g>
        </g>
      
        {/* Industrial scale on right */}
        <g transform="translate(320,290)">
          <ellipse cx="0" cy="38" rx="36" ry="5" fill="#0F1F18" opacity="0.22"/>
          {/* platform */}
          <rect x="-32" y="14" width="64" height="20" rx="3" fill="url(#hw-scale)"/>
          <rect x="-32" y="14" width="64" height="5" rx="2" fill="#9CF5BF" opacity="0.6"/>
          {/* column */}
          <rect x="-5" y="-22" width="10" height="36" fill="#525C5A"/>
          {/* display */}
          <rect x="-26" y="-50" width="52" height="32" rx="6" fill="#0F3D26" stroke="#2BB36A" strokeWidth="1.5"/>
          <text y="-30" textAnchor="middle" fontSize="11" fontWeight="800" fill="#9CF5BF" fontFamily="JetBrains Mono">2.4kg</text>
          {/* bracket */}
          <rect x="-18" y="-18" width="36" height="6" fill="#3A4140"/>
        </g>
      
        {/* Floating "BOM thực" badge */}
        <g transform="translate(85,165)">
          <rect x="-42" y="-15" width="84" height="30" rx="15" fill="#0F1F18" opacity="0.18" transform="translate(0,3)"/>
          <rect x="-42" y="-15" width="84" height="30" rx="15" fill="white" stroke="#7A5410" strokeWidth="2"/>
          <text y="5" textAnchor="middle" fontSize="11" fontWeight="800" fill="#7A5410" fontFamily="Inter">BOM thực</text>
        </g>
      
        {/* Floating timer chip */}
        <g transform="translate(310,360)">
          <rect x="-44" y="-15" width="88" height="30" rx="15" fill="#0F1F18" opacity="0.18" transform="translate(0,3)"/>
          <rect x="-44" y="-15" width="88" height="30" rx="15" fill="#FFE066" stroke="#7A5410" strokeWidth="2"/>
          <text y="5" textAnchor="middle" fontSize="11" fontWeight="800" fill="#7A5410" fontFamily="Inter">⏳ 8 giờ</text>
        </g>
      
        {/* Sparkle stars */}
        <g>
          <g transform="translate(165,90)">
            <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="#FFE9B3"/>
          </g>
          <g transform="translate(265,80)">
            <path d="M0 -8 L1.5 -1.5 L8 0 L1.5 1.5 L0 8 L-1.5 1.5 L-8 0 L-1.5 -1.5 Z" fill="#7AEFA8"/>
          </g>
        </g>
      </svg>
    </>
  );
}
