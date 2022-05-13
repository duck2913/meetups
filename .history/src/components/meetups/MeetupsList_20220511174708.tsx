import classes from "./MeetupsList.module.scss";
import MeetupItem from "./MeetupItem";
import Meetup from "../../types/Meetup";
import { FavoriteContext } from "../store/favorite-context";
const favoriteContext = useContext(FavoriteContext);

function MeetupList({ meetups }: { meetups: Meetup[] }) {
	return (
		<ul className={classes.list}>
			{meetups.map((meetup) => (
				<MeetupItem
					key={meetup.id}
					id={meetup.id}
					image={meetup.image}
					title={meetup.title}
					address={meetup.address}
					description={meetup.description}
				/>
			))}
		</ul>
	);
}

export default MeetupList;
