import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import AllMeetup from "./pages/AllMeetups";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AllMeetup />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/new-meetup" element={<NewMeetup />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
