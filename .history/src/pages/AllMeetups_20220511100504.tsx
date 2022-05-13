import { useEffect } from "react";
import MeetupList from "../components/meetups/MeetupsList";
import Meetup from "../types/Meetup";

function AllMeetup() {
    useEffect(() => {
        fetch('')
    }, []);
	return <MeetupList meetups={DUMMY_DATA} />;
}

export default AllMeetup;
