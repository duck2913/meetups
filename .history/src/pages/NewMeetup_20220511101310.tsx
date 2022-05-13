import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
	async function handleAddMeetup(meetupData: {
		title: string;
		image: string;
		address: string;
		description: string;
	}) {
		const res = await fetch({
			method: "POST",
			body: JSON.stringify(meetupData),
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	return (
		<div>
			<h2>Add a new Meetup</h2>
			<NewMeetupForm onAddMeetup={handleAddMeetup} />
		</div>
	);
}

export default NewMeetup;
