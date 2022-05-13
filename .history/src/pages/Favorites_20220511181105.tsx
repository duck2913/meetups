import { useContext } from "react";
import { FavoriteContext } from "../store/favorite-context";
function Favorites() {
	const favoriteCtx = useContext(FavoriteContext);

	const meetups = favoriteCtx.favorites;
	return (
		<div>
			<h2>Here are all you favorites meetups</h2>
		</div>
	);
}

export default Favorites;
