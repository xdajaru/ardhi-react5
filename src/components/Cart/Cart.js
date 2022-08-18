import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = function (props) {
	const cartItem = (
		<ul className={classes["cart-items"]}>
			{[{ id: "c1", name: "Sushi", amount: 2, price: 12000 }].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);
	return (
		<Modal onClose={props.onClose}>
			{cartItem}
			<div className={classes.total}>
				<span>Jumlah Total</span>
				<span>123999 </span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.onClose}>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
