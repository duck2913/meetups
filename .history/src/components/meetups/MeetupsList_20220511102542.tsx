import classes from "./MeetupsList.module.scss";
import MeetupItem from "./MeetupItem";
import Meetup from "../../types/Meetup";

type MeetupListProp = {
	meetups: Meetup[];
};

function MeetupList({ meetups }: MeetupListProp) {
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
