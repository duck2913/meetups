import { Outlet } from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout/Layout";

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
