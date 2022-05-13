import clasess from "./Layout.module.css";
import Navigation from "./Navigation";

function Layout(props) {
	return (
		<div>
			<Navigation />
			<main>{props.children}</main>
		</div>
	);
}

export default Layout;
