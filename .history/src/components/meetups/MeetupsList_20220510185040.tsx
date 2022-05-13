import MeetupItemType from "../../types/MeetupItemType";
import classes from "MeetupsList.module.css";

function MeetupList({ meetups }) {
    return <section>
        {meetups.map(meetup) => <MeetupItem/>}
    </section>;
}

export default MeetupList;
