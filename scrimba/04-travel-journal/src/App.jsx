import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

function App() {
	const card = data.map((el) => {
		return <Card key={el.id} {...el} />;
	});
	return (
		<div className="App">
			<Navbar />
			<div className="travel-list">{card}</div>
		</div>
	);
}

export default App;
