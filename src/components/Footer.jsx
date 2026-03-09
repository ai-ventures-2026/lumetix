import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__brand">
              <Link to="/" className="footer__wordmark">
                <span className="footer__wordmark-l">L</span>UMETIX
              </Link>
              <p className="footer__tagline">Where Light Meets Art</p>
              <div className="gold-divider gold-divider--left" style={{ marginTop: '24px' }} />
              <p className="footer__desc">
                Premium lighting design for the most discerning spaces. Handcrafted in Europe, delivered worldwide.
              </p>
            </div>

            {/* Navigation Column */}
            <div className="footer__col">
              <h4 className="footer__col-title">Navigation</h4>
              <nav className="footer__nav">
                <Link to="/" className="footer__link">Home</Link>
                <Link to="/about" className="footer__link">About</Link>
                <Link to="/products" className="footer__link">Collections</Link>
                <Link to="/contact" className="footer__link">Contact</Link>
              </nav>
            </div>

            {/* Collections Column */}
            <div className="footer__col">
              <h4 className="footer__col-title">Collections</h4>
              <nav className="footer__nav">
                <Link to="/products" className="footer__link">Aura Series</Link>
                <Link to="/products" className="footer__link">Zenith Collection</Link>
                <Link to="/products" className="footer__link">Eclipse Range</Link>
                <Link to="/products" className="footer__link">Smart Systems</Link>
              </nav>
            </div>

            {/* Contact Column */}
            <div className="footer__col">
              <h4 className="footer__col-title">Contact</h4>
              <div className="footer__contact-info">
                <p className="footer__contact-item">
                  <span className="footer__contact-label">Showroom</span>
                  14 Rue du Design, Paris 75008
                </p>
                <p className="footer__contact-item">
                  <span className="footer__contact-label">Enquiries</span>
                  studio@lumetix.com
                </p>
                <p className="footer__contact-item">
                  <span className="footer__contact-label">Phone</span>
                  +33 1 42 68 00 00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__legal">
              &copy; {year} Lumetix. All rights reserved.
            </p>
            <div className="footer__legal-links">
              <a href="#" className="footer__legal-link">Privacy Policy</a>
              <a href="#" className="footer__legal-link">Terms</a>
              <a href="#" className="footer__legal-link">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
