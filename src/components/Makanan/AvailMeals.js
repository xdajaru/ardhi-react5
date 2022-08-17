import Card from "../UI/Card";
import MealItem from "./JenisMakanan/MealItem";

import classes from "./AvailMeals.module.css";

const DUMMY_MEALS = [
	{
		id: "m1",
		name: "Ayam Bakar",
		description: "Makanan biasa aja",
		price: 54000,
	},
	{
		id: "m2",
		name: "Sate Kuda",
		description: "Makanan si pemberani!",
		price: 75000,
	},
	{
		id: "m3",
		name: "Soto Es Krim",
		description: "Coba dulu baru komentar",
		price: 45000,
	},
	{
		id: "m4",
		name: "Mangga Goreng",
		description: "Mangga rujak? udah biasa",
		price: 730000,
	},
];

const AvailMeals = function (props) {
	const mealList = DUMMY_MEALS.map((meal) => <MealItem id={meal.id} key={meal.id} name={meal.name} price={meal.price} description={meal.description} />);
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealList}</ul>
			</Card>
		</section>
	);
};

export default AvailMeals;
