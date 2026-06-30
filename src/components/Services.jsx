const services = [
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    title: 'Forklift Training',
    desc: 'Comprehensive operator training covering safe load handling, stability, pre-operation checks, and industrial safety standards.',
    highlights: ['Theory & Practical Sessions', 'Safety Certification', 'Hands-on Operation']
  },
  {
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    title: 'Excavator Training',
    desc: 'Professional excavator operation training including site safety, machine controls, digging techniques, and ground conditions.',
    highlights: ['Site Safety Protocols', 'Machine Control Mastery', 'Practical Assessment']
  },
  {
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
    title: 'Mobile Crane Training',
    desc: 'Expert training for mobile crane operators covering load charts, rigging, slinging, and safe lifting operations.',
    highlights: ['Load Chart Reading', 'Rigging & Slinging', 'Lift Planning']
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    title: 'Crane Rental',
    desc: 'We provide well-maintained cranes for rent for construction, industrial, and infrastructure projects across the region.',
    highlights: ['Well-maintained Fleet', 'Experienced Operators', 'Flexible Rental Terms']
  }
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '5rem 2rem', background: '#f8f9fa' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ color: '#f59e0b', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            WHAT WE OFFER
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#1a1a2e' }}>
            Our Services
          </h2>
          <p style={{ color: '#64748b', marginTop: '0.75rem', fontSize: '1rem' }}>
            Training and equipment services designed to meet industry safety standards.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem'
        }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: '12px', overflow: 'hidden',
              boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.14)'
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)'
            }}>
              {/* Equipment Photo */}
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img src={s.image} alt={s.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
                }} />
              </div>

              <div style={{ padding: '1.5rem', borderTop: '4px solid #f59e0b' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.6rem' }}>
                  {s.title}
                </h3>
                <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '13.5px', marginBottom: '1rem' }}>
                  {s.desc}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {s.highlights.map((h, j) => (
                    <li key={j} style={{ color: '#374151', fontSize: '13px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{ color: '#f59e0b', fontWeight: 700 }}>✓</span> {h}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{
                  display: 'inline-block', marginTop: '1.25rem',
                  background: '#1a1a2e', color: '#fff', padding: '9px 20px',
                  borderRadius: '6px', textDecoration: 'none', fontSize: '13px', fontWeight: 600
                }}>
                  Enquire →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}