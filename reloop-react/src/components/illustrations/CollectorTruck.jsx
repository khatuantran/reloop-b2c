export default function CollectorTruck({ size = 240, className = '' }) {
  return (
    <>
      <svg viewBox="0 0 240 240" width={size} height={size} className={className}>
        <ellipse cx="120" cy="200" rx="100" ry="8" fill="#0F1F18" opacity="0.10" />
        <rect x="40" y="100" width="120" height="70" rx="14" fill="#3B8DD1" />
        <rect x="42" y="102" width="60" height="66" rx="10" fill="#5BA5DD" opacity="0.6" />
        <path d="M155 110 L200 110 Q210 110 210 120 L210 170 L155 170 Z" fill="#86B5D6" />
        <rect x="165" y="120" width="35" height="25" rx="6" fill="#CFE6F5" />
        <circle cx="75" cy="180" r="20" fill="#1F2A28" />
        <circle cx="75" cy="180" r="10" fill="#525C5A" />
        <circle cx="180" cy="180" r="20" fill="#1F2A28" />
        <circle cx="180" cy="180" r="10" fill="#525C5A" />
        <text x="100" y="148" textAnchor="middle" fontSize="36" fill="white">♻</text>
      </svg>
    </>
  );
}
