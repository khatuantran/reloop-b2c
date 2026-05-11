export default function TierCScene({ className = '' }) {
  return (
    <>
      <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="tc-bg" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#FFD9C2"/>
            <stop offset="100%" stopColor="#F2A672"/>
          </radialGradient>
          <linearGradient id="tc-pcb" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1F9956"/>
            <stop offset="50%" stopColor="#0F6635"/>
            <stop offset="100%" stopColor="#083820"/>
          </linearGradient>
          <linearGradient id="tc-motor" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#41524A"/>
            <stop offset="50%" stopColor="#7C8A82"/>
            <stop offset="100%" stopColor="#41524A"/>
          </linearGradient>
          <radialGradient id="tc-copper" cx="35%" cy="20%">
            <stop offset="0%" stopColor="#FFB870"/>
            <stop offset="100%" stopColor="#A65820"/>
          </radialGradient>
        </defs>
        {/* Background */}
        <rect width="400" height="300" fill="url(#tc-bg)"/>
        <ellipse cx="200" cy="285" rx="180" ry="15" fill="#0F1F18" opacity="0.18"/>
      
        {/* PCB / Motherboard center */}
        <g transform="translate(200,160)">
          <ellipse cx="0" cy="105" rx="130" ry="10" fill="#0F1F18" opacity="0.20"/>
          {/* PCB base */}
          <path d="M-130 -70 L130 -70 L130 100 L-130 100 Z" fill="url(#tc-pcb)"/>
          {/* Drill holes corners */}
          <circle cx="-120" cy="-60" r="4" fill="#0F1F18"/>
          <circle cx="120" cy="-60" r="4" fill="#0F1F18"/>
          <circle cx="-120" cy="90" r="4" fill="#0F1F18"/>
          <circle cx="120" cy="90" r="4" fill="#0F1F18"/>
          {/* Traces */}
          <g stroke="#52E08D" strokeWidth="1.2" fill="none" opacity="0.7">
            <path d="M-100 -40 L-50 -40 L-50 0 L20 0 L20 40 L80 40"/>
            <path d="M-90 20 L40 20 L40 60 L100 60"/>
            <path d="M-100 60 L-30 60 L-30 80"/>
            <path d="M70 -40 L70 -10 L100 -10"/>
            <path d="M-110 -10 L-80 -10"/>
            <path d="M50 80 L110 80"/>
          </g>
          {/* Solder pads */}
          <g fill="#FFB870">
            <circle cx="-100" cy="-40" r="2.5"/>
            <circle cx="-50" cy="-40" r="2.5"/>
            <circle cx="-50" cy="0" r="2.5"/>
            <circle cx="20" cy="0" r="2.5"/>
            <circle cx="20" cy="40" r="2.5"/>
            <circle cx="80" cy="40" r="2.5"/>
            <circle cx="40" cy="20" r="2.5"/>
            <circle cx="100" cy="60" r="2.5"/>
            <circle cx="-30" cy="60" r="2.5"/>
            <circle cx="-30" cy="80" r="2.5"/>
            <circle cx="70" cy="-10" r="2.5"/>
            <circle cx="100" cy="-10" r="2.5"/>
          </g>
          {/* CPU chip black */}
          <rect x="-40" y="-50" width="56" height="56" rx="3" fill="#0F1F18"/>
          <rect x="-36" y="-46" width="48" height="48" rx="2" fill="#1F2A28"/>
          <rect x="-30" y="-40" width="36" height="36" rx="1" fill="#0F1F18" stroke="#7C8A82" strokeWidth="0.5"/>
          <text x="-12" y="-19" textAnchor="middle" fontSize="8" fontWeight="700" fill="#52E08D" fontFamily="JetBrains Mono">CPU</text>
          {/* CPU pins around */}
          <g fill="#C99820">
            <rect x="-44" y="-42" width="2" height="2"/>
            <rect x="-44" y="-36" width="2" height="2"/>
            <rect x="-44" y="-30" width="2" height="2"/>
            <rect x="-44" y="-24" width="2" height="2"/>
            <rect x="-44" y="-18" width="2" height="2"/>
            <rect x="-44" y="-12" width="2" height="2"/>
            <rect x="-44" y="-6" width="2" height="2"/>
            <rect x="14" y="-42" width="2" height="2"/>
            <rect x="14" y="-36" width="2" height="2"/>
            <rect x="14" y="-30" width="2" height="2"/>
            <rect x="14" y="-24" width="2" height="2"/>
            <rect x="14" y="-18" width="2" height="2"/>
            <rect x="14" y="-12" width="2" height="2"/>
            <rect x="14" y="-6" width="2" height="2"/>
          </g>
          {/* RAM slots */}
          <rect x="40" y="-50" width="80" height="6" rx="1" fill="#1F2A28"/>
          <rect x="40" y="-40" width="80" height="6" rx="1" fill="#1F2A28"/>
          {/* Capacitors */}
          <g>
            <circle cx="-100" cy="60" r="9" fill="#1F2A28"/>
            <circle cx="-100" cy="60" r="6" fill="#41524A"/>
            <line x1="-103" y1="57" x2="-97" y2="63" stroke="#7C8A82" strokeWidth="0.8"/>
          </g>
          <g>
            <circle cx="-75" cy="60" r="7" fill="#1F2A28"/>
            <circle cx="-75" cy="60" r="4.5" fill="#41524A"/>
          </g>
          <g>
            <circle cx="60" cy="80" r="9" fill="#1F2A28"/>
            <circle cx="60" cy="80" r="6" fill="#41524A"/>
            <line x1="57" y1="77" x2="63" y2="83" stroke="#7C8A82" strokeWidth="0.8"/>
          </g>
          {/* Resistors */}
          <g>
            <rect x="-95" y="-15" width="14" height="5" rx="1" fill="#FFB870"/>
            <rect x="-92" y="-15" width="2" height="5" fill="#0F1F18"/>
            <rect x="-86" y="-15" width="2" height="5" fill="#D14B3B"/>
          </g>
          <g>
            <rect x="-30" y="40" width="14" height="5" rx="1" fill="#FFB870"/>
            <rect x="-27" y="40" width="2" height="5" fill="#0F1F18"/>
            <rect x="-21" y="40" width="2" height="5" fill="#52E08D"/>
          </g>
          {/* USB port */}
          <rect x="80" y="-30" width="38" height="20" rx="2" fill="#7C8A82"/>
          <rect x="83" y="-26" width="32" height="12" rx="1" fill="#0F1F18"/>
          {/* Highlights */}
          <path d="M-130 -70 L130 -70 L130 -65 L-130 -65 Z" fill="white" opacity="0.15"/>
        </g>
      
        {/* Floating copper wire spool */}
        <g transform="translate(70,90)">
          <ellipse cx="0" cy="42" rx="32" ry="4" fill="#0F1F18" opacity="0.18"/>
          <ellipse cx="0" cy="0" rx="32" ry="32" fill="url(#tc-copper)"/>
          <ellipse cx="0" cy="-3" rx="32" ry="32" fill="#FFB870" opacity="0.4"/>
          <g stroke="#5A3F1A" strokeWidth="0.5" fill="none" opacity="0.6">
            <ellipse cx="0" cy="0" rx="28" ry="28"/>
            <ellipse cx="0" cy="0" rx="22" ry="22"/>
            <ellipse cx="0" cy="0" rx="16" ry="16"/>
            <ellipse cx="0" cy="0" rx="10" ry="10"/>
          </g>
          <circle r="6" fill="#5A3F1A"/>
          <text y="3" textAnchor="middle" fontSize="6" fontWeight="700" fill="#FFB870" fontFamily="JetBrains Mono">Cu</text>
          {/* Wire end */}
          <path d="M28 0 Q40 -10 50 -5 Q60 0 65 10" stroke="url(#tc-copper)" strokeWidth="3" fill="none"/>
          <circle cx="65" cy="10" r="2" fill="#A65820"/>
        </g>
      
        {/* Question mark for "BOM unknown" */}
        <g transform="translate(335,75)">
          <circle r="22" fill="#0F1F18"/>
          <circle r="22" fill="#E68A3F" opacity="0.95"/>
          <text y="6" textAnchor="middle" fontSize="22" fontWeight="800" fill="white" fontFamily="Plus Jakarta Sans">?</text>
        </g>
      
        {/* "BOM" badge */}
        <g transform="translate(60,235)">
          <rect x="-32" y="-14" width="64" height="28" rx="14" fill="#E68A3F"/>
          <text y="5" textAnchor="middle" fontSize="11" fontWeight="800" fill="white" fontFamily="Inter">BOM thực</text>
        </g>
      
        {/* Sparkles */}
        <circle cx="40" cy="50" r="3" fill="#E8B340"/>
        <circle cx="370" cy="220" r="3" fill="#52E08D"/>
        <g transform="translate(170,50)">
          <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="#FFE9B3"/>
        </g>
      </svg>
    </>
  );
}
