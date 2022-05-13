import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import AllMeetup from "./pages/AllMeetups";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				{/* <Route element={<AllMeetup />}></Route> */}
				<Route path="favorites" element={<Favorites />} />
				<Route path="new-meetup" element={<NewMeetup />} />
			</Route>
		</Routes>
	</BrowserRouter>,
);
