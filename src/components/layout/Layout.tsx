import classes from "./Layout.module.scss";
import Navigation from "./Navigation";

function Layout({ children }: { children: JSX.Element | JSX.Element[] }) {
	return (
		<div>
			<Navigation />
			<main className={classes.main}>{children}</main>
		</div>
	);
}

export default Layout;
