import React, { useState } from "react";
import Meetup from "../types/Meetup";

type contextType = {
	favorites: Meetup[];
	totalFavorites: number;
	addFavorite: (newFavorite: Meetup) => void;
	removeFavoriteHandler: (id: string) => void;
	isFavorite: (id: string) => boolean;
};

export const FavoriteContext = React.createContext<contextType>(null);

const FavoriteContextProvider = function ({ children }) {
	const [favorites, setFavorites] = useState<Meetup[]>([]);

	function addFavoriteHanlder(newFavorite: Meetup) {
		setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
	}

	function removeFavoriteHandler(id: string) {
		setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== id));
	}

	function isFavoriteHandler(id: string) {
		return favorites.some((item) => item.id === id);
	}

	const context: contextType = {
		favorites: favorites,
		totalFavorites: favorites.length,
		addFavorite: addFavoriteHanlder,
		removeFavorite: removeFavoriteHandler,
		isFavorite: isFavoriteHandler,
	};
	return <FavoriteContext.Provider value={context}>{children}</FavoriteContext.Provider>;
};

export default FavoriteContextProvider;
