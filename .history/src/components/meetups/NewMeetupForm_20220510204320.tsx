import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.scss";
function NewMeetupForm() {
	return (
		<Card>
			<form className={classes.form}>
				<div className="control">
					<input type="text" id="title" />
					<label htmlFor="title">Title</label>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
