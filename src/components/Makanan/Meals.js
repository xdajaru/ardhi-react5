import MealsSummary from "./MealsSummary";
import AvailMeals from "./AvailMeals";
import { Fragment } from "react";

const Meals = function () {
	return (
		<Fragment>
			<MealsSummary />
			<AvailMeals />
		</Fragment>
	);
};

export default Meals;
