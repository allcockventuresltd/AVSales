import ContactForm from './ContactForm'
import ContactDetails from './ContactDetails'

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-label="Contact us">
      <div className="container">
        <div className="contact__grid">

          <div className="fade-up">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-heading">Let&rsquo;s Talk</h2>
            <p className="contact__sub">
              Ready to accelerate your sales performance? Get in touch and we&rsquo;ll arrange a free discovery call, no commitment, no hard sell.
            </p>

            <ContactDetails />
          </div>

          <div className="fade-up">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}
