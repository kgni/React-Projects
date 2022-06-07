import ExpenseItem from './components/Expenses/ExpenseItem';
import expenses from './data/expenses';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
	const expensesItems = expenses.map((item) => {
		return <ExpenseItem key={item.id} {...item} />;
	});

	const addExpenseHandler = (expense) => {
		console.log(expense);
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Card className="card-container">{expensesItems}</Card>
		</div>
	);
}

export default App;
