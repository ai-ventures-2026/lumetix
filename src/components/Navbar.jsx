import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Wordmark */}
        <Link to="/" className="navbar__wordmark" onClick={handleNavClick}>
          <span className="navbar__wordmark-l">L</span>UMETIX
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Primary navigation">
          <NavLink to="/" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} end>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
            About
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
            Collections
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
            Contact
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="navbar__cta-wrap">
          <Link to="/contact" className="navbar__cta">
            Book Consultation
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="navbar__mobile-nav">
          <NavLink to="/" className="navbar__mobile-link" onClick={handleNavClick} end>Home</NavLink>
          <NavLink to="/about" className="navbar__mobile-link" onClick={handleNavClick}>About</NavLink>
          <NavLink to="/products" className="navbar__mobile-link" onClick={handleNavClick}>Collections</NavLink>
          <NavLink to="/contact" className="navbar__mobile-link" onClick={handleNavClick}>Contact</NavLink>
          <Link to="/contact" className="btn" style={{ marginTop: '32px', fontSize: '0.6rem' }} onClick={handleNavClick}>
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  )
}
