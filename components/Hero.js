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
            <a href="#services" className="btn btn--primary">Explore Our Services</a>
            <a href="#contact" className="btn btn--ghost">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
