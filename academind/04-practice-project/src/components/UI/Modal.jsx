import React from 'react';
import Button from './Button';

const Modal = (props) => {
	return (
		<div>
			<div>Please enter a valid username and age</div>
			<Button onClick={() => props.setIsValid(true)}>OKAY</Button>
		</div>
	);
};

export default Modal;
