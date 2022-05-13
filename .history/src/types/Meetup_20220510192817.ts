class Meetup {
	id: string;
	title: string;
	image: string;
	address: string;
	description: string;

	constructor(id: string, title: string, image: string, address: string, description: string) {
		this.image = image;
		this.id = id;
		this.title = title;
		this.address = address;
		this.description = description;
	}
}

export default Meetup;
