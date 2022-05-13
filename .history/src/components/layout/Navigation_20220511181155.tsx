import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.scss";

function Navigation() {
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
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navigation;
