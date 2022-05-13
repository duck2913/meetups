import MeetupItemType from "../../types/MeetupItemType";
import classes from "MeetupsList.module.css";

function MeetupList({ meetups }) {
    return <section>
        {meetups.map(meetup) => div}
    </section>;
}

export default MeetupList;
