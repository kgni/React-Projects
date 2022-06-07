import React, { useState, useEffect } from 'react';
import Die from './modules/Die';
import Confetti from 'react-confetti';

export default function App() {
	// Lazy initializing our dice with localstarge, unless nothing is in local storage yet, then we use the allNewDice() function to genereate our game
	const [dice, setDice] = useState(
		() => JSON.parse(localStorage.getItem('dice')) || allNewDice()
	);

	// setting game over state to be false initially
	const [isGameOver, setIsGameOver] = useState(false);

	// Lazy initializing state for rolls with localstorage, if nothing is found  we set rolls to 0
	const [rolls, setRolls] = useState(
		() => JSON.parse(localStorage.getItem('rolls')) || 0
	);

	// Lazy initializing state for our highscore (lowest rolls) with localstorage, if nothing is found  we the highscore to 0
	const [highscore, setHighScore] = useState(
		() => JSON.parse(localStorage.getItem('highscore')) || 0
	);

	// Lazy initializing state for our games played with localstorage, if nothing is found  we the highscore to 0. This is for tracking the first time we are playing, so we only update our highscore after each roll the first time we are playing. After gamesplayed is above 0, the highscore will only change, if gameover is set to true and rolls were less than the highscore.
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

		// tracking if it is the first game playing, if it is, after every roll we are going to update the highscore, we are using the gamesPlayed state, to know whether it is the first game playing or not. If it is not the first game played, then we won't update the highscore unless our rolls were lower than the highscore when we won the game.

		if (gamesPlayed === 0) {
			setHighScore((oldHighScore) => (oldHighScore = oldHighScore + 1));
		}
	}

	// useEffect to sync up our local storage with our state of our rolls and highscore after each roll.
	useEffect(() => {
		localStorage.setItem('rolls', JSON.stringify(rolls));

		localStorage.setItem('highscore', JSON.stringify(highscore));
	}, [rolls]);

	// useEffect that runs every time our dice updates (which is after every time we roll).
	useEffect(() => {
		// sync our dice to localstorage (if you closet he browser you will be where you left off)
		localStorage.setItem('dice', JSON.stringify(dice));

		// checking win condtion, if every dice is locked, and every value is the same then you won.
		if (
			dice.every((el) => el.isLocked) &&
			dice.every((el) => el.value === dice[0].value)
		) {
			setIsGameOver(true);
			// updating gamesplayed
			setGamesPlayed((oldGamesPlayed) => (oldGamesPlayed = oldGamesPlayed + 1));
			// setting games played to localstorage
			localStorage.setItem('gamesplayed', JSON.stringify(gamesPlayed));

			// updating highscore, if the rolls were lower than the highscore when game was won.
			if (rolls < highscore) {
				setHighScore((oldHighScore) => (oldHighScore = rolls));
				// syncing to localstorage
				localStorage.setItem('highscore', JSON.stringify(highscore));
			}
		} else {
			setIsGameOver(false);
		}
	}, [dice]);

	function restartGame() {
		const newDice = [];
		// create new dice
		for (let i = 0; i < 10; i++) {
			const value = Math.ceil(Math.random() * 6);
			newDice.push({
				id: i + 1,
				value: value,
				isLocked: false,
			});
		}
		setIsGameOver(false);
		// set rolls to 0
		setRolls(0);
		return newDice;
	}

	return (
		<main>
			{isGameOver && <Confetti />}
			{isGameOver && <div className="win-modal">YOU WIN!</div>}
			<div className="container">
				<span className="rolls">
					Rolls:{' '}
					<span
						style={{
							color: rolls < highscore ? 'green' : 'red',
							fontWeight: 'bold',
						}}
					>
						{rolls}
					</span>
				</span>
				<span className="lowest-rolls">
					Lowest rolls: <span style={{ fontWeight: 'bold' }}>{highscore}</span>
				</span>

				<h1 className="title">Tenzies</h1>
				<p className="instructions">
					Roll until all dice are the same. Click each die to freeze it at its
					current value between rolls.
				</p>
				<div className="die-container">
					{dice.map((el) => (
						<Die {...el} setIsLocked={setIsLocked} key={el.id} />
					))}
				</div>

				{isGameOver ? (
					<button onClick={() => setDice(restartGame())} className="roll-btn">
						Restart game
					</button>
				) : (
					<button onClick={rollDice} className="roll-btn">
						Roll dice
					</button>
				)}
			</div>
		</main>
	);
}
