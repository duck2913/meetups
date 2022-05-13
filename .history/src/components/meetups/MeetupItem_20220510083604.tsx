import MeetupItemType from "../../types/MeetupItemType";

function MeetupItem({ id, title, image, description, address }: MeetupItemType) {
	return <li key={id}></li>;
}

export default MeetupItem;
