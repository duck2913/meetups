import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Meetup from "../types/Meetup";

function NewMeetup() {
	function handleAddMeetup(meetupData: Meetup) {}

	return (
		<div>
			<h2>Add a new Meetup</h2>
			<NewMeetupForm onAddMeetup={handleAddMeetup} />
		</div>
	);
}

export default NewMeetup;
