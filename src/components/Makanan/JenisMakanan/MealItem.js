import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";

const MealItem = function (props) {
	const price = `Rp. ${props.price}`;

	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm id={props.id} />
			</div>
		</li>
	);
};

export default MealItem;
