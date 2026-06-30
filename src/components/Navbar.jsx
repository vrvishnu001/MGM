import { useState } from 'react'
import { Menu, X, HardHat } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ['Services', 'About', 'Contact']

  return (
    <nav style={{
      background: '#1a1a2e', position: 'sticky', top: 0, zIndex: 100,
      padding: '0 2rem', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', height: '64px', boxShadow: '0 2px 12px rgba(0,0,0,0.3)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <HardHat size={28} color="#f59e0b" />
        <div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '15px', lineHeight: 1.2 }}>
            Marudhamuthu Charitable Trust
          </div>
          <div style={{ color: '#f59e0b', fontSize: '11px', letterSpacing: '0.05em' }}>
            Neyveli — Heavy Equipment Training & Crane Rental
          </div>
        </div>
      </div>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{
            color: '#cbd5e1', textDecoration: 'none', fontSize: '14px',
            fontWeight: 500, transition: 'color 0.2s'
          }}
          onMouseOver={e => e.target.style.color = '#f59e0b'}
          onMouseOut={e => e.target.style.color = '#cbd5e1'}>
            {l}
          </a>
        ))}
        <a href="#contact" style={{
          background: '#f59e0b', color: '#1a1a2e', padding: '8px 20px',
          borderRadius: '6px', textDecoration: 'none', fontSize: '14px', fontWeight: 700
        }}>
          Enquire Now
        </a>
      </div>

      {/* Mobile menu button */}
      <button onClick={() => setOpen(!open)} style={{
        background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none'
      }} className="mobile-btn">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: '64px', left: 0, right: 0,
          background: '#1a1a2e', padding: '1rem 2rem', display: 'flex',
          flexDirection: 'column', gap: '1rem'
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '15px' }}>
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}