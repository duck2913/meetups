import classes from "./Card.module.scss";

function Card({ children }: { children: JSX.Element | JSX.Element[] }) {
	return <div className={classes.card}>{children}</div>;
}

export default Card;
