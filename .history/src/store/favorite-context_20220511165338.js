import React, { useState } from "react";

export const FavoriteContext = React.createContext({
	favorites: [],
	totalFavorites: 0,
});

const FavoriteContextProvider = function ({ children }) {
	const [favorites, setFavorites] = useState([]);
	const context = {
		favorites: favorites,
		totalFavorites: favorites.length,
	};
	return <FavoriteContext.Provider value={context}>{children}</FavoriteContext.Provider>;
};

export default FavoriteContextProvider;
