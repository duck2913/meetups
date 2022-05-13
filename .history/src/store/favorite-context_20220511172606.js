import React, { useState } from "react";

export const FavoriteContext = React.createContext({
	favorites: [],
	totalFavorites: 0,
	addFavoriteHanlder: () => {},
	removeFavoriteHandler: () => {},
	isFavorite: () => {},
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
