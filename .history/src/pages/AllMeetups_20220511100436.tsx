import MeetupList from "../components/meetups/MeetupsList";
import Meetup from "../types/Meetup";

function AllMeetup() {
	return <MeetupList meetups={DUMMY_DATA} />;
}

export default AllMeetup;
