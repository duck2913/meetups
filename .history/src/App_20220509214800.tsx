import "./App.css";
import Navigation from "./components/layout/Navigation";

function App({ children }: { children: JSX.Element }) {
	return (
		<>
			<Navigation />
			{children}
		</>
	);
}

export default App;
