import MeetupItemType from "../../types/MeetupItemType";
import classes from "MeetupsList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList({ meetups }: MeetupItemType{}) {
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
