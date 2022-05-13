import React, { useState } from "react";
import Meetup from "../types/Meetup";

type contextType = {
	favorites: Meetup[];
	totalFavorites: number;
	addFavoriteHanlder: (newFavorite: Meetup) => void;
	removeFavoriteHandler: (id: string) => void;
	isFavorite: (id: string) => boolean;
};

export const FavoriteContext = React.createContext<contextType>({
	favorites: [],
	totalFavorites: 0,
	addFavoriteHanlder: (newFavorite) => {},
	removeFavoriteHandler: (id) => {},
	isFavorite: (id) => {},
});

const FavoriteContextProvider = function ({ children }) {
	const [favorites, setFavorites] = useState([]);

	function addFavoriteHanlder(newFavorite) {
		setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
	}

	function removeFavoriteHandler(id) {
		setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== id));
	}

	function isFavoriteHandler(id) {
		return favorites.some((item) => item.id === id);
	}

	const context = {
		favorites: favorites,
		totalFavorites: favorites.length,
		addFavorite: addFavoriteHanlder,
		removeFavorite: removeFavoriteHandler,
		isFavorite: isFavoriteHandler,
	};
	return <FavoriteContext.Provider value={context}>{children}</FavoriteContext.Provider>;
};

export default FavoriteContextProvider;
