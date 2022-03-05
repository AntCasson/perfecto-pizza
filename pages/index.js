import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [recipe, setRecipe] = useState({
    numberOfPizzas: 1,
    totalDoughSize: 250,
    pizzaSize: "small",
    hydration: 60
  });

  const { numberOfPizzas, totalDoughSize, pizzaSize, hydration } = recipe;

  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setRecipe(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (totalDoughSize < 300) {
      setRecipe(prev => ({ ...prev, pizzaSize: "small" }));
    }
    if (totalDoughSize >= 300) {
      setRecipe(prev => ({ ...prev, pizzaSize: "medium" }));
    }
    if (totalDoughSize > 325) {
      setRecipe(prev => ({ ...prev, pizzaSize: "large" }));
    }
  }, [totalDoughSize]);

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
              value={numberOfPizzas}
              min='1'
              max='6'
              className={styles.slider}
            ></input>
            <p>{numberOfPizzas}</p>
          </section>

          <section className={styles.card}>
            <h2>What size?</h2>
            <input
              onChange={onChange}
              type='range'
              name='totalDoughSize'
              value={totalDoughSize}
              min='250'
              max='350'
              step={25}
              className={styles.slider}
            ></input>
            <p>{totalDoughSize}</p>
          </section>

          <section className={styles.card}>
            <h2>Hydration level?</h2>
            <input
              onChange={onChange}
              type='range'
              name='hydration'
              value={hydration}
              min='60'
              max='70'
              step={2}
              className={styles.slider}
            ></input>
            <p>{recipe.hydration}</p>
          </section>
        </div>

        <div className={styles.recipe__wrapper}>
          <h2 className='style.recipe__title'>
            Recipe for {numberOfPizzas} {pizzaSize}{" "}
            {numberOfPizzas > 1 ? "pizza's!" : "pizza pie!"}
          </h2>
          <p className='style.recipe__subtitle'>
            To get the best results make the dough one day, or at least 18
            hours, before you want to eat the pizza pie.
          </p>
          <ul className='style.recipe__steps'>
            <li className={styles.recipe__step}>
              Put{" "}
              {(
                (((hydration / 100) * totalDoughSize * hydration) / 100) *
                numberOfPizzas
              ).toFixed(0)}{" "}
              grams of water and {(numberOfPizzas * 0.1).toFixed(1)} grams of
              yeast into large bowl.
            </li>

            {/* FLOUR weight needs fixing */}
            <li className={styles.recipe__step}>
              Mix {numberOfPizzas * 2.5} grams of salt and{" "}
              {(((hydration * totalDoughSize) / 100) * numberOfPizzas).toFixed(
                0
              )}{" "}
              grams of flour separately and add to large bowl.
            </li>
            <li className={styles.recipe__step}>
              Mix everything together for 1 minute with big spoon or by hand.
              Now wait for 20 minutes so that it's gets bit less sticky.
            </li>
            <li className={styles.recipe__step}>
              Now knead the dough for a 10 minutes until it looks like a big
              ball of mozzarella. Divided into {numberOfPizzas}{" "}
              {numberOfPizzas > 1 ? "balls" : "ball"} and let it rest for 18 to
              24 hours.
            </li>
          </ul>
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
