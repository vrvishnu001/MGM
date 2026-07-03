import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'Services', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' }
  ]

  return (
    <nav style={{
      background: '#fff', position: 'sticky', top: 0, zIndex: 100,
      padding: '0 2rem', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', height: '64px', boxShadow: '0 2px 16px rgba(15,23,42,0.08)',
      borderBottom: '1px solid #e2e8f0'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src="/logo.png" alt="Marudhamuthu Charitable Trust logo" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
        <div>
          <div style={{ color: '#0f172a', fontWeight: 700, fontSize: '15px', lineHeight: 1.2 }}>
            Marudhamuthu Charitable Trust
          </div>
          <div style={{ color: '#f59e0b', fontSize: '11px', letterSpacing: '0.05em' }}>
            Neyveli — Heavy Equipment Training & Crane Rental
          </div>
        </div>
      </div>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
        {links.map(link => (
          <Link key={link.label} to={link.to} style={{
            color: '#475569', textDecoration: 'none', fontSize: '14px',
            fontWeight: 500, transition: 'color 0.2s'
          }}
          onMouseOver={e => e.target.style.color = '#f59e0b'}
          onMouseOut={e => e.target.style.color = '#475569'}>
            {link.label}
          </Link>
        ))}
        <Link to="/contact" style={{
          background: '#f59e0b', color: '#1a1a2e', padding: '8px 20px',
          borderRadius: '6px', textDecoration: 'none', fontSize: '14px', fontWeight: 700
        }}>
          Enquire Now
        </Link>
      </div>

      {/* Mobile menu button */}
      <button onClick={() => setOpen(!open)} style={{
        background: 'none', border: 'none', color: '#0f172a', cursor: 'pointer', display: 'none'
      }} className="mobile-btn">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: '64px', left: 0, right: 0,
          background: '#fff', padding: '1rem 2rem', display: 'flex',
          flexDirection: 'column', gap: '1rem', borderBottom: '1px solid #e2e8f0'
        }}>
          {links.map(link => (
            <Link key={link.label} to={link.to}
              onClick={() => setOpen(false)}
              style={{ color: '#0f172a', textDecoration: 'none', fontSize: '15px' }}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}