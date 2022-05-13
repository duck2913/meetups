import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
	return (
		<header className={classes.header}>
			<h1>Final project</h1>
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
