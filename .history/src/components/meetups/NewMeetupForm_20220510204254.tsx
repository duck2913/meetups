import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.scss";
function NewMeetupForm() {
	return (
		<Card>
			<form className={classes.form}>
				<div className="control"></div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
