export function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <rect x="3" y="6" width="18" height="12" rx="1" stroke="#8b9a7f" strokeWidth="1.5"/>
        <line x1="6" y1="6" x2="6" y2="18" stroke="#8b9a7f" strokeWidth="1"/>
        <line x1="12" y1="6" x2="12" y2="18" stroke="#8b9a7f" strokeWidth="1"/>
        <line x1="18" y1="6" x2="18" y2="18" stroke="#8b9a7f" strokeWidth="1"/>
      </svg>
      <div style={{ fontFamily: "'Crimson Text', serif", fontSize: '1.1rem', color: '#8b9a7f', fontWeight: 400, letterSpacing: '1.5px' }}>
        CinematiX
      </div>
    </div>
  )
}
