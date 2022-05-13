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
					id={meetup.id}
					image={meetup.image}
					title={meetup.title}
					address={meetup.address}
					description={meetup.description}
				/>
			))}
		</section>
	);
}

export default MeetupList;
