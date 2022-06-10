import React, { useState } from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import DUMMY_EXPENSES from './data/DUMMY_EXPENSES';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import ExpensesList from './components/Expenses/ExpensesList';
import ExpensesChart from './components/Expenses/ExpensesChart';

function App() {
	const [expensesData, setExpensesData] = useState(DUMMY_EXPENSES);
	const [filterYear, setFilterYear] = useState('showAll');

	const filteredExpenses = expensesData.filter((expense) => {
		if (
			expense.date.getFullYear().toString() === filterYear ||
			filterYear === 'showAll'
		) {
			return expense;
		}
	});

	const addExpenseHandler = (expense) => {
		setExpensesData((prevExpenses) => [expense, ...prevExpenses]);
	};

	return (
		<div className="app-container">
			<NewExpense onAddExpense={addExpenseHandler} />
			<Card className="card-container">
				<ExpensesFilter filterYear={filterYear} setFilterYear={setFilterYear} />
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
}

export default App;
