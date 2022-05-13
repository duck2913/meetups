import classes from "./Card.module.scss";

function Card({ childrens }: { childrens: JSX.Element }) {
	return <div className={classes.card}>{children}</div>;
}

export default Card;
