import Image from 'next/image'

export default function MeetPete() {
  return (
    <section className="meet-pete" aria-label="Meet Pete Allcock">
      <div className="container">
        <div className="meet-pete__grid fade-up">

          <div className="meet-pete__photo-wrap">
            {/* TODO: Pete — place pete-allcock.jpg in public/images/ */}
            <Image
              src="/images/pete-allcock.jpg"
              alt="Pete Allcock, founder of AV Sales Consulting"
              width={220}
              height={264}
              className="meet-pete__photo"
            />
          </div>

          <div>
            <p className="section-label">Meet the Founder</p>
            <h2 className="section-heading" style={{ marginBottom: '28px' }}>Pete Allcock</h2>

            <p className="meet-pete__bio">
              Pete Allcock is the founder of AV Sales Consulting, with over 15 years of B2B commercial experience spanning enterprise SaaS, MarTech, AdTech, automotive, and retail. He has sold into globally recognised brands including Vodafone, Jaguar Land Rover, Sainsbury&rsquo;s Bank, Volvo, Sephora, and Decathlon.
            </p>
            <p className="meet-pete__bio">
              Comfortable operating across both leadership and senior individual contributor roles, Pete brings the same rigour to a six-figure pipeline build as to mentoring a commercial team. He founded AV Sales Consulting to give ambitious businesses direct access to that experience, without the overhead of a full-time hire.
            </p>

            <a
              href="https://www.linkedin.com/in/peteallcock/?utm_source=AVSales&utm_medium=Website&utm_campaign=Organic"
              target="_blank"
              rel="noopener noreferrer"
              className="meet-pete__linkedin"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
              Connect with Pete on LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
