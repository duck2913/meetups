import classes from "./Layout.module.scss";
import Navigation from "./Navigation";

function Layout({ children }) {
	return (
		<div>
			<Navigation />
			<main className={classes.main}>{children}</main>
		</div>
	);
}

export default Layout;
