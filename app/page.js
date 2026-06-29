import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import LogoBanner from '@/components/LogoBanner'
import About from '@/components/About'
import MeetPete from '@/components/MeetPete'
import Services from '@/components/Services'
import HowWeWork from '@/components/HowWeWork'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoBanner />
        <About />
        <Services />
        <WhyUs />
        <HowWeWork />
        <MeetPete />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  )
}
