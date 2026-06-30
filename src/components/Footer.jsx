import { HardHat } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: '#0f0f1a', color: '#94a3b8', textAlign: 'center',
      padding: '2rem', fontSize: '14px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '0.5rem' }}>
        <HardHat size={18} color="#f59e0b" />
        <span style={{ color: '#fff', fontWeight: 600 }}>Marudhamuthu Charitable Trust, Neyveli</span>
      </div>
      <p>© {new Date().getFullYear()} All rights reserved. Forklift • Excavator • Mobile Crane Training & Crane Rental</p>
    </footer>
  )
}