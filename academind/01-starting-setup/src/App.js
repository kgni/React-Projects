import React, { useState } from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import expenses from './data/expenses';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';

function App() {
	const [data, setData] = useState(expenses);
	const [filterYear, setFilterYear] = useState('showAll');

	const expensesItems = data.map((item) => {
		if (
			item.date.getFullYear().toString() === filterYear ||
			filterYear === 'showAll'
		) {
			return <ExpenseItem key={item.id} {...item} />;
		}
	});

	const addExpenseHandler = (expense) => {
		setData((prevData) => [...prevData, expense]);
	};

	return (
		<div className="app-container">
			<NewExpense onAddExpense={addExpenseHandler} />
			<Card className="card-container">
				<ExpensesFilter filterYear={filterYear} setFilterYear={setFilterYear} />
				{expensesItems}
			</Card>
		</div>
	);
}

export default App;
