import { useEffect } from "react";
import MeetupList from "../components/meetups/MeetupsList";
import Meetup from "../types/Meetup";

function AllMeetup() {
	let meetups: Meetup[] = [];
	useEffect(() => {
		fetch("https://react-fdf6f-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json")
			.then((res) => res.json())
			.then((data) => (meetups = data));
	}, []);
	return <MeetupList meetups={meetups} />;
}

export default AllMeetup;
