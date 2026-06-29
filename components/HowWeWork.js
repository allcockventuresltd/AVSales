const models = [
  {
    title: 'Retained Support',
    desc: 'Ongoing fractional or interim sales leadership on a monthly retainer. Ideal for businesses that need consistent senior sales input without the cost of a full-time hire.',
  },
  {
    title: 'Project-Based',
    desc: 'A defined scope, clear deliverables, and a fixed timeline. Perfect for go-to-market launches, sales audits, or pipeline builds.',
  },
  {
    title: 'Day & Hourly Rates',
    desc: 'For shorter engagements, coaching sessions, or ad-hoc strategic support, we offer day and hourly rates to suit your needs.',
  },
]

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="how-we-work" aria-label="How we work">
      <div className="container">

        <div className="section-header fade-up">
          <p className="section-label">Flexible Engagements</p>
          <h2 className="section-heading">How We Work</h2>
        </div>

        <p className="how-we-work__intro fade-up">
          Every business is different, so we keep our engagements flexible. Whether you need ongoing strategic support or a focused project to solve a specific challenge, we&rsquo;ll structure something that works for your business and budget.
        </p>

        <div className="how-we-work__grid">
          {models.map((m) => (
            <div key={m.title} className="service-card fade-up">
              <h3 className="service-card__title">{m.title}</h3>
              <p className="service-card__desc">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="how-we-work__cta fade-up">
          <p>Not sure which fits? That&rsquo;s what the discovery call is for.</p>
          <a href="#contact">Book a Free Discovery Call &rarr;</a>
        </div>

      </div>
    </section>
  )
}
