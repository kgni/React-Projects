import React from 'react';

import User from './User';
import styles from './UserList.module.css';
import Card from '../UI/Card';

const UserList = (props) => {
	return (
		<Card className={styles.users}>
			<ul>
				{props.users.map((user) => (
					<User
						deleteUser={props.deleteUser}
						id={user.id}
						key={user.id}
						userName={user.userName}
						age={user.age}
					/>
				))}
			</ul>
		</Card>
	);
};

export default UserList;
