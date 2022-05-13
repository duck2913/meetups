import classes from "Card.module.css";
// import { JsxElement } from "typescript";

function Card({ children }) {
	return <div className={classes.card}>{children}</div>;
}

export default Card;
