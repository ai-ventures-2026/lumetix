import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

const categories = [
  {
    id: 'pendant',
    label: 'Pendant Lighting',
    description: 'Sculptural suspended forms that define the vertical dimension of a space.',
    products: [
      {
        id: 'p1',
        name: 'Aura Ovale',
        series: 'Aura Series',
        price: '£4,200',
        finish: 'Hand-blown Borosilicate · Brushed Brass',
        spec: '∅ 48cm · E27 · Max 60W LED',
        lead: '8–10 weeks',
        desc: 'An elliptical glass form of singular purity. The borosilicate shell is blown to a 3mm wall thickness, producing a diffusion quality that transforms LED output into something approaching candlelight. The brass canopy and ceiling rose are machined from solid bar stock.',
      },
      {
        id: 'p2',
        name: 'Zenith Linear',
        series: 'Zenith Collection',
        price: '£6,800',
        finish: 'Anodised Aluminium · Polished Brass',
        spec: '120cm × 8cm · Integrated LED · 3000K CRI95',
        lead: '10–12 weeks',
        desc: 'A 1,200mm suspension bar housing a continuous LED array at CRI95 and 3000K. The extruded aluminium profile achieves a wall thickness of 2.4mm, eliminating visual mass while delivering 2,800 lumens of precision directional output.',
      },
      {
        id: 'p3',
        name: 'Eclipse Cluster',
        series: 'Eclipse Range',
        price: '£9,400',
        finish: 'Blackened Steel · Satin Brass',
        spec: 'Variable · 7× E14 · Lumetix Dimmer Ready',
        lead: '12–16 weeks',
        desc: 'Seven perforated steel spheres in a bespoke cluster configuration. Each sphere casts an individual constellation of light across surrounding surfaces. Canopy geometry and drop heights are specified per installation — no two Eclipse Clusters are identical.',
      },
    ],
  },
  {
    id: 'sconce',
    label: 'Wall Sconces',
    description: 'Wall-mounted light as architectural relief — defining planes, textures, and moods.',
    products: [
      {
        id: 's1',
        name: 'Aura Aplique',
        series: 'Aura Series',
        price: '£1,850',
        finish: 'Mouth-blown Glass · Antique Brass',
        spec: '22cm × 14cm · G9 · Max 25W LED',
        lead: '6–8 weeks',
        desc: 'The wall-mounted sibling to the Ovale pendant. A half-round borosilicate shade mounts flush to the wall on an antique-finished brass backplate. The glass is shaped in a single breath — the subtle variation in form is the mark of the maker.',
      },
      {
        id: 's2',
        name: 'Zenith Bracket',
        series: 'Zenith Collection',
        price: '£2,400',
        finish: 'Raw Aluminium · Polished Brass',
        spec: '36cm projection · Integrated LED · Dimmable',
        lead: '8–10 weeks',
        desc: 'An extruded aluminium arm projects 360mm from the wall, terminating in a precision-machined LED head with a 20° beam angle. The joinery between arm and wall plate — a brass mechanical collar — is the focal detail of the piece.',
      },
      {
        id: 's3',
        name: 'Eclipse Flush',
        series: 'Eclipse Range',
        price: '£3,100',
        finish: 'Blackened Mild Steel · Raw Steel Interior',
        spec: '∅ 34cm · E27 · Max 40W LED',
        lead: '8–12 weeks',
        desc: 'A flat disc of blackened steel, perforated in a pattern derived from studies of Murmuration — the collective movement of starlings. When lit, the disc throws a field of pinpoint light across the adjacent wall that shifts in apparent density with viewing angle.',
      },
    ],
  },
  {
    id: 'floor',
    label: 'Floor & Table',
    description: 'Portable light objects designed to move through a home as the occupant does.',
    products: [
      {
        id: 'f1',
        name: 'Aura Colonna',
        series: 'Aura Series',
        price: '£5,600',
        finish: 'Blown Glass · Solid Brass Stem · Marble Base',
        spec: 'H 145cm · E27 · Max 60W LED',
        lead: '10–14 weeks',
        desc: 'A floor lamp of considerable presence. The hand-blown glass shade — 380mm in diameter — is supported on a 1,200mm solid brass stem, itself seated in a 280mm Calacatta marble base. The weight and balance have been engineered to feel stable without appearing heavy.',
      },
      {
        id: 'f2',
        name: 'Zenith Task',
        series: 'Zenith Collection',
        price: '£1,950',
        finish: 'Anodised Aluminium · Polished Brass Joint',
        spec: 'H 38–60cm adjustable · Integrated LED · USB-C',
        lead: '4–6 weeks',
        desc: 'A precision table lamp for the working surface. The aluminium arm adjusts through 140° and telescopes from 380mm to 600mm. An integrated USB-C port sits flush in the base. The LED head provides 600 lumens of CRI97 light — the highest spectral quality available in the Lumetix portfolio.',
      },
      {
        id: 'f3',
        name: 'Eclipse Arc',
        series: 'Eclipse Range',
        price: '£7,200',
        finish: 'Blackened Steel · Woven Carbon Fibre Arm',
        spec: 'H 190cm · Reach 120cm · E27 · Lumetix Dimmer',
        lead: '12–16 weeks',
        desc: 'An arc floor lamp of extreme material contrast: the upright column is hand-forged blackened steel; the extending arm is woven carbon fibre — stronger than steel at one-fifth the weight. The perforated steel shade casts the Eclipse light pattern across the ceiling above.',
      },
    ],
  },
  {
    id: 'smart',
    label: 'Smart Lighting Systems',
    description: 'Intelligent control platforms that orchestrate light across an entire building.',
    products: [
      {
        id: 'sm1',
        name: 'Lumetix OS — Residential',
        series: 'Smart Systems',
        price: 'From £8,400',
        finish: 'Brushed Aluminium Control Panel · App-integrated',
        spec: 'Up to 64 zones · 0.1% dimming resolution · Circadian programming',
        lead: 'Bespoke installation',
        desc: 'A whole-home lighting control system designed specifically for Lumetix installations. The proprietary protocol achieves 0.1% dimming resolution — eliminating flicker at any level — and integrates circadian rhythm programming that adjusts colour temperature from 2,700K at dusk to 4,000K at noon. Pairs with all Lumetix fixtures.',
      },
      {
        id: 'sm2',
        name: 'Lumetix OS — Hospitality',
        series: 'Smart Systems',
        price: 'From £24,000',
        finish: 'Commercial-grade Hardware · BACnet / KNX Integration',
        spec: 'Unlimited zones · DALI-2 · Guest scene control · API access',
        lead: 'Bespoke installation',
        desc: 'The commercial-scale version of the Lumetix control platform, developed for hotels, restaurants, and cultural spaces. Native DALI-2 support, KNX integration, and an open API allow the system to communicate with any BMS. Guest scene control panels are produced in custom finishes to match the wider interior specification.',
      },
    ],
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('pendant')

  const current = categories.find((c) => c.id === activeCategory)

  return (
    <div className="products">

      {/* ── Page Hero ── */}
      <section className="page-hero products-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <div className="page-hero__content">
            <span className="label page-hero__eyebrow">The Collections</span>
            <h1 className="page-hero__title">
              Objects of<br />
              <em className="page-hero__em">Extraordinary Light</em>
            </h1>
            <div className="gold-divider" style={{ margin: '32px auto' }} />
            <p className="page-hero__sub">
              Eleven signature fixtures across four categories. Each designed and fabricated to the highest standards of European craft.
            </p>
          </div>
        </div>
      </section>

      {/* ── Category Tabs ── */}
      <div className="products__tabs-wrap">
        <div className="container">
          <div className="products__tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`products__tab${activeCategory === cat.id ? ' products__tab--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Products Grid ── */}
      <section className="section products__section">
        <div className="container">
          <div className="products__category-header">
            <h2 className="products__category-title">{current.label}</h2>
            <p className="products__category-desc">{current.description}</p>
          </div>

          <div className={`products__grid${current.id === 'smart' ? ' products__grid--2col' : ''}`}>
            {current.products.map((product) => (
              <article key={product.id} className="product-card">
                {/* Visual placeholder */}
                <div className="product-card__visual">
                  <div className="product-card__visual-glow" />
                  <div className="product-card__visual-shape" />
                  <span className="product-card__series-badge">{product.series}</span>
                </div>

                <div className="product-card__body">
                  <div className="product-card__header">
                    <h3 className="product-card__name">{product.name}</h3>
                    <p className="product-card__price">{product.price}</p>
                  </div>

                  <div className="gold-divider gold-divider--left" style={{ margin: '18px 0' }} />

                  <p className="product-card__desc">{product.desc}</p>

                  <div className="product-card__specs">
                    <div className="product-card__spec">
                      <span className="product-card__spec-label">Finish</span>
                      <span className="product-card__spec-value">{product.finish}</span>
                    </div>
                    <div className="product-card__spec">
                      <span className="product-card__spec-label">Specification</span>
                      <span className="product-card__spec-value">{product.spec}</span>
                    </div>
                    <div className="product-card__spec">
                      <span className="product-card__spec-label">Lead Time</span>
                      <span className="product-card__spec-value">{product.lead}</span>
                    </div>
                  </div>

                  <div className="product-card__actions">
                    <Link to="/contact" className="btn" style={{ fontSize: '0.6rem', padding: '13px 28px' }}>
                      Enquire
                    </Link>
                    <Link to="/contact" className="product-card__download">
                      Download Spec Sheet →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Custom Commission ── */}
      <section className="section--sm products-commission">
        <div className="container">
          <div className="products-commission__inner">
            <div className="products-commission__text">
              <span className="label">Bespoke Services</span>
              <h2 className="products-commission__title">
                Nothing Quite Fits?<br />We Design to Commission.
              </h2>
              <div className="gold-divider gold-divider--left" style={{ margin: '24px 0' }} />
              <p>
                Every product in the Lumetix catalogue began as a bespoke commission. If your project requires a form, finish, or scale that does not exist in our collection, our studio can develop it — from initial sketch to final installation.
              </p>
              <p style={{ marginTop: '16px' }}>
                Bespoke commissions are accepted on a project-by-project basis. Please contact the studio to begin a conversation.
              </p>
              <Link to="/contact" className="btn" style={{ marginTop: '32px' }}>
                Discuss a Commission
              </Link>
            </div>
            <div className="products-commission__stats">
              {[
                { value: '42+', label: 'Countries' },
                { value: '800+', label: 'Installations' },
                { value: '11', label: 'Signature Pieces' },
                { value: '10yr', label: 'Warranty' },
              ].map((stat) => (
                <div key={stat.label} className="products-commission__stat">
                  <p className="products-commission__stat-value">{stat.value}</p>
                  <p className="products-commission__stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
