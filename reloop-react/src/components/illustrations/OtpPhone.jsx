export default function OtpPhone({ size = 240, className = '' }) {
  return (
    <>
      <svg viewBox="0 0 240 240" width={size} height={size} className={className}>
        <ellipse cx="120" cy="225" rx="55" ry="6" fill="#0F1F18" opacity="0.10" />
        <rect x="65" y="30" width="110" height="190" rx="22" fill="#2A2D33" />
        <rect x="73" y="48" width="94" height="160" rx="6" fill="#FAFAF7" />
        <g fontFamily="JetBrains Mono" fontWeight="700">
          <rect x="82" y="100" width="22" height="30" rx="6" fill="#C7F2D6" />
          <text x="93" y="123" textAnchor="middle" fontSize="20" fill="#2BB36A">1</text>
          <rect x="108" y="100" width="22" height="30" rx="6" fill="#C7F2D6" />
          <text x="119" y="123" textAnchor="middle" fontSize="20" fill="#2BB36A">2</text>
          <rect x="134" y="100" width="22" height="30" rx="6" fill="#C7F2D6" />
          <text x="145" y="123" textAnchor="middle" fontSize="20" fill="#2BB36A">3</text>
        </g>
        <text x="120" y="160" textAnchor="middle" fontSize="11" fill="#7C8A82">Mã OTP RE-LOOP</text>
        <circle cx="200" cy="55" r="20" fill="#52E08D" opacity="0.3" />
        <circle cx="200" cy="55" r="12" fill="#52E08D" />
      </svg>
    </>
  );
}
