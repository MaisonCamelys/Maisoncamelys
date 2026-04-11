import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    number: '01',
    eyebrow: 'Orchestration',
    title: 'Une journée tenue avec calme, précision et discrétion.',
    description:
      "Nous coordonnons les temps forts, accompagnons les transitions et veillons à ce que chaque moment trouve sa place avec naturel. Notre présence n’envahit jamais votre mariage : elle le rend fluide, lisible et serein.",
    points: [
      'Coordination des temps clés',
      'Gestion fluide des transitions',
      'Présence calme face aux imprévus',
    ],
    image: '/images/A31.png',
    alt: "Accueil et orchestration élégante d’un mariage",
  },
  {
    number: '02',
    eyebrow: 'Enfants',
    title: 'Les enfants trouvent leur place, les parents respirent pleinement.',
    description:
      "Les enfants font partie de la fête. Nous créons pour eux un cadre doux, vivant et rassurant, afin qu’ils profitent eux aussi de la journée. Pendant ce temps, les parents vivent chaque instant avec plus de légèreté.",
    points: [
      'Encadrement adapté au nombre d’enfants',
      'Activités pensées selon les âges',
      'Présence bienveillante tout au long de la journée',
    ],
    image: '/images/A27.png',
    alt: 'Enfants accompagnés avec douceur pendant un mariage',
  },
  {
    number: '03',
    eyebrow: 'Souvenirs',
    title: 'Des images sincères, fidèles à l’atmosphère vécue.',
    description:
      "Nous capturons les moments tels qu’ils se présentent, avec simplicité et sensibilité. Des regards, des gestes, des émotions vraies… pour laisser une trace élégante, naturelle et profondément vivante de votre journée.",
    points: [
      'Captation naturelle et discrète',
      'Moments spontanés et vrais',
      'Film souvenir monté avec sensibilité',
    ],
    image: '/images/A33.png',
    alt: 'Moment intime et naturel entre les mariés',
  },
  {
    number: '04',
    eyebrow: 'Soirée',
    title: 'Quand la journée s’ouvre naturellement vers la fête.',
    description:
      "Lorsque la soirée commence, nous accompagnons la montée en énergie avec justesse. La musique, le rythme et l’ambiance s’installent sans rupture, dans une continuité élégante, jamais forcée, toujours juste.",
    points: [
      'Montée progressive de l’énergie',
      'Ambiance élégante et naturelle',
      'Continuité jusque dans la soirée',
    ],
    image: '/images/A26.png',
    alt: 'Première danse et ambiance de soirée élégante',
  },
]

const packs = [
  {
    name: 'Expérience Essentielle',
    intro: "Une présence discrète et efficace pour structurer les moments importants.",
    result: 'Une journée structurée, naturelle et sans tension.',
    price: 'À partir de 1300€',
    featured: false,
  },
  {
    name: 'Expérience Signature',
    badge: 'La plus choisie',
    intro: 'Une prise en charge complète pour une journée fluide et sereine.',
    result: 'Vous profitez pleinement, tout est fluide.',
    price: '1700€ à 2100€',
    featured: true,
  },
  {
    name: 'Expérience Complète',
    intro: "L’expérience sans compromis.",
    result: 'Une journée intense et des souvenirs durables.',
    price: '2200€ à 2600€',
    featured: false,
  },
]

function SectionHeader({ label, title, text, centered = false, maxWidth = 'max-w-4xl' }) {
  return (
    <div className={[centered ? 'mx-auto text-center' : '', maxWidth].join(' ')}>
      <p className="text-[11px] uppercase tracking-[0.24em] text-[#C6A16E]">
        {label}
      </p>
      <h2
        className="mt-4 text-[clamp(2.2rem,4vw,4.6rem)] leading-[1.04] text-[#1F1D1A]"
        style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
      >
        {title}
      </h2>
      <p className="mt-5 text-[16px] leading-8 text-[#5F5952]">
        {text}
      </p>
    </div>
  )
}

function PricingCard({ pack }) {
  const featured = pack.featured

  return (
    <article
      className={[
        'rounded-[30px] border p-8 md:p-10',
        featured
          ? 'border-[#2C3622] bg-[#24301A] text-[#F7F3EE] shadow-[0_14px_40px_rgba(31,29,26,0.10)]'
          : 'border-[#D8D0C6] bg-[#FCFAF7] text-[#1F1D1A] shadow-[0_10px_30px_rgba(31,29,26,0.05)]',
      ].join(' ')}
    >
      {pack.badge ? (
        <div className="inline-flex rounded-full bg-[#D0A54A] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white">
          {pack.badge}
        </div>
      ) : null}

      <h3
        className="mt-5 text-[clamp(2rem,3vw,3rem)] leading-[1.04]"
        style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
      >
        {pack.name}
      </h3>

      <p className={featured ? 'mt-5 text-[16px] leading-8 text-[#DAD5CB]' : 'mt-5 text-[16px] leading-8 text-[#635E57]'}>
        {pack.intro}
      </p>

      <div className={featured ? 'mt-8 border-t border-white/10 pt-8' : 'mt-8 border-t border-[#E8E0D6] pt-8'}>
        <p className="text-[12px] uppercase tracking-[0.18em] text-[#C6A16E]">
          Résultat
        </p>
        <p className={featured ? 'mt-3 text-[17px] leading-8 text-[#F5F0E8]' : 'mt-3 text-[17px] leading-8 text-[#2A2723]'}>
          {pack.result}
        </p>
      </div>

      <div className="mt-10">
        <p
          className={featured ? 'text-[clamp(2rem,3vw,3rem)] text-[#D9B25C]' : 'text-[clamp(2rem,3vw,3rem)] text-[#1F1D1A]'}
          style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
        >
          {pack.price}
        </p>
      </div>

      <div className="mt-8">
        <Link
          to="/contact"
          className={[
            'inline-flex items-center rounded-full px-6 py-3 text-[12px] uppercase tracking-[0.18em] transition',
            featured
              ? 'bg-[#D0A54A] text-white hover:opacity-90'
              : 'border border-[#D8D0C6] text-[#1F1D1A] hover:bg-[#F4EEE5]',
          ].join(' ')}
        >
          Nous écrire
        </Link>
      </div>
    </article>
  )
}

export default function Prestations() {
  useReveal()

  const orchestration = services[0]
  const enfants = services[1]
  const souvenirs = services[2]
  const soiree = services[3]

  return (
    <main className="bg-[#F7F3EE] text-[#1F1D1A]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero-main.png"
            alt="Maison Camelys accompagne les mariés avec élégance"
            className="h-[78vh] min-h-[680px] w-full object-cover object-center md:h-[84vh]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,18,16,0.30),rgba(18,18,16,0.58))]" />
        </div>

        <div className="relative mx-auto flex min-h-[78vh] w-[min(1200px,calc(100%-2rem))] items-end py-16 md:w-[min(1200px,calc(100%-3rem))] md:py-20">
          <div className="max-w-[760px] text-[#FCFAF7]">
            <p className="reveal text-[11px] uppercase tracking-[0.24em] text-[#D8B36A]">
              Nos accompagnements
            </p>

            <h1
              className="reveal mt-5 max-w-[720px] text-[clamp(3rem,6.2vw,5.8rem)] leading-[0.98]"
              style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
            >
              Une présence pensée pour alléger, tenir et sublimer votre journée.
            </h1>

            <p className="reveal mt-6 max-w-[620px] text-[16px] leading-8 text-[#F1EBE2] md:text-[18px]">
              Maison Camelys orchestre votre mariage avec fluidité, attention et élégance,
              pour que vous puissiez le vivre pleinement, sans tension ni dispersion.
            </p>

            <a
              href="#experience"
              className="reveal mt-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-white/16"
            >
              Découvrir l’expérience
            </a>
          </div>
        </div>
      </section>

      <section id="experience" className="relative z-10 -mt-10 pb-12 md:-mt-16 md:pb-16">
        <div className="mx-auto w-[min(1100px,calc(100%-2rem))] md:w-[min(1120px,calc(100%-3rem))]">
          <div className="reveal rounded-[30px] border border-[#DDD4C9] bg-[#FCFAF7]/92 px-6 py-8 shadow-[0_12px_40px_rgba(31,29,26,0.06)] backdrop-blur-sm md:px-12 md:py-12">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#C6A16E]">
                  Repositionnement
                </p>
                <h2
                  className="mt-4 text-[clamp(2.25rem,4vw,4.5rem)] leading-[1.04] text-[#1F1D1A]"
                  style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
                >
                  Un mariage ne se résume pas à une suite de prestations.
                </h2>
              </div>

              <div className="flex items-end">
                <p className="max-w-[420px] text-[16px] leading-8 text-[#5F5952]">
                  C’est une expérience vivante, faite de rythmes, de présences, de détails,
                  d’émotions et d’invités à accompagner. Notre rôle est de lui donner une
                  continuité élégante, du premier accueil jusqu’à la dernière vibration de la soirée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-18 md:pb-24">
        <div className="mx-auto w-[min(1120px,calc(100%-2rem))] md:w-[min(1120px,calc(100%-3rem))]">
          <div className="reveal mb-14 md:mb-20">
            <SectionHeader
              label="L’expérience Camelys"
              title="Une présence qui structure sans jamais alourdir."
              text="Chaque intervention est pensée pour s’intégrer naturellement à votre journée, accompagner vos invités, préserver votre sérénité et laisser la place à ce qui compte vraiment."
              maxWidth="max-w-3xl"
            />
          </div>

          <article className="reveal grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14">
            <div className="overflow-hidden rounded-[34px] border border-[#DDD4C9] bg-[#FCFAF7] shadow-[0_16px_45px_rgba(31,29,26,0.06)]">
              <img
                src={orchestration.image}
                alt={orchestration.alt}
                className="h-[420px] w-full object-cover transition duration-700 ease-out hover:scale-[1.02] md:h-[580px]"
              />
            </div>

            <div className="pb-2">
              <div
                className="text-[56px] leading-none text-[#C6A16E] md:text-[78px]"
                style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
              >
                {orchestration.number}
              </div>

              <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#8C857D]">
                {orchestration.eyebrow}
              </p>

              <h3
                className="mt-4 max-w-[520px] text-[clamp(2.4rem,4vw,4.3rem)] leading-[1.02] text-[#1F1D1A]"
                style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
              >
                {orchestration.title}
              </h3>

              <p className="mt-6 max-w-[500px] text-[16px] leading-8 text-[#5F5952]">
                {orchestration.description}
              </p>

              <ul className="mt-8 space-y-3">
                {orchestration.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] leading-7 text-[#5F5952]">
                    <span className="mt-[10px] inline-block h-px w-5 shrink-0 bg-[#C6A16E]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <div className="mt-20 grid gap-14 lg:grid-cols-2">
            <article className="reveal">
              <div className="overflow-hidden rounded-[30px] border border-[#DDD4C9] bg-[#FCFAF7] shadow-[0_12px_38px_rgba(31,29,26,0.05)]">
                <img
                  src={enfants.image}
                  alt={enfants.alt}
                  className="h-[320px] w-full object-cover transition duration-700 ease-out hover:scale-[1.02] md:h-[420px]"
                />
              </div>

              <div className="mt-8">
                <div
                  className="text-[44px] leading-none text-[#C6A16E] md:text-[58px]"
                  style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
                >
                  {enfants.number}
                </div>

                <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-[#8C857D]">
                  {enfants.eyebrow}
                </p>

                <h3
                  className="mt-4 max-w-[520px] text-[clamp(2rem,3vw,3.2rem)] leading-[1.06] text-[#1F1D1A]"
                  style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
                >
                  {enfants.title}
                </h3>

                <p className="mt-5 max-w-[520px] text-[16px] leading-8 text-[#5F5952]">
                  {enfants.description}
                </p>
              </div>
            </article>

            <article className="reveal lg:pt-24">
              <div className="overflow-hidden rounded-[30px] border border-[#DDD4C9] bg-[#FCFAF7] shadow-[0_12px_38px_rgba(31,29,26,0.05)]">
                <img
                  src={souvenirs.image}
                  alt={souvenirs.alt}
                  className="h-[320px] w-full object-cover transition duration-700 ease-out hover:scale-[1.02] md:h-[420px]"
                />
              </div>

              <div className="mt-8">
                <div
                  className="text-[44px] leading-none text-[#C6A16E] md:text-[58px]"
                  style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
                >
                  {souvenirs.number}
                </div>

                <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-[#8C857D]">
                  {souvenirs.eyebrow}
                </p>

                <h3
                  className="mt-4 max-w-[520px] text-[clamp(2rem,3vw,3.2rem)] leading-[1.06] text-[#1F1D1A]"
                  style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
                >
                  {souvenirs.title}
                </h3>

                <p className="mt-5 max-w-[520px] text-[16px] leading-8 text-[#5F5952]">
                  {souvenirs.description}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pb-18 md:pb-24">
        <div className="mx-auto w-[min(1120px,calc(100%-2rem))] md:w-[min(1120px,calc(100%-3rem))]">
          <article className="reveal relative overflow-hidden rounded-[34px] border border-[#D7CFC4] bg-[#1F2619]">
            <div className="absolute inset-0">
              <img
                src={soiree.image}
                alt={soiree.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,26,18,0.82)_0%,rgba(21,26,18,0.56)_45%,rgba(21,26,18,0.30)_100%)]" />
            </div>

            <div className="relative px-6 py-12 text-[#FCFAF7] md:px-12 md:py-16 lg:w-[58%] lg:px-16 lg:py-20">
              <div
                className="text-[46px] leading-none text-[#D8B36A] md:text-[62px]"
                style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
              >
                {soiree.number}
              </div>

              <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#D5C9B8]">
                {soiree.eyebrow}
              </p>

              <h3
                className="mt-4 max-w-[520px] text-[clamp(2.1rem,3.5vw,3.8rem)] leading-[1.04]"
                style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
              >
                {soiree.title}
              </h3>

              <p className="mt-6 max-w-[520px] text-[16px] leading-8 text-[#EEE6DA]">
                {soiree.description}
              </p>

              <ul className="mt-8 space-y-3">
                {soiree.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] leading-7 text-[#EEE6DA]">
                    <span className="mt-[10px] inline-block h-px w-5 shrink-0 bg-[#D8B36A]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-6 md:w-[min(1120px,calc(100%-3rem))] lg:grid-cols-2">
          <article className="reveal rounded-[30px] border border-[#DDD4C9] bg-[#FCFAF7] px-6 py-8 md:px-9 md:py-10">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#C6A16E]">
              Notre approche
            </p>
            <h3
              className="mt-4 max-w-[560px] text-[clamp(2rem,3.5vw,3.8rem)] leading-[1.04] text-[#1F1D1A]"
              style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
            >
              Nous ne proposons pas une animation. Nous créons une continuité d’expérience.
            </h3>
            <p className="mt-6 max-w-[540px] text-[16px] leading-8 text-[#5F5952]">
              Une présence humaine, attentive et adaptable, au service de votre mariage.
              Notre rôle n’est pas d’ajouter du bruit, mais d’alléger la journée et de
              permettre à chaque moment d’exister pleinement.
            </p>
          </article>

          <article className="reveal rounded-[30px] border border-[#DDD4C9] bg-[#F4EEE4] px-6 py-8 md:px-9 md:py-10">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#C6A16E]">
              Adaptation
            </p>
            <h3
              className="mt-4 max-w-[520px] text-[clamp(2rem,3vw,3.4rem)] leading-[1.06] text-[#1F1D1A]"
              style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
            >
              Chaque mariage est unique.
            </h3>
            <p className="mt-6 max-w-[520px] text-[16px] leading-8 text-[#5F5952]">
              Nous adaptons notre accompagnement à votre journée, à votre lieu, à vos
              envies et à vos invités. C’est cette souplesse qui permet à l’expérience
              de rester juste, fluide et profondément personnelle.
            </p>
          </article>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto w-[min(1120px,calc(100%-2rem))] md:w-[min(1120px,calc(100%-3rem))]">
          <SectionHeader
            label="Les accompagnements"
            title="Des formules pensées pour s’adapter à votre journée."
            text="Chaque mariage est différent. Nous avons conçu plusieurs niveaux d’accompagnement afin de vous proposer une présence fluide, élégante et parfaitement adaptée à votre événement."
            centered
            maxWidth="max-w-4xl mx-auto"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packs.map((pack) => (
              <div key={pack.name} className="reveal">
                <PricingCard pack={pack} />
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-[14px] leading-7 text-[#7B746C]">
            Des ajustements sont ensuite possibles selon la durée, le nombre d’enfants,
            le lieu ou certains besoins spécifiques.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto w-[min(980px,calc(100%-2rem))] md:w-[min(980px,calc(100%-3rem))]">
          <div className="reveal rounded-[34px] border border-[#DDD4C9] bg-[#FCFAF7] px-6 py-10 text-center shadow-[0_14px_40px_rgba(31,29,26,0.05)] md:px-12 md:py-14">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#C6A16E]">
              Parlons de votre mariage
            </p>

            <h2
              className="mx-auto mt-4 max-w-[820px] text-[clamp(2.2rem,4vw,4.2rem)] leading-[1.04] text-[#1F1D1A]"
              style={{ fontFamily: 'var(--serif)', fontWeight: 400 }}
            >
              Un premier échange nous permet de comprendre votre vision avec justesse.
            </h2>

            <p className="mx-auto mt-6 max-w-[660px] text-[16px] leading-8 text-[#5F5952]">
              Nous pourrons ensuite vous proposer un accompagnement cohérent,
              fluide et profondément adapté à la manière dont vous souhaitez vivre cette journée.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-[#1F2619] px-7 py-3 text-[12px] uppercase tracking-[0.18em] text-white transition hover:opacity-92"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
