import React, { useState, useRef } from 'react';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import styles from './UserInput.module.css';
import { nanoid } from 'nanoid';

const UserInput = (props) => {
	const userNameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState();

	function onSubmit(event) {
		event.preventDefault();
		const enteredUserName = userNameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;
		if (enteredAge.trim().length === 0 || enteredUserName.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non empty values)',
			});
			return;
		}

		if (Number(enteredAge) < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age. Age cannot be below 1',
			});
			return;
		}
		props.setUsers((prevUsers) => {
			return [
				{ userName: enteredUserName, age: enteredAge, id: nanoid() },
				...prevUsers,
			];
		});
		// resetting the input fields after submit (this is done this way, because we are using refs. If we were using state, we would then set our state to be empty strings, and then pass our state as the value attribute to our inputs.)
		userNameInputRef.current.value = '';
		ageInputRef.current.value = '';
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
					<input id="username" type="text" ref={userNameInputRef} />
					<label htmlFor="age">Age (Years)</label>
					<input id="age" type="number" ref={ageInputRef} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default UserInput;
