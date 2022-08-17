import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import fotoMakanan from "../../assets/makanan.jpg";

const Header = function () {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>Mamam by Ardhi</h1>
				<HeaderCartButton />
			</header>
			<div className={classes["main-image"]}>
				<img src={fotoMakanan} alt="Foto makanan yang menggugah selera" />
			</div>
		</Fragment>
	);
};

export default Header;
