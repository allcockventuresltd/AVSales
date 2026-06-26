const services = [
  {
    title: 'Interim Sales Leadership',
    desc: 'Need a fractional Head of Sales or Sales Director? We provide experienced interim leaders who hit the ground running and drive immediate impact.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: 'Sales Strategy & Planning',
    desc: 'We audit your existing sales process and build a bespoke strategy aligned to your growth targets, removing friction and identifying the fastest path to revenue.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/><path d="M5 20V10l7-7 7 7v10"/><rect x="9" y="14" width="6" height="6"/>
      </svg>
    ),
  },
  {
    title: 'Go-To-Market Strategy',
    desc: 'Launching a new product or entering a new market? We build GTM plans that generate early traction fast and set you up for sustained growth.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: 'Pipeline Development',
    desc: 'From lead generation to pipeline management, we help you build a consistent, scalable flow of qualified opportunities that converts.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/>
        <line x1="9" y1="6" x2="15" y2="6"/><line x1="7.5" y1="8.5" x2="10.5" y2="15.5"/><line x1="16.5" y1="8.5" x2="13.5" y2="15.5"/>
      </svg>
    ),
  },
  {
    title: 'Sales Team Coaching',
    desc: 'We upskill your sales team with practical coaching, call reviews, and performance frameworks that stick and drive real results.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'CRM & Process Optimisation',
    desc: 'We audit and optimise your CRM setup and sales processes so your team spends time selling, not administrating.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        <polyline points="6 8 10 11 14 8 18 11"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="services" aria-label="Our services">
      <div className="container">
        <div className="section-header fade-up">
          <p className="section-label">What We Do</p>
          <h2 className="section-heading">Specialist Services Built for Growth</h2>
        </div>
        <div className="services__grid">
          {services.map((s) => (
            <article key={s.title} className="service-card fade-up">
              <div className="service-card__icon" aria-hidden="true">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
