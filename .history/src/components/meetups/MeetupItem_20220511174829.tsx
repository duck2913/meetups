import Meetup from "../../types/Meetup";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.scss";
import { FavoriteContext } from "../../store/favorite-context";

function MeetupItem({ title, image, description, address }: Meetup) {
	const favoriteContext = useContext(FavoriteContext);

	return (
		<li className={classes.item}>
			<Card>
				<div>
					<img src={image} alt={description} className={classes.image} />
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<address>{address}</address>
					<p>{description}</p>
				</div>
				<div className={classes.actions}>
					<button>To favorites</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
