import { useEffect } from "react";
import MeetupList from "../components/meetups/MeetupsList";
import Meetup from "../types/Meetup";

function AllMeetup() {
	useEffect(() => {
		const data = fetch(
			"https://react-fdf6f-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
		)
			.then((res) => res.json())
			.then((data) => data);
	}, []);
	return <MeetupList meetups={} />;
}

export default AllMeetup;
