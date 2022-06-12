import React from 'react';
import User from './User';

const UserList = (props) => {
	return props.users.map((user) => {
		return <User key={user.id} userName={user.userName} age={user.age} />;
	});
};

export default UserList;
