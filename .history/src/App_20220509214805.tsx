import "./App.css";
import Navigation from "./components/layout/Navigation";

function App({ children }) {
	return (
		<>
			<Navigation />
			{children}
		</>
	);
}

export default App;
