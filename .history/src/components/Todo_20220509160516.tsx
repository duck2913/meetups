type TodoProp = {
    title: string;
    onDelete: ()=>
};

function Todo({ title, onDelete }: TodoProp) {
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
