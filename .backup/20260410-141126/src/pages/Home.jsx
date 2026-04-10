import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import s from './Home.module.css'

// Images Unsplash — CDN stable, licence libre
const HERO_IMG      = "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80&fit=crop"
const TABLE_IMG     = "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&q=80&fit=crop"
const CHILDREN_IMG  = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80&fit=crop"
const DANCE_IMG     = "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=900&q=80&fit=crop"
const WIDE_IMG      = "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1400&q=80&fit=crop"

const SERVICES = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M9 4v5M15 4v5M7 13h4M7 17h6"/></svg>,
    title: "Orchestration",
    sub: "de votre journée",
    desc: "Coordination fluide, timing maîtrisé, ambiance parfaite.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><circle cx="12" cy="7" r="4"/><circle cx="6" cy="10" r="3"/><circle cx="18" cy="10" r="3"/><path d="M2 20c0-4 2-6 4-6h12c2 0 4 2 4 6"/><path d="M8 14c0-2 1-4 4-4s4 2 4 4"/></svg>,
    title: "Prise en charge",
    sub: "des enfants",
    desc: "Encadrement bienveillant, activités adaptées, parents sereins.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><rect x="5" y="6" width="14" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="1"/><path d="M9 6V4M15 6V4M5 10h14"/></svg>,
    title: "Souvenirs",
    sub: "Photo & Vidéo",
    desc: "Captation discrète, émotions vraies, film intemporel.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M9 10c0 0 1.5 1 3 1s3-1 3-1M10 14s1 2 2 2 2-2 2-2"/><path d="M6 6l2 2M18 6l-2 2M6 18l2-2M18 18l-2-2"/></svg>,
    title: "Ambiance",
    sub: "Soirée Dansante",
    desc: "Son, lumière, énergie pour une nuit inoubliable.",
  },
]

const PRESTATIONS = [
  { img: TABLE_IMG,    num:'01', title:'Orchestration\nde votre journée',   desc:"Chaque prestataire, chaque timing, chaque transition — coordonnés avec soin." },
  { img: CHILDREN_IMG, num:'02', title:"Prise en charge\ndes enfants",      desc:"Un espace dédié, animé et bienveillant. Les parents profitent sans inquiétude." },
  { img: DANCE_IMG,   num:'03', title:'Souvenirs\nPhoto & Vidéo',           desc:"Les instants les plus vrais, capturés avec discrétion et naturel." },
  { img: WIDE_IMG,    num:'04', title:'Ambiance\nSoirée Dansante',          desc:"Du premier slow au dernier titre — la magie ne s'arrête jamais." },
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
    sub: "L'équilibre parfait entre expérience et sérénité.",
    price: "1 700 €",
    items: ["Orchestration de la journée", "Prise en charge des enfants", "Photo & vidéo (journée)", "Animation de la soirée", "Matériel son et lumière"],
    highlight: true,
  },
  {
    name: "L'Excellence",
    badge: null,
    sub: "L'expérience totale, sans aucun compromis.",
    price: "2 200 €",
    items: ["Orchestration de la journée", "Prise en charge des enfants", "Photo & vidéo (journée + soirée)", "Animation de la soirée", "Matériel son et lumière", "Options premium"],
    highlight: false,
  },
]

export default function Home() {
  useReveal()

  return (
    <main>

      {/* ══════════════════ HERO SPLIT ══════════════════ */}
      <section className={s.hero}>

        {/* Panneau gauche olive */}
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
            {/* Monogramme + nom */}
            <div className={s.heroLogo}>
              <svg width="56" height="56" viewBox="0 0 80 80" fill="none">
                <path d="M52 10 A28 28 0 1 1 10 52" stroke="#C49A3C" strokeWidth="1.3" fill="none" opacity="0.75"/>
                <text x="23" y="40" fontFamily="Cormorant Garamond,serif" fontSize="25" fontWeight="600" fill="#C49A3C">M</text>
                <text x="26" y="60" fontFamily="Cormorant Garamond,serif" fontSize="22" fontWeight="400" fill="#C49A3C">C</text>
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
              <span className={s.small}>Nous orchestrons le reste.</span>
            </h1>

            <p className={s.heroTagline}>Élégance &nbsp;·&nbsp; Fluidité &nbsp;·&nbsp; Émotions</p>

            <Link to="/contact" className={s.heroCta}>
              Échanger sur votre mariage
            </Link>

            <p className={s.heroNote}>— Présents à chaque instant, discrets à chaque moment.</p>
          </div>
        </div>

        {/* Photo droite */}
        <div className={s.heroRight}>
          <img src={HERO_IMG} alt="Couple de mariés au coucher du soleil" className={s.heroImg}/>
          <div className={s.heroOverlay}/>
        </div>

        {/* Wave bas */}
        <div className={s.heroWave}>
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
            <path d="M0,72 C480,0 960,0 1440,72 L1440,72 L0,72 Z" fill="#FAF7F2"/>
          </svg>
        </div>
      </section>

      {/* ══════════════════ SERVICES ICONS ══════════════════ */}
      <section className={s.services}>
        <div className={s.servicesBotLeft} aria-hidden>
          <svg viewBox="0 0 100 300" fill="none">
            <path d="M50 10 Q45 100 60 190 Q70 250 80 300" stroke="#C49A3C" strokeWidth="0.7" opacity="0.2"/>
            <ellipse cx="65" cy="80" rx="22" ry="9" fill="#7A8B63" opacity="0.16" transform="rotate(28 65 80)"/>
            <ellipse cx="72" cy="140" rx="18" ry="7" fill="#7A8B63" opacity="0.14" transform="rotate(42 72 140)"/>
          </svg>
        </div>

        <div className={s.servicesInner}>
          <div className={`${s.servicesHead} reveal`}>
            <span className="label">Nos prestations</span>
            <h2 className={s.servicesTitle}>Une prise en charge complète,<br/>adaptée à vos envies.</h2>
          </div>

          <div className={s.servicesGrid}>
            {SERVICES.map((sv, i) => (
              <div key={i} className={`${s.serviceCard} reveal`} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className={s.serviceIconWrap}>{sv.icon}</div>
                <h3 className={s.serviceTitle}>
                  {sv.title}<br/>
                  <span style={{ fontStyle:'italic', fontFamily:'var(--serif)', fontWeight:400, letterSpacing:0 }}>{sv.sub}</span>
                </h3>
                <p className={s.serviceDesc}>{sv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ INFO SECTION ══════════════════ */}
      <section className={s.info}>
        <div className={s.infoInner}>
          <div className={`${s.infoText} reveal`}>
            <span className="label">Notre conviction</span>
            <h2 className={s.infoTitle}>
              Un mariage est un moment unique,<br/>
              mais aussi une journée <em>intense à gérer.</em>
            </h2>
            <p className={s.infoBody}>
              Notre rôle&nbsp;: vous permettre de lâcher prise, en prenant soin
              de chaque détail, de vos invités et de l'ambiance.
              Vous vivez. Nous veillons.
            </p>
            <Link to="/prestations" className={s.infoLink}>
              Découvrir nos accompagnements <span>→</span>
            </Link>
          </div>

          <div className={s.infoPhotos}>
            {[HERO_IMG, TABLE_IMG, CHILDREN_IMG].map((src, i) => (
              <div key={i} className={`${s.infoPhoto} reveal`} style={{ transitionDelay: `${i * 110}ms` }}>
                <img src={src} alt=""/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ DARK BAND ══════════════════ */}
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
              Votre mariage devient une expérience<br/>
              <em>fluide, joyeuse et inoubliable.</em>
            </h2>
          </div>
          <div className={s.bandPillars}>
            {['Invités heureux', 'Enfants épanouis', 'Parents sereins', 'Souvenirs précieux'].map((p, i) => (
              <div key={i} className={`${s.bandPillar} reveal`} style={{ transitionDelay: `${i * 100}ms` }}>
                <span className={s.bandPillarDot}/>
                <span className={s.bandPillarLabel}>{p}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={s.bandWaveBottom}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#FDFAF5"/>
          </svg>
        </div>
      </section>

      {/* ══════════════════ DUO ══════════════════ */}
      <section className={s.duo}>
        <div className={s.duoInner}>
          <div className={`${s.duoHead} reveal`}>
            <span className="label">Un duo complémentaire</span>
            <h2 className={s.duoTitle}>
              Deux sensibilités, une même mission&nbsp;:<br/>
              prendre soin de votre journée.
            </h2>
          </div>

          <div className={s.duoCards}>
            <div className={`${s.duoCard} reveal`}>
              <div className={s.duoAvatar}>
                <img src={DANCE_IMG} alt="Florian"/>
              </div>
              <h3 className={s.duoName}>Florian</h3>
              <span className={s.duoRole}>Orchestration &amp; ambiance</span>
              <p className={s.duoDesc}>Il coordonne chaque moment avec soin, guide la fluidité de la journée et veille à ce que tout soit parfait dans les coulisses.</p>
            </div>

            <div className={`${s.duoCenter} reveal`} style={{ transitionDelay: '120ms' }}>
              <svg width="52" height="52" viewBox="0 0 80 80" fill="none">
                <path d="M52 10 A28 28 0 1 1 10 52" stroke="#C49A3C" strokeWidth="1.3" fill="none" opacity="0.6"/>
                <text x="23" y="40" fontFamily="Cormorant Garamond,serif" fontSize="23" fontWeight="600" fill="#C49A3C">M</text>
                <text x="26" y="59" fontFamily="Cormorant Garamond,serif" fontSize="20" fontWeight="400" fill="#C49A3C">C</text>
              </svg>
              <p className={s.duoCenterText}>
                Nous croyons qu'un mariage réussi est celui dont les mariés se souviennent parce qu'ils y étaient vraiment.
              </p>
            </div>

            <div className={`${s.duoCard} reveal`} style={{ transitionDelay: '220ms' }}>
              <div className={s.duoAvatar}>
                <img src={CHILDREN_IMG} alt="Camille"/>
              </div>
              <h3 className={s.duoName}>Camille</h3>
              <span className={s.duoRole}>Enfants &amp; bienveillance</span>
              <p className={s.duoDesc}>Elle prend soin de chaque enfant avec douceur et créativité. Les parents profitent pleinement, les enfants trouvent leur place.</p>
            </div>
          </div>

          <div className={s.duoStats}>
            {[
              ['BAFA', 'Formation professionnelle'],
              ['100%', 'Adaptabilité tout public'],
              ['Discrets', 'Présents sans s\'imposer'],
              ['Sur-mesure', 'Chaque mariage est unique'],
            ].map(([val, label], i) => (
              <div key={i} className={`${s.duoStat} reveal`} style={{ transitionDelay: `${i * 80}ms` }}>
                <span className={s.duoStatVal}>{val}</span>
                <span className={s.duoStatLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ PRESTATIONS PHOTOS ══════════════════ */}
      <section className={s.prestations}>
        <div className={s.prestationsInner}>
          <div className={`${s.prestationsHead} reveal`}>
            <span className="label">Nos accompagnements</span>
            <h2 className={s.prestationsTitle}>Quatre expertises,<br/>une journée parfaite.</h2>
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

      {/* ══════════════════ PRICING ══════════════════ */}
      <section className={s.pricing}>
        <div className={s.pricingInner}>
          <div className={`${s.pricingHead} reveal`}>
            <span className="label">Nos formules</span>
            <h2 className={s.pricingTitle}>Des accompagnements sur-mesure,<br/>pensés pour vous.</h2>
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
                <Link
                  to="/contact"
                  className={`${s.pricingCta} ${pk.highlight ? s.pricingCtaGold : ''}`}
                >
                  Nous écrire
                </Link>
              </div>
            ))}
          </div>

          <div className={`${s.pricingFootnote} reveal`}>
            <p>Chaque mariage étant unique, nos formules sont 100&nbsp;% modulables.</p>
            <Link to="/contact" className={s.pricingFootnoteLink}>
              Échanger sur votre projet <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA FINAL ══════════════════ */}
      <section className={s.cta}>
        <div className={s.ctaWave}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path d="M0,0 C480,60 960,60 1440,0 L1440,0 L0,0 Z" fill="#F4EFE6"/>
          </svg>
        </div>
        <div className={s.ctaInner}>
          <div className="reveal">
            <span className="label" style={{ color:'rgba(196,154,60,0.65)' }}>Prenons contact</span>
            <h2 className={s.ctaTitle}>Parlons de votre mariage.</h2>
            <p className={s.ctaBody}>
              Un premier échange est le meilleur moyen de voir si nous pouvons créer ensemble
              une journée fluide et inoubliable.
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
