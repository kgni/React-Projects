import React from 'react';
import Button from './Button';
import Card from './Card';

import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
	return (
		<>
			<div
				onClick={() => props.setError(false)}
				className={styles.backdrop}
			></div>
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={styles.content}>
					<p>{props.message}</p>
				</div>
				<footer className={styles.actions}>
					<Button onClick={() => props.setError(false)}>Ok</Button>
				</footer>
			</Card>
		</>
	);
};

export default ErrorModal;