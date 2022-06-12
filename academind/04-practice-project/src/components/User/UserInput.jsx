import React, { useState } from 'react';
import Button from '../UI/Button';
import { nanoid } from 'nanoid';

const UserInput = (props) => {
	const [userName, setUserName] = useState('');
	const [age, setAge] = useState('');
	console.log(userName, age);
	function onSubmit(event) {
		event.preventDefault();
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
		</>
	);
};

export default UserInput;
