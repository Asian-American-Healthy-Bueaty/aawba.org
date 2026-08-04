import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/AAWBA .png'
import './Header.css'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/', hash: '#about' },
  { label: 'Activities', path: '/activities' },
  { label: 'Leadership & Governance', path: '/', hash: '#leadership' },
]

const ANCHOR_HASHES = NAV_LINKS.filter((link) => link.hash).map((link) => link.hash)
const SCROLL_OFFSET = 120

function useScrollSpy(hashes, enabled) {
  const [activeHash, setActiveHash] = useState(null)

  useEffect(() => {
    if (!enabled) return

    let ticking = false

    const computeActive = () => {
      let current = null
      for (const hash of hashes) {
        const el = document.querySelector(hash)
        if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET) {
          current = hash
        }
      }
      setActiveHash(current)
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(computeActive)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [enabled, hashes])

  return activeHash
}

function NavItem({ link, activeHash }) {
  if (link.hash) {
    const isActive = activeHash === link.hash
    return (
      <Link
        to={{ pathname: link.path, hash: link.hash }}
        className={'nav-link' + (isActive ? ' nav-link--active' : '')}
      >
        {link.label}
      </Link>
    )
  }

  const isHome = link.path === '/'

  return (
    <NavLink
      to={link.path}
      end={isHome}
      onClick={isHome ? () => window.scrollTo({ top: 0, behavior: 'smooth' }) : undefined}
      className={({ isActive }) => {
        const active = isActive && !(isHome && activeHash)
        return 'nav-link' + (active ? ' nav-link--active' : '')
      }}
    >
      {link.label}
    </NavLink>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const [menuLocation, setMenuLocation] = useState(location)
  const isHomePage = location.pathname === '/'
  const scrolledHash = useScrollSpy(ANCHOR_HASHES, isHomePage)
  const activeHash = isHomePage ? scrolledHash : null

  if (location !== menuLocation) {
    setMenuLocation(location)
    setMenuOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <NavLink to="/" className="site-header__logo" aria-label="AAWBA home">
          <img src={logo} alt="AAWBA logo" />
        </NavLink>

        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavItem link={link} activeHash={activeHash} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <NavLink to="/contact" className="nav-link nav-link--cta">
            Contact / Get Involved
          </NavLink>
          <button type="button" className="lang-toggle">
            中文
          </button>
        </div>

        <button
          type="button"
          className={'menu-toggle' + (menuOpen ? ' menu-toggle--open' : '')}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={'site-header__mobile' + (menuOpen ? ' site-header__mobile--open' : '')}>
        <nav aria-label="Primary mobile">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavItem link={link} activeHash={activeHash} />
              </li>
            ))}
          </ul>
        </nav>
        <NavLink to="/contact" className="nav-link nav-link--cta nav-link--cta-mobile">
          Contact / Get Involved
        </NavLink>
        <button type="button" className="lang-toggle lang-toggle--mobile">
          中文
        </button>
      </div>
    </header>
  )
}

export default Header
