import React, { useRef, useState } from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();
	const submitHandler = (event) => {
		event.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;
		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(enteredAmountNumber);
	};
	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					type: 'number',
					id: 'amount' + props.id,
					min: 1,
					step: 1,
					defaultValue: 1,
				}}
			/>
			<button>+ Add</button>
			{!amountIsValid && <p>Please enter a valid amount</p>}
		</form>
	);
};

export default MealItemForm;
