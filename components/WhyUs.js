const reasons = [
  {
    title: 'Hands-On Partnership',
    desc: "We don't write reports and disappear. We work inside your business until we see results, as invested in your success as you are.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Commercial Focus',
    desc: 'Every recommendation is measured against one thing: revenue impact. We cut through the noise and focus on what moves the number.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: 'Sector Agnostic',
    desc: "We've worked across SaaS, professional services, manufacturing, automotive, software, and more, bringing cross-sector insight that drives fresh thinking.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: 'No Long-Term Lock-In',
    desc: 'Flexible engagements designed around your needs, not ours. We earn our place by delivering value, every single month.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="why" aria-label="Why choose AV Sales Consulting">
      <div className="container">
        <div className="section-header section-header--center fade-up">
          <p className="section-label section-label--light">Why Choose Us</p>
          <h2 className="section-heading section-heading--white">Why AV Sales Consulting?</h2>
        </div>
        <div className="why__grid">
          {reasons.map((r) => (
            <div key={r.title} className="why-card fade-up">
              <div className="why-card__icon" aria-hidden="true">{r.icon}</div>
              <div>
                <h3 className="why-card__title">{r.title}</h3>
                <p className="why-card__desc">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
