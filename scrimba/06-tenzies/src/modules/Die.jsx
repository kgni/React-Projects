import './Die.css';

export default function Die(props) {
	const style = {
		backgroundColor: props.isLocked ? '#99f2a2' : '#fff',
	};

	return (
		<div
			onClick={() => props.setIsLocked(props.id)}
			className="die"
			style={style}
		>
			{props.value}
		</div>
	);
}
