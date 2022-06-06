import React, { useState, useEffect } from 'react';
import Die from './modules/Die';
import Confetti from 'react-confetti';

export default function App() {
	const [dice, setDice] = useState(
		() => JSON.parse(localStorage.getItem('dice')) || allNewDice()
	);
	const [isGameOver, setIsGameOver] = useState(false);

	const [rolls, setRolls] = useState(
		() => JSON.parse(localStorage.getItem('rolls')) || 0
	);

	const [highscore, setHighScore] = useState(
		() => JSON.parse(localStorage.getItem('highscore')) || 0
	);

	const [gamesPlayed, setGamesPlayed] = useState(
		() => JSON.parse(localStorage.getItem('gamesplayed')) || 0
	);

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
				return dice.id === id ? { ...dice, isLocked: !dice.isLocked } : dice;
			});
		});
	}

	function rollDice() {
		setDice((oldDice) => {
			return oldDice.map((dice) => {
				const value = Math.ceil(Math.random() * 6);
				return !dice.isLocked ? { ...dice, value: value } : dice;
			});
		});

		setRolls((oldRolls) => {
			return (oldRolls = oldRolls + 1);
		});

		if (gamesPlayed === 0) {
			setHighScore((oldHighScore) => (oldHighScore = oldHighScore + 1));
		}
	}

	useEffect(() => {
		localStorage.setItem('rolls', JSON.stringify(rolls));

		localStorage.setItem('highscore', JSON.stringify(highscore));
	}, [rolls]);

	useEffect(() => {
		localStorage.setItem('dice', JSON.stringify(dice));
		localStorage.setItem('gamesplayed', JSON.stringify(gamesPlayed));
		if (
			dice.every((el) => el.isLocked) &&
			dice.every((el) => el.value === dice[0].value)
		) {
			setIsGameOver(true);
			setGamesPlayed((oldGamesPlayed) => (oldGamesPlayed = oldGamesPlayed + 1));
			localStorage.setItem('gamesplayed', JSON.stringify(gamesPlayed));

			if (rolls < highscore) {
				setHighScore((oldHighScore) => (oldHighScore = rolls));
				localStorage.setItem('highscore', JSON.stringify(highscore));
			}
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
		setRolls(0);
		return newDice;
	}

	const dieArray = dice.map((el) => (
		<Die {...el} setIsLocked={setIsLocked} key={el.id} />
	));

	const style = {
		color: rolls < highscore ? 'green' : 'red',
		fontWeight: 'bold',
	};

	return (
		<main>
			{isGameOver && <Confetti />}
			{isGameOver && <div className="win-modal">YOU WIN!</div>}

			<span className="rolls">
				Rolls: <span style={style}>{rolls}</span>
			</span>
			<span className="lowest-rolls">Lowest rolls: {highscore}</span>

			<h1 className="title">Tenzies</h1>
			<p className="instructions">
				Roll until all dice are the same. Click each die to freeze it at its
				current value between rolls.
			</p>
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
