import { ChevronDown } from 'lucide-react'

const heroImages = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80',
  'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=1200&q=80',
]

import { useState, useEffect } from 'react'

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{
      minHeight: '92vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', textAlign: 'center', padding: '4rem 2rem',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Background image slideshow */}
      {heroImages.map((img, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: i === current ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
          zIndex: 0
        }} />
      ))}
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(15,15,40,0.88) 0%, rgba(10,30,80,0.80) 100%)',
        zIndex: 1
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
        <div style={{
          display: 'inline-block', background: '#f59e0b22', border: '1px solid #f59e0b55',
          color: '#f59e0b', padding: '6px 18px', borderRadius: '20px',
          fontSize: '13px', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em'
        }}>
          🏗️ CERTIFIED HEAVY EQUIPMENT TRAINING — NEYVELI
        </div>

        <h1 style={{
          color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem'
        }}>
          Professional Training for<br />
          <span style={{ color: '#f59e0b' }}>Forklift, Excavator</span><br />
          & Mobile Crane Operators
        </h1>

        <p style={{
          color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.8,
          maxWidth: '600px', margin: '0 auto 2.5rem'
        }}>
          Marudhamuthu Charitable Trust, Neyveli — providing industry-recognised safety
          training and crane rental services to build skilled, certified operators.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#services" style={{
            background: '#f59e0b', color: '#1a1a2e', padding: '14px 32px',
            borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '15px'
          }}>
            View Our Services
          </a>
          <a href="#contact" style={{
            border: '2px solid #f59e0b', color: '#f59e0b', padding: '14px 32px',
            borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px'
          }}>
            Contact Us
          </a>
        </div>

        {/* Slideshow dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '2rem' }}>
          {heroImages.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? '24px' : '8px', height: '8px',
              borderRadius: '4px', border: 'none', cursor: 'pointer',
              background: i === current ? '#f59e0b' : '#ffffff55',
              transition: 'all 0.3s'
            }} />
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <ChevronDown size={28} color="#f59e0b" style={{ animation: 'bounce 2s infinite' }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  )
}