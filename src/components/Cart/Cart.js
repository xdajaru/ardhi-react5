import { useContext, useState } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

import CartContext from "../../store/cart-context";

const Cart = function (props) {
	const [isCheckOut, setIsCheckOut] = useState(false);
	const cartCtx = useContext(CartContext);
	const totalAmount = `Rp ${cartCtx.totalAmount}`;

	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};
	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const orderHandler = function (event) {
		setIsCheckOut(true);
	};

	const cartItem = (
		<ul className={classes["cart-items"]}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onAdd={() => {
						cartItemAddHandler(item);
					}}
					onRemove={() => {
						cartItemRemoveHandler(item.id);
					}}
				/>
			))}
		</ul>
	);

	const modalActions = (
		<div className={classes.actions}>
			<button className={classes["button--alt"]} onClick={props.onClose}>
				Close
			</button>
			{hasItems && (
				<button className={classes.button} onClick={orderHandler}>
					Order
				</button>
			)}
		</div>
	);
	return (
		<Modal onClose={props.onClose}>
			{cartItem}
			<div className={classes.total}>
				<span>Jumlah Total</span>
				<span>{totalAmount} </span>
			</div>
			{isCheckOut && <Checkout onCancel={props.onClose} />}
			{!isCheckOut && modalActions}
		</Modal>
	);
};

export default Cart;
