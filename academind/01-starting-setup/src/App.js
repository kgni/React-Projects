import ExpenseItem from './components/Expenses/ExpenseItem';
import expenses from './data/expenses';
import Card from './components/UI/Card';

function App() {
	const expensesItems = expenses.map((item) => {
		return <ExpenseItem key={item.id} {...item} />;
	});

	return (
		<div>
			<h2>Let's get started!</h2>
			<Card className="card-container">{expensesItems}</Card>
		</div>
	);
}

export default App;
