import "./App.css";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
	return (
		<div>
			<h1>My Todo</h1>
			<Todo title="hello" />
			<Todo title="xin" />
			<Todo title="chao" />
			<Modal />
		</div>
	);
}

export default App;
