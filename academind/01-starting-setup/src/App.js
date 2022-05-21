import ExpenseItem from './components/ExpenseItem';
import expenses from './expenses';
import Card from './components/Card';

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
