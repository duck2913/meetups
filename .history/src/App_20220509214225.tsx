import "./App.css";
import Navigation from "./components/layout/Navigation";

function App({ children: any }) {
	return <Navigation>{props.children}</Navigation>;
}

export default App;
