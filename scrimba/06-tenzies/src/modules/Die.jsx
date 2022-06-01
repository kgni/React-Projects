import './Die.css';

export default function Die(props) {
	const checked = {
		backgroundColor: '#99f2a2',
	};

	return (
		<div
			onClick={() => props.setIsLocked(props.id)}
			className="die"
			style={props.isLocked ? checked : { backgroundColor: 'white' }}
		>
			{props.value}
		</div>
	);
}
