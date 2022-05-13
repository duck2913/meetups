import { NavLink } from "react-router-dom";

function Navigation({ children }) {
	return (
		<div>
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
		</div>
	);
}

export default Navigation;
