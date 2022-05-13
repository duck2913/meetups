import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupsList";

function AllMeetup() {
	const [fetchedMeetups, setFetchedMeetups] = useState([]);

	useEffect(() => {
		fetch("https://react-fdf6f-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json");
	}, []);
	return <MeetupList meetups={fetchedMeetups} />;
}

export default AllMeetup;
