import React, { useState } from 'react';
import './App.css';
import UserInput from './components/User/UserInput';
import UserList from './components/User/UserList';
const App = () => {
	const [users, setUsers] = useState([]);
	console.log(users);
	function deleteUser(userId) {
		setUsers((prevUsers) => {
			return prevUsers.filter((user) => user.id !== userId);
		});
	}
	return (
		<>
			<UserInput setUsers={setUsers} />
			<UserList deleteUser={deleteUser} users={users} />
		</>
	);
};

export default App;
