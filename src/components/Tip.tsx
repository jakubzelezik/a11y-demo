import { useState } from 'react'

interface TipProps {
  children: React.ReactNode
}

export default function Tip({ children }: TipProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <details
      style={{
        marginTop: '1rem',
        padding: '0.75rem',
        border: '1px solid #444',
        borderRadius: '4px',
        backgroundColor: 'rgba(100, 181, 246, 0.05)',
        cursor: 'pointer',
      }}
      open={isOpen}
      onToggle={(e) => setIsOpen(e.currentTarget.open)}
    >
      <summary
        style={{
          color: '#64b5f6',
          fontWeight: 500,
          userSelect: 'none',
          outline: 'none',
          textAlign: 'left',
        }}
      >
        Wskazówka
      </summary>
      <div style={{marginTop: '0.5rem', color: '#e0e0e0'}}>
        {children}
      </div>
    </details>
  )
}
