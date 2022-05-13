import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/layout/Navigation";

function App() {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	);
}

export default App;
