import "./App.css";
import Navigation from "./components/layout/Navigation";

function App(props) {
	return <Navigation>{props.children}</Navigation>;
}

export default App;
