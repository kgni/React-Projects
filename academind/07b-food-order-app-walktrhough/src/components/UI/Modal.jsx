import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = (props) => {
	return (
		<div
			// the way we are setting our onclick right now is not good, it doesn't make our backdrop component very reuseable, because it will always closet he cart. Instead we could have passed down a handler function for closing the cart, where that function is calling setIsCartOpen(false), and inside this function we could then just have our onClick event set to props.onClick instead. Then we can pass whatever function we want when using instances of our Backdrop component.
			onClick={() => props.setIsCartOpen(false)}
			className={styles.backdrop}
		></div>
	);
};
const ModalOverlay = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.querySelector('#overlays');

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop setIsCartOpen={props.setIsCartOpen} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</>
	);
};

export default Modal;
