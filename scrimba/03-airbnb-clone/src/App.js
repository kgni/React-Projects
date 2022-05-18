import './App.css';
import Navbar from './components/Navbar/Navbar';
import PeopleSection from './components/PeopleSection';
import OnlineExperiences from './components/OnlineExperiences';
import Card from './components/Cards/Card';
import data from './data';

function App() {
	const cards = data.map((card) => {
		return (
			<Card
				img={card.coverImg}
				rating={card.stats.rating}
				reviewCount={card.stats.reviewCount}
				location={card.location}
				title={card.title}
				price={card.price}
			/>
		);
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
