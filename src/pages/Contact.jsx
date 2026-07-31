import { useState } from 'react'
import logo from '../assets/AAWBA .png'
import './Contact.css'

const CONTACT_EMAIL = 'hello@aawba.org'

const CONTACT_DETAILS = [
  { label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: 'Phone', value: '(555) 010-1234', href: 'tel:+15550101234' },
  { label: 'Address', value: '123 Community Way, Suite 200' },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = `Message from ${form.name}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <section className="contact-hero">
        <img className="contact-hero__watermark" src={logo} alt="" aria-hidden="true" />
        <div className="contact-hero__content">
          <p className="contact-hero__eyebrow">Contact / Get Involved</p>
          <h1>Let&apos;s build this together.</h1>
          <p className="contact-hero__desc">
            Whether it&apos;s volunteering, a partnership, or joining our
            advisor network — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="contact">
        <div className="contact__inner">
          <div className="contact__info">
            <p className="contact__eyebrow">Get in Touch</p>
            <h2>Reach us directly, or use the form</h2>

            {CONTACT_DETAILS.map((item) => (
              <div className="contact__item" key={item.label}>
                <p className="contact__label">{item.label}</p>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <p className="contact__value">{item.value}</p>
                )}
              </div>
            ))}

            <div className="contact__item">
              <p className="contact__label">Follow Us</p>
              <div className="contact__socials">
                <span className="contact__social" aria-hidden="true" />
                <span className="contact__social" aria-hidden="true" />
                <span className="contact__social" aria-hidden="true" />
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="contact__field">
              Name
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange('name')}
              />
            </label>

            <label className="contact__field">
              Email
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange('email')}
              />
            </label>

            <label className="contact__field">
              Message
              <textarea
                name="message"
                rows="6"
                required
                value={form.message}
                onChange={handleChange('message')}
              />
            </label>

            <button type="submit" className="contact__submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
