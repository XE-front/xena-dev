import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'
import { Analytics } from '@vercel/analytics/react'
import IntroLoader from './components/IntroLoader.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const pageRef = useRef(null)
  const [showLoader, setShowLoader] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mm = gsap.matchMedia(pageRef)

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.to('.scroll-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: pageRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })

      gsap.from('.hero-animate', {
        y: 14,
        opacity: 0,
        duration: 0.45,
        stagger: 0.08,
        delay: 0.8,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      })

      gsap.from('.hero-word', {
        y: 18,
        opacity: 0,
        duration: 0.65,
        stagger: 0.06,
        delay: 0.96,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      })

      const revealSelectors = [
        '.section-header',
        '.about-text',
        '.skills-columns',
        '.additional-skills',
        '.contact-grid',
      ]

      gsap.from('.facts-rule', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '.about-highlights',
          start: 'top 86%',
          once: true,
        },
      })

      gsap.from('.facts-item', {
        y: 12,
        opacity: 0,
        duration: 0.45,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.about-highlights',
          start: 'top 86%',
          once: true,
        },
      })

      gsap.from('.about-pillar', {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.about-pillars',
          start: 'top 86%',
          once: true,
        },
      })

      gsap.from('.project-card', {
        y: 24,
        opacity: 0,
        duration: 0.55,
        stagger: 0.12,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 84%',
          once: true,
        },
      })

      revealSelectors.forEach((selector) => {
        gsap.utils.toArray(selector).forEach((el) => {
          gsap.from(el, {
            y: 16,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              once: true,
            },
          })
        })
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <div className="page" ref={pageRef}>
      {showLoader && <IntroLoader onComplete={() => setShowLoader(false)} />}
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Analytics />
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
