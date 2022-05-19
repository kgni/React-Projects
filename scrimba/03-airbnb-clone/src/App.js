import './App.css';
import Navbar from './components/Navbar/Navbar';
import PeopleSection from './components/PeopleSection';
import OnlineExperiences from './components/OnlineExperiences';
import Card from './components/Cards/Card';
import data from './data';

function App() {
	const cards = data.map((card) => {
		return <Card key={card.id} card={card} />;
	});
	return (
		<div id="app">
			<Navbar />
			<PeopleSection />
			<OnlineExperiences />
			<section className="card-section">{cards}</section>
		</div>
	);
}

export default App;
