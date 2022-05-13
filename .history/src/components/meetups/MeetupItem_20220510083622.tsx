import MeetupItemType from "../../types/MeetupItemType";

function MeetupItem({ id, title, image, description, address }: MeetupItemType) {
	return (
		<li key={id}>
			<div>
				<img src={image} alt="" />
			</div>
		</li>
	);
}

export default MeetupItem;
