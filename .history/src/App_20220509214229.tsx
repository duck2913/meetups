import "./App.css";
import Navigation from "./components/layout/Navigation";

function App({ children: any }) {
	return <Navigation>{children}</Navigation>;
}

export default App;
