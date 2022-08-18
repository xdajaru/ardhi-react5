import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Makanan/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = function () {
		setCartIsShown(true);
	};

	const hideCartHandler = function () {
		setCartIsShown(false);
	};

	return (
		<CartProvider>
			<Header onShowCart={showCartHandler} />
			{cartIsShown && <Cart onClose={hideCartHandler} />}
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
