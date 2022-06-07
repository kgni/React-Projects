import './App.css';
import Header from './components/Header/Header';
import MemeContainer from './components/MemeGenerator/MemeContainer';
import MemeInputs from './components/MemeGenerator/MemeInputs';

function App() {
	return (
		<div className="App">
			<Header />
			<MemeContainer>
				<MemeInputs />
			</MemeContainer>
		</div>
	);
}

export default App;
