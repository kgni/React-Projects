import Die from './modules/Die';

export default function App() {
	const dieArray = [];

	for (let i = 0; i < 10; i++) {
		const randNum = Math.floor(Math.random() * 6) + 1;
		dieArray.push(<Die value={randNum} />);
	}

	return (
		<main>
			<div className="die-container">{dieArray}</div>
		</main>
	);
}
