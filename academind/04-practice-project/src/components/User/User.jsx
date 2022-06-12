import React from 'react';
import Button from '../UI/Button';

const User = (props) => {
	function deleteUser() {
		props.deleteUser(props.id);
	}
	return (
		<div className="user">
			<li>
				{props.userName} ({props.age} years old)
			</li>
			<Button onClick={deleteUser}>X</Button>
		</div>
	);
};

export default User;
