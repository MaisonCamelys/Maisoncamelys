import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import s from './Prestations.module.css'

// Images Unsplash — CDN stable, licence libre
const HERO_IMG = "/images/hero/hero-main.png"
const IMG1 = "/images/A31.png"
const IMG2 = "/images/A27.png"
const IMG3 = "/images/A33.png"
const IMG4 = "/images/A26.png"

const SERVICES = [
  {
    img: IMG1, num: '01',
    title: "Orchestration de votre journée",
    desc: "Nous coordonnons chaque prestataire, chaque timing, chaque transition. Vous profitez. Nous veillons. La journée s'enchaîne avec naturel et fluidité, sans tension ni imprévu visible.",
    items: ["Coordination prestataires", "Gestion du planning", "Accueil et circulation des invités", "Liaisons cérémonie / cocktail / repas", "Gestion des imprévus"],
  },
  {
    img: IMG2, num: '02',
    title: "Prise en charge des enfants",
    desc: "Camille crée un espace dédié, animé et bienveillant. Les enfants sont occupés, heureux, encadrés. Les parents soufflent, profitent, dansent — sans culpabilité ni regard inquiet.",
    items: ["Espace enfants personnalisé", "Animations adaptées par âge", "Accompagnement repas", "Présence bienveillante tout au long de la journée", "Coordination avec les familles"],
  },
  {
    img: IMG3, num: '03',
    title: "Souvenirs Photo & Vidéo",
    desc: "Les instants les plus vrais sont souvent ceux qu'aucun photographe officiel ne capture. Nous veillons à ce que rien ne se perde — les rires spontanés, les regards, les micro-moments.",
    items: ["Captation discrète", "Photos de moments spontanés", "Film souvenir monté", "Remise numérique", "Sélection curatée avec soin"],
  },
  {
    img: IMG4, num: '04',
    title: "Ambiance Soirée Dansante",
    desc: "La soirée est une expérience à part entière. Nous en assurons l'énergie, la transition, l'ambiance. Du premier slow au dernier titre — la magie ne s'arrête pas.",
    items: ["Coordination DJ ou groupe", "Son et éclairage premium", "Animation de soirée", "Gestion des tempos", "Clôture de soirée élégante"],
  },
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

export default function Prestations() {
  useReveal()

  return (
    <main>
      {/* HERO */}
      <section className={s.hero}>
        <img src={HERO_IMG} alt="" className={s.heroImg}/>
        <div className={s.heroOverlay}/>
        <div className={s.heroContent}>
          <span className="label" style={{ color:'rgba(196,154,60,0.7)' }}>Nos accompagnements</span>
          <h1 className={s.heroTitle}>
            Une présence qui<br/><em>transforme</em> votre mariage.
          </h1>
          <p className={s.heroSub}>
            Un mariage ne se résume pas à une succession de moments.<br/>
            C'est une expérience que l'on vit pleinement.
          </p>
        </div>
        <div className={s.heroWave}>
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d="M0,64 C480,0 960,0 1440,64 L1440,64 L0,64 Z" fill="#FAF7F2"/>
          </svg>
        </div>
      </section>

      {/* SERVICES */}
      <section className={s.services}>
        <div className={s.servicesInner}>
          {SERVICES.map((sv, i) => (
            <div
              key={i}
              className={`${s.serviceRow} ${i % 2 === 1 ? s.serviceRowReverse : ''} reveal`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={s.serviceImg}>
                <img src={sv.img} alt={sv.title}/>
              </div>
              <div className={s.serviceContent}>
                <span className={s.serviceNum}>{sv.num}</span>
                <h2 className={s.serviceTitle}>{sv.title}</h2>
                <p className={s.serviceDesc}>{sv.desc}</p>
                <ul className={s.serviceItems}>
                  {sv.items.map(it => (
                    <li key={it}><span className={s.itemDash}>—</span>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PACKS */}
      <section className={s.packs}>
        <div className={s.packsInner}>
          <div className="reveal" style={{ textAlign:'center', marginBottom:'64px' }}>
            <span className="label">Nos formules</span>
            <h2 className={s.packsTitle}>Des accompagnements sur-mesure,<br/>pensés pour vous.</h2>
          </div>

          <div className={s.packsGrid}>
            {PACKS.map((p, i) => (
              <div
                key={i}
                className={`${s.packCard} ${p.highlight ? s.packHighlight : ''} reveal`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {p.badge && <div className={s.packBadge}>{p.badge}</div>}
                <p className={s.packName}>{p.name}</p>
                <p className={s.packSub}>{p.sub}</p>
                <ul className={s.packList}>
                  {p.items.map(it => (
                    <li key={it}><span>—</span>{it}</li>
                  ))}
                </ul>
                <div className={s.packPrice}>
                  {p.price} <small>à partir de</small>
                </div>
                <Link to="/contact" className={`${s.packCta} ${p.highlight ? s.packCtaGold : ''}`}>
                  Nous écrire
                </Link>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign:'center', marginTop:'40px' }}>
            <p className={s.packNote}>Chaque mariage étant unique, nos formules sont 100&nbsp;% modulables.</p>
            <Link to="/contact" className={s.packNoteLink}>
              Échanger sur votre projet →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={s.cta}>
        <div className="reveal">
          <span className="label" style={{ color:'rgba(196,154,60,0.65)' }}>Contact</span>
          <h2 className={s.ctaTitle}>Une question&nbsp;? Une date&nbsp;?</h2>
          <p className={s.ctaSub}>Prenons quelques minutes pour en parler ensemble.</p>
          <Link to="/contact" className={s.ctaBtn}>Échanger avec nous</Link>
        </div>
      </section>
    </main>
  )
}
