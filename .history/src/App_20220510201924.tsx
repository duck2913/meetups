import { Outlet } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/layout/Navigation";

function App() {
	return (
		<div className="main">
			<Navigation />
			<Outlet />
		</div>
	);
}

export default App;
