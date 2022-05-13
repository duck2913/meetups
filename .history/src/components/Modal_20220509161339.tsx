function Modal({ onClose }: { onClose: (value: boolean) => void }) {
	return (
		<div className="modal">
			<p>Are you sure</p>
			<button className="btn btn--alt" onClick={() => onClose(true)}>
				Cancel
			</button>
			<button className="btn" onClick={() => onClose(true)}>
				Confirm
			</button>
		</div>
	);
}

export default Modal;
