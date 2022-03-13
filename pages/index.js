import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useCallback, useMemo } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [recipe, setRecipe] = useState({
    numberOfPizzas: 1,
    totalDoughSize: 150,
    pizzaSize: "small",
    hydration: 0.6
  });

  const { numberOfPizzas, totalDoughSize, pizzaSize, hydration } = recipe;

  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setRecipe(prev => ({ ...prev, [name]: value }));
  };

  const waterWeight = useMemo(() => {
    return Math.round(totalDoughSize * hydration * numberOfPizzas);
  }, [hydration, numberOfPizzas, totalDoughSize]);

  console.log(waterWeight);

  const flourWeight = useMemo(() => {
    return Math.round(totalDoughSize * numberOfPizzas);
  }, [numberOfPizzas, totalDoughSize]);

  const saltWeight = useMemo(() => {
    return Math.round(numberOfPizzas * totalDoughSize * 0.028);
  }, [numberOfPizzas, totalDoughSize]);

  useEffect(() => {
    if (totalDoughSize < 150) {
      setRecipe(prev => ({ ...prev, pizzaSize: "small" }));
    }
    if (totalDoughSize >= 155) {
      setRecipe(prev => ({ ...prev, pizzaSize: "medium" }));
    }
    if (totalDoughSize > 175) {
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
            PizzaPlotter <code className={styles.code}>2.0</code>
          </h1>

          <p className={styles.description}>Don't cry, it's just a pie.</p>
        </header>
        <div className={styles.layout}>
          <div className={styles.flex__cards}>
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
                min='130'
                max='200'
                step={5}
                className={styles.slider}
              ></input>
              <p>
                {totalDoughSize / 5} cm /{" "}
                {Math.round((totalDoughSize / 5) * 0.39)} inch
              </p>
            </section>
            <section className={styles.card}>
              <h2>Hydration level?</h2>
              <input
                onChange={onChange}
                type='range'
                name='hydration'
                value={hydration}
                min='0.6'
                max='0.75'
                step={0.01}
                className={styles.slider}
              ></input>
              <p>{hydration}</p>
            </section>
          </div>
          <section className={styles.ingredients__section}>
            <h3 className={styles.title}>Ingredients</h3>
            <div className={styles.ingredient__list}>
              <div className={styles.flex}>
                <p className={styles.ingredient__item}>Flour</p>
                <p className={styles.ingredient__weight}>{flourWeight}gr</p>
              </div>
              <div className={styles.flex}>
                <p className={styles.ingredient__item}>Water</p>
                <p className={styles.ingredient__weight}>{waterWeight}gr</p>
              </div>
              <div className={styles.flex}>
                <p className={styles.ingredient__item}>Salt</p>
                <p className={styles.ingredient__weight}>{saltWeight}gr</p>
              </div>
              <div className={styles.flex}>
                <p className={styles.ingredient__item}>Yeast</p>
                <p className={styles.ingredient__weight}>
                  {1 * numberOfPizzas}gr
                </p>
              </div>
              <div className={styles.flex}>
                <p className={styles.ingredient__item}>Honey/sugar</p>
                <p className={styles.ingredient__weight}>
                  {1 * numberOfPizzas}gr
                </p>
              </div>
            </div>
          </section>
          <div className={styles.recipe__wrapper}>
            <h2 className={styles.recipe__title}>
              Recipe for {numberOfPizzas} {pizzaSize}{" "}
              {numberOfPizzas > 1 ? "pizza's!" : "pizza pie!"}
            </h2>
            <p className={styles.recipe__subtitle}>
              Make poolish one day, or at least 18 hours, before you want to eat
              the pizza pie. This gives the best and tastiest results. It's a
              really easy step that makes your pizza pie eating experience much
              better.
            </p>
            <h3 className={styles.title__h3}>Day before pizza prep</h3>
            <ol>
              <li>Get a food container and put it on your scale</li>
              <li>
                Take {flourWeight / 4} grams of flour and {flourWeight / 4}{" "}
                grams of water.
              </li>
              <li>
                Add a {1 * numberOfPizzas} grams of honey and instant dried
                yeast.
              </li>
            </ol>
            <h3 className={styles.title__h3}>On pizza day</h3>
            <ol className='style.recipe__steps'>
              <li className={styles.recipe__step}>
                Put {waterWeight - flourWeight / 4} grams of water and and all
                the poolish/sourdough into a bowl. Mix until mixture looks like
                pancake batter.
                {flourWeight - flourWeight / 4} of flour into a bowl and mix.
              </li>
              <li className={styles.recipe__step}>
                Mix {Math.round(numberOfPizzas * totalDoughSize * 0.028)} grams
                of salt and {(totalDoughSize / 2) * numberOfPizzas} grams of
                flour separately and add to large bowl.
              </li>
              <li className={styles.recipe__step}>
                Mix everything together for 1 minute with big spoon or by hand.
                Now wait for 20 minutes so that it's gets bit less sticky.
              </li>
              <li className={styles.recipe__step}>
                Now knead the dough for a 10 minutes until it looks like a big
                ball of mozzarella. Divided into {numberOfPizzas}{" "}
                {numberOfPizzas > 1 ? "balls" : "ball"} and let it rest for 18
                to 24 hours.
              </li>
            </ol>
          </div>
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
