import React from 'react';
import styles from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Nav = (props) => {
	return (
		<nav className={styles.nav}>
			<h2 className={styles.title}>{props.title}</h2>
			<div className={styles.cart}>
				<FontAwesomeIcon icon={faCartShopping} />
				<span>Your Cart</span>
				<span>{props.itemCount}</span>
			</div>
		</nav>
	);
};

export default Nav;
