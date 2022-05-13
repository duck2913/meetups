type TodoProp = {
    title: string;
    onDelete: () =>void;
};

function Todo({ title, onDelete }: TodoProp) {
	return (
		<div className="card">
			<h2>{title}</h2>
			<div className="actions">
				<button className="btn" onClick={onDelete()}>DELETE</button>
			</div>
		</div>
	);
}

export default Todo;
