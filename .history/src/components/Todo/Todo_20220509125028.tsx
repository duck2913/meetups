import { type } from "@testing-library/user-event/dist/type";

type Todo {
	title: string;
}

function Todo({ title }: { title: string }) {
	return (
		<div className="card">
			<h2>{title}</h2>
			<div className="actions">
				<button className="btn">DELETE</button>
			</div>
		</div>
	);
}

export default Todo;
