import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupsList";
import { FavoriteContext } from "../store/favorite-context";
function Favorites() {
	const favoriteCtx = useContext(FavoriteContext);
	const meetups = favoriteCtx.favorites;
	let content = <p>Try to add some meetup to your favorites</p>;
	return (
		<div>
			<h2>Here are all you favorites meetups</h2>
			<MeetupList meetups={meetups} />
		</div>
	);
}

export default Favorites;
