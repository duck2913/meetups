import MeetupItemType from "../../types/Meetup";
import classes from "MeetupsList.module.css";
import MeetupItem from "./MeetupItem";
import Meetup from "../../types/Meetup";

function MeetupList({ meetups }: Meetup[]) {
	return (
		<section>
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
