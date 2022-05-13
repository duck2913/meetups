import "./App.css";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";
import { useState } from "react";

function App() {
	const [showModal, setShowModal] = useState(false);

	function deleteToDoHandler() {
		setShowModal(true);
	}

	function closeModalHandler() {
		setShowModal(false);
	}

	return (
		<div>
			<h1>My Todo</h1>
			<Todo title="hello" onDelete={deleteToDoHandler} />
			<Todo title="xin" onDelete={deleteToDoHandler} />
			<Todo title="chao" onDelete={deleteToDoHandler} />
			{showModal && <Modal onClose={closeModalHandler} />
			<Backdrop onClose={closeModalHandler} />}
		</div>
	);
}

export default App;
