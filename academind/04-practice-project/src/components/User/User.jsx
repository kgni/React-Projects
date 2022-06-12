import React from 'react';

const User = (props) => {
	return (
		<div>
			{props.userName} ({props.age} years old)
		</div>
	);
};

export default User;
