import styles from "./Home.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <img
          src="/images/hero/Banderole.png"
          alt="Maison Camelys"
          className={styles.heroImage}
        />
      </section>
    </main>
  );
}
