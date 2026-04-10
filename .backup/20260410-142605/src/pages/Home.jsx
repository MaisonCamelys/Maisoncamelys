import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import s from './Home.module.css'

const HERO_IMG = '/images/hero/couple-kiss.png'
const HERO_WIDE = '/images/hero/hero-wide.png'

const EXPERIENCE_IMAGES = {
  cocktail: '/images/experience/cocktail.png',
  welcome: '/images/experience/welcome.png',
  childrenWalk: '/images/experience/children-walk.png',
  kidsAtelier: '/images/experience/kids-atelier.png',
}

const DETAIL_IMAGES = {
  table: '/images/details/table-setting.png',
  rings: '/images/details/rings.png',
  bridal: '/images/details/bridal-room.png',
}

const AMBIANCE_IMAGES = {
  firstDance: '/images/ambiance/first-dance.png',
  slowDance: '/images/ambiance/slow-dance.png',
  eveningDance: '/images/ambiance/evening-dance.png',
}

const PILLARS = [
  {
    title: 'Orchestration',
    sub: 'de votre journée',
    desc: 'Un déroulé fluide, des transitions invisibles, une présence rassurante du premier instant au dernier.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M8 2v4M16 2v4M3 9h18M8 13h3M8 17h6" />
      </svg>
    ),
  },
  {
    title: 'Prise en charge',
    sub: 'des enfants',
    desc: 'Des enfants accompagnés avec douceur, des parents pleinement présents à leur journée.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <path d="M3 19c0-3 2.4-5 5-5s5 2 5 5M11 19c0-3 2.4-5 5-5s5 2 5 5" />
      </svg>
    ),
  },
  {
    title: 'Souvenirs',
    sub: 'photo & vidéo',
    desc: 'Des images vraies, discrètes, sensibles, pour prolonger les émotions bien après la fête.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8h4l2-2h4l2 2h4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" />
        <circle cx="12" cy="13" r="3.5" />
      </svg>
    ),
  },
  {
    title: 'Ambiance',
    sub: 'soirée dansante',
    desc: 'Une soirée élégante, chaleureuse, vivante, pensée pour créer de vrais souvenirs partagés.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V8l8-2v10" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="16" r="2" />
      </svg>
    ),
  },
]

const EXPERIENCES = [
  {
    image: EXPERIENCE_IMAGES.welcome,
    title: 'Une présence discrète, mais essentielle.',
    text: 'Nous accueillons, orientons, coordonnons et apaisons. Votre journée reste légère, même quand elle est dense.',
  },
  {
    image: EXPERIENCE_IMAGES.kidsAtelier,
    title: 'Les enfants ont aussi leur place.',
    text: 'Activités douces, accompagnement rassurant, attention réelle. Les parents profitent, les enfants vivent eux aussi une belle journée.',
  },
  {
    image: AMBIANCE_IMAGES.firstDance,
    title: 'Une ambiance qui reste juste.',
    text: 'Ni trop démonstrative, ni impersonnelle. Une soirée pensée pour être élégante, chaleureuse et mémorable.',
  },
]

const PACKS = [
  {
    name: "L'Essentielle",
    price: '1 300 €',
    text: "L'essentiel pour une journée fluide et sereine.",
    items: [
      'Orchestration de la journée',
      'Animation de la soirée',
      'Matériel son et lumière',
    ],
  },
  {
    name: 'La Signature',
    price: '1 700 €',
    text: "L'équilibre le plus juste entre émotion, confort et présence.",
    items: [
      'Orchestration de la journée',
      'Prise en charge des enfants',
      'Photo & vidéo de la journée',
      'Animation de la soirée',
      'Matériel son et lumière',
    ],
    featured: true,
  },
  {
    name: "L'Excellence",
    price: '2 200 €',
    text: 'Une prise en charge complète, du premier regard au dernier morceau.',
    items: [
      'Orchestration de la journée',
      'Prise en charge des enfants',
      'Photo & vidéo journée + soirée',
      'Animation de la soirée',
      'Matériel son et lumière',
      'Options premium',
    ],
  },
]

export default function Home() {
  useReveal()

  return (
    <main className={s.page}>
      <section className={s.hero}>
        <img src={HERO_IMG} alt="Couple de mariés dans une lumière dorée" className={s.heroImage} />
        <div className={s.heroOverlay} />
        <div className={s.heroGlow} />

        <div className={s.heroInner}>
          <div className={`${s.heroContent} reveal`}>
            <span className={s.kicker}>Maison Camelys</span>

            <h1 className={s.heroTitle}>
              Vivez pleinement
              <br />
              votre mariage,
              <br />
              nous orchestrons le reste.
            </h1>

            <p className={s.heroText}>
              Une présence élégante, humaine et maîtrisée pour que vous puissiez
              traverser votre journée avec fluidité, émotion et sérénité.
            </p>

            <div className={s.heroActions}>
              <Link to="/contact" className={s.primaryCta}>
                Échanger sur votre mariage
              </Link>
              <Link to="/prestations" className={s.secondaryCta}>
                Découvrir nos prestations
              </Link>
            </div>

            <p className={s.heroNote}>
              Élégance · fluidité · émotions partagées
            </p>
          </div>
        </div>

        <div className={s.heroCurve} aria-hidden="true" />
      </section>

      <section className={s.pillars}>
        <div className={s.container}>
          <div className={s.pillarsGrid}>
            {PILLARS.map((item, index) => (
              <article
                key={item.title}
                className={`${s.pillarCard} reveal`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className={s.pillarIcon}>{item.icon}</div>
                <h2 className={s.pillarTitle}>
                  {item.title}
                  <span>{item.sub}</span>
                </h2>
                <p className={s.pillarDesc}>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={s.story}>
        <div className={s.container}>
          <div className={s.storyGrid}>
            <div className={`${s.storyText} reveal`}>
              <span className="label">Notre conviction</span>
              <h2 className={s.sectionTitle}>
                Un mariage n’est pas seulement une succession de beaux moments.
              </h2>
              <p className={s.sectionBody}>
                C’est une journée intense, sensible, vivante. Notre rôle est de
                faire en sorte que tout soit fluide autour de vous, pour que vous
                puissiez réellement l’habiter.
              </p>
              <p className={s.sectionBody}>
                Nous veillons au rythme, aux invités, aux enfants, à l’ambiance
                et aux détails. Vous vivez. Nous orchestrons.
              </p>
            </div>

            <div className={s.storyVisuals}>
              <div className={`${s.storyLarge} reveal`}>
                <img src={EXPERIENCE_IMAGES.cocktail} alt="Invités au cocktail dans une ambiance élégante" />
              </div>
              <div className={`${s.storySmallTop} reveal`} style={{ transitionDelay: '100ms' }}>
                <img src={EXPERIENCE_IMAGES.welcome} alt="Accueil des invités lors du mariage" />
              </div>
              <div className={`${s.storySmallBottom} reveal`} style={{ transitionDelay: '180ms' }}>
                <img src={DETAIL_IMAGES.table} alt="Table de mariage raffinée" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={s.experience}>
        <div className={s.container}>
          <div className={`${s.sectionHeadCenter} reveal`}>
            <span className="label">L’expérience Maison Camelys</span>
            <h2 className={s.sectionTitleLight}>
              Une journée belle à vivre,
              <br />
              pas seulement belle à regarder.
            </h2>
          </div>

          <div className={s.experienceGrid}>
            {EXPERIENCES.map((item, index) => (
              <article
                key={item.title}
                className={`${s.experienceCard} reveal`}
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <div className={s.experienceMedia}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={s.experienceBody}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={s.details}>
        <div className={s.container}>
          <div className={s.detailsGrid}>
            <div className={`${s.detailsText} reveal`}>
              <span className="label">Le luxe des détails</span>
              <h2 className={s.sectionTitle}>
                Une sensation de calme,
                <br />
                même dans l’intensité.
              </h2>
              <p className={s.sectionBody}>
                Une bague posée dans la lumière. Une robe prête dans le silence.
                Une table qui semble évidente. Ce sont ces détails qui donnent
                sa noblesse à l’ensemble.
              </p>
              <p className={s.sectionQuote}>
                “Rien n’est laissé au hasard, pourtant rien ne paraît forcé.”
              </p>
            </div>

            <div className={s.detailsStack}>
              <div className={`${s.detailsTop} reveal`}>
                <img src={DETAIL_IMAGES.bridal} alt="Préparation de la mariée" />
              </div>
              <div className={s.detailsBottomRow}>
                <div className={`${s.detailsBottomLeft} reveal`} style={{ transitionDelay: '100ms' }}>
                  <img src={DETAIL_IMAGES.rings} alt="Alliances de mariage" />
                </div>
                <div className={`${s.detailsBottomRight} reveal`} style={{ transitionDelay: '180ms' }}>
                  <img src={DETAIL_IMAGES.table} alt="Art de la table raffiné" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={s.pricing}>
        <div className={s.container}>
          <div className={`${s.sectionHeadCenter} reveal`}>
            <span className="label">Nos formules</span>
            <h2 className={s.sectionTitle}>
              Des accompagnements pensés
              <br />
              comme des expériences.
            </h2>
          </div>

          <div className={s.pricingGrid}>
            {PACKS.map((pack, index) => (
              <article
                key={pack.name}
                className={`${s.pricingCard} ${pack.featured ? s.pricingCardFeatured : ''} reveal`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {pack.featured && <div className={s.pricingBadge}>La plus choisie</div>}
                <p className={s.pricingName}>{pack.name}</p>
                <p className={s.pricingText}>{pack.text}</p>
                <div className={s.pricingPriceWrap}>
                  <span className={s.pricingFrom}>à partir de</span>
                  <span className={s.pricingPrice}>{pack.price}</span>
                </div>
                <ul className={s.pricingList}>
                  {pack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to="/contact" className={pack.featured ? s.primaryCta : s.secondaryCtaDark}>
                  Nous écrire
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={s.finalCta}>
        <img src={AMBIANCE_IMAGES.slowDance} alt="Danse lente dans une lumière douce" className={s.finalCtaImage} />
        <div className={s.finalCtaOverlay} />

        <div className={s.container}>
          <div className={`${s.finalCtaInner} reveal`}>
            <span className={s.kickerLight}>Prenons le temps d’en parler</span>
            <h2 className={s.finalCtaTitle}>
              Parlons de votre mariage.
            </h2>
            <p className={s.finalCtaText}>
              Chaque mariage mérite une présence juste, élégante et humaine.
              Imaginons ensemble une journée fluide, chaleureuse et inoubliable.
            </p>
            <Link to="/contact" className={s.primaryCta}>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
