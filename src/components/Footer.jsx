import { Link } from 'react-router-dom'
import logo from '../assets/AAWBA .png'
import { useI18n } from '../i18n/useI18n.js'
import './Footer.css'

const EXPLORE_LINKS = [
  { key: 'header.nav.about', path: '/', hash: '#about' },
  { key: 'header.nav.activities', path: '/activities' },
]

const ORGANIZATION_LINKS = [
  { key: 'header.nav.leadership', path: '/', hash: '#leadership' },
  { key: 'header.cta', path: '/contact' },
]

function linkTarget(link) {
  return link.hash ? { pathname: link.path, hash: link.hash } : link.path
}

function Footer() {
  const { t } = useI18n()

  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="footer-cta__inner">
          <h2>{t('footer.ctaHeading')}</h2>
          <p className="footer-cta__tagline">{t('footer.tagline')}</p>
          <div className="footer-cta__actions">
            <button type="button" className="footer-cta__btn footer-cta__btn--solid">
              {t('footer.donate')}
            </button>
            <Link to="/contact" className="footer-cta__btn footer-cta__btn--outline">
              {t('footer.getInvolved')}
            </Link>
            <Link to="/activities" className="footer-cta__btn footer-cta__btn--outline">
              {t('footer.seeUpcomingEvents')}
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-main__inner">
          <div className="footer-col footer-col--brand">
            <div className="footer-brand">
              <img src={logo} alt={t('header.logoAlt')} />
              <span>AAWBA</span>
            </div>
            <p>{t('footer.brandDesc')}</p>
          </div>

          <div className="footer-col">
            <h3>{t('footer.exploreHeading')}</h3>
            <ul>
              {EXPLORE_LINKS.map((link) => (
                <li key={link.key}>
                  <Link to={linkTarget(link)}>{t(link.key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>{t('footer.organizationHeading')}</h3>
            <ul>
              {ORGANIZATION_LINKS.map((link) => (
                <li key={link.key}>
                  <Link to={linkTarget(link)}>{t(link.key)}</Link>
                </li>
              ))}
              <li>
                <span className="footer-static-link">{t('footer.privacyDisclaimer')}</span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>{t('footer.contactHeading')}</h3>
            <ul className="footer-contact">
              <li>
                <a href="mailto:hello@aawba.org">hello@aawba.org</a>
              </li>
              <li>
                <a href="tel:+15550101234">(555) 010-1234</a>
              </li>
              <li>{t('footer.addressLine')}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <p>{t('footer.planningNote')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
