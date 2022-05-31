import React, { useState, useEffect } from 'react';
import Die from './modules/Die';

export default function App() {
	const [dice, setDice] = useState(allNewDice());

	function allNewDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			newDice.push(Math.ceil(Math.random() * 6));
		}
		return newDice;
	}
	const dieArray = dice.map((el) => <Die value={el} />);

	function rollDice() {
		setDice(allNewDice());
	}

	return (
		<main>
			<div className="die-container">{dieArray}</div>
			<button onClick={rollDice} className="roll-btn">
				Roll dice
			</button>
		</main>
	);
}
