const testimonials = [
  {
    text: "AV Sales Consultancy transformed our pipeline in under 90 days. The ROI was incredible — we saw a measurable impact on revenue within weeks of them starting.",
    author: 'Managing Director',
    role: 'B2B SaaS Company',
  },
  {
    text: "They felt like a genuine extension of our own team. Genuinely invested in our success and brought energy and expertise we didn't have in-house.",
    author: 'Chief Executive Officer',
    role: 'Professional Services Firm',
  },
  {
    text: 'Our sales conversion rate increased by 40% after working with AV. Structured, practical, and relentlessly focused on results. Highly recommended.',
    author: 'Sales Director',
    role: 'Manufacturing Business',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials" aria-label="Client testimonials">
      <div className="container">
        <div className="section-header section-header--center fade-up">
          <p className="section-label">Client Stories</p>
          <h2 className="section-heading">What Our Clients Say</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="testimonial-card fade-up">
              <span className="testimonial-card__quote" aria-hidden="true">&ldquo;</span>
              <p className="testimonial-card__text">{t.text}</p>
              <footer>
                <div className="testimonial-card__author">{t.author}</div>
                <div className="testimonial-card__role">{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
