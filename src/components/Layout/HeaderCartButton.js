import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = function (props) {
	const [btnHighlighted, setBtnHighlighed] = useState(false);
	const cartCtx = useContext(CartContext);

	const { items } = cartCtx;

	const numberOfCartItems = items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;
	useEffect(() => {
		if (items.length === 0) {
			return;
		}

		setBtnHighlighed(true);

		const timer = setTimeout(() => {
			console.log("hah");
			setBtnHighlighed(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button className={btnClasses} onClick={props.onShowCart}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Keranjang</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
