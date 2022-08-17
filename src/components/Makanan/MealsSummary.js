import classes from "./MealsSummary.module.css";

const MealsSummary = function () {
	return (
		<section className={classes.summary}>
			<h2>Makanan enak diantar kerumahmu!</h2>
			<p>Pilih makanan favoritmu dari menu yang ada di restauran kami dan nikmati makanan yang enak.</p>
			<p>Semua makanan kami dimasak dengan bahan yang berkualitas tinggi dan dimasak oleh chef yang berpengalaman.</p>
		</section>
	);
};

export default MealsSummary;
