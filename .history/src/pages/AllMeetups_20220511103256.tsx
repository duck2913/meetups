import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupsList";

function AllMeetup() {
	const [isLoading, setIsLoading] = useState(false);
	const [fetchedMeetups, setFetchedMeetups] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async function () {
			const res = await fetch(
				"https://react-fdf6f-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
			);
			const data = await res.json();
			setIsLoading(false);
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
			setFetchedMeetups(loadedMeetups);
		};
		fetchData();
	}, []);

	const content = <div>is loading...</div>;

	return <MeetupList meetups={fetchedMeetups} />;
}

export default AllMeetup;
