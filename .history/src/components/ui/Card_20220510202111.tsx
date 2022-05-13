import classes from "./Card.module.scss";

function Card({ childrens }: { children: JSX.Element }) {
	return <div className={classes.card}>{children}</div>;
}

export default Card;
