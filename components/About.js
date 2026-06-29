'use client'

import { useEffect, useRef, useState } from 'react'

function StatCard({ prefix = '', target, suffix = '', text }) {
  const [value, setValue] = useState(text ? `${prefix}${text}` : `${prefix}0${suffix}`)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    if (text) return
    const el = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || animated.current) return
      animated.current = true
      const duration = 1500
      const start = performance.now()
      const update = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(`${prefix}${Math.round(eased * target)}${suffix}`)
        if (progress < 1) requestAnimationFrame(update)
      }
      requestAnimationFrame(update)
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [prefix, target, suffix, text])

  return <div className="stat-card__number" ref={ref}>{value}</div>
}

export default function About() {
  return (
    <section id="about" className="about" aria-label="About AV Sales Consulting">
      <div className="container">
        <div className="about__grid">

          <div className="fade-up">
            <p className="section-label">Who We Are</p>
            <h2 className="section-heading">Your Partner in Sales Growth</h2>
            <p className="about__intro">
              AV Sales Consulting is a specialist sales consultancy founded to help businesses of all sizes unlock their full revenue potential. With deep expertise across B2B sales strategy, pipeline development, and team performance, we embed ourselves in your business to deliver measurable, lasting results.
            </p>
            <p className="about__intro">
              We don&rsquo;t just offer advice. We embed ourselves in your business, drive the actions, and stay accountable for the results.
            </p>
          </div>

          <div className="about__stats fade-up">
            <div className="stat-card">
              <StatCard target={15} suffix="+" />
              <div className="stat-card__label">Years Experience</div>
            </div>
            <div className="stat-card">
              <StatCard prefix="£" target={5} suffix="M+" />
              <div className="stat-card__label">Revenue Generated</div>
            </div>
            <div className="stat-card">
              <StatCard text="Board-Level" />
              <div className="stat-card__label">Stakeholder Engagement</div>
            </div>
            <div className="stat-card">
              <StatCard text="Complex B2B" />
              <div className="stat-card__label">Sales &amp; Growth Strategy</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
