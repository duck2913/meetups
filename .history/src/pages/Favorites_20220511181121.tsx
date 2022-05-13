import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupsList";
import { FavoriteContext } from "../store/favorite-context";
function Favorites() {
	const favoriteCtx = useContext(FavoriteContext);

	const meetups = favoriteCtx.favorites;
	return (
		<div>
			<h2>Here are all you favorites meetups</h2>
			<MeetupList />
		</div>
	);
}

export default Favorites;
