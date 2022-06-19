import React from 'react';
import styles from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Nav = (props) => {
	return (
		<div className={styles.container}>
			<nav className={styles.nav}>
				<h2 className={styles.title}>{props.title}</h2>
				<div className={styles.cart}>
					<FontAwesomeIcon icon={faCartShopping} onClick={props.onClick} />
					<h3 onClick={props.onClick}>Your Cart</h3>
					<span onClick={props.onClick}>{props.itemCount}</span>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
