import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.scss";
import { useContext } from "react";
import { FavoriteContext } from "../../store/favorite-context";

function Navigation() {
	const favoriteCtx = useContext(FavoriteContext);
	console.log(favoriteCtx);

	return (
		<header className={classes.header}>
			<h1 className={classes.logo}>Final project</h1>
			<nav>
				<ul>
					<li>
						<NavLink to={"/"}>All meetups</NavLink>
					</li>
					<li>
						<NavLink to={"/new-meetup"}>New Meetup</NavLink>
					</li>
					<li>
						<NavLink to={"/favorites"}>Favorites</NavLink>
						{favoriteCtx.totalFavorites > 0 && <span>{favoriteCtx.totalFavorites}</span>}
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navigation;
