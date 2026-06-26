const testimonials = [
  {
    text: "Pete brings an exceptional mix of strategic thinking and genuine people skills - he knows how to open doors, but more importantly, how to build lasting relationships that convert into real opportunities.",
    author: 'Senior Sales Executive',
    role: 'B2B SaaS Company',
  },
  {
    text: "Pete is highly focused to deliver successful projects whilst also having some of the very best interpersonal skills I have seen in my career. He is adaptable to change and highly resilient which is a key strength.",
    author: 'Sales Director',
    role: 'B2B SaaS Company',
  },
  {
    text: "Pete is the best salesperson I have ever had the pleasure to work with in my career. He is outstanding at all aspects of the sales process and working with all prospects.",
    author: 'Head of Strategy',
    role: 'Digital Marketing Agency',
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
