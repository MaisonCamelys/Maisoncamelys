import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isDarkHeroPage = ['/', '/prestations', '/a-propos'].includes(pathname)
  const solid = scrolled || !isDarkHeroPage

  return (
    <header className={`${styles.nav} ${solid ? styles.solid : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <svg width="34" height="34" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <path d="M52 10 A28 28 0 1 1 10 52" stroke="#C49A3C" strokeWidth="1.35" fill="none"/>
            <text x="24" y="40" fontFamily="Cormorant Garamond,serif" fontSize="24" fontWeight="600" fill="#C49A3C">M</text>
            <text x="27" y="60" fontFamily="Cormorant Garamond,serif" fontSize="21" fontWeight="400" fill="#C49A3C">C</text>
          </svg>
          <span className={styles.logoText}>Maison Camelys</span>
        </Link>

        <nav className={`${styles.links} ${open ? styles.open : ''}`}>
          <Link to="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>Accueil</Link>
          <Link to="/prestations" className={`${styles.link} ${pathname === '/prestations' ? styles.active : ''}`}>Prestations</Link>
          <Link to="/a-propos" className={`${styles.link} ${pathname === '/a-propos' ? styles.active : ''}`}>À propos</Link>
          <Link to="/contact" className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`}>Contact</Link>
          <Link to="/contact" className={`${styles.ctaNav} ${styles.mobileOnly}`}>Nous contacter</Link>
        </nav>

        <div className={styles.right}>
          <Link to="/contact" className={styles.ctaNav}>Nous contacter</Link>
        </div>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          type="button"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
