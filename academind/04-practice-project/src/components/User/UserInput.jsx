import React, { useState } from 'react';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import styles from './UserInput.module.css';
import { nanoid } from 'nanoid';

const UserInput = (props) => {
	const [userName, setUserName] = useState('');
	const [age, setAge] = useState('');
	const [error, setError] = useState();
	console.log(userName, age);

	function onSubmit(event) {
		event.preventDefault();
		if (age.trim().length === 0 || userName.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non empty values)',
			});
			return;
		}

		if (Number(age) < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age. Age cannot be below 1',
			});
			return;
		}
		props.setUsers((prevUsers) => {
			return [{ userName: userName, age: age, id: nanoid() }, ...prevUsers];
		});
		setUserName('');
		setAge('');
	}

	function handleUserNameChange(event) {
		setUserName(event.target.value);
	}
	function handleAgeChange(event) {
		setAge(event.target.value);
	}
	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					setError={setError}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={onSubmit} action="/">
					<label htmlFor="username">Username</label>
					<input
						value={userName}
						onChange={handleUserNameChange}
						id="username"
						type="text"
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						value={age}
						onChange={handleAgeChange}
						id="age"
						type="number"
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default UserInput;
