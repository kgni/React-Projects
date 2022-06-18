import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
function App() {
	const [itemCount, setItemCount] = useState(0);

	return <Nav title="ReactMeals" itemCount={itemCount} />;
}

export default App;
