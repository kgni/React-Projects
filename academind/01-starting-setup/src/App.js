import ExpenseItem from './components/ExpenseItem';
import expenses from './expenses';

function App() {
	const expensesItems = expenses.map((item) => {
		return <ExpenseItem key={item.id} {...item} />;
	});

	return (
		<div>
			<h2>Let's get started!</h2>
			{expensesItems}
		</div>
	);
}

export default App;
