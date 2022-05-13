import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
function NewMeetup() {
	const navigate = useNavigate();

	async function handleAddMeetup(meetupData: {
		title: string;
		image: string;
		address: string;
		description: string;
	}) {
		await fetch(
			"https://react-fdf6f-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
			{
				method: "POST",
				body: JSON.stringify(meetupData),
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	}

	return (
		<div>
			<h2>Add a new Meetup</h2>
			<NewMeetupForm onAddMeetup={handleAddMeetup} />
		</div>
	);
}

export default NewMeetup;
