import classes from "./Layout.module.scss";
import Navigation from "./Navigation";

function Layout(props) {
	return (
		<div>
			<Navigation />
			<main className={classes.main}>{props.children}</main>
		</div>
	);
}

export default Layout;
