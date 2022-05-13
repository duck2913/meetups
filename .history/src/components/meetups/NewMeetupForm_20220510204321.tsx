import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.scss";
function NewMeetupForm() {
	return (
		<Card>
			<form className={classes.form}>
				<div className="control">
					<label htmlFor="title">Title</label>
					<input type="text" id="title" />
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
