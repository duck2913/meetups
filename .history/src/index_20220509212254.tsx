import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<BrowserRouter>
		<App />
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/favorites" element={<Favorites />} />
			<Route path="/new-meetup" element={<NewMeetup />} />
		</Routes>
	</BrowserRouter>,
);
