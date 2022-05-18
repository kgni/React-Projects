import './App.css';
import Navbar from './components/Navbar/Navbar';
import PeopleSection from './components/PeopleSection';
import OnlineExperiences from './components/OnlineExperiences';

function App() {
	return (
		<div id="app">
			<Navbar />
			<PeopleSection />
			<OnlineExperiences />
		</div>
	);
}

export default App;
