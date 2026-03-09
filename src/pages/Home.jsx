import { Link } from 'react-router-dom'
import './Home.css'

const collections = [
  {
    id: 'aura',
    name: 'Aura Series',
    tagline: 'Atmospheric Brilliance',
    description:
      'Sculptural pendant forms that transform ambient light into a living presence. Each piece is individually blown from borosilicate glass in our Venetian atelier.',
    material: 'Borosilicate Glass · Brushed Brass',
    icon: '◎',
  },
  {
    id: 'zenith',
    name: 'Zenith Collection',
    tagline: 'Architectural Precision',
    description:
      'Where industrial geometry meets couture finish. Precision-machined aluminium housings paired with hand-polished solid brass hardware for the contemporary interior.',
    material: 'Anodised Aluminium · Solid Brass',
    icon: '◈',
  },
  {
    id: 'eclipse',
    name: 'Eclipse Range',
    tagline: 'Shadow as Medium',
    description:
      'A study in contrast. Perforated black steel casts intricate shadow constellations across walls and ceilings, turning every room into a gallery of shifting light.',
    material: 'Blackened Steel · Woven Carbon',
    icon: '◑',
  },
]

const values = [
  {
    symbol: '✦',
    title: 'Precision',
    desc: 'Every fixture is engineered to tolerances measured in microns. Geometry, material, and light output are calculated in concert.',
  },
  {
    symbol: '◇',
    title: 'Craftsmanship',
    desc: 'Hand-assembled by master artisans across four specialist European ateliers. Each piece carries a numbered plaque of authenticity.',
  },
  {
    symbol: '⊕',
    title: 'Innovation',
    desc: 'Our R&D laboratory in Zurich advances the science of light — from spectral quality to integrated intelligence systems.',
  },
]

const press = [
  { name: 'Architectural Digest', quote: 'The new standard in luxury lighting design.' },
  { name: 'Wallpaper*', quote: 'A masterclass in restraint and material excellence.' },
  { name: 'Dezeen', quote: 'Lumetix redefines what a lighting brand can be.' },
]

const testimonials = [
  {
    quote:
      '"We specified the entire Zenith Collection throughout the Marais penthouse. The quality surpassed anything we had encountered — the light itself feels considered, almost editorial."',
    author: 'Elise Fontaine',
    role: 'Principal Architect, Fontaine Atelier, Paris',
  },
  {
    quote:
      '"Lumetix pieces are not accessories — they are the architecture. The Eclipse Range in our Milan showroom stopped visitors in their tracks on opening night."',
    author: 'Marco Ricci',
    role: 'Interior Designer, Studio Ricci, Milan',
  },
]

export default function Home() {
  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
        <div className="hero__content">
          <span className="label hero__eyebrow">Est. 2014 · Paris &amp; Zurich</span>
          <h1 className="hero__title">
            Where Light<br />
            <em className="hero__title-em">Meets Art</em>
          </h1>
          <div className="gold-divider" style={{ margin: '36px auto' }} />
          <p className="hero__subtitle">
            Premium lighting objects for architecture, hospitality, and private residences.<br />
            Designed with intent. Crafted without compromise.
          </p>
          <div className="hero__cta-group">
            <Link to="/products" className="btn btn--filled">Explore Collections</Link>
            <Link to="/about" className="btn">Our Story</Link>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span className="hero__scroll-line" />
          <span className="label" style={{ fontSize: '0.55rem' }}>Scroll</span>
        </div>
      </section>

      {/* ── Collections ── */}
      <section className="section collections">
        <div className="container">
          <div className="section-header">
            <span className="label">Signature Collections</span>
            <h2>Light as a Design Language</h2>
            <div className="gold-divider" />
            <p>
              Three distinct design philosophies, each expressed through the highest-quality materials and the most refined production methods available.
            </p>
          </div>

          <div className="collections__grid">
            {collections.map((col) => (
              <article key={col.id} className="collection-card">
                <div className="collection-card__icon">{col.icon}</div>
                <div className="collection-card__body">
                  <span className="label collection-card__label">{col.tagline}</span>
                  <h3 className="collection-card__title">{col.name}</h3>
                  <div className="gold-divider gold-divider--left" style={{ margin: '18px 0' }} />
                  <p className="collection-card__desc">{col.description}</p>
                  <p className="collection-card__material">{col.material}</p>
                  <Link to="/products" className="collection-card__cta">
                    View Collection <span className="collection-card__arrow">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Values ── */}
      <section className="section values">
        <div className="values__bg-line" />
        <div className="container">
          <div className="section-header">
            <span className="label">Our Principles</span>
            <h2>The Lumetix Standard</h2>
            <div className="gold-divider" />
          </div>

          <div className="values__grid">
            {values.map((v) => (
              <div key={v.title} className="value-block">
                <div className="value-block__symbol">{v.symbol}</div>
                <h4 className="value-block__title">{v.title}</h4>
                <div className="gold-divider gold-divider--left" style={{ margin: '14px 0 16px' }} />
                <p className="value-block__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Showroom / Featured Installation ── */}
      <section className="section showroom">
        <div className="container">
          <div className="showroom__inner">
            <div className="showroom__text">
              <span className="label">Featured Installation</span>
              <h2 className="showroom__title">
                The Hôtel Lumière<br />Penthouse Suite
              </h2>
              <div className="gold-divider gold-divider--left" style={{ margin: '28px 0' }} />
              <p className="showroom__desc">
                A complete Lumetix installation across twelve rooms of Paris's most celebrated new hotel. Working with the lead interior architect, our studio developed a bespoke lighting narrative — from the elliptical Aura pendants of the grand salon to the wall-grazing Eclipse sconces lining the private gallery corridor.
              </p>
              <p className="showroom__desc" style={{ marginTop: '16px' }}>
                Over 200 individually specified fixtures across the Aura, Zenith, and Eclipse families, unified by a centralised Lumetix Smart System.
              </p>
              <Link to="/contact" className="btn" style={{ marginTop: '36px' }}>
                Discuss Your Project
              </Link>
            </div>
            <div className="showroom__visual">
              <div className="showroom__visual-inner">
                <div className="showroom__glow" />
                <div className="showroom__fixture showroom__fixture--1" />
                <div className="showroom__fixture showroom__fixture--2" />
                <div className="showroom__fixture showroom__fixture--3" />
                <div className="showroom__label">
                  <span className="label">Hôtel Lumière · Paris 8e</span>
                  <p style={{ fontSize: '0.72rem', color: 'var(--color-silver)', marginTop: '4px' }}>Complete Installation · 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Press ── */}
      <section className="section--sm press">
        <div className="container">
          <div className="press__inner">
            <span className="label press__eyebrow">As Seen In</span>
            <div className="press__list">
              {press.map((item) => (
                <div key={item.name} className="press__item">
                  <p className="press__publication">{item.name}</p>
                  <p className="press__quote">{item.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header">
            <span className="label">Client Voices</span>
            <h2>Designed With Intent,<br />Remembered Forever</h2>
            <div className="gold-divider" />
          </div>

          <div className="testimonials__grid">
            {testimonials.map((t) => (
              <blockquote key={t.author} className="testimonial-card">
                <div className="testimonial-card__mark">"</div>
                <p className="testimonial-card__quote">{t.quote}</p>
                <footer className="testimonial-card__footer">
                  <div className="gold-divider gold-divider--left" style={{ marginBottom: '16px' }} />
                  <p className="testimonial-card__author">{t.author}</p>
                  <p className="testimonial-card__role">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="home-cta">
        <div className="home-cta__glow" />
        <div className="container">
          <div className="home-cta__inner">
            <span className="label">Begin Your Journey</span>
            <h2 className="home-cta__title">Ready to Transform Your Space?</h2>
            <div className="gold-divider" style={{ margin: '28px auto' }} />
            <p className="home-cta__desc">
              Our studio works with architects, designers, and private clients worldwide.<br />
              Reach out to discuss your project or visit our Paris showroom.
            </p>
            <div className="home-cta__buttons">
              <Link to="/products" className="btn btn--filled">Explore Collections</Link>
              <Link to="/contact" className="btn">Book a Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
