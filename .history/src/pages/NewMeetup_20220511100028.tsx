import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
	function handleAddMeetup(meetupData: {
		title: string;
		image: string;
		address: string;
		description: string;
	}) {
		fetch("https://react-fdf6f-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json");
	}

	return (
		<div>
			<h2>Add a new Meetup</h2>
			<NewMeetupForm onAddMeetup={handleAddMeetup} />
		</div>
	);
}

export default NewMeetup;
