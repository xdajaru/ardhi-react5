import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = function (props) {
	const [formInputsValidity, setformInputsValidity] = useState({
		name: true,
		street: true,
		city: true,
		postalCode: true,
	});
	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalCodeInputRef = useRef();
	const cityInputRef = useRef();

	const confirmHandler = function (event) {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredStreet = streetInputRef.current.value;
		const enteredPostalCode = postalCodeInputRef.current.value;
		const enteredCityName = cityInputRef.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const enteredStreetIsValid = !isEmpty(enteredStreet);
		const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
		const enteredCityNameIsValid = !isEmpty(enteredCityName);

		setformInputsValidity({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			postalCode: enteredPostalCodeIsValid,
			city: enteredCityNameIsValid,
		});

		const formIsValid = enteredNameIsValid && enteredCityNameIsValid && enteredPostalCodeIsValid && enteredStreetIsValid;

		if (!formIsValid) {
			return;
		}

		props.onConfirm({
			name: enteredName,
			street: enteredStreet,
			postalCode: enteredPostalCode,
			city: enteredCityName,
		});
	};

	const controlClasses = (formInputField) => {
		return `${classes.control} ${formInputsValidity[formInputField] ? "" : classes.invalid}`;
	};
	return (
		<form onSubmit={confirmHandler}>
			<div className={controlClasses("name")}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameInputRef} />
				{!formInputsValidity.name && <p>Please enter a valid name!</p>}
			</div>
			<div className={controlClasses("street")}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetInputRef} />
				{!formInputsValidity.street && <p>Please enter a valid street!</p>}
			</div>
			<div className={controlClasses("postalCode")}>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" id="postal" ref={postalCodeInputRef} />
				{!formInputsValidity.postalCode && <p>Please enter a valid Postal Code!</p>}
			</div>
			<div className={controlClasses("city")}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityInputRef} />
				{!formInputsValidity.city && <p>Please enter a valid city!</p>}
			</div>
			<div className={classes.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
