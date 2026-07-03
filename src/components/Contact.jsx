import { useState } from 'react'
import { Phone, MapPin, Mail } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'

const API_BASE = import.meta.env.VITE_API_BASE || ''
const PHONE_DISPLAY = '+91 94447 32029'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [status, setStatus] = useState('')
  const [previewMessage, setPreviewMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const msg = `Hello Marudhamuthu Charitable Trust!\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message || 'No message'}`
    setPreviewMessage(msg)

    try {
      const response = await fetch(`${API_BASE}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg })
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || 'Failed to save message')
      }

      setStatus('Message saved to admin panel text file.')
      setForm({ name: '', phone: '', service: '', message: '' })
      setSent(true)
      setTimeout(() => setSent(false), 4000)
    } catch (error) {
      setStatus(`Unable to save message: ${error.message}`)
    }

    setTimeout(() => setStatus(''), 6000)
  }

  return (
    <>
      <Navbar />
      <section id="contact" style={{ padding: '5rem 2rem', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ color: '#f59e0b', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em' }}>GET IN TOUCH</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#1a1a2e' }}>Contact Us</h2>
          <p style={{ color: '#64748b', marginTop: '0.5rem' }}>
            Fill the form below — your message will be prepared internally in WhatsApp format without opening WhatsApp.
          </p>
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

            <div style={{
              background: '#fff', borderRadius: '10px', padding: '1.25rem',
              display: 'flex', flexDirection: 'column', gap: '0.5rem',
              boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
            }}>
              <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>Message prep</div>
              <div style={{ color: '#1a1a2e', fontWeight: 600, marginTop: '2px' }}>
                Submit the form and your message will be prepared as a WhatsApp-style note without opening WhatsApp.
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{
            background: '#fff', borderRadius: '12px', padding: '2rem',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', gap: '1rem'
          }}>
            <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
              📲 This form prepares a WhatsApp-style message internally without opening WhatsApp.
            </p>

            {sent && (
              <div style={{ background: '#d1fae5', color: '#065f46', padding: '10px 14px', borderRadius: '8px', fontSize: '14px' }}>
                ✅ Message prepared internally. No WhatsApp window will open.
              </div>
            )}
            {status && (
              <div style={{ background: '#eff6ff', color: '#1d4ed8', padding: '10px 14px', borderRadius: '8px', fontSize: '14px' }}>
                {status}
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
              fontSize: '15px', cursor: 'pointer'
            }}>
              Prepare Message
            </button>

            {previewMessage && (
              <div style={{ background: '#f1f5f9', borderRadius: '12px', padding: '1rem', border: '1px solid #e2e8f0', whiteSpace: 'pre-wrap', color: '#0f172a' }}>
                <strong style={{ display: 'block', marginBottom: '0.75rem' }}>Preview prepared message:</strong>
                {previewMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
    <section style={{ padding: '3rem 2rem', background: '#fff' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#f59e0b', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>CAREERS</p>
        <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Join the MGM Team</h3>
        <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '16px', maxWidth: '760px', margin: '0 auto 2rem' }}>
          We are looking for motivated candidates for training, operations, and support roles. Send your resume and a short note to <a href="mailto:careers@mgmtrust.in" style={{ color: '#f59e0b', textDecoration: 'none' }}>careers@mgmtrust.in</a> and we will connect with you.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {['Forklift Operator Trainee', 'Excavator Operator Trainee', 'Mobile Crane Assistant', 'Training Coordinator'].map((role) => (
            <div key={role} style={{ background: '#f8fafc', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 10px 24px rgba(15,23,42,0.05)' }}>
              <h4 style={{ margin: 0, color: '#0f172a', fontSize: '1.05rem', fontWeight: 700 }}>{role}</h4>
              <p style={{ color: '#64748b', margin: '0.75rem 0 0', lineHeight: 1.75 }}>Apply now for the next training batch and start a career in heavy equipment operation with MGM.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    <WhatsAppFloat />
  </>
  )
}