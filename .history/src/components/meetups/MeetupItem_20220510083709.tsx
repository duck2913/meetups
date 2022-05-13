import MeetupItemType from "../../types/MeetupItemType";

function MeetupItem({ id, title, image, description, address }: MeetupItemType) {
	return (
		<li key={id}>
			<div>
				<img src={image} alt={description} />
			</div>
			<div>
				<h3>{title}</h3>
				<address>{address}</address>
				<p>{description} </p>
			</div>
		</li>
	);
}

export default MeetupItem;
