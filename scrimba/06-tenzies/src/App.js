import React, { useState, useEffect } from 'react';
import Die from './modules/Die';

export default function App() {
	const [dice, setDice] = useState(allNewDice());
	const [isGameOver, setIsGameOver] = useState(false);

	function allNewDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			const value = Math.ceil(Math.random() * 6);
			newDice.push({
				id: i + 1,
				value: value,
				isLocked: false,
			});
		}
		return newDice;
	}

	function setIsLocked(id) {
		setDice((oldDice) => {
			return oldDice.map((dice) => {
				if (dice.id === id) {
					return {
						...dice,
						isLocked: !dice.isLocked,
					};
				} else {
					return {
						...dice,
					};
				}
			});
		});
	}

	function rollDice() {
		setDice((oldDice) => {
			return oldDice.map((dice) => {
				const value = Math.ceil(Math.random() * 6);
				if (!dice.isLocked) {
					return {
						...dice,
						value: value,
					};
				} else {
					return {
						...dice,
					};
				}
			});
		});
	}

	useEffect(() => {
		if (
			dice.every((el) => el.isLocked) &&
			dice.every((el) => el.value === dice[0].value)
		) {
			setIsGameOver(true);
		} else {
			setIsGameOver(false);
		}
	}, [dice]);

	function restartGame() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			const value = Math.ceil(Math.random() * 6);
			newDice.push({
				id: i + 1,
				value: value,
				isLocked: false,
			});
		}
		setIsGameOver(false);
		return newDice;
	}

	const dieArray = dice.map((el) => (
		<Die {...el} setIsLocked={setIsLocked} key={el.id} />
	));

	return (
		<main>
			<div className="die-container">{dieArray}</div>

			{isGameOver ? (
				<button onClick={() => setDice(restartGame())} className="roll-btn">
					Restart game
				</button>
			) : (
				<button onClick={rollDice} className="roll-btn">
					Roll dice
				</button>
			)}
		</main>
	);
}
