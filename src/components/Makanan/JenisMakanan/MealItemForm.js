import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";

import Input from "../../UI/Input";

const MealItemForm = function (props) {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(enteredAmountNumber);
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input ref={amountInputRef} label="Jumlah" input={{ id: "jumlah" + props.id, type: "number", min: "1", max: "5", step: "1", defaultValue: "1" }} />
			<button>+ Tambah ke keranjang</button>
			{!amountIsValid && <p>Tolong masukkan angka dari 1 - 5.</p>}
		</form>
	);
};

export default MealItemForm;
