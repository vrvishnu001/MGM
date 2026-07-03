import { HardHat } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: '#0f0f1a', color: '#94a3b8', textAlign: 'center',
      padding: '2rem', fontSize: '14px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
        <HardHat size={18} color="#f59e0b" />
        <span style={{ color: '#fff', fontWeight: 600 }}>Marudhamuthu Charitable Trust, Neyveli</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
        <a href="https://facebook.com/mgmtrust" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', textDecoration: 'none' }}>
          Facebook
        </a>
        <a href="https://instagram.com/mgmtrust" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', textDecoration: 'none' }}>
          Instagram
        </a>
      </div>
      <p style={{ margin: '0.25rem 0', color: '#cbd5e1' }}>Careers: <a href="mailto:careers@mgmtrust.in" style={{ color: '#f59e0b', textDecoration: 'none' }}>careers@mgmtrust.in</a></p>
      <p style={{ margin: '0.25rem 0' }}>© {new Date().getFullYear()} All rights reserved. Forklift • Excavator • Mobile Crane Training & Crane Rental</p>
    </footer>
  )
}