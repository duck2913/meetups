import { useContext } from "react";
import { FavoriteContext } from "../store/favorite-context";
function Favorites() {
	const favoriteCtx = useContext(FavoriteContext);

	return <div>Favotite page</div>;
}

export default Favorites;
