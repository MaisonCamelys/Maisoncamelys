import { useEffect } from "react";
import styles from "./Home.module.css";

const prestations = [
  {
    img: "/images/sections/welcome.png",
    title: "Orchestration\nde votre journée",
    desc: "Nous coordonnons chaque moment pour une journée sans tension.",
  },
  {
    img: "/images/sections/kids-coordinator.png",
    title: "Prise en charge\ndes enfants",
    desc: "Des activités adaptées et une présence bienveillante tout au long de la journée.",
  },
  {
    img: "/images/details/table.png",
    title: "Souvenirs\nphoto & vidéo",
    desc: "Des images naturelles et pleines d’émotion, sans mise en scène.",
  },
  {
    img: "/images/ambiance/first-dance.png",
    title: "Ambiance\nsoirée dansante",
    desc: "Un DJ passionné pour faire monter l’énergie et créer une vraie soirée.",
  },
];

const packs = [
  {
    name: "L’ESSENTIELLE",
    text: "L’essentiel pour une journée bien orchestrée.",
    price: "1300 €",
    items: [
      "Orchestration de la journée",
      "Animation de la soirée",
      "Matériel son et lumière",
    ],
  },
  {
    name: "LA SIGNATURE",
    text: "L’équilibre parfait entre expérience, sérénité et présence.",
    price: "1700 €",
    items: [
      "Orchestration de la journée",
      "Prise en charge des enfants",
      "Photo & vidéo",
      "Animation de la soirée",
      "Matériel son et lumière",
    ],
    featured: true,
  },
  {
    name: "L’EXCELLENCE",
    text: "L’expérience complète, sans compromis.",
    price: "2200 €",
    items: [
      "Orchestration de la journée",
      "Prise en charge des enfants",
      "Photo & vidéo (journée + soirée)",
      "Animation de la soirée",
      "Matériel son et lumière",
      "Options premium",
    ],
  },
];

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -4% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <img
          src="/images/hero/Banderole.png"
          alt="Maison Camelys"
          className={styles.heroImage}
        />
      </section>

      <section className={`${styles.conviction} reveal reveal-up`}>
        <div className={styles.container}>
          <div className={styles.convictionShell}>
            <div className={styles.convictionText}>
              <p className={styles.label}>NOTRE CONVICTION</p>
              <h2 className={styles.convictionTitle}>
                Un mariage est un moment unique,
                <br />
                mais aussi une journée <em>intense à gérer.</em>
              </h2>
              <p className={styles.convictionBody}>
                Notre rôle : vous permettre de lâcher prise, en prenant soin de
                chaque détail, de vos invités et de l’ambiance.
              </p>
              <p className={styles.convictionBodySecondary}>
                Vous vivez pleinement votre journée. Nous veillons à son rythme,
                à sa fluidité et au confort de ceux qui vous entourent.
              </p>
              <a href="/prestations" className={styles.convictionLink}>
                Découvrir nos accompagnements
              </a>
            </div>

            <div className={styles.convictionVisual}>
              <div className={`${styles.convictionMainCard} reveal reveal-up reveal-delay-1`}>
                <img src="/images/details/table.png" alt="Table élégante de mariage" />
              </div>

              <div className={styles.convictionSideGrid}>
                <div className={`${styles.convictionSmallCard} reveal reveal-up reveal-delay-2`}>
                  <img src="/images/sections/kids-walk.png" alt="Enfants accompagnés pendant le mariage" />
                </div>
                <div className={`${styles.convictionSmallCard} reveal reveal-up reveal-delay-2`}>
                  <img src="/images/ambiance/first-dance.png" alt="Ouverture de bal et ambiance du soir" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.duo} reveal reveal-fade`}>
        <div className={styles.container}>
          <div className={styles.duoIntro}>
            <p className={styles.duoLabel}>UN DUO COMPLÉMENTAIRE</p>
            <h2 className={styles.duoTitle}>
              Deux sensibilités, une même mission :
              <br />
              prendre soin de votre journée.
            </h2>
            <p className={styles.duoLead}>
              Une présence fluide, discrète et profondément humaine, pensée pour
              que chaque instant soit vécu pleinement.
            </p>
          </div>

          <div className={styles.duoEditorial}>
            <article className={`${styles.duoPanel} ${styles.duoPanelLeft} reveal reveal-up`}>
              <div className={styles.duoPanelImage}>
                <img src="/images/sections/welcome.png" alt="Florian" />
              </div>
              <div className={styles.duoPanelContent}>
                <p className={styles.duoPanelKicker}>FLORIAN</p>
                <h3>Orchestration & ambiance</h3>
                <p>
                  Il coordonne les temps forts, anticipe les transitions et
                  veille à la fluidité de chaque moment, avec calme et maîtrise.
                </p>
              </div>
            </article>

            <div className={`${styles.duoCenter} reveal reveal-up reveal-delay-1`}>
              <div className={styles.duoCenterCard}>
                <img
                  src="/branding/logo-camelys.png"
                  alt="Maison Camelys"
                  className={styles.duoCenterLogo}
                />
                <p className={styles.duoCenterText}>
                  Ensemble, nous formons une présence complémentaire :
                  l’un veille au rythme et à l’orchestration, l’autre au confort,
                  à la douceur et à l’attention portée aux invités.
                </p>
              </div>
            </div>

            <article className={`${styles.duoPanel} ${styles.duoPanelRight} reveal reveal-up reveal-delay-1`}>
              <div className={styles.duoPanelImage}>
                <img src="/images/sections/kids-coordinator.png" alt="Camille" />
              </div>
              <div className={styles.duoPanelContent}>
                <p className={styles.duoPanelKicker}>CAMILLE</p>
                <h3>Enfants & bienveillance</h3>
                <p>
                  Elle crée un espace rassurant pour les enfants, avec une
                  attention douce, juste et sereine, pour que chacun trouve sa place.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.band} reveal reveal-fade`}>
        <div className={styles.bandOverlay} />
        <div className={styles.bandInner}>
          <h2 className={styles.bandTitle}>
            Votre mariage devient une expérience
            <br />
            fluide, joyeuse et inoubliable.
          </h2>

          <div className={styles.bandFacts}>
            <div>
              <strong>Invités heureux</strong>
              <span>Accueil fluide</span>
            </div>
            <div>
              <strong>Enfants épanouis</strong>
              <span>Présence bienveillante</span>
            </div>
            <div>
              <strong>Parents sereins</strong>
              <span>Lâcher-prise réel</span>
            </div>
            <div>
              <strong>Souvenirs précieux</strong>
              <span>Atmosphère durable</span>
            </div>
          </div>
        </div>
      </section>

      
      
      <section className={`${styles.prestationsEditorial} reveal reveal-fade`}>
        <div className={styles.container}>
          <div className={styles.prestationsEditorialTop}>
            <div className={`${styles.prestationsEditorialCopy} reveal reveal-left`}>
              <p className={styles.labelLeft}>NOS PRESTATIONS</p>
              <h2 className={styles.prestationsEditorialTitle}>
                Une présence pensée
                <br />
                pour alléger votre journée.
              </h2>
              <p className={styles.prestationsEditorialText}>
                Maison Camelys vous accompagne avec une présence fluide, élégante et profondément humaine.
                Notre rôle n’est pas d’ajouter du bruit, mais de rendre chaque moment plus simple,
                plus juste et plus agréable à vivre.
              </p>
              <p className={styles.prestationsEditorialTextSoft}>
                Vous profitez. Vos invités sont accompagnés. L’ambiance reste belle, naturelle et parfaitement orchestrée.
              </p>
            </div>

            <div className={`${styles.prestationsEditorialVisual} reveal reveal-right reveal-delay-1`}>
              <img src="/branding/logo-camelys.png" alt="Maison Camelys prestation principale" className={styles.prestationsEditorialMainImage} />
              <div className={styles.prestationsEditorialBadge}>
                <span>Présence discrète</span>
                <span>Élégance</span>
                <span>Fluidité</span>
              </div>
            </div>
          </div>

          <div className={styles.prestationsEditorialRail}>
            <article className={`${styles.prestationLine} reveal reveal-up`}>
              <div className={styles.prestationLineNumber}>01</div>
              <div className={styles.prestationLineBody}>
                <h3>Orchestration de votre journée</h3>
                <p>
                  Une coordination calme et maîtrisée pour que tout s’enchaîne avec naturel,
                  sans charge mentale ni tension invisible.
                </p>
              </div>
            </article>

            <article className={`${styles.prestationLine} reveal reveal-up reveal-delay-1`}>
              <div className={styles.prestationLineNumber}>02</div>
              <div className={styles.prestationLineBody}>
                <h3>Prise en charge des enfants</h3>
                <p>
                  Un accompagnement doux et rassurant, pensé pour leur confort,
                  et pour la sérénité réelle des parents tout au long de la journée.
                </p>
              </div>
            </article>

            <article className={`${styles.prestationLine} reveal reveal-up reveal-delay-2`}>
              <div className={styles.prestationLineNumber}>03</div>
              <div className={styles.prestationLineBody}>
                <h3>Souvenirs & ambiance de soirée</h3>
                <p>
                  Des émotions captées avec sensibilité, une atmosphère élégante,
                  et une soirée qui garde son énergie sans perdre son raffinement.
                </p>
              </div>
            </article>
          </div>

          <div className={`${styles.prestationsEditorialBottom} reveal reveal-fade`}>
            <div className={styles.prestationsEditorialMiniCard}>
              <img src="/images/experience/children-walk.png" alt="Ambiance Maison Camelys" className={styles.prestationsEditorialMiniImage} />
            </div>
            <div className={styles.prestationsEditorialBottomText}>
              <p>
                Chaque accompagnement s’adapte au rythme du lieu, à votre vision et à l’énergie de vos invités,
                pour créer une expérience cohérente, sereine et inoubliable.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className={`${styles.pricing} reveal reveal-up reveal-delay-1`}>
        <div className={styles.container}>
          <p className={styles.labelCenter}>NOS FORMULES</p>
          <h2 className={styles.sectionTitle}>
            Des accompagnements sur-mesure, pensés pour vous.
          </h2>

          <div className={styles.pricingGrid}>
            {packs.map((pack) => (
              <article
                key={pack.name}
                className={`${styles.priceCard} ${pack.featured ? styles.featured : ""} reveal reveal-up reveal-delay-1`}
              >
                <h3>{pack.name}</h3>
                <p className={styles.priceText}>{pack.text}</p>
                <ul>
                  {pack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className={styles.priceWrap}>
                  <span className={styles.price}>{pack.price}</span>
                  <small>à partir de</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.finalCta} reveal reveal-fade`}>
        <div className={styles.container}>
          <p className={styles.labelCenter}>PARLONS DE VOTRE MARIAGE</p>
          <h2 className={styles.finalTitle}>
            Une présence élégante et humaine
            <br />
            au cœur de votre journée.
          </h2>
          <p className={styles.finalText}>
            Chaque mariage est unique. Prenons le temps d’échanger pour imaginer
            ensemble une journée fluide, raffinée et fidèle à votre vision.
          </p>
          <a href="/contact" className={styles.ctaButton}>Nous contacter</a>
        </div>
      </section>
    </main>
  );
}
