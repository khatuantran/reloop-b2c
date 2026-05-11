export default function TierSScene({ className = '' }) {
  return (
    <>
      <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="ts-bg" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#D8F5E3"/>
            <stop offset="100%" stopColor="#7AEFA8"/>
          </radialGradient>
          <radialGradient id="ts-bottle1" cx="35%" cy="20%">
            <stop offset="0%" stopColor="#FFFFFF"/>
            <stop offset="50%" stopColor="#CFE6F5"/>
            <stop offset="100%" stopColor="#5C9DC4"/>
          </radialGradient>
          <radialGradient id="ts-bottle2" cx="35%" cy="20%">
            <stop offset="0%" stopColor="#E8FFEF"/>
            <stop offset="100%" stopColor="#7AEFA8"/>
          </radialGradient>
          <radialGradient id="ts-can" cx="40%" cy="25%">
            <stop offset="0%" stopColor="#FFEFC8"/>
            <stop offset="100%" stopColor="#C99820"/>
          </radialGradient>
          <radialGradient id="ts-card" cx="30%" cy="25%">
            <stop offset="0%" stopColor="#FFE0B0"/>
            <stop offset="100%" stopColor="#A86A2C"/>
          </radialGradient>
        </defs>
        {/* Background */}
        <rect width="400" height="300" fill="url(#ts-bg)"/>
        {/* Ground */}
        <ellipse cx="200" cy="290" rx="180" ry="20" fill="#0F1F18" opacity="0.12"/>
        {/* Cardboard back */}
        <g transform="translate(290,140)">
          <path d="M-50 -10 L-50 90 L50 90 L50 -10 Z" fill="url(#ts-card)"/>
          <path d="M-50 -10 L0 -40 L100 -10 L50 -10 Z" fill="#FFE9B3"/>
          <path d="M50 -10 L100 -10 L100 90 L50 90 Z" fill="#8B5C1C" opacity="0.5"/>
          <line x1="-50" y1="-10" x2="50" y2="-10" stroke="#5A3F1A" strokeWidth="0.8"/>
          <line x1="0" y1="-40" x2="0" y2="-10" stroke="#5A3F1A" strokeWidth="0.8" opacity="0.5"/>
          <rect x="-30" y="20" width="60" height="14" fill="white" opacity="0.85"/>
          <text x="0" y="31" textAnchor="middle" fontSize="9" fontWeight="700" fill="#8B5C1C" fontFamily="Inter">FRAGILE</text>
        </g>
        {/* Big PET bottle center */}
        <g transform="translate(180,160)">
          <ellipse cx="0" cy="100" rx="32" ry="6" fill="#0F1F18" opacity="0.18"/>
          <path d="M-26 -50 Q-26 -70 -10 -70 L10 -70 Q26 -70 26 -50 L26 80 Q26 100 10 100 L-10 100 Q-26 100 -26 80 Z" fill="url(#ts-bottle1)"/>
          <rect x="-6" y="-90" width="12" height="22" rx="3" fill="#5C9DC4"/>
          <ellipse cx="-12" cy="0" rx="4" ry="50" fill="white" opacity="0.55"/>
          <rect x="-26" y="20" width="52" height="30" fill="#2BB36A"/>
          <text x="0" y="32" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="Inter">RE-LOOP</text>
          <text x="0" y="44" textAnchor="middle" fontSize="11" fontWeight="800" fill="white" fontFamily="Inter">PET 100%</text>
        </g>
        {/* Smaller green bottle right */}
        <g transform="translate(255,200) rotate(15)">
          <ellipse cx="0" cy="60" rx="22" ry="5" fill="#0F1F18" opacity="0.15"/>
          <path d="M-18 -30 Q-18 -45 -7 -45 L7 -45 Q18 -45 18 -30 L18 50 Q18 60 7 60 L-7 60 Q-18 60 -18 50 Z" fill="url(#ts-bottle2)"/>
          <rect x="-4" y="-58" width="8" height="14" rx="2" fill="#1F9956"/>
          <ellipse cx="-8" cy="5" rx="3" ry="32" fill="white" opacity="0.5"/>
        </g>
        {/* Can left */}
        <g transform="translate(95,180) rotate(-10)">
          <ellipse cx="0" cy="55" rx="20" ry="5" fill="#0F1F18" opacity="0.15"/>
          <rect x="-18" y="-30" width="36" height="86" rx="6" fill="url(#ts-can)"/>
          <ellipse cx="0" cy="-30" rx="18" ry="4" fill="#FFEFC8"/>
          <ellipse cx="0" cy="-30" rx="14" ry="2.5" fill="#C99820"/>
          <ellipse cx="-7" cy="10" rx="3" ry="18" fill="white" opacity="0.5"/>
          <rect x="-15" y="0" width="30" height="22" fill="#D14B3B"/>
          <text x="0" y="14" textAnchor="middle" fontSize="9" fontWeight="800" fill="white" fontFamily="Inter">ECO</text>
        </g>
        {/* Floating recycle symbol */}
        <g transform="translate(330,60)" opacity="0.85">
          <circle r="22" fill="white" opacity="0.9"/>
          <g transform="scale(0.5)" fill="#2BB36A">
            <path d="M-30 -25 L-15 -8 L-25 -8 Q-25 5 -10 12 L-5 5 L-2 18 L-15 16 L-10 9 Q-32 0 -32 -10 Z"/>
            <path d="M30 -25 L15 -8 L25 -8 Q25 5 10 12 L5 5 L2 18 L15 16 L10 9 Q32 0 32 -10 Z" transform="rotate(120)"/>
            <path d="M0 30 L-8 18 L-3 18 Q-3 8 5 5 L8 12 L18 5 L13 18 L8 13 Q-15 25 0 38 Z" transform="rotate(240)"/>
          </g>
        </g>
        {/* Sparkles */}
        <circle cx="60" cy="80" r="3" fill="#E8B340"/>
        <circle cx="350" cy="200" r="3" fill="#52E08D"/>
        <circle cx="40" cy="220" r="2.5" fill="#FFD9C2"/>
        <g transform="translate(140,70)">
          <path d="M0 -8 L1.5 -1.5 L8 0 L1.5 1.5 L0 8 L-1.5 1.5 L-8 0 L-1.5 -1.5 Z" fill="#FFE9B3"/>
        </g>
      </svg>
    </>
  );
}
