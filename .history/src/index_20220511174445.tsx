import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import AllMeetup from "./pages/AllMeetups";
import FavoriteContextProvider from "./store/favorite-context";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<FavoriteContextProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<AllMeetup />}></Route>
					<Route path="favorites" element={<Favorites />} />
					<Route path="new-meetup" element={<NewMeetup />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</FavoriteContextProvider>,
);
