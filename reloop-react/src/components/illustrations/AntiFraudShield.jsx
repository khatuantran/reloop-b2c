export default function AntiFraudShield({ className = '' }) {
  return (
    <>
      <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="afs-bg" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#52E08D" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="#52E08D" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="afs-shield" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9CF5BF"/>
            <stop offset="55%" stopColor="#2BB36A"/>
            <stop offset="100%" stopColor="#0F3D26"/>
          </linearGradient>
          <linearGradient id="afs-shield-inner" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2BB36A"/>
            <stop offset="100%" stopColor="#0F6635"/>
          </linearGradient>
          <radialGradient id="afs-eye" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FFE066"/>
            <stop offset="100%" stopColor="#E8B340"/>
          </radialGradient>
        </defs>
      
        <circle cx="200" cy="200" r="180" fill="url(#afs-bg)"/>
      
        {/* Sparkle dots */}
        <g>
          <circle cx="60" cy="80" r="2.5" fill="#7AEFA8" opacity="0.7"/>
          <circle cx="340" cy="70" r="3" fill="#FFE9B3" opacity="0.7"/>
          <circle cx="50" cy="320" r="2.5" fill="#52E08D" opacity="0.7"/>
          <circle cx="350" cy="320" r="2.5" fill="#FFD960" opacity="0.7"/>
          <circle cx="40" cy="200" r="2" fill="#52E08D" opacity="0.6"/>
          <circle cx="370" cy="200" r="2" fill="#FFE9B3" opacity="0.6"/>
        </g>
      
        {/* Pulse rings behind shield */}
        <g opacity="0.30">
          <circle cx="200" cy="200" r="155" fill="none" stroke="#52E08D" strokeWidth="2"/>
          <circle cx="200" cy="200" r="135" fill="none" stroke="#52E08D" strokeWidth="1.5"/>
        </g>
      
        {/* Shield */}
        <g transform="translate(200,200)">
          {/* shadow */}
          <path d="M-90 -100 L0 -120 L90 -100 L90 30 Q90 95 0 130 Q-90 95 -90 30 Z" fill="#0F1F18" opacity="0.22" transform="translate(0,8)"/>
          {/* outer shield body */}
          <path d="M-90 -100 L0 -120 L90 -100 L90 30 Q90 95 0 130 Q-90 95 -90 30 Z" fill="url(#afs-shield)"/>
          {/* edge highlight */}
          <path d="M-90 -100 L0 -120 L90 -100 L90 30 Q90 95 0 130 Q-90 95 -90 30 Z" fill="none" stroke="#9CF5BF" strokeWidth="2.5" opacity="0.55"/>
      
          {/* inner shield */}
          <path d="M-72 -85 L0 -102 L72 -85 L72 25 Q72 78 0 108 Q-72 78 -72 25 Z" fill="url(#afs-shield-inner)"/>
      
          {/* Notches around shield rim */}
          <g stroke="#9CF5BF" strokeWidth="1.5" opacity="0.55">
            <line x1="0" y1="-110" x2="0" y2="-100"/>
            <line x1="-50" y1="-95" x2="-44" y2="-87"/>
            <line x1="50" y1="-95" x2="44" y2="-87"/>
            <line x1="-82" y1="-50" x2="-74" y2="-46"/>
            <line x1="82" y1="-50" x2="74" y2="-46"/>
            <line x1="-82" y1="0" x2="-74" y2="0"/>
            <line x1="82" y1="0" x2="74" y2="0"/>
          </g>
      
          {/* Eye of vigilance */}
          <g transform="translate(0,-15)">
            <ellipse rx="32" ry="20" fill="white" opacity="0.95"/>
            <ellipse rx="32" ry="20" fill="none" stroke="#0F3D26" strokeWidth="2"/>
            <circle r="14" fill="url(#afs-eye)"/>
            <circle r="7" fill="#0F3D26"/>
            <circle cx="-3" cy="-3" r="3" fill="white" opacity="0.9"/>
          </g>
      
          {/* Check mark below eye */}
          <g transform="translate(0,40)">
            <circle r="22" fill="#9CF5BF"/>
            <path d="M-10 0 L-3 8 L11 -8" stroke="#0F3D26" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </g>
      
          {/* Gloss highlight */}
          <ellipse cx="-30" cy="-60" rx="28" ry="14" fill="white" opacity="0.30" transform="rotate(-25 -30 -60)"/>
          <ellipse cx="-38" cy="-72" rx="14" ry="4" fill="white" opacity="0.50" transform="rotate(-25 -38 -72)"/>
        </g>
      
        {/* Chain links surrounding shield (chain of custody motif) */}
        <g stroke="#0F3D26" strokeWidth="2" fill="none" opacity="0.45">
          <ellipse cx="80" cy="120" rx="14" ry="8" transform="rotate(45 80 120)"/>
          <ellipse cx="320" cy="120" rx="14" ry="8" transform="rotate(-45 320 120)"/>
          <ellipse cx="80" cy="280" rx="14" ry="8" transform="rotate(-45 80 280)"/>
          <ellipse cx="320" cy="280" rx="14" ry="8" transform="rotate(45 320 280)"/>
        </g>
      
        {/* "VERIFIED" badge top */}
        <g transform="translate(200,75)">
          <rect x="-50" y="-14" width="100" height="28" rx="14" fill="#0F1F18" opacity="0.20" transform="translate(0,3)"/>
          <rect x="-50" y="-14" width="100" height="28" rx="14" fill="#0F3D26"/>
          <text y="5" textAnchor="middle" fontSize="11" fontWeight="800" fill="#9CF5BF" fontFamily="Inter" letterSpacing="2">VERIFIED</text>
        </g>
      
        {/* Sparkle stars */}
        <g>
          <g transform="translate(95,180)">
            <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="#FFE9B3"/>
          </g>
          <g transform="translate(305,180)">
            <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="#FFE9B3"/>
          </g>
          <g transform="translate(140,90)">
            <path d="M0 -8 L1.5 -1.5 L8 0 L1.5 1.5 L0 8 L-1.5 1.5 L-8 0 L-1.5 -1.5 Z" fill="#7AEFA8"/>
          </g>
          <g transform="translate(260,90)">
            <path d="M0 -8 L1.5 -1.5 L8 0 L1.5 1.5 L0 8 L-1.5 1.5 L-8 0 L-1.5 -1.5 Z" fill="#7AEFA8"/>
          </g>
        </g>
      </svg>
    </>
  );
}
