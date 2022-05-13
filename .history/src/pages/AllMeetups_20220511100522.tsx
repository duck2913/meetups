import { useEffect } from "react";
import MeetupList from "../components/meetups/MeetupsList";
import Meetup from "../types/Meetup";

function AllMeetup() {
	useEffect(() => {
		fetch(
			"https://react-fdf6f-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
		).then((res) => res.json());
	}, []);
	return <MeetupList meetups={DUMMY_DATA} />;
}

export default AllMeetup;
