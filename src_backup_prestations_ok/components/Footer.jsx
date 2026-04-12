import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <img
            src="/branding/logo-camelys.png"
            alt="Maison Camelys"
            className={styles.footerLogo}
          />
          <p className={styles.tagline}>ORCHESTRONS VOS PLUS BEAUX MOMENTS</p>
        </div>

        <nav className={styles.center}>
          <Link to="/">Accueil</Link>
          <Link to="/prestations">Prestations</Link>
          <Link to="/a-propos">À propos</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className={styles.right}>
          <a href="mailto:contact@maisoncamelys.fr">contact@maisoncamelys.fr</a>
          <p>Partout en France</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2025 Maison Camelys · Tous droits réservés</span>
      </div>
    </footer>
  )
}
