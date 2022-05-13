function Backdrop({ onClose }: { onClose: (value: boolean) => void }) {
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
