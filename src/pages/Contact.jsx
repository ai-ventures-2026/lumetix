import { useState } from 'react'
import './Contact.css'

const showroomInfo = [
  {
    city: 'Paris',
    address: '14 Rue du Faubourg Saint-Honoré\nParis 75008, France',
    hours: 'Mon–Fri 10:00–18:30\nSat 11:00–17:00',
    phone: '+33 1 42 68 00 00',
    email: 'paris@lumetix.com',
  },
  {
    city: 'Zurich',
    address: 'Bahnhofstrasse 22\n8001 Zürich, Switzerland',
    hours: 'Mon–Fri 09:00–18:00\nSat 10:00–16:00',
    phone: '+41 44 220 00 00',
    email: 'zurich@lumetix.com',
  },
]

const enquiryTypes = [
  'Product Enquiry',
  'Bespoke Commission',
  'Trade & Architecture',
  'Showroom Visit',
  'Press & Media',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate submission
    setSubmitted(true)
  }

  return (
    <div className="contact">

      {/* ── Page Hero ── */}
      <section className="page-hero contact-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <div className="page-hero__content">
            <span className="label page-hero__eyebrow">Get in Touch</span>
            <h1 className="page-hero__title">
              Begin a<br />
              <em className="page-hero__em">Conversation</em>
            </h1>
            <div className="gold-divider" style={{ margin: '32px auto' }} />
            <p className="page-hero__sub">
              Whether you are specifying for a project, commissioning a bespoke piece, or simply wish to visit our showroom — we would be delighted to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="section contact-main">
        <div className="container">
          <div className="contact__grid">

            {/* ── Form ── */}
            <div className="contact__form-col">
              <div className="contact__form-header">
                <span className="label">Send an Enquiry</span>
                <h2 className="contact__form-title">Write to the Studio</h2>
                <div className="gold-divider gold-divider--left" style={{ margin: '20px 0 28px' }} />
                <p style={{ fontSize: '0.82rem', color: 'var(--color-silver)', lineHeight: '1.8' }}>
                  Our studio team responds to all enquiries within one business day. For urgent matters, please call the relevant showroom directly.
                </p>
              </div>

              {submitted ? (
                <div className="contact__success">
                  <div className="contact__success-icon">✦</div>
                  <h3 className="contact__success-title">Thank You</h3>
                  <p className="contact__success-msg">
                    Your message has been received. A member of the Lumetix studio team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        className="form-input"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input
                        className="form-input"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label" htmlFor="company">Company / Practice</label>
                      <input
                        className="form-input"
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Optional"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="type">Enquiry Type *</label>
                      <select
                        className="form-input form-select"
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a category</option>
                        {enquiryTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="message">Message *</label>
                    <textarea
                      className="form-input form-textarea"
                      id="message"
                      name="message"
                      placeholder="Please describe your project, requirements, or questions…"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                    />
                  </div>

                  <button type="submit" className="btn btn--filled contact__submit">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* ── Sidebar ── */}
            <aside className="contact__sidebar">

              {/* Showrooms */}
              <div className="contact__sidebar-section">
                <span className="label">Our Showrooms</span>
                <div className="contact__showrooms">
                  {showroomInfo.map((s) => (
                    <div key={s.city} className="contact__showroom">
                      <h3 className="contact__showroom-city">{s.city}</h3>
                      <div className="gold-divider gold-divider--left" style={{ margin: '12px 0 16px' }} />
                      <div className="contact__showroom-details">
                        <div className="contact__showroom-detail">
                          <span className="contact__detail-label">Address</span>
                          <span className="contact__detail-value" style={{ whiteSpace: 'pre-line' }}>{s.address}</span>
                        </div>
                        <div className="contact__showroom-detail">
                          <span className="contact__detail-label">Hours</span>
                          <span className="contact__detail-value" style={{ whiteSpace: 'pre-line' }}>{s.hours}</span>
                        </div>
                        <div className="contact__showroom-detail">
                          <span className="contact__detail-label">Phone</span>
                          <a href={`tel:${s.phone.replace(/\s/g, '')}`} className="contact__detail-value contact__detail-link">{s.phone}</a>
                        </div>
                        <div className="contact__showroom-detail">
                          <span className="contact__detail-label">Email</span>
                          <a href={`mailto:${s.email}`} className="contact__detail-value contact__detail-link">{s.email}</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trade */}
              <div className="contact__sidebar-section contact__trade">
                <span className="label">Trade Programme</span>
                <h4 className="contact__trade-title">Architects & Designers</h4>
                <div className="gold-divider gold-divider--left" style={{ margin: '14px 0 18px' }} />
                <p style={{ fontSize: '0.78rem', color: 'var(--color-silver)', lineHeight: '1.8' }}>
                  The Lumetix Trade Programme offers registered architects, interior designers, and lighting consultants access to technical documentation, project pricing, and dedicated account management.
                </p>
                <a href="mailto:trade@lumetix.com" className="contact__trade-link">
                  Apply for Trade Access →
                </a>
              </div>

              {/* Studio email */}
              <div className="contact__sidebar-section contact__studio-email">
                <span className="label">General Studio</span>
                <a href="mailto:studio@lumetix.com" className="contact__main-email">
                  studio@lumetix.com
                </a>
              </div>

            </aside>
          </div>
        </div>
      </section>

    </div>
  )
}
