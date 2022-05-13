import Card from "../ui/Card";
import { useRef } from "react";
import classes from "./NewMeetupForm.module.scss";
import Meetup from "../../types/Meetup";

function NewMeetupForm({ onAddMeetup }: { onAddMeetup: (meetupData: Meetup) => void }) {
	const titleRef = useRef<HTMLInputElement>(null);
	const urlRef = useRef<HTMLInputElement>(null);
	const addressRef = useRef<HTMLInputElement>(null);
	const descriptionRef = useRef<HTMLTextAreaElement>(null);

	function handleFormSubmit(event: React.SyntheticEvent) {
		event.preventDefault();
		const enteredTitle = titleRef.current?.value;
		const enteredUrl = urlRef.current?.value;
		const enteredAddress = addressRef.current?.value;
		const enteredDescription = descriptionRef.current?.value;
		const meetupData = {
			title: enteredTitle,
			image: enteredUrl,
			address: enteredAddress,
			description: enteredDescription,
		};
		onAddMeetup(new Meetup(...meetupData));
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={handleFormSubmit}>
				<div className={classes.control}>
					<label htmlFor="title">Title</label>
					<input type="text" id="title" ref={titleRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="url">Image's url</label>
					<input type="text" id="url" ref={urlRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="address">Address</label>
					<input type="text" id="address" ref={addressRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="description">Description</label>
					<textarea rows={5} id="description" ref={descriptionRef} />
				</div>
				<div className="actions">
					<button className="btn">Submit</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
