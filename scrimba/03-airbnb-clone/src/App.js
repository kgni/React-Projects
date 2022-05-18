import './App.css';
import Navbar from './components/Navbar/Navbar';
import PeopleSection from './components/PeopleSection';
import OnlineExperiences from './components/OnlineExperiences';
import CardSection from './components/Cards/CardSection';

function App() {
	return (
		<div id="app">
			<Navbar />
			<PeopleSection />
			<OnlineExperiences />
			<CardSection />
		</div>
	);
}

export default App;
