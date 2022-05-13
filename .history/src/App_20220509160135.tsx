import "./App.css";
import Backdrop from "./components/Backdrop";
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
			<Backdrop />
		</div>
	);
}

export default App;
