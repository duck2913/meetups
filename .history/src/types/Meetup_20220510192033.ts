class MeetupItemType {
	id: string;
	title: string;
	image: string;
	address: string;
	description: string;
	constructor(id: string, title: string, image: string, address: string, description: string) {
		this.id = id;
		this.title = title;
	}
}

export default MeetupItemType;
