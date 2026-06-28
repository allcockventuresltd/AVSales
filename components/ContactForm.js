'use client'

import { useState } from 'react'

function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Please enter a valid email address.'
  if (!fields.company.trim()) errors.company = 'Please enter your company name.'
  if (!fields.message.trim()) errors.message = 'Please enter a message.'
  return errors
}

export default function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const set = (key) => (e) => {
    setFields(f => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors(err => ({ ...err, [key]: null }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(fields)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({ event: 'form_submission' })
        }
      } else throw new Error()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form__success visible" role="status">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
        Thanks, we&rsquo;ll be in touch within one business day.
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="form__row">
        <div className="form__group">
          <label className="form__label" htmlFor="name">Full Name <span aria-hidden="true">*</span></label>
          <input className={`form__input${errors.name ? ' error' : ''}`} type="text" id="name" value={fields.name} onChange={set('name')} placeholder="Jane Smith" required autoComplete="name" />
          {errors.name && <span className="form__error visible" role="alert">{errors.name}</span>}
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
          <input className={`form__input${errors.email ? ' error' : ''}`} type="email" id="email" value={fields.email} onChange={set('email')} placeholder="jane@company.com" required autoComplete="email" />
          {errors.email && <span className="form__error visible" role="alert">{errors.email}</span>}
        </div>
      </div>

      <div className="form__row">
        <div className="form__group">
          <label className="form__label" htmlFor="company">Company <span aria-hidden="true">*</span></label>
          <input className={`form__input${errors.company ? ' error' : ''}`} type="text" id="company" value={fields.company} onChange={set('company')} placeholder="Acme Ltd" required autoComplete="organization" />
          {errors.company && <span className="form__error visible" role="alert">{errors.company}</span>}
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="phone">Phone <span className="form__label-optional">(optional)</span></label>
          <input className="form__input" type="tel" id="phone" value={fields.phone} onChange={set('phone')} placeholder="+44 7700 900000" autoComplete="tel" />
        </div>
      </div>

      <div className="form__group">
        <label className="form__label" htmlFor="message">Message <span aria-hidden="true">*</span></label>
        <textarea className={`form__textarea${errors.message ? ' error' : ''}`} id="message" value={fields.message} onChange={set('message')} placeholder="Tell us about your business and the sales challenges you're facing..." required />
        {errors.message && <span className="form__error visible" role="alert">{errors.message}</span>}
      </div>

      {status === 'error' && (
        <p className="form__error visible">Something went wrong. Please email us directly at <a href="mailto:pete@avsalesconsulting.com">pete@avsalesconsulting.com</a></p>
      )}

      <button type="submit" className="btn btn--primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
