export default function Car({ className = '' }) {
  return (
    <svg viewBox="0 0 400 170" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="70" y="4" width="64" height="22" rx="8" fill="#3a3a46" />
      <rect x="270" y="4" width="64" height="22" rx="8" fill="#3a3a46" />
      <rect x="70" y="144" width="64" height="22" rx="8" fill="#3a3a46" />
      <rect x="270" y="144" width="64" height="22" rx="8" fill="#3a3a46" />
      <path
        d="M12 85 C12 50 40 22 90 20 L300 20 C350 22 388 50 388 85 C388 120 350 148 300 150 L90 150 C40 148 12 120 12 85 Z"
        fill="#ff5a1f"
      />
      <rect x="130" y="38" width="150" height="94" rx="28" fill="#1b1b22" />
      <rect x="150" y="48" width="110" height="74" rx="20" fill="#2c3340" />
      <path d="M290 40 C330 52 345 70 345 85 C345 100 330 118 290 130" stroke="#00000033" strokeWidth="3" fill="none" />
      <ellipse cx="372" cy="52" rx="8" ry="12" fill="#fff6c8" />
      <ellipse cx="372" cy="118" rx="8" ry="12" fill="#fff6c8" />
      <rect x="14" y="48" width="8" height="24" rx="4" fill="#ff2b2b" />
      <rect x="14" y="98" width="8" height="24" rx="4" fill="#ff2b2b" />
    </svg>
  )
}