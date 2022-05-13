import React from "react";

export const FavoriteContext = React.createContext({
	favorites: [],
	totalFavorites: 0,
});

const FavoriteContextProvider = function ({ children }) {
	const context = {};
	return <FavoriteContext.Provider>{children}</FavoriteContext.Provider>;
};

export default FavoriteContextProvider;
