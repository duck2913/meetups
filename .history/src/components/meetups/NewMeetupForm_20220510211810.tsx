import Card from "../ui/Card";
import { useRef } from "react";
import classes from "./NewMeetupForm.module.scss";

function NewMeetupForm() {
	const titleRef = useRef<HTMLInputElement>();
	const urlRef = useRef<HTMLInputElement>();
	const addressRef = useRef<HTMLInputElement>();
	const descriptionRef = useRef<HTMLTextAreaElement>();

	function handleFormSubmit(event) {}

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
