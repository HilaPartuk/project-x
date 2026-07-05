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
        <circle cx="12" cy="12" r="11" stroke="#8b9a7f" strokeWidth="1.5"/>
        <path d="M8 5v14l11-7z" fill="#8b9a7f"/>
      </svg>
      <div style={{ fontFamily: "'Crimson Text', serif", fontSize: '1.1rem', color: '#8b9a7f', fontWeight: 400, letterSpacing: '1.5px' }}>
        CinematiX
      </div>
    </div>
  )
}
