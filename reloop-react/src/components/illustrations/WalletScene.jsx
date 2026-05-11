export default function WalletScene({ className = '' }) {
  return (
    <>
      <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="ws-glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#52E08D" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#52E08D" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="ws-phone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1F2A28"/>
            <stop offset="100%" stopColor="#0A1410"/>
          </linearGradient>
          <linearGradient id="ws-screen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#52E08D"/>
            <stop offset="50%" stopColor="#2BB36A"/>
            <stop offset="100%" stopColor="#0F3D26"/>
          </linearGradient>
          <radialGradient id="ws-coin" cx="35%" cy="25%">
            <stop offset="0%" stopColor="#FFEFC8"/>
            <stop offset="55%" stopColor="#E8B340"/>
            <stop offset="100%" stopColor="#8B6D14"/>
          </radialGradient>
          <linearGradient id="ws-card" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1A73E8"/>
            <stop offset="50%" stopColor="#3B8DD1"/>
            <stop offset="100%" stopColor="#1F5077"/>
          </linearGradient>
          <linearGradient id="ws-zalo" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B8DD1"/>
            <stop offset="100%" stopColor="#1A73E8"/>
          </linearGradient>
        </defs>
      
        {/* Ambient glow */}
        <circle cx="200" cy="200" r="180" fill="url(#ws-glow)"/>
      
        {/* Confetti */}
        <g opacity="0.65">
          <rect x="40" y="60" width="8" height="14" rx="2" fill="#52E08D" transform="rotate(20 44 67)"/>
          <rect x="350" y="60" width="8" height="14" rx="2" fill="#E8B340" transform="rotate(-30 354 67)"/>
          <rect x="60" y="320" width="8" height="14" rx="2" fill="#3B8DD1" transform="rotate(45 64 327)"/>
          <rect x="350" y="320" width="8" height="14" rx="2" fill="#FFD9C2" transform="rotate(-15 354 327)"/>
          <circle cx="20" cy="180" r="3" fill="#E8B340"/>
          <circle cx="380" cy="200" r="3" fill="#52E08D"/>
        </g>
      
        {/* Credit card back layer */}
        <g transform="translate(80,180) rotate(-12)">
          <rect x="-70" y="-40" width="160" height="100" rx="12" fill="#0F1F18" opacity="0.18" transform="translate(2,4)"/>
          <rect x="-70" y="-40" width="160" height="100" rx="12" fill="url(#ws-card)"/>
          {/* Card chip */}
          <rect x="-58" y="-22" width="22" height="18" rx="3" fill="#FFE9B3"/>
          <rect x="-56" y="-20" width="18" height="14" rx="2" fill="#C99820"/>
          <line x1="-50" y1="-20" x2="-50" y2="-6" stroke="#8B6D14" strokeWidth="0.6"/>
          <line x1="-44" y1="-20" x2="-44" y2="-6" stroke="#8B6D14" strokeWidth="0.6"/>
          {/* Card number */}
          <g fontFamily="JetBrains Mono" fontWeight="700" fill="white" fontSize="10" letterSpacing="2">
            <text x="-58" y="20">5283 ●●●● ●●●● 1234</text>
          </g>
          <text x="-58" y="44" fontSize="7" fill="white" opacity="0.7" fontFamily="Inter">CARDHOLDER</text>
          <text x="-58" y="54" fontSize="9" fontWeight="700" fill="white" fontFamily="Inter">LINH N. T.</text>
          {/* Visa logo style */}
          <text x="84" y="50" textAnchor="end" fontSize="14" fontWeight="800" fill="white" fontStyle="italic" fontFamily="Inter">VISA</text>
          {/* Highlight */}
          <ellipse cx="-30" cy="-30" rx="60" ry="10" fill="white" opacity="0.18" transform="rotate(-20 -30 -30)"/>
        </g>
      
        {/* Phone with ZaloPay center */}
        <g transform="translate(220,140)">
          {/* Drop shadow */}
          <rect x="-58" y="-110" width="116" height="220" rx="22" fill="#0F1F18" opacity="0.22" transform="translate(4,8)"/>
          {/* Phone body */}
          <rect x="-58" y="-110" width="116" height="220" rx="22" fill="url(#ws-phone)"/>
          {/* Screen */}
          <rect x="-50" y="-100" width="100" height="200" rx="14" fill="url(#ws-screen)"/>
          {/* Screen highlight */}
          <rect x="-50" y="-100" width="100" height="50" rx="14" fill="white" opacity="0.20"/>
          {/* Status bar */}
          <text x="-44" y="-87" fontSize="7" fontWeight="700" fill="white" fontFamily="JetBrains Mono">9:41</text>
          <text x="44" y="-87" textAnchor="end" fontSize="7" fontWeight="700" fill="white" fontFamily="JetBrains Mono">5G ●●●</text>
          {/* ZaloPay logo */}
          <g transform="translate(0,-65)">
            <circle r="14" fill="white"/>
            <text y="5" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1A73E8" fontFamily="Inter">Z</text>
          </g>
          {/* Title */}
          <text x="0" y="-40" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="Inter" opacity="0.9">RE-LOOP Wallet</text>
          {/* Big amount */}
          <text x="0" y="-15" textAnchor="middle" fontSize="20" fontWeight="800" fill="white" fontFamily="Plus Jakarta Sans">528.400đ</text>
          <text x="0" y="-2" textAnchor="middle" fontSize="6" fill="white" fontFamily="JetBrains Mono" opacity="0.7" letterSpacing="1">ZALOPAY · KHẢ DỤNG</text>
          {/* Transaction rows */}
          <g fontFamily="Inter" fontSize="6">
            <rect x="-44" y="12" width="88" height="20" rx="4" fill="white" opacity="0.15"/>
            <text x="-38" y="20" fontWeight="600" fill="white">+ PET 3.2kg</text>
            <text x="38" y="20" textAnchor="end" fontWeight="700" fill="#9CF5BF">+38.400</text>
            <text x="-38" y="28" fontSize="5" fill="white" opacity="0.6">RL-001234</text>
      
            <rect x="-44" y="36" width="88" height="20" rx="4" fill="white" opacity="0.15"/>
            <text x="-38" y="44" fontWeight="600" fill="white">+ Mô tơ chốt</text>
            <text x="38" y="44" textAnchor="end" fontWeight="700" fill="#9CF5BF">+38.700</text>
            <text x="-38" y="52" fontSize="5" fill="white" opacity="0.6">RL-001236</text>
      
            <rect x="-44" y="60" width="88" height="20" rx="4" fill="#E8B340" opacity="0.25"/>
            <text x="-38" y="68" fontWeight="600" fill="white">↓ Hold ví ảo</text>
            <text x="38" y="68" textAnchor="end" fontWeight="700" fill="#FFE9B3">−60.000</text>
            <text x="-38" y="76" fontSize="5" fill="white" opacity="0.6">RL-001240</text>
          </g>
          {/* Action button */}
          <rect x="-44" y="86" width="88" height="14" rx="7" fill="#52E08D"/>
          <text y="95" textAnchor="middle" fontSize="7" fontWeight="800" fill="#0A1410" fontFamily="Inter">RÚT VỀ ZALOPAY ›</text>
          {/* Home indicator */}
          <rect x="-20" y="106" width="40" height="2" rx="1" fill="white" opacity="0.6"/>
          {/* Side button */}
          <rect x="58" y="-30" width="2" height="30" rx="1" fill="#3F4540"/>
          <rect x="-60" y="-50" width="2" height="20" rx="1" fill="#3F4540"/>
          <rect x="-60" y="-22" width="2" height="36" rx="1" fill="#3F4540"/>
        </g>
      
        {/* Coin stack right */}
        <g transform="translate(330,260)">
          <ellipse cx="0" cy="42" rx="35" ry="6" fill="#0F1F18" opacity="0.20"/>
          <ellipse cx="0" cy="35" rx="35" ry="11" fill="#8B6D14"/>
          <ellipse cx="0" cy="28" rx="35" ry="11" fill="url(#ws-coin)"/>
          <ellipse cx="0" cy="22" rx="29" ry="7" fill="#FFEFC8" opacity="0.7"/>
      
          <ellipse cx="0" cy="0" rx="35" ry="11" fill="#8B6D14"/>
          <ellipse cx="0" cy="-7" rx="35" ry="11" fill="url(#ws-coin)"/>
          <ellipse cx="0" cy="-13" rx="29" ry="7" fill="#FFEFC8" opacity="0.7"/>
      
          <ellipse cx="0" cy="-30" rx="35" ry="11" fill="#8B6D14"/>
          <ellipse cx="0" cy="-37" rx="35" ry="11" fill="url(#ws-coin)"/>
          <ellipse cx="0" cy="-43" rx="29" ry="7" fill="#FFEFC8" opacity="0.7"/>
          <text y="-33" textAnchor="middle" fontSize="18" fontWeight="800" fill="#8B6D14" fontFamily="JetBrains Mono">đ</text>
        </g>
      
        {/* ZaloPay logo bubble (top-left) */}
        <g transform="translate(70,90)">
          <circle r="32" fill="white" stroke="#1A73E8" strokeWidth="3"/>
          <text y="6" textAnchor="middle" fontSize="28" fontWeight="800" fill="#1A73E8" fontFamily="Inter">Z</text>
          {/* Verified check */}
          <g transform="translate(22,-22)">
            <circle r="10" fill="#52E08D"/>
            <text y="3" textAnchor="middle" fontSize="11" fontWeight="800" fill="white" fontFamily="Inter">✓</text>
          </g>
        </g>
      
        {/* "60 giây" floating badge */}
        <g transform="translate(330,100)">
          <rect x="-38" y="-14" width="76" height="28" rx="14" fill="#0F1F18"/>
          <text x="-12" y="5" textAnchor="middle" fontSize="11" fill="#E8B340" fontFamily="Inter">⚡</text>
          <text x="10" y="5" textAnchor="middle" fontSize="10" fontWeight="800" fill="white" fontFamily="Inter">60s</text>
        </g>
      
        {/* Floating + */}
        <g transform="translate(105,300)">
          <circle r="20" fill="#52E08D"/>
          <text y="9" textAnchor="middle" fontSize="28" fontWeight="800" fill="#0A1410" fontFamily="Inter">+</text>
        </g>
      
        {/* Sparkle stars */}
        <g transform="translate(170,80)">
          <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="#FFE9B3"/>
        </g>
        <g transform="translate(310,330)">
          <path d="M0 -8 L1.5 -1.5 L8 0 L1.5 1.5 L0 8 L-1.5 1.5 L-8 0 L-1.5 -1.5 Z" fill="#9CF5BF"/>
        </g>
      </svg>
    </>
  );
}
