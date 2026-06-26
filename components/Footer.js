import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer__main">

          <a href="#home" className="nav__logo" aria-label="AV Sales Consulting — back to top">
            <Image src="/images/logo.png" alt="AV Sales Consulting logo" width={40} height={40} className="nav__logo-img" />
            <span className="nav__logo-wordmark">
              <span className="nav__logo-name">AV Sales</span>
              <span className="nav__logo-sub">Consulting</span>
            </span>
          </a>

          <nav aria-label="Footer navigation">
            <ul className="footer__nav" role="list">
              {[['Home','home'],['About','about'],['Services','services'],['Why Us','why'],['Contact','contact']].map(([label, id]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="footer__tagline">Accelerating Sales.<br />Creating Value.</p>

        </div>

        <div className="footer__bottom">
          <span>&copy; 2026 AV Sales Consulting Ltd. All rights reserved.</span>
          <span>Registered in England &amp; Wales</span>
        </div>
      </div>
    </footer>
  )
}
