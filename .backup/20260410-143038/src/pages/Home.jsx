import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import s from './Home.module.css'

const HERO_IMG = '/images/hero/hero-main.png'
const HERO_SIDE = '/images/hero/hero-side.png'
const COCKTAIL_IMG = '/images/sections/cocktail.png'
const KIDS_IMG = '/images/sections/kids-walk.png'
const DANCE_IMG = '/images/ambiance/first-dance.png'
const WELCOME_IMG = '/images/sections/welcome.png'
const KIDS_COORDINATOR_IMG = '/images/sections/kids-coordinator.png'
const TABLE_IMG = '/images/details/table.png'
const RINGS_IMG = '/images/details/rings.png'
const BRIDAL_IMG = '/images/details/bridal.png'

const SERVICES = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M9 4v5M15 4v5M7 13h4M7 17h6"/></svg>,
    title: "Orchestration",
    sub: "de votre journée",
    desc: "Coordination fluide, timing maîtrisé, ambiance juste, moments parfaitement orchestrés.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><circle cx="12" cy="7" r="4"/><circle cx="6" cy="10" r="3"/><circle cx="18" cy="10" r="3"/><path d="M2 20c0-4 2-6 4-6h12c2 0 4 2 4 6"/><path d="M8 14c0-2 1-4 4-4s4 2 4 4"/></svg>,
    title: "Prise en charge",
    sub: "des enfants",
    desc: "Encadrement bienveillant, activités adaptées, enfants heureux, parents sereins.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><rect x="5" y="6" width="14" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M9 6V4M15 6V4M5 10h14"/></svg>,
    title: "Souvenirs",
    sub: "Photo & Vidéo",
    desc: "Captation discrète, émotions vraies, film souvenir intemporel.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M9 18V8l8-2v10"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="16" r="2"/></svg>,
    title: "Ambiance",
    sub: "Soirée Dansante",
    desc: "Son, lumière et énergie pour une soirée inoubliable, du premier au dernier morceau.",
  },
]

const PRESTATIONS = [
  { img: WELCOME_IMG, num:'01', title:'Orchestration\nde votre journée', desc:"Une présence discrète pour que chaque transition reste naturelle et fluide." },
  { img: KIDS_COORDINATOR_IMG, num:'02', title:"Prise en charge\ndes enfants", desc:"Un accompagnement rassurant et élégant, pensé pour les plus jeunes." },
  { img: TABLE_IMG, num:'03', title:'Souvenirs\n& détails', desc:"Des détails raffinés qui ancrent la journée dans une esthétique durable." },
  { img: DANCE_IMG, num:'04', title:'Ambiance\nsoirée dansante', desc:"Une ambiance chaleureuse, vivante, élégante, fidèle à votre énergie." },
]

const PACKS = [
  {
    name: "L'Essentielle",
    badge: null,
    sub: "L'essentiel pour une journée bien orchestrée.",
    price: "1 300 €",
    items: ["Orchestration de la journée", "Animation de la soirée", "Matériel son et lumière"],
    highlight: false,
  },
  {
    name: "La Signature",
    badge: "La plus choisie ✦",
    sub: "L'équilibre parfait entre expérience, sérénité et présence.",
    price: "1 700 €",
    items: ["Orchestration de la journée", "Prise en charge des enfants", "Photo & vidéo (journée)", "Animation de la soirée", "Matériel son et lumière"],
    highlight: true,
  },
  {
    name: "L'Excellence",
    badge: null,
    sub: "L'expérience complète, sans compromis.",
    price: "2 200 €",
    items: ["Orchestration de la journée", "Prise en charge des enfants", "Photo & vidéo (journée + soirée)", "Animation de la soirée", "Matériel son et lumière", "Options premium"],
    highlight: false,
  },
]

export default function Home() {
  useReveal()

  return (
    <main>
      <section className={s.hero}>
        <div className={s.heroLeft}>
          <div className={s.heroBotanical} aria-hidden>
            <svg viewBox="0 0 100 400" fill="none">
              <path d="M50 390 Q45 290 30 190 Q15 100 5 15" stroke="#C49A3C" strokeWidth="0.7" opacity="0.3"/>
              <ellipse cx="22" cy="155" rx="26" ry="10" fill="#7A8B63" opacity="0.28" transform="rotate(-38 22 155)"/>
              <ellipse cx="12" cy="210" rx="20" ry="8" fill="#7A8B63" opacity="0.22" transform="rotate(-52 12 210)"/>
              <ellipse cx="38" cy="115" rx="18" ry="7" fill="#7A8B63" opacity="0.2" transform="rotate(-22 38 115)"/>
              <ellipse cx="10" cy="255" rx="22" ry="9" fill="#7A8B63" opacity="0.18" transform="rotate(-62 10 255)"/>
              <ellipse cx="30" cy="175" rx="15" ry="6" fill="#7A8B63" opacity="0.16" transform="rotate(-30 30 175)"/>
            </svg>
          </div>

          <div className={s.heroContent}>
            <div className={s.heroLogo}>
              <svg width="74" height="74" viewBox="0 0 80 80" fill="none">
                <path d="M52 10 A28 28 0 1 1 10 52" stroke="#E8C878" strokeWidth="1.3" fill="none" opacity="0.8"/>
                <text x="20" y="38" fontFamily="Cormorant Garamond,serif" fontSize="30" fontWeight="600" fill="#E8C878">M</text>
                <text x="24" y="60" fontFamily="Cormorant Garamond,serif" fontSize="26" fontWeight="400" fill="#E8C878">C</text>
              </svg>
              <div>
                <p className={s.heroLogoName}>MAISON<br/>CAMELYS</p>
                <p className={s.heroLogoSub}>ORCHESTRONS VOS PLUS BEAUX MOMENTS</p>
              </div>
            </div>

            <div className={s.heroDivider}/>

            <h1 className={s.heroTitle}>
              VIVEZ <em>pleinement</em><br/>
              VOTRE MARIAGE,
              <span className={s.small}>NOUS ORCHESTRONS LE RESTE.</span>
            </h1>

            <p className={s.heroTagline}>ÉLÉGANCE &nbsp;·&nbsp; FLUIDITÉ &nbsp;·&nbsp; ÉMOTIONS PARTAGÉES</p>
          </div>
        </div>

        <div className={s.heroRight}>
          <img src={HERO_IMG} alt="Mariés de dos au cœur d'une réception élégante" className={s.heroImg}/>
          <div className={s.heroOverlay}/>
        </div>

        <div className={s.heroWave}>
          <svg viewBox="0 0 1440 92" preserveAspectRatio="none">
            <path d="M0,92 C460,6 980,6 1440,92 L1440,92 L0,92 Z" fill="#F8F4ED"/>
          </svg>
        </div>
      </section>

      <section className={s.services}>
        <div className={s.servicesBotLeft} aria-hidden>
          <svg viewBox="0 0 100 300" fill="none">
            <path d="M50 10 Q45 100 60 190 Q70 250 80 300" stroke="#C49A3C" strokeWidth="0.7" opacity="0.2"/>
            <ellipse cx="65" cy="80" rx="22" ry="9" fill="#7A8B63" opacity="0.16" transform="rotate(28 65 80)"/>
            <ellipse cx="72" cy="140" rx="18" ry="7" fill="#7A8B63" opacity="0.14" transform="rotate(42 72 140)"/>
          </svg>
        </div>

        <div className={s.servicesInner}>
          <div className={s.servicesGrid}>
            {SERVICES.map((sv, i) => (
              <div key={i} className={`${s.serviceCard} reveal`} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className={s.serviceIconWrap}>{sv.icon}</div>
                <h2 className={s.serviceTitle}>
                  {sv.title}<br/>
                  <span>{sv.sub}</span>
                </h2>
                <p className={s.serviceDesc}>{sv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.info}>
        <div className={s.infoInner}>
          <div className={`${s.infoText} reveal`}>
            <span className="label">Notre conviction</span>
            <h2 className={s.infoTitle}>
              Un mariage est un moment unique,
              <br/>
              mais aussi une journée <em>intense à gérer.</em>
            </h2>
            <p className={s.infoBody}>
              Notre rôle : vous permettre de lâcher prise, en prenant soin de
              chaque détail, de vos invités et de l’ambiance.
              Vous vivez. Nous veillons.
            </p>
            <Link to="/prestations" className={s.infoLink}>
              Découvrir nos accompagnements <span>→</span>
            </Link>
          </div>

          <div className={s.infoPhotos}>
            {[COCKTAIL_IMG, KIDS_IMG, DANCE_IMG].map((src, i) => (
              <div key={i} className={`${s.infoPhoto} reveal`} style={{ transitionDelay: `${i * 110}ms` }}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.band}>
        <div className={s.bandWaveTop}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path d="M0,0 C480,60 960,60 1440,0 L1440,0 L0,0 Z" fill="#F4EFE6"/>
          </svg>
        </div>

        <div className={s.bandInner}>
          <div className="reveal">
            <span className="label" style={{ color:'rgba(196,154,60,0.7)' }}>Votre expérience</span>
            <h2 className={s.bandTitle}>
              Votre mariage devient une expérience
              <br/>
              fluide, joyeuse et inoubliable.
            </h2>
          </div>

          <div className={s.bandFacts}>
            {[
              ['Invités heureux', 'Accueil, circulation, sérénité'],
              ['Enfants épanouis', 'Présence douce et adaptée'],
              ['Parents sereins', 'Lâcher-prise et confiance'],
              ['Souvenirs précieux', 'Une atmosphère qui reste'],
            ].map(([a, b], i) => (
              <div key={i} className={`${s.bandFact} reveal`} style={{ transitionDelay: `${i * 90}ms` }}>
                <strong>{a}</strong>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={s.bandWaveBottom}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#FAF7F2"/>
          </svg>
        </div>
      </section>

      <section className={s.prestations}>
        <div className={s.prestationsInner}>
          <div className={`${s.prestationsHead} reveal`}>
            <span className="label">Nos prestations</span>
            <h2 className={s.prestationsTitle}>Une prise en charge complète, adaptée à vos envies.</h2>
          </div>

          <div className={s.prestGrid}>
            {PRESTATIONS.map((p, i) => (
              <div key={i} className={`${s.prestCard} reveal`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className={s.prestCardImg}>
                  <span className={s.prestCardNum}>{p.num}</span>
                  <img src={p.img} alt={p.title}/>
                </div>
                <h3 className={s.prestCardTitle}>
                  {p.title.split('\n').map((l, j) => <span key={j}>{l}{j === 0 && <br/>}</span>)}
                </h3>
                <p className={s.prestCardDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.pricing}>
        <div className={s.pricingInner}>
          <div className={`${s.pricingHead} reveal`}>
            <span className="label">Nos formules</span>
            <h2 className={s.pricingTitle}>Des accompagnements sur-mesure, pensés pour vous.</h2>
          </div>

          <div className={s.pricingCards}>
            {PACKS.map((pk, i) => (
              <div
                key={i}
                className={`${s.pricingCard} ${pk.highlight ? s.pricingHighlight : ''} reveal`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {pk.badge && <div className={s.pricingBadge}>{pk.badge}</div>}
                <p className={s.pricingName}>{pk.name}</p>
                <p className={s.pricingSub}>{pk.sub}</p>
                <ul className={s.pricingList}>
                  {pk.items.map(it => (
                    <li key={it}><span className={s.pricingDash}>—</span>{it}</li>
                  ))}
                </ul>
                <div className={s.pricingPrice}>
                  <span className={s.pricingAmount}>{pk.price}</span>
                  <small>à partir de</small>
                </div>
                <Link to="/contact" className={`${s.pricingCta} ${pk.highlight ? s.pricingCtaGold : ''}`}>
                  Nous écrire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.cta}>
        <div className={s.ctaInner}>
          <div className="reveal">
            <span className="label" style={{ color:'rgba(196,154,60,0.65)' }}>Prenons contact</span>
            <h2 className={s.ctaTitle}>Parlons de votre mariage.</h2>
            <p className={s.ctaBody}>
              Un premier échange pour imaginer ensemble une journée fluide, élégante et fidèle à votre vision.
            </p>
            <Link to="/contact" className={s.ctaBtn}>
              Échanger avec nous
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
