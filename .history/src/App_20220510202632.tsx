import { Outlet } from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout/Layout";
import Navigation from "./components/layout/Navigation";

function App() {
	return (
		<div className="main">
			<Layout>
				<Outlet />
			</Layout>
		</div>
	);
}

export default App;
