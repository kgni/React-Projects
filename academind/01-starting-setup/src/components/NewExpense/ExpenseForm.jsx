import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	const [open, setOpen] = useState(false);

	// you can also add every single value to 1 state in an object. Keep in mind, when updating this state using our setter function, you have to update the entire object, where you are spreading the entire object first, and the updating the values that needs to be updating.
	const [formData, setFormData] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: '',
	});

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);

		setFormData((prevData) => {
			return {
				...prevData,
				enteredTitle: event.target.value,
			};
		});
	};

	function clickOpenHandler() {
		setOpen((prevData) => !prevData);
	}

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);

		setFormData((prevData) => {
			return {
				...prevData,
				enteredAmount: event.target.value,
			};
		});
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);

		setFormData((prevData) => {
			return {
				...prevData,
				enteredDate: event.target.value,
			};
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);

		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
		setOpen((prevData) => !prevData);
	};

	if (open) {
		return (
			<form onSubmit={submitHandler} action="">
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label htmlFor="">Title</label>
						<input
							value={enteredTitle}
							onChange={titleChangeHandler}
							type="text"
						/>
					</div>
					<div className="new-expense__control">
						<label htmlFor="">Amount</label>
						<input
							value={enteredAmount}
							onChange={amountChangeHandler}
							type="number"
							min="0.01"
							step="0.01"
						/>
					</div>
					<div className="new-expense__control">
						<label htmlFor="">Date</label>
						<input
							value={enteredDate}
							onChange={dateChangeHandler}
							type="date"
							min="2019-01-01"
							max="2022-12-31"
						/>
					</div>
				</div>
				<div className="new-expense__actions">
					<button onClick={clickOpenHandler}>Cancel</button>
					<button type="submit">Add Expense</button>
				</div>
			</form>
		);
	}

	return (
		<div className="new-expense__actions">
			<button onClick={clickOpenHandler} type="submit">
				Add Expense
			</button>
		</div>
	);
};

export default ExpenseForm;
