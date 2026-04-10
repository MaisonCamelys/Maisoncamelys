import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const { pathname }            = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const onDark  = ['/', '/prestations', '/a-propos'].includes(pathname)
  const isSolid = scrolled || !onDark

  return (
    <header className={`${styles.nav} ${isSolid ? styles.solid : ''}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
            <path d="M52 10 A28 28 0 1 1 10 52" stroke="#C49A3C" strokeWidth="1.4" fill="none"/>
            <text x="24" y="40" fontFamily="Cormorant Garamond,serif" fontSize="24" fontWeight="600" fill="#C49A3C">M</text>
            <text x="27" y="60" fontFamily="Cormorant Garamond,serif" fontSize="21" fontWeight="400" fill="#C49A3C">C</text>
          </svg>
          <span className={styles.logoText}>Maison Camelys</span>
        </Link>

        {/* Liens centre — desktop only (pas de CTA ici) */}
        <nav className={`${styles.links} ${open ? styles.open : ''}`}>
          {[
            ['/', 'Accueil'],
            ['/prestations', 'Prestations'],
            ['/a-propos', 'À propos'],
            ['/contact', 'Contact'],
          ].map(([path, label]) => (
            <Link
              key={path}
              to={path}
              className={`${styles.link} ${pathname === path ? styles.active : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          {/* CTA visible uniquement dans le menu mobile overlay */}
          <Link to="/contact" className={`${styles.ctaNav} ${styles.ctaNavMobile}`}>
            Nous contacter
          </Link>
        </nav>

        {/* CTA droite — desktop uniquement */}
        <div className={styles.navRight}>
          <Link to="/contact" className={styles.ctaNav}>Nous contacter</Link>
        </div>

        {/* Burger */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span/><span/>
        </button>

      </div>
    </header>
  )
}
