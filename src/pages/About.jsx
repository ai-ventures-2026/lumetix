import { Link } from 'react-router-dom'
import './About.css'

const team = [
  {
    name: 'Isabelle Marchetti',
    role: 'Founder & Creative Director',
    bio: 'Trained at the École des Beaux-Arts and the RCA London, Isabelle founded Lumetix in 2014 with a singular conviction: that light is the most powerful material available to the designer. Her work draws on the traditions of Venetian glassblowing, Swiss precision engineering, and Japanese spatial philosophy.',
    expertise: 'Sculptural Form · Light Spectroscopy · Material Research',
  },
  {
    name: 'Dr. Thomas Brandt',
    role: 'Head of Engineering & R&D',
    bio: 'With a doctorate in photonics from ETH Zürich, Thomas leads the technical development of every Lumetix system. His team has filed seven patents in LED spectral engineering and has developed proprietary dimming algorithms that are now used across the entire product portfolio.',
    expertise: 'Photonics · Thermal Management · Smart Systems',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Senior Design Engineer',
    bio: 'Yuki brings a decade of experience from Murano glassworks and Milan-based metalworking studios. Her expertise in material transitions — the precise moment where brass becomes glass, where raw steel becomes polished surface — defines the tactile quality of the Lumetix finish language.',
    expertise: 'Metalwork · Glass Design · Surface Finishing',
  },
]

const materials = [
  {
    name: 'Borosilicate Glass',
    origin: 'Murano, Italy',
    desc: 'Individually blown in a 200-year-old Murano atelier. The silica composition is proprietary, developed with Lumetix to achieve a specific light transmission spectrum.',
  },
  {
    name: 'Solid Brass',
    origin: 'Nuremberg, Germany',
    desc: 'C260 cartridge brass sourced from a single German foundry. Each fitting is hand-turned and polished through eight distinct grades before finishing.',
  },
  {
    name: 'Anodised Aluminium',
    origin: 'Zurich, Switzerland',
    desc: 'Aerospace-grade 6061-T6 aluminium, CNC-machined in our Zurich facility. The hard-anodise coating is specified to 30-micron depth for lasting colour integrity.',
  },
  {
    name: 'Blackened Steel',
    origin: 'Sheffield, UK',
    desc: 'Hot-rolled mild steel from Sheffield, patinated using a proprietary acid-wash process that produces the deep, matte black unique to the Eclipse Range.',
  },
]

export default function About() {
  return (
    <div className="about">

      {/* ── Page Hero ── */}
      <section className="page-hero about-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <div className="page-hero__content">
            <span className="label page-hero__eyebrow">Est. 2014 · Paris & Zurich</span>
            <h1 className="page-hero__title">
              The Art of<br />
              <em className="page-hero__em">Considered Light</em>
            </h1>
            <div className="gold-divider" style={{ margin: '32px auto' }} />
            <p className="page-hero__sub">
              A studio founded on the belief that great lighting is not a product — it is a practice.
            </p>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="section philosophy">
        <div className="container">
          <div className="philosophy__inner">
            <div className="philosophy__left">
              <span className="label">Brand Philosophy</span>
              <h2 className="philosophy__title">
                Light Is Not Secondary.<br />It Is Architecture.
              </h2>
              <div className="gold-divider gold-divider--left" style={{ margin: '28px 0' }} />
            </div>
            <div className="philosophy__right">
              <p>
                At Lumetix, we begin every project with a single question: how does light want to move through this space? Not how do we fit a fixture — but how does illumination shape experience, emotion, and memory.
              </p>
              <p style={{ marginTop: '20px' }}>
                This philosophy has led us to design products that are not defined by trend cycles or commercial expedience, but by a deep understanding of material, optics, and the human response to light. We make objects that will matter in twenty years as much as they do today.
              </p>
              <p style={{ marginTop: '20px' }}>
                Since 2014, we have delivered installations in private residences, flagship hotels, cultural institutions, and retail environments across forty-two countries. Each project begins with the same rigorous process: observation, dialogue, prototyping, and refinement — until the light is exactly right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Craftsmanship Story ── */}
      <section className="section craftsmanship">
        <div className="container">
          <div className="section-header">
            <span className="label">The Atelier Process</span>
            <h2>Craftsmanship Without Compromise</h2>
            <div className="gold-divider" />
            <p>
              Each Lumetix piece passes through the hands of a minimum of six specialist craftspeople before it leaves our production network.
            </p>
          </div>

          <div className="craftsmanship__steps">
            {[
              { num: '01', title: 'Design & Specification', desc: 'Every new form begins in our Paris studio. Designers work through hundreds of physical models before a design is approved for production drawings.' },
              { num: '02', title: 'Material Sourcing', desc: 'Each material is contracted from a single, named supplier. Long-standing partnerships ensure consistency of specification across every production run.' },
              { num: '03', title: 'Atelier Fabrication', desc: 'Primary fabrication takes place across our network of four specialist European workshops — glassblowers, metalworkers, and precision machinists.' },
              { num: '04', title: 'Assembly & Quality', desc: 'All fixtures are assembled in our Zurich facility. Every piece undergoes a 48-point inspection, including photometric testing against our stated specifications.' },
              { num: '05', title: 'Numbered Certification', desc: 'Each finished piece receives a hand-engraved serial number and a numbered certificate of authenticity, signed by the lead craftsperson.' },
              { num: '06', title: 'Bespoke Packaging', desc: 'Pieces are shipped in custom-formed interior packaging developed with a specialist conservation packaging studio, designed for decade-long storage without degradation.' },
            ].map((step) => (
              <div key={step.num} className="craftsmanship__step">
                <div className="craftsmanship__step-num">{step.num}</div>
                <div className="craftsmanship__step-body">
                  <h4 className="craftsmanship__step-title">{step.title}</h4>
                  <p className="craftsmanship__step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section team">
        <div className="container">
          <div className="section-header">
            <span className="label">The Studio</span>
            <h2>Meet the Makers</h2>
            <div className="gold-divider" />
            <p>
              The Lumetix studio is a small, intentional team of designers, engineers, and material specialists united by an uncommon standard of craft.
            </p>
          </div>

          <div className="team__grid">
            {team.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-card__avatar">
                  <div className="team-card__avatar-inner">
                    <span className="team-card__initial">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="team-card__body">
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role label" style={{ color: 'var(--color-gold)', marginTop: '6px', marginBottom: '20px' }}>
                    {member.role}
                  </p>
                  <div className="gold-divider gold-divider--left" style={{ marginBottom: '20px' }} />
                  <p className="team-card__bio">{member.bio}</p>
                  <p className="team-card__expertise">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Materials ── */}
      <section className="section materials">
        <div className="container">
          <div className="section-header">
            <span className="label">Materials & Sustainability</span>
            <h2>Responsible by Design</h2>
            <div className="gold-divider" />
            <p>
              We believe the most sustainable product is one made to last a lifetime. Every material in the Lumetix palette is chosen for durability, repairability, and sourcing integrity.
            </p>
          </div>

          <div className="materials__grid">
            {materials.map((mat) => (
              <div key={mat.name} className="material-card">
                <div className="material-card__header">
                  <h4 className="material-card__name">{mat.name}</h4>
                  <span className="material-card__origin">{mat.origin}</span>
                </div>
                <div className="gold-divider gold-divider--left" style={{ margin: '16px 0' }} />
                <p className="material-card__desc">{mat.desc}</p>
              </div>
            ))}
          </div>

          <div className="sustainability-note">
            <div className="sustainability-note__inner">
              <h4 className="sustainability-note__title">Our Sustainability Commitments</h4>
              <div className="sustainability-note__points">
                {[
                  'Carbon-neutral production since 2022 across all four manufacturing sites',
                  'All packaging is acid-free, FSC-certified, or recycled-content board',
                  'LED technology throughout: 90%+ energy reduction vs. halogen equivalents',
                  'Lifetime repair service: every Lumetix piece can be restored to original specification',
                  'Conflict-free mineral sourcing verified annually by third-party audit',
                ].map((point) => (
                  <p key={point} className="sustainability-note__point">
                    <span className="sustainability-note__bullet">—</span>
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="about-cta__glow" />
        <div className="container">
          <div className="about-cta__inner">
            <h2 className="about-cta__title">A Studio Built for<br />Exceptional Projects</h2>
            <div className="gold-divider" style={{ margin: '28px auto' }} />
            <p className="about-cta__desc">
              We accept a limited number of new commissions each year. If your project demands something extraordinary, we would be honoured to hear from you.
            </p>
            <div className="about-cta__buttons">
              <Link to="/contact" className="btn btn--filled">Begin a Conversation</Link>
              <Link to="/products" className="btn">View Collections</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
