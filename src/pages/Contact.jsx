import { useState } from 'react'
import logo from '../assets/AAWBA .png'
import { useI18n } from '../i18n/useI18n.js'
import './Contact.css'

const CONTACT_EMAIL = 'info@aawba.org'

function Contact() {
  const { t } = useI18n()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const CONTACT_DETAILS = [
    { label: t('contact.labels.email'), value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { label: t('contact.labels.phone'), value: '(781) 363-9023', href: 'tel:+17813639023' },
    { label: t('contact.labels.address'), value: '100 Galen St #204\nWatertown, MA 02472' },
  ]

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
          <p className="contact-hero__eyebrow">{t('contact.hero.eyebrow')}</p>
          <h1>{t('contact.hero.heading')}</h1>
          <p className="contact-hero__desc">{t('contact.hero.desc')}</p>
        </div>
      </section>

      <section className="contact">
        <div className="contact__inner">
          <div className="contact__info">
            <p className="contact__eyebrow">{t('contact.info.eyebrow')}</p>
            <h2>{t('contact.info.heading')}</h2>

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
              <p className="contact__label">{t('contact.labels.followUs')}</p>
              <div className="contact__socials">
                <span className="contact__social" aria-hidden="true" />
                <span className="contact__social" aria-hidden="true" />
                <span className="contact__social" aria-hidden="true" />
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="contact__field">
              {t('contact.form.name')}
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange('name')}
              />
            </label>

            <label className="contact__field">
              {t('contact.form.email')}
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange('email')}
              />
            </label>

            <label className="contact__field">
              {t('contact.form.message')}
              <textarea
                name="message"
                rows="6"
                required
                value={form.message}
                onChange={handleChange('message')}
              />
            </label>

            <button type="submit" className="contact__submit">
              {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
