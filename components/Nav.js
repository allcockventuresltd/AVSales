'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  const scrollTo = (e, id) => {
    e.preventDefault()
    close()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
        <div className="container">
          <div className="nav__inner">

            <a href="#home" className="nav__logo" onClick={(e) => scrollTo(e, 'home')} aria-label="AV Sales Consulting, home">
              <Image src="/images/logo.png" alt="AV Sales Consulting logo" width={54} height={54} className="nav__logo-img" priority />
              <span className="nav__logo-wordmark">
                <span className="nav__logo-name">AV Sales</span>
                <span className="nav__logo-sub">Consulting</span>
              </span>
            </a>

            <ul className="nav__links" role="list">
              {[['home','Home'],['about','About'],['services','Services'],['how-we-work','How We Work'],['why','Why Us']].map(([id, label]) => (
                <li key={id}><a href={`#${id}`} onClick={(e) => scrollTo(e, id)}>{label}</a></li>
              ))}
              <li>
                <a href="#contact" className="nav__cta" onClick={(e) => scrollTo(e, 'contact')}>Get In Touch</a>
              </li>
            </ul>

            <button
              className={`nav__hamburger${open ? ' open' : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              aria-controls="mobileNav"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        <nav className={`nav__mobile${open ? ' open' : ''}`} id="mobileNav" aria-label="Mobile navigation">
          {[['home','Home'],['about','About'],['services','Services'],['how-we-work','How We Work'],['why','Why Us'],['contact','Contact']].map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={(e) => scrollTo(e, id)}>{label}</a>
          ))}
        </nav>
      </nav>
    </header>
  )
}
