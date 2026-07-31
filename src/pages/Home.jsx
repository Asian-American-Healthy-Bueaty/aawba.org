import { Link } from 'react-router-dom'
import PartnersSlider from '../components/PartnersSlider.jsx'
import logo from '../assets/AAWBA .png'
import './Home.css'

const PARTNER_CATEGORIES = [
  { title: 'Corporate', desc: 'Sponsorships and employee wellness collaborations.' },
  { title: 'Healthcare & Professional', desc: 'Clinical expertise and referral partnerships.' },
  { title: 'Foundation & Institutional', desc: 'Grants and multi-year program funding.' },
  { title: 'Community & Media', desc: 'Storytelling and grassroots outreach.' },
]

const PARTNER_LOGOS = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  src: logo,
  alt: 'Partner logo',
}))

const FOUNDER = {
  name: 'Jane Lin',
  role: 'Founder & Board Chair',
  desc: 'Jane founded AAWBA after two decades in public health, driven to close the gap between mainstream wellness resources and the needs of Asian American families.',
}

const BOARD = [
  { name: 'Michael Wu', role: 'Treasurer' },
  { name: 'Grace Park', role: 'Secretary' },
  { name: 'David Chen', role: 'Director, Programs' },
  { name: 'Sarah Kim', role: 'Director, Partnerships' },
]

const LEADERSHIP_GROUPS = [
  {
    title: 'Executive Leadership',
    desc: 'Led by our Executive Director alongside a small, dedicated staff overseeing programs, partnerships, and operations day to day.',
  },
  {
    title: 'Advisory Network',
    desc: 'Physicians, dermatologists, and community leaders who shape program content and ensure clinical accuracy.',
  },
]

const VALUES = [
  { title: 'Respect', desc: 'Honoring diverse cultures, generations, and lived experiences.' },
  { title: 'Empowerment', desc: 'Equipping people with knowledge to make confident decisions.' },
  { title: 'Community', desc: 'Building networks of care that outlast any single program.' },
  { title: 'Integrity', desc: 'Sharing information that is evidence-based and transparent.' },
]

const PROGRAMS = [
  {
    title: 'Resource Navigation',
    desc: 'Helping families find culturally-competent providers, insurance guidance, and community services.',
  },
  {
    title: 'Confidence & Beauty',
    desc: 'Skincare, styling, and self-image programming rooted in cultural pride, not conformity.',
  },
  {
    title: 'Community Connection',
    desc: 'Peer circles, mentorship, and events that build lasting relationships across generations.',
  },
]

const WORK_STEPS = [
  'Listen to community needs through surveys & listening sessions',
  'Design programs with medical & beauty professional advisors',
  'Deliver bilingual workshops, events, and 1:1 navigation',
  'Measure impact and refine each season',
]

const FEATURED_PROGRAMS = [
  {
    title: '2026 Charity Concert',
    desc: 'our flagship annual fundraiser blending music, culture, and community.',
  },
  {
    title: 'Monthly Wellness Circles',
    desc: 'small-group sessions on nutrition, skincare, and mental health.',
  },
]

const PILLARS = [
  {
    number: '01',
    title: 'Understand',
    desc: 'We listen first — researching the wellness and beauty needs unique to Asian American communities.',
  },
  {
    number: '02',
    title: 'Connect',
    desc: 'We build bridges between individuals, professionals, and organizations who can support each other.',
  },
  {
    number: '03',
    title: 'Act',
    desc: 'We turn understanding into programs, partnerships, and resources that create real change.',
  },
]

function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero__watermark" src={logo} alt="" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__eyebrow">Asian American Wellness &amp; Beauty Association</p>
          <h1>Wellness. Confidence. Community.</h1>
          <p className="hero__tagline">Stronger together.</p>
          <p className="hero__desc">
            We help Asian American communities access culturally-grounded wellness
            education, beauty confidence, and belonging — together.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--solid">
              Get Involved
            </Link>
            <a href="#about" className="btn btn--outline">
              Our Story
            </a>
          </div>
        </div>
      </section>

      <section className="why">
        <p className="why__eyebrow">Why AAWBA</p>
        <h2>Three pillars guide everything we do</h2>
        <div className="why__grid">
          {PILLARS.map((pillar) => (
            <div className="why__item" key={pillar.number}>
              <p className="why__number">{pillar.number}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div className="about__inner">
          <div className="about__intro">
            <div className="about__media">
              <img src={logo} alt="AAWBA" />
            </div>
            <div className="about__copy">
              <p className="about__eyebrow">About AAWBA</p>
              <h2>Our Story</h2>
              <p>
                AAWBA was founded by a small group of first- and second-generation
                Asian American women who noticed a gap: mainstream wellness and
                beauty resources rarely reflected their skin, their bodies, their
                family histories, or their cultural values. What began as informal
                living-room gatherings has grown into a nonprofit serving hundreds
                of community members each year.
              </p>
              <p>
                Today we partner with healthcare providers, beauty professionals,
                and community organizations to make culturally-informed wellness
                education and resources accessible to everyone.
              </p>
            </div>
          </div>

          <div className="about__card">
            <div className="about__card-col">
              <h3>Mission &amp; Vision</h3>
              <p>
                <strong>Mission —</strong> To advance the health, confidence, and
                wellbeing of Asian American communities through
                culturally-grounded education, resources, and connection.
              </p>
            </div>
            <div className="about__card-col">
              <p>
                <strong>Vision —</strong> A future where every Asian American feels
                seen, informed, and supported in their wellness and beauty journey.
              </p>
            </div>
          </div>

          <div className="about__values">
            <h3>Our Values</h3>
            <div className="about__values-grid">
              {VALUES.map((value) => (
                <div className="about__value" key={value.title}>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about__banner">
            <p>
              We combine community-led programming with partnerships across
              healthcare, beauty, and academic institutions — translating research
              and lived experience into workshops, resources, and events that are
              accessible in both English and Chinese.
            </p>
            <p>
              Currently serving the greater metropolitan area with in-person
              programs, and reaching a nationwide audience through virtual
              workshops and digital resources.
            </p>
          </div>
        </div>
      </section>

      <section id="our-work" className="work">
        <div className="work__inner">
          <div className="work__intro">
            <p className="work__eyebrow">Our Work</p>
            <h2>Programs that meet real needs</h2>
          </div>

          <div className="work__grid">
            <div className="work__feature">
              <div className="work__feature-media">
                <img src={logo} alt="AAWBA" />
              </div>
              <div className="work__feature-body">
                <h3>Wellness Education</h3>
                <p>
                  Workshops on preventive health, nutrition, and mental
                  wellbeing tailored to Asian American communities.
                </p>
              </div>
            </div>

            <div className="work__list">
              {PROGRAMS.map((program) => (
                <div className="work__card" key={program.title}>
                  <div className="work__card-media">
                    <img src={logo} alt="" aria-hidden="true" />
                  </div>
                  <div>
                    <h4>{program.title}</h4>
                    <p>{program.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="work__banner">
            <div>
              <h3>How We Work</h3>
              <ol className="work__steps">
                {WORK_STEPS.map((step, index) => (
                  <li key={step}>
                    <span className="work__step-num">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="work__featured">
              <h3>Featured Programs</h3>
              {FEATURED_PROGRAMS.map((item) => (
                <p key={item.title}>
                  <strong>{item.title} —</strong> {item.desc}
                </p>
              ))}
            </div>
          </div>

          <p className="work__disclaimer">
            Medical Disclaimer: AAWBA programs provide general education and
            community support and are not a substitute for professional
            medical advice, diagnosis, or treatment. Always consult a
            qualified healthcare provider.
          </p>
        </div>
      </section>

      <section id="partners" className="partners">
        <div className="partners__inner">
          <div className="partners__intro">
            <p className="partners__eyebrow">Partner With Us</p>
            <h2>Better together</h2>
          </div>

          <div className="partners__categories">
            {PARTNER_CATEGORIES.map((category) => (
              <div className="partners__category" key={category.title}>
                <h3>{category.title}</h3>
                <p>{category.desc}</p>
              </div>
            ))}
          </div>

          <div className="partners__logos">
            <p className="partners__logos-label">Our Partners</p>
            <PartnersSlider logos={PARTNER_LOGOS} />
          </div>
        </div>
      </section>

      <section id="leadership" className="leadership">
        <div className="leadership__inner">
          <div className="leadership__intro">
            <p className="leadership__eyebrow">Leadership &amp; Governance</p>
            <h2>Who guides our work</h2>
          </div>

          <div className="leadership__founder">
            <div className="leadership__founder-photo">
              <img src={logo} alt={FOUNDER.name} />
            </div>
            <div className="leadership__founder-body">
              <h3>{FOUNDER.name}</h3>
              <p className="leadership__role">{FOUNDER.role}</p>
              <p>{FOUNDER.desc}</p>
            </div>
          </div>

          <div className="leadership__board">
            <h3>Board of Directors</h3>
            <div className="leadership__board-grid">
              {BOARD.map((member) => (
                <div className="leadership__board-member" key={member.name}>
                  <div className="leadership__board-photo">
                    <img src={logo} alt={member.name} />
                  </div>
                  <p className="leadership__board-name">{member.name}</p>
                  <p className="leadership__role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="leadership__groups">
            {LEADERSHIP_GROUPS.map((group) => (
              <div className="leadership__group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.desc}</p>
              </div>
            ))}
          </div>

          <div className="leadership__banner">
            <div>
              <h3>Governance Principles</h3>
              <p>
                Transparency, fiscal responsibility, and community
                accountability guide every board decision.
              </p>
            </div>
            <div className="leadership__banner-links">
              <p className="leadership__banner-link">Policies &amp; Commitments →</p>
              <p className="leadership__banner-link leadership__banner-link--gold">
                Join Our Board / Advisor Network →
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
