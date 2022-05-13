import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<AllMeetup />} />
			<Route path="/favorites" element={<Favorites />} />
			<Route path="/new-meetup" element={<NewMeetup />} />
		</Routes>
	</BrowserRouter>,
);
