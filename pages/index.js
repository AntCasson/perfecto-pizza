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
    return Math.round(numberOfPizzas * totalDoughSize * 0.02);
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
              <div className={styles.flex__between}>
                <h2>How many pizza's?</h2>
                <p className={styles.text__accent}>{numberOfPizzas}</p>
              </div>
              <input
                onChange={onChange}
                type='range'
                name='numberOfPizzas'
                value={numberOfPizzas}
                min='1'
                max='6'
                className={styles.slider}
              ></input>
            </section>
            <section className={styles.card}>
              <div className={styles.flex__between}>
                <h2>What size? </h2>
                <p className={styles.text__accent}>
                  {totalDoughSize / 5}cm /{" "}
                  {Math.round((totalDoughSize / 5) * 0.39)}inch
                </p>
              </div>
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
            </section>
            <section className={styles.card}>
              <div className={styles.flex__between}>
                <h2>Hydration level?</h2>
                <p className={styles.text__accent}>{hydration * 100}%</p>
              </div>
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
            </section>
          </div>
          <section className={styles.ingredients__section}>
            <h4 className={styles.title}>Ingredients</h4>
            <div className={styles.ingredient__list}>
              <div className={styles.ingredient__flex}>
                <p className={styles.ingredient}>Flour</p>
                <p className={styles.ingredient}>{flourWeight}gr</p>
              </div>
              <div className={styles.ingredient__flex}>
                <p className={styles.ingredient}>Water</p>
                <p className={styles.ingredient}>{waterWeight}gr</p>
              </div>
              <div className={styles.ingredient__flex}>
                <p className={styles.ingredient}>Salt</p>
                <p className={styles.ingredient}>{saltWeight}gr</p>
              </div>
              <div className={styles.ingredient__flex}>
                <p className={styles.ingredient}>Yeast</p>
                <p className={styles.ingredient}>{1 * numberOfPizzas}gr</p>
              </div>
              <div className={styles.ingredient__flex}>
                <p className={styles.ingredient}>Honey/sugar</p>
                <p className={styles.ingredient}>{1 * numberOfPizzas}gr</p>
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
              the pizza. It's a really easy step that makes your pizza pie
              eating experience much better.
              <br />
              <br />
              Use a nice big container that you can seal properly for the
              poolish because it will rise about 4 times in size.
            </p>
            <h3 className={styles.title__h3}>Day before pizza prep</h3>
            <ol className={styles.content__size_3}>
              <li className={styles.recipe__step}>
                Get a food container and put it on your scale
              </li>
              <li className={styles.recipe__step}>
                Take {Math.round(flourWeight / 2.6)} grams of flour and{" "}
                {Math.round(flourWeight / 2.6)} grams of water.
              </li>
              <li className={styles.recipe__step}>
                Add a {1 * numberOfPizzas} grams of honey and instant dried
                yeast.
              </li>
              <li className={styles.recipe__step}>
                Mix with a spoon until lumps of flour are gone and leave
                uncovered for 10 minutes.
              </li>
              <li className={styles.recipe__step}>
                After 10 minutes cover the container and leave at room temp for
                1 hour.
              </li>
              <li className={styles.recipe__step}>
                When the hour is over place the container in the fridge and
                start mentally preparing for your delicious pizza tomorrow.{" "}
              </li>
            </ol>

            <h3 className={styles.title__h3}>On pizza day</h3>
            <p className={styles.recipe__subtitle}>
              Take the poolish out of the fridge 1 hour before you start making
              the dough. It takes about 4/5 hours from taking the poolish out of
              the fridge to eating pizza.
              <br />
              <br />
              It seems like a lot of effort but combined you are only 30 minutes
              busy with the dough. Between the steps you can make pizza sauce,
              cut your toppings and clean your kitchen.
            </p>
            <ol start={7} className={styles.recipe__steps}>
              <li className={styles.recipe__step}>
                Put {Math.round(waterWeight - flourWeight / 2.6)} grams of water
                and {Math.round(numberOfPizzas * totalDoughSize * 0.028)} grams
                of salt in a bowl or measuring cup and mix to dissolve.
              </li>
              <li className={styles.recipe__step}>
                In a other big bowl add{" "}
                {Math.round(flourWeight - flourWeight / 2.6)} grams of flour and
                all the poolish you made yesterday.
              </li>
              <li className={styles.recipe__step}>
                Mix everything together for 1 minute with big spoon or by hand.
                Now cover it with the big mixing bowl 10 minutes so that it's
                gets bit less sticky.
              </li>
              <li className={styles.recipe__step}>
                Now knead the dough for 10/15 minutes until it looks like a big
                ball of lumpy mozzarella. Put a little bit of olive oil on one
                hand and rub in on the dough so it won't dry out. Cover with
                damp towel or place in big bowl/container with a lid and let it
                rest 1 hour.
              </li>
              <li className={styles.recipe__step}>
                After 1 hour make {numberOfPizzas}{" "}
                {numberOfPizzas > 1 ? "balls" : "ball"}. Use a little bit of
                olive oil on your hands to make the handling easier.
              </li>
              <li className={styles.recipe__step}>
                Place balls about 1 fist apart from each other on a baking tray
                or big container. Cover with plastic wrap or lid and wait for
                dough to double in size.
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
