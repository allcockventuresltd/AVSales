import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-label="Contact us">
      <div className="container">
        <div className="contact__grid">

          <div className="fade-up">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-heading">Let&rsquo;s Talk</h2>
            <p className="contact__sub">
              Ready to accelerate your sales performance? Get in touch and we&rsquo;ll arrange a free 30-minute discovery call &mdash; no commitment, no hard sell.
            </p>

            <div className="contact__detail">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:hello@avsalesconsultancy.co.uk">hello@avsalesconsultancy.co.uk</a>
            </div>

            <div className="contact__detail">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
              <a href="https://www.linkedin.com/company/avsalesconsultancy" target="_blank" rel="noopener noreferrer">
                LinkedIn &mdash; AV Sales Consultancy
              </a>
            </div>
          </div>

          <div className="fade-up">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}
