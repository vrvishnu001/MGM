import { useState } from 'react'
import { Phone, MapPin, Mail } from 'lucide-react'

const WHATSAPP_NUMBER = '919XXXXXXXXX' // 👈 Replace with your number (91 + 10 digits, no spaces)
const PHONE_DISPLAY = '+91 9XXXXXXXXX' // 👈 Your display number

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hello Marudhamuthu Charitable Trust!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message || 'No message'}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', phone: '', service: '', message: '' })
  }

  return (
    <section id="contact" style={{ padding: '5rem 2rem', background: '#f8f9fa' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ color: '#f59e0b', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em' }}>GET IN TOUCH</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#1a1a2e' }}>Contact Us</h2>
          <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Fill the form below — it will open WhatsApp with your details ready to send.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {/* Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: <Phone size={20} />, label: 'Phone / WhatsApp', value: PHONE_DISPLAY },
              { icon: <Mail size={20} />, label: 'Email', value: 'marudhamuthu@example.com' },
              { icon: <MapPin size={20} />, label: 'Location', value: 'Neyveli, Tamil Nadu' },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: '10px', padding: '1.25rem',
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
              }}>
                <div style={{ color: '#f59e0b', marginTop: '2px' }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>{item.label}</div>
                  <div style={{ color: '#1a1a2e', fontWeight: 600, marginTop: '2px' }}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* Direct WhatsApp button */}
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Marudhamuthu%20Charitable%20Trust!%20I%20want%20to%20enquire%20about%20your%20services.`}
              target="_blank" rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                background: '#25D366', color: '#fff', padding: '14px 20px',
                borderRadius: '10px', textDecoration: 'none', fontWeight: 700,
                fontSize: '15px', marginTop: '0.5rem'
              }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{
            background: '#fff', borderRadius: '12px', padding: '2rem',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', gap: '1rem'
          }}>
            <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
              📲 This form opens <strong>WhatsApp</strong> with your message pre-filled.
            </p>

            {sent && (
              <div style={{ background: '#d1fae5', color: '#065f46', padding: '10px 14px', borderRadius: '8px', fontSize: '14px' }}>
                ✅ WhatsApp opened! Complete sending your message there.
              </div>
            )}

            {['name', 'phone'].map(field => (
              <input key={field}
                placeholder={field === 'name' ? 'Your Name *' : 'Phone Number *'}
                value={form[field]}
                onChange={e => setForm({ ...form, [field]: e.target.value })}
                required
                style={{
                  padding: '12px 14px', borderRadius: '8px', border: '1.5px solid #e2e8f0',
                  fontSize: '14px', outline: 'none', color: '#1a1a2e'
                }}
              />
            ))}

            <select value={form.service}
              onChange={e => setForm({ ...form, service: e.target.value })}
              required
              style={{
                padding: '12px 14px', borderRadius: '8px', border: '1.5px solid #e2e8f0',
                fontSize: '14px', color: form.service ? '#1a1a2e' : '#94a3b8', background: '#fff'
              }}>
              <option value="">Select Service *</option>
              <option>Forklift Training</option>
              <option>Excavator Training</option>
              <option>Mobile Crane Training</option>
              <option>Crane Rental</option>
            </select>

            <textarea placeholder="Your Message (optional)"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              rows={3}
              style={{
                padding: '12px 14px', borderRadius: '8px', border: '1.5px solid #e2e8f0',
                fontSize: '14px', resize: 'vertical', fontFamily: 'inherit'
              }}
            />

            <button type="submit" style={{
              background: '#25D366', color: '#fff', border: 'none',
              padding: '14px', borderRadius: '8px', fontWeight: 700,
              fontSize: '15px', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center', gap: '8px'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}