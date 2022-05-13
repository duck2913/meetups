type Todo = {
	title: string;
};

function Todo({ title }: Todo) {
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
