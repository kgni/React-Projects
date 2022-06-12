import React, { useState } from 'react';
import './App.css';
import UserInput from './components/User/UserInput';
import UserList from './components/User/UserList';
const App = () => {
	const [users, setUsers] = useState([]);
	console.log(users);
	return (
		<div>
			<UserInput setUsers={setUsers} />
			<UserList users={users} />
		</div>
	);
};

export default App;
