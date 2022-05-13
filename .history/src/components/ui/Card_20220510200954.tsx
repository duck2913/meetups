import classes from "Card.module.css";
import { JsxElement } from "typescript";

function Card({ children }: { children: JsxElement }) {
	return <div className={classes.card}>{children}</div>;
}

export default Card;
