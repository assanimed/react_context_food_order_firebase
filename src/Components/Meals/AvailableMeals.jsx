import React, { useState, useEffect } from "react";

import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadMeals = async () => {
      const res = await fetch(
        "https://reactroadmap-default-rtdb.europe-west1.firebasedatabase.app/Meals.json"
      );

      const data = await res.json();

      const arrData = Object.keys(data).reduce((acc, next) => {
        return [...acc, { id: next, ...data[next] }];
      }, []);

      setIsLoading(false);
      setMeals(arrData);
    };
    loadMeals().catch(() => {
      setIsLoading(false);
      setError("Failed to load the data");
    });
  }, []);

  if (isLoading || error)
    return (
      <section className={styles.meals}>
        <Card>
          {isLoading && <h2>Loading....</h2>}
          {error && <h2>{error}.</h2>}
        </Card>
      </section>
    );

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        price={meal.price}
        desc={meal.description}
      />
    );
  });
  return (
    <section className={styles.meals}>
      <Card>
        {error && <h2>{error}</h2>}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
