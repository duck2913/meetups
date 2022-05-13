import MeetupList from "../components/meetups/MeetupsList";
import MeetupItemType from "../types/Meetup";
import Meetup from "../types/Meetup";

const DUMMY_DATA: MeetupItemType[] = [
	{
		id: "m1",
		title: "This is a first meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
		address: "Meetupstreet 5, 12345 Meetup City",
		description:
			"This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
	},
	{
		id: "m2",
		title: "This is a second meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
		address: "Meetupstreet 5, 12345 Meetup City",
		description:
			"This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
	},
];

DUMMY_DATA.filter(
	(data) => new Meetup(data.id, data.title, data.image, data.address, data.description),
);

function AllMeetup() {
	return <MeetupList meetups={DUMMY_DATA} />;
}

export default AllMeetup;
