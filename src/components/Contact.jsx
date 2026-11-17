import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)
  const formRef = useRef(null)

  const handleChange = (event) => {
    const { id, value } = event.target
    setForm((prev) => ({ ...prev, [id]: value }))
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }))
    }
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) {
      nextErrors.name = 'Enter your name.'
    }
    if (!form.email.trim()) {
      nextErrors.email = 'Enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Enter a valid email address, such as name@example.com.'
    }
    if (!form.message.trim()) {
      nextErrors.message = 'Enter a short message.'
    }
    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      const firstInvalid = Object.keys(nextErrors)[0]
      document.getElementById(firstInvalid)?.focus()
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus(
        'The contact form is not configured yet. Email xenaemit1231@gmail.com directly instead.',
      )
      return
    }

    if (isSending) return

    try {
      setIsSending(true)
      setStatus('Sending message…')

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })

      setStatus('Message sent. I will get back to you soon.')
      setForm({ name: '', email: '', message: '' })
      setErrors({})
    } catch (error) {
      console.error('EmailJS error', error)
      setStatus(
        'Unable to send your message. Check your connection and try again, or email xenaemit1231@gmail.com directly.',
      )
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div className="contact-text">
          <div className="section-header section-header-compact">
            <span className="section-index" aria-hidden="true">
              04
            </span>
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="section-title">Get in Touch</h2>
            </div>
          </div>
          <p className="contact-copy">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision.
          </p>
          <ul className="contact-list">
            <li className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <div>
                <span className="contact-label">Email</span>
                <a className="contact-value contact-link" href="mailto:xenaemit1231@gmail.com">
                  xenaemit1231@gmail.com
                </a>
              </div>
            </li>
            <li className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-value">General Santos City, Philippines</span>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} ref={formRef} noValidate>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Doe"
              value={form.name}
              onChange={handleChange}
              aria-invalid={errors.name ? 'true' : undefined}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="field-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              value={form.email}
              onChange={handleChange}
              aria-invalid={errors.email ? 'true' : undefined}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="field-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell me about your project or idea…"
              value={form.message}
              onChange={handleChange}
              aria-invalid={errors.message ? 'true' : undefined}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="field-error">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn-primary full-width" disabled={isSending}>
            {isSending ? 'Sending…' : 'Send Message'}
          </button>

          <p className="form-status" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
