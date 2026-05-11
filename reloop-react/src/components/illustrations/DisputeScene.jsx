export default function DisputeScene({ className = '' }) {
  return (
    <>
      <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="ds-bg" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#FFE066" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="#FFE066" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="ds-scale-arm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A07033"/>
            <stop offset="100%" stopColor="#5A3F1A"/>
          </linearGradient>
          <linearGradient id="ds-pan-left" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE9B3"/>
            <stop offset="100%" stopColor="#E8B340"/>
          </linearGradient>
          <linearGradient id="ds-pan-right" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C8FAD9"/>
            <stop offset="100%" stopColor="#2BB36A"/>
          </linearGradient>
          <radialGradient id="ds-doc" cx="30%" cy="20%">
            <stop offset="0%" stopColor="white"/>
            <stop offset="100%" stopColor="#E5EDDD"/>
          </radialGradient>
        </defs>
      
        <circle cx="200" cy="200" r="180" fill="url(#ds-bg)"/>
      
        {/* Sparkle dots */}
        <g>
          <circle cx="60" cy="80" r="2.5" fill="#FFB8A8" opacity="0.7"/>
          <circle cx="340" cy="70" r="3" fill="#7AEFA8" opacity="0.7"/>
          <circle cx="50" cy="320" r="2.5" fill="#FFD960" opacity="0.7"/>
          <circle cx="350" cy="320" r="2.5" fill="#FFE9B3" opacity="0.7"/>
        </g>
      
        {/* Ground shadow */}
        <ellipse cx="200" cy="345" rx="120" ry="11" fill="#0F1F18" opacity="0.20"/>
      
        {/* Scale base */}
        <g>
          <rect x="180" y="305" width="40" height="38" rx="4" fill="#5A3F1A"/>
          <rect x="160" y="338" width="80" height="10" rx="3" fill="#3F2A0F"/>
        </g>
      
        {/* Vertical arm */}
        <rect x="195" y="130" width="10" height="180" fill="url(#ds-scale-arm)"/>
      
        {/* Top knob */}
        <circle cx="200" cy="128" r="8" fill="#A07033"/>
        <circle cx="200" cy="128" r="5" fill="#FFD960"/>
      
        {/* Crossbar */}
        <rect x="80" y="142" width="240" height="6" rx="3" fill="url(#ds-scale-arm)"/>
        <circle cx="80" cy="145" r="6" fill="#5A3F1A"/>
        <circle cx="320" cy="145" r="6" fill="#5A3F1A"/>
      
        {/* Left chain */}
        <g stroke="#5A3F1A" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7">
          <line x1="80" y1="148" x2="100" y2="200"/>
        </g>
      
        {/* Right chain */}
        <g stroke="#5A3F1A" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7">
          <line x1="320" y1="148" x2="300" y2="200"/>
        </g>
      
        {/* Left pan (BOM Library / kỳ vọng) */}
        <g>
          <ellipse cx="100" cy="200" rx="50" ry="6" fill="#0F1F18" opacity="0.18" transform="translate(0,42)"/>
          <path d="M55 200 Q100 230 145 200 L142 215 Q100 240 58 215 Z" fill="url(#ds-pan-left)"/>
          <ellipse cx="100" cy="200" rx="45" ry="9" fill="#FFEFC8"/>
          <ellipse cx="100" cy="200" rx="45" ry="9" fill="none" stroke="#A07033" strokeWidth="1.5"/>
          {/* Document on left pan */}
          <g transform="translate(100,182)">
            <rect x="-18" y="-22" width="36" height="42" rx="3" fill="url(#ds-doc)" stroke="#5A3F1A" strokeWidth="1"/>
            <line x1="-12" y1="-14" x2="12" y2="-14" stroke="#5A3F1A" strokeWidth="1" opacity="0.5"/>
            <line x1="-12" y1="-8" x2="12" y2="-8" stroke="#5A3F1A" strokeWidth="1" opacity="0.5"/>
            <line x1="-12" y1="-2" x2="8" y2="-2" stroke="#5A3F1A" strokeWidth="1" opacity="0.5"/>
            <line x1="-12" y1="4" x2="12" y2="4" stroke="#5A3F1A" strokeWidth="1" opacity="0.5"/>
            <line x1="-12" y1="10" x2="6" y2="10" stroke="#5A3F1A" strokeWidth="1" opacity="0.5"/>
            <text y="-22" x="0" textAnchor="middle" fontSize="6" fill="#5A3F1A" fontWeight="800" fontFamily="JetBrains Mono">BOM LIB</text>
          </g>
          <text x="100" y="265" textAnchor="middle" fontSize="9" fontWeight="800" fill="#7A5410" fontFamily="JetBrains Mono">KỲ VỌNG</text>
        </g>
      
        {/* Right pan (BOM thực) */}
        <g>
          <ellipse cx="300" cy="200" rx="50" ry="6" fill="#0F1F18" opacity="0.18" transform="translate(0,42)"/>
          <path d="M255 200 Q300 230 345 200 L342 215 Q300 240 258 215 Z" fill="url(#ds-pan-right)"/>
          <ellipse cx="300" cy="200" rx="45" ry="9" fill="#9CF5BF"/>
          <ellipse cx="300" cy="200" rx="45" ry="9" fill="none" stroke="#0F6635" strokeWidth="1.5"/>
          {/* Document on right pan */}
          <g transform="translate(300,182)">
            <rect x="-18" y="-22" width="36" height="42" rx="3" fill="url(#ds-doc)" stroke="#0F6635" strokeWidth="1"/>
            <line x1="-12" y1="-14" x2="12" y2="-14" stroke="#0F6635" strokeWidth="1" opacity="0.5"/>
            <line x1="-12" y1="-8" x2="12" y2="-8" stroke="#0F6635" strokeWidth="1" opacity="0.5"/>
            <line x1="-12" y1="-2" x2="8" y2="-2" stroke="#0F6635" strokeWidth="1" opacity="0.5"/>
            <line x1="-12" y1="4" x2="12" y2="4" stroke="#0F6635" strokeWidth="1" opacity="0.5"/>
            <text y="-22" x="0" textAnchor="middle" fontSize="6" fill="#0F6635" fontWeight="800" fontFamily="JetBrains Mono">BOM THỰC</text>
          </g>
          <text x="300" y="265" textAnchor="middle" fontSize="9" fontWeight="800" fill="#0F6635" fontFamily="JetBrains Mono">HUB VERIFY</text>
        </g>
      
        {/* Gavel above scale */}
        <g transform="translate(200,80) rotate(-15)">
          <ellipse cx="0" cy="22" rx="22" ry="3" fill="#0F1F18" opacity="0.15"/>
          <rect x="-30" y="-14" width="60" height="22" rx="4" fill="#A07033"/>
          <rect x="-30" y="-14" width="60" height="6" rx="3" fill="#5A3F1A"/>
          <rect x="-2" y="8" width="4" height="14" fill="#5A3F1A"/>
          <text x="0" y="3" textAnchor="middle" fontSize="11" fontWeight="800" fill="#FFE066" fontFamily="Inter">⚖️</text>
        </g>
      
        {/* "DISPUTE" badge */}
        <g transform="translate(200,360)">
          <rect x="-54" y="-14" width="108" height="28" rx="14" fill="#0F1F18" opacity="0.20" transform="translate(0,3)"/>
          <rect x="-54" y="-14" width="108" height="28" rx="14" fill="white" stroke="#7A5410" strokeWidth="2"/>
          <text y="5" textAnchor="middle" fontSize="11" fontWeight="800" fill="#7A5410" fontFamily="Inter" letterSpacing="2">TRANH CHẤP</text>
        </g>
      
        {/* Question marks floating */}
        <g>
          <text x="60" y="160" fontSize="32" fontWeight="800" fill="#FFB8A8" opacity="0.6">?</text>
          <text x="335" y="180" fontSize="22" fontWeight="800" fill="#7AEFA8" opacity="0.6">?</text>
        </g>
      </svg>
    </>
  );
}
