function Backdrop({ onClose }: { onClose: () => void }) {
	return (
		<div
			className="backdrop"
			onClick={() => {
				onClose(true);
			}}
		></div>
	);
}

export default Backdrop;
