export default function About() {
  const stats = [
    { value: '500+', label: 'Operators Trained' },
    { value: '3', label: 'Training Programs' },
    { value: '100%', label: 'Safety Focus' },
    { value: 'Neyveli', label: 'Based In' },
  ]

  return (
    <section id="about" style={{ padding: '5rem 2rem', background: '#1a1a2e' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#f59e0b', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              ABOUT US
            </p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, lineHeight: 1.3, marginBottom: '1.25rem' }}>
              Marudhamuthu Charitable Trust, Neyveli
            </h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '15px', marginBottom: '1rem' }}>
              We are a Neyveli-based charitable trust dedicated to empowering workers and
              youth through professional heavy equipment operator training. Our programs
              are designed to meet real industry safety standards.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '15px' }}>
              In addition to training, we offer crane rental services to support
              construction and industrial projects in the region with well-maintained
              equipment and experienced operators.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: '#16213e', borderRadius: '12px', padding: '1.5rem',
                textAlign: 'center', border: '1px solid #0f3460'
              }}>
                <div style={{ color: '#f59e0b', fontSize: '2rem', fontWeight: 800 }}>{s.value}</div>
                <div style={{ color: '#94a3b8', fontSize: '13px', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}