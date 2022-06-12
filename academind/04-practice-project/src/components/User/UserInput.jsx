import React, { useState } from 'react';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import Card from '../UI/Card';
import styles from './UserInput.module.css';
import { nanoid } from 'nanoid';

const UserInput = (props) => {
	const [userName, setUserName] = useState('');
	const [age, setAge] = useState('');
	const [isValid, setIsValid] = useState(true);
	console.log(userName, age);

	function onSubmit(event) {
		event.preventDefault();
		if (
			age.trim().length === 0 ||
			userName.trim().length === 0 ||
			Number(age) < 1
		) {
			setIsValid(false);
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
		<Card className={styles.input}>
			{!isValid && <Modal setIsValid={setIsValid} />}
			<form onSubmit={onSubmit} action="/">
				<label htmlFor="username">Username</label>
				<input
					value={userName}
					onChange={handleUserNameChange}
					id="username"
					type="text"
				/>
				<label htmlFor="age">Age (Years)</label>
				<input value={age} onChange={handleAgeChange} id="age" type="number" />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default UserInput;
