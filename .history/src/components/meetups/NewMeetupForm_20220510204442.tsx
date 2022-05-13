import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.scss";
function NewMeetupForm() {
	return (
		<Card>
			<form className={classes.form}>
				<div className={classes.control}>
					<label htmlFor="title">Title</label>
					<input type="text" id="title" />
				</div>
				<div className={classes.control}>
					<label htmlFor="url">Image's url</label>
					<input type="text" id="url" />
				</div>
				<div className={classes.control}>
					<label htmlFor="address">Address</label>
					<input type="text" id="address" />
				</div>
				<div className={classes.control}>
					<label htmlFor="title">Image's url</label>
					<input type="text" id="url" />
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
