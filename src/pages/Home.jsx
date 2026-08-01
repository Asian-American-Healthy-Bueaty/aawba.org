import { useState } from 'react'
import { Link } from 'react-router-dom'
import PartnersSlider from '../components/PartnersSlider.jsx'
import logo from '../assets/AAWBA .png'
import staff1 from '../assets/staff1.jpg'
import staff2 from '../assets/staff2.jpg'
import staff3 from '../assets/staff3.jpg'
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
  name: 'Amy Wu',
  role: 'Founder / Board Chair / CEO',
  photo: staff1,
  desc: 'Emigrating to the United States in the 1990s as a first-generation Chinese immigrant, Amy Wu has navigated a multifaceted life journey—transitioning from a TV artist and singer to a wife, mother, entrepreneur, and dedicated community advocate. Through every stage of her personal and professional growth, she has remained grounded in a core belief: true beauty springs from health, genuine strength comes from within, and lasting happiness lies in balance.\n\nDriven by a lifelong passion for service, Amy has long been an active leader in the Asian American community and a committed public servant, earning three U.S. President’s Volunteer Service Awards. Having witnessed countless women quietly balancing the demands of family, career, and self, she deeply understands that women are not only the heart of a happy home, but also a vital force shaping the next generation and strengthening the broader community. Inspired by this vision, she founded the Asian American Wellness and Beauty Association (AAWBA) to create an empowering space where women can connect, learn, grow, and uplift one another.\n\nAs Founder, Amy leads AAWBA with a mission to cultivate a trusted community centered on holistic health, timeless beauty, personal development, and public service. She firmly believes that when a woman nurtures a healthy body, a positive mindset, inner confidence, and a drive for lifelong learning, she naturally illuminates her family, inspires her children, and warms her community. Amy’s vision is to build an inclusive, sustainable platform where women discover their best selves, foster authentic friendships, and pass forward love and kindness to create a better society together.',
}

const BOARD = [
  {
    name: 'Jiying Zhao',
    role: 'Founding Strategy & Launch Lead',
    photo: staff2,
    desc: 'Jiying built her academic foundation and professional experience at the University of Saskatchewan, Canada, and Northeastern University, USA. She has extensive experience in external affairs, strategic partnership development and sponsorship operations across multinational corporations, professional societies and international organizations. She has long specialized in cross-cultural outreach, membership program development and strategic collaboration across diverse cultural landscapes.\n\nAs an Asian immigrant woman, Jiying leads this nonprofit initiative as Founding Strategy & Launch Lead. Leveraging her expertise in alliance building, resource coordination and strategy execution, she works to cultivate a trusted community space for Asian women. She firmly believes health and beauty should not be confined to narrow external standards; they are fundamental rights that enable Asian women to center themselves, rebuild inner strength and grow freely. Her vision is to build an inclusive, sustainable support network that empowers more Asian women to nurture holistic well-being and radiate authentic inner confidence.',
  },
  {
    name: 'Robert Hao Wu, MD, FACP',
    role: 'Owner & Medical Director / Clinical Teaching Instructor',
    photo: staff3,
    desc: 'Dr. Robert Hao Wu built his academic foundation in medical sciences and traditional Chinese medicine in Guangzhou, China, and completed his internal medicine residency at Cornell Medical Center / New York Downtown Hospital in New York. With over three decades of clinical experience across major healthcare institutions, including Tufts Medical Center, Quincy Medical Center, and Carney Hospital, he is a board-certified internist and a Fellow of the American College of Physicians (FACP). He also serves as a Clinical Teaching Instructor at Boston University School of Medicine.\n\nAs a dedicated physician, leader, and active community advocate, Dr. Wu serves as the Owner and Medical Director of his primary care practice and Amee’s Medical Spa in Massachusetts. Beyond his clinical practice, he has held key leadership positions across various professional and cultural organizations, including serving as Chairman of the Association of Chinese American Physicians and the Gee Duck Sam Duck Association of Boston. Dr. Wu is deeply committed to delivering comprehensive primary care, advancing medical education, and fostering health, wellness, and community support for diverse populations.',
  },
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
  { title: 'Health & Well-being', desc: 'We believe that physical, mental, emotional, and social well-being are the foundation of a fulfilling life.' },
  { title: 'Empowerment', desc: 'We equip women with knowledge, resources, confidence, and opportunities to make informed decisions and achieve their fullest potential.' },
  { title: 'Community & Inclusion', desc: 'We foster an inclusive community where every woman is respected, welcomed, and supported regardless of age, background, or life stage.' },
  { title: 'Cultural Respect', desc: 'We celebrate the richness of Asian cultures while embracing diversity, cross-cultural understanding, and mutual respect.' },
  { title: 'Integrity & Responsibility', desc: 'We act with transparency, accountability, professionalism, and ethical leadership in all that we do.' },
  { title: 'Collaboration', desc: 'We believe meaningful partnerships create greater opportunities and lasting impact for individuals and communities.' },
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
    title: 'Empowering Women',
    desc: 'We inspire women to cultivate inner strength, embrace their authentic confidence, and lead fulfilling lives.',
  },
  {
    number: '02',
    title: 'Inspiring Wellness',
    desc: 'We promote holistic health and balanced living to help every woman look and feel vibrant.',
  },
  {
    number: '03',
    title: 'Building Community',
    desc: 'We create a supportive, inclusive network where women connect, grow, and uplift one another together.',
  },
]

function Home() {
  const [activePerson, setActivePerson] = useState(null)

  return (
    <>
      {activePerson && (
        <div
          className="leadership-modal-overlay"
          onClick={() => setActivePerson(null)}
        >
          <div
            className="leadership-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="leadership-modal-name"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="leadership-modal__close"
              aria-label="Close"
              onClick={() => setActivePerson(null)}
            >
              ×
            </button>
            <div className="leadership-modal__photo">
              <img src={activePerson.photo} alt={activePerson.name} />
            </div>
            <div className="leadership-modal__body">
              <h3 id="leadership-modal-name">{activePerson.name}</h3>
              <p className="leadership__role">{activePerson.role}</p>
              {activePerson.desc.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
      <section className="hero">
        <img className="hero__watermark" src={logo} alt="" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__eyebrow">Asian American Wellness &amp; Beauty Association</p>
          <h1>Empowering Women.<br></br> Inspiring Wellness. <br></br> Building Community.</h1>
          <p className="hero__tagline">Stronger together.</p>
          <p className="hero__desc">
            Wellness rooted in culture. Community built for Asian American women and families.
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
                AAWBA connects Asian American women and families with culturally informed health education, trusted resources and inclusive community experiences—so every person can feel informed, supported and empowered.
              </p>
            </div>
          </div>

          <div className="about__card">
            <div className="about__card-col">
              <h3>Mission &amp; Vision</h3>
              <p>
                <strong>Mission —</strong> AAWBA empowers Asian American women and their families to thrive through culturally responsive health education, trusted resource navigation, meaningful community engagement, leadership development, and responsible partnerships that advance lifelong well-being and opportunity.
              </p>
            </div>
            <div className="about__card-col">
              <p>
                <strong>Vision —</strong> A future where every Asian American woman feels seen, heard, supported, and empowered to live a healthier life, pursue her aspirations with confidence, and create lasting positive impact for her family and community.
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
            <h3>Founder</h3>
            <div className="leadership__board-grid leadership__founder-grid">
              <div className="leadership__board-member">
                <button
                  type="button"
                  className="leadership__board-photo"
                  onClick={() => setActivePerson(FOUNDER)}
                  aria-label={`View details for ${FOUNDER.name}`}
                >
                  <img src={FOUNDER.photo} alt={FOUNDER.name} />
                </button>
                <p className="leadership__board-name">{FOUNDER.name}</p>
                <p className="leadership__role">{FOUNDER.role}</p>
              </div>
            </div>
          </div>

          <div className="leadership__board">
            <h3>Board of Directors</h3>
            <div className="leadership__board-grid">
              {BOARD.map((member) => (
                <div className="leadership__board-member" key={member.name}>
                  <button
                    type="button"
                    className="leadership__board-photo"
                    onClick={() => setActivePerson(member)}
                    aria-label={`View details for ${member.name}`}
                  >
                    <img src={member.photo} alt={member.name} />
                  </button>
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
