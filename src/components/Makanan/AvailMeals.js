import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./JenisMakanan/MealItem";

import classes from "./AvailMeals.module.css";

const AvailMeals = function (props) {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();

	useEffect(() => {
		const fetchMeals = async function () {
			try {
				const response = await fetch("https://react-coba-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");
				console.log(response);
				if (!response.ok) {
					throw new Error("Error guys maap yak");
				}

				const data = await response.json();
				console.log(data);

				const loadedMeals = [];

				for (const key in data) {
					loadedMeals.push({
						id: key,
						name: data[key].name,
						price: data[key].price,
						description: data[key].description,
					});
				}

				setMeals(loadedMeals);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				setHttpError(error.message);
			}
		};

		fetchMeals();
	}, []);

	if (isLoading) {
		return (
			<section className={classes.MealsLoading}>
				<p>Loading...</p>
			</section>
		);
	}

	if (httpError) {
		return (
			<section className={classes.MealsIsError}>
				<p>{httpError}</p>
			</section>
		);
	}
	const mealList = meals.map((meal) => <MealItem id={meal.id} key={meal.id} name={meal.name} price={meal.price} description={meal.description} />);
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealList}</ul>
			</Card>
		</section>
	);
};

export default AvailMeals;
