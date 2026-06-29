export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Hero">
      <div className="hero__pattern" aria-hidden="true" />
      <div className="container">
        <div className="hero__content">
          <p className="hero__eyebrow">UK B2B Sales Consulting</p>
          <h1 className="hero__heading">
            Driving Revenue.<br />
            Building Relationships.<br />
            <span>Delivering Results.</span>
          </h1>
          <p className="hero__sub">
            AV Sales Consulting partners with ambitious businesses to accelerate sales performance and build high-converting pipelines.
          </p>
          <div className="hero__ctas">
            <a href="https://calendly.com/pete-avsalesconsulting/30min" className="btn btn--primary" target="_blank" rel="noopener noreferrer">Book a Discovery Call</a>
            <a href="#services" className="btn btn--ghost">Explore Our Services</a>
          </div>
        </div>
      </div>
    </section>
  )
}
