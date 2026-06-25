const companies = [
  { name: 'Slater & Gordon',    style: { fontWeight: 500, letterSpacing: '0.5px' } },
  { name: 'Volvo',              style: { fontWeight: 700, letterSpacing: '3px',  textTransform: 'uppercase', fontSize: '1.05rem' } },
  { name: "Sainsbury's Bank",   style: { fontWeight: 400, letterSpacing: '0.2px' } },
  { name: 'QVC',                style: { fontWeight: 800, letterSpacing: '3px',  textTransform: 'uppercase', fontSize: '1.1rem' } },
  { name: 'Western Union',      style: { fontWeight: 500, letterSpacing: '0.3px' } },
  { name: 'Sephora',            style: { fontWeight: 700, letterSpacing: '4px',  textTransform: 'uppercase' } },
  { name: 'Decathlon',          style: { fontWeight: 800, letterSpacing: '1px',  textTransform: 'uppercase', fontSize: '0.95rem' } },
  { name: 'New Era Cap',        style: { fontWeight: 600, letterSpacing: '2px',  textTransform: 'uppercase', fontSize: '0.85rem' } },
  { name: 'Jaguar Land Rover',  style: { fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.8rem' } },
  { name: 'Vodafone',           style: { fontWeight: 700, letterSpacing: '0.5px' } },
  { name: 'Space NK',           style: { fontWeight: 400, letterSpacing: '3px',  textTransform: 'uppercase', fontSize: '0.88rem' } },
  { name: 'Sally Beauty',       style: { fontWeight: 500, letterSpacing: '0.5px' } },
]

export default function LogoBanner() {
  return (
    <div className="logo-banner" aria-label="Clients we have worked with">
      <div className="logo-banner__label" aria-hidden="true">Portfolio of wins</div>
      <div className="logo-banner__track-wrapper">
        <div className="logo-banner__track" aria-hidden="true">
          {/* Duplicated twice for seamless loop */}
          {[...companies, ...companies].map((co, i) => (
            <span key={i} className="logo-banner__item" style={co.style}>
              {co.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
