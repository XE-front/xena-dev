import { useState, useEffect, useRef } from 'react'

const navItems = [
  { id: 'hero', href: '#hero', label: 'Home' },
  { id: 'about', href: '#about', label: 'About' },
  { id: 'skills', href: '#skills', label: 'Skills' },
  { id: 'projects', href: '#projects', label: 'Projects' },
  { id: 'contact', href: '#contact', label: 'Contact' },
]

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')
  const toggleRef = useRef(null)

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const handleLinkClick = (id) => {
    setActiveId(id)
    setIsOpen(false)
  }

  return (
    <header className="nav-wrapper">
      <div className="container nav">
        <a className="nav-logo" href="#hero">
          &lt;Xena/&gt;
        </a>
        <button
          ref={toggleRef}
          type="button"
          className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}
        >
          {navItems.map((item) => {
            const isActive = activeId === item.id
            return (
              <a
                key={item.href}
                href={item.href}
                className={isActive ? 'is-active' : undefined}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
      <span className="scroll-progress" aria-hidden="true" />
    </header>
  )
}

export default Nav
