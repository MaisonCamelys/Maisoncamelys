import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.solid : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label="Maison Camelys">
          <img
            src="/branding/logo-camelys.png"
            alt="Maison Camelys"
            className={styles.logoImage}
          />
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
          type="button"
          aria-label="Menu"
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
