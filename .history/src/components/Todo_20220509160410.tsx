type TodoProp = {
	title: string;
};

function Todo({ title }: TodoProp) {
	return (
		<div className="card">
			<h2>{title}</h2>
			<div className="actions">
				<button className="btn" onClick={()}>DELETE</button>
			</div>
		</div>
	);
}

export default Todo;
