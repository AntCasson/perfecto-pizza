import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Plotter 2.0</title>
        <meta
          name='description'
          content="Let's go and make some restaurant quality pizza pie right home with PizzaPlotter"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          PizzaPlotter <code>2.0</code>
        </h1>

        <p className={styles.description}>
          Generate a great pizza recipe in{" "}
          <span className={styles.textAccent}>4</span> steps.
        </p>

        <div className={styles.grid}>
          <section className={styles.card}>
            <h2>How many pizza's?</h2>
            <p>Slider or better why to choose the size</p>
          </section>

          <section className={styles.card}>
            <h2>What size?</h2>
            <p>checkboxes for PIES SIZE</p>
          </section>

          <section className={styles.card}>
            <h2>How much water?</h2>
            <p>Slider for water </p>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://antcasson.eu'
          target='_blank'
          rel='noopener noreferrer'
        >
          made with
          <span className={styles.logo}>
            <Image
              src='/icon-192x192.png'
              alt='PizzaPlotter Icon'
              width={28}
              height={28}
            />
          </span>
          by AntCasson
        </a>
      </footer>
    </div>
  );
}
