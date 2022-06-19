import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../../UI/Backdrop';
import styles from './CartModal.module.css';
import Button from '../../UI/Button';
const CartModal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<div className={styles.modal}>
					<Button onClick={props.toggleCartModal} title="Close" />
				</div>,
				document.querySelector('#modal-root')
			)}

			{ReactDOM.createPortal(
				<Backdrop onClick={props.toggleCartModal} />,
				document.querySelector('#backdrop-root')
			)}
		</>
	);
};

export default CartModal;
