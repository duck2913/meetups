import MeetupItemType from "../../types/MeetupItemType";
import classes from "./MeetupItem.module.scss";

function MeetupItem({ id, title, image, description, address }: MeetupItemType) {
	return (
		<li key={id} className={classes.item}>
			<div>
				<img src={image} alt={description} className={classes.image} />
			</div>
			<div>
				<h3>{title}</h3>
				<address>{address}</address>
				<p>{description}</p>
			</div>
			<div>
				<button>To favorites</button>
			</div>
		</li>
	);
}

export default MeetupItem;
