import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/AAWBA .png'
import { useI18n } from '../i18n/useI18n.js'
import { LANGUAGES } from '../i18n/context.js'
import './Header.css'

const NAV_LINKS = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/', hash: '#about' },
  { key: 'activities', path: '/activities' },
  { key: 'leadership', path: '/', hash: '#leadership' },
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

function NavItem({ link, activeHash, label }) {
  if (link.hash) {
    const isActive = activeHash === link.hash
    return (
      <Link
        to={{ pathname: link.path, hash: link.hash }}
        className={'nav-link' + (isActive ? ' nav-link--active' : '')}
      >
        {label}
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
      {label}
    </NavLink>
  )
}

function LanguageSwitcher({ className }) {
  const { language, setLanguage, t } = useI18n()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const current = LANGUAGES.find((lang) => lang.code === language) ?? LANGUAGES[0]

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className={'lang-switcher' + (className ? ` ${className}` : '')} ref={rootRef}>
      <button
        type="button"
        className="lang-switcher__toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('header.languageAriaLabel')}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        {current.label}
        <span className="lang-switcher__caret" aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <ul className="lang-switcher__menu" role="listbox">
          {LANGUAGES.map((lang) => (
            <li key={lang.code} role="option" aria-selected={lang.code === language}>
              <button
                type="button"
                className={'lang-switcher__option' + (lang.code === language ? ' is-active' : '')}
                onClick={() => {
                  setLanguage(lang.code)
                  setOpen(false)
                }}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Header() {
  const { t } = useI18n()
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
        <NavLink to="/" className="site-header__logo" aria-label={t('header.homeAriaLabel')}>
          <img src={logo} alt={t('header.logoAlt')} />
        </NavLink>

        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <NavItem link={link} activeHash={activeHash} label={t(`header.nav.${link.key}`)} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <NavLink to="/contact" className="nav-link nav-link--cta">
            {t('header.cta')}
          </NavLink>
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className={'menu-toggle' + (menuOpen ? ' menu-toggle--open' : '')}
          aria-label={menuOpen ? t('header.closeMenu') : t('header.openMenu')}
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
              <li key={link.key}>
                <NavItem link={link} activeHash={activeHash} label={t(`header.nav.${link.key}`)} />
              </li>
            ))}
          </ul>
        </nav>
        <NavLink to="/contact" className="nav-link nav-link--cta nav-link--cta-mobile">
          {t('header.cta')}
        </NavLink>
        <LanguageSwitcher className="lang-switcher--mobile" />
      </div>
    </header>
  )
}

export default Header
