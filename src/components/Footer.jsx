import { Link } from 'react-router-dom'
import logo from '../assets/AAWBA .png'
import './Footer.css'

const EXPLORE_LINKS = [
  { label: 'About', path: '/', hash: '#about' },
  { label: 'Activities', path: '/activities' },
]

const ORGANIZATION_LINKS = [
  { label: 'Leadership & Governance', path: '/', hash: '#leadership' },
  { label: 'Contact / Get Involved', path: '/contact' },
]

function linkTarget(link) {
  return link.hash ? { pathname: link.path, hash: link.hash } : link.path
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="footer-cta__inner">
          <h2>Join us in building a healthier, more confident community.</h2>
          <p className="footer-cta__tagline">Stronger together.</p>
          <div className="footer-cta__actions">
            <button type="button" className="footer-cta__btn footer-cta__btn--solid">
              Donate
            </button>
            <Link to="/contact" className="footer-cta__btn footer-cta__btn--outline">
              Get Involved
            </Link>
            <Link to="/activities" className="footer-cta__btn footer-cta__btn--outline">
              See Upcoming Events
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-main__inner">
          <div className="footer-col footer-col--brand">
            <div className="footer-brand">
              <img src={logo} alt="AAWBA logo" />
              <span>AAWBA</span>
            </div>
            <p>
              Asian American Wellness &amp; Beauty Association — advancing
              health, confidence, and community.
            </p>
          </div>

          <div className="footer-col">
            <h3>Explore</h3>
            <ul>
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={linkTarget(link)}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Organization</h3>
            <ul>
              {ORGANIZATION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={linkTarget(link)}>{link.label}</Link>
                </li>
              ))}
              <li>
                <span className="footer-static-link">Privacy &amp; Disclaimer</span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li>
                <a href="mailto:hello@aawba.org">hello@aawba.org</a>
              </li>
              <li>
                <a href="tel:+15550101234">(555) 010-1234</a>
              </li>
              <li>123 Community Way, Suite 200</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} American Asian Wellness &amp; Beauty
            Association. A 501(c)(3) nonprofit.
          </p>
          <p>Content for planning purposes</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
