import React, { useContext, useState } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

import CartContext from "../../store/cart-context";

const Cart = function (props) {
	const [isCheckOut, setIsCheckOut] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);

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

	const submitOrderHandler = async (userData) => {
		setIsSubmitting(true);
		await fetch("https://react-coba-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json", {
			method: "POST",
			body: JSON.stringify({ user: userData, orderedItems: cartCtx.items, total: totalAmount }),
		});

		setIsSubmitting(false);
		setDidSubmit(true);
		cartCtx.clearCart();
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

	const cartModalContent = (
		<React.Fragment>
			{cartItem}
			<div className={classes.total}>
				<span>Jumlah Total</span>
				<span>{totalAmount} </span>
			</div>
			{isCheckOut && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
			{!isCheckOut && modalActions}
		</React.Fragment>
	);

	const isSubmittingModalContent = <p>Mengirim data order...</p>;
	const didSubmitModalContent = (
		<React.Fragment>
			<p>Sukses mengirim order!</p>
			<div className={classes.actions}>
				<button className={classes.button} onClick={props.onClose}>
					Close
				</button>
			</div>
		</React.Fragment>
	);

	return (
		<Modal onClose={props.onClose}>
			{!isSubmitting && !didSubmit && cartModalContent}
			{isSubmitting && isSubmittingModalContent}
			{!isSubmitting && didSubmit && didSubmitModalContent}
		</Modal>
	);
};

export default Cart;
