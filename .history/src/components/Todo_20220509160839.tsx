type TodoProp = {
	title: string;
	onDelete: (value: boolean) => React.Dispatch<React.SetStateAction<any>>;
};

function Todo({ title, onDelete }: TodoProp) {
	return (
		<div className="card">
			<h2>{title}</h2>
			<div className="actions">
				<button className="btn" onClick={onDelete(false)}>
					DELETE
				</button>
			</div>
		</div>
	);
}

export default Todo;
