import classes from "./MealItemForm.module.css";

import Input from "../../UI/Input";

const MealItemForm = function (props) {
	return (
		<form className={classes.form}>
			<Input label="Jumlah" input={{ id: "jumlah" + props.id, type: "number", min: "1", max: "5", step: "1", defaultValue: "1" }} />
			<button>+ Tambah ke keranjang</button>
		</form>
	);
};

export default MealItemForm;
