import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [recipe, setRecipe] = useState({
    numberOfPizzas: 2,
    sizeOfPizza: 125,
    hydration: 60
  });

  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setRecipe(prev => ({ ...prev, [name]: value }));
  };

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
        <header className={styles.header}>
          <h1 className={styles.title}>
            PizzaPlotter <code>2.0</code>
          </h1>

          <p className={styles.description}>Don't cry, it's just a pie.</p>
        </header>

        <div className={styles.grid}>
          <section className={styles.card}>
            <h2>How many pizza's?</h2>
            <input
              onChange={onChange}
              type='range'
              name='numberOfPizzas'
              value={recipe.numberOfPizzas}
              min='1'
              max='6'
              className={styles.slider}
            ></input>
            <p>{recipe.numberOfPizzas}</p>
          </section>

          <section className={styles.card}>
            <h2>What size?</h2>
            <input
              onChange={onChange}
              type='range'
              name='sizeOfPizza'
              value={recipe.sizeOfPizza}
              min='100'
              max='300'
              className={styles.slider}
            ></input>
          </section>

          <section className={styles.card}>
            <h2>Hydration level?</h2>
            <input
              onChange={onChange}
              type='range'
              name='hydration'
              value={recipe.hydration}
              min='60'
              max='75'
              className={styles.slider}
            ></input>
            {/* <p>
              The more water you add the stickier the dough will be. Even though
              it's hard to handle at first it definitely make your pizza's a lot
              tastier. Specially if you are baking your pie in a home oven.
            </p> */}
          </section>
        </div>

        <div className='recipe__wrapper'></div>
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
              width={22}
              height={22}
            />
          </span>
          by AntCasson
        </a>
      </footer>
    </div>
  );
}
