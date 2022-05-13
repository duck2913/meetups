import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupsList";

function AllMeetup() {
	const [fetchedMeetups, setFetchedMeetups] = useState([]);

	useEffect(() => {
		const fetchData = async function () {
			const res = await fetch(
				"https://react-fdf6f-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
			);
			const data = await res.json();
			console.log(data);
			const loadedMeetups = [];
			for (const key in data) {
				loadedMeetups.push({
					id: key,
					title: data[key].title,
					image: data[key].image,
					address: data[key].address,
					description: data[key].description,
				});
			}
		};
		fetchData();
	}, []);
	return <MeetupList meetups={fetchedMeetups} />;
}

export default AllMeetup;
