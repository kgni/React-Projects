import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';

import styles from './ErrorModal.module.css';

const Backdrop = (props) => {
	return (
		<div
			onClick={() => props.setError(false)}
			className={styles.backdrop}
		></div>
	);
};

const ModalOverlay = (props) => {
	return (
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
	);
};

const ErrorModal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop setError={props.setError} />,
				document.querySelector('#backdrop-root')
			)}
			\
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					setError={props.setError}
				/>,
				document.querySelector('#modal-root')
			)}
		</>
	);
};

export default ErrorModal;
