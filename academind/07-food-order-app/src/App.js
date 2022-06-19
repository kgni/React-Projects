import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import CartModal from './components/Modals/CartModal/CartModal';

function App() {
	const [itemCount, setItemCount] = useState(0);
	const [showCartModal, setShowCartModal] = useState(false);

	function toggleCartModal() {
		setShowCartModal((prevValue) => !prevValue);
	}

	console.log(showCartModal);

	return (
		<>
			{showCartModal && <CartModal toggleCartModal={toggleCartModal} />}
			<Nav
				title="ReactMeals"
				itemCount={itemCount}
				onClick={setShowCartModal}
			/>
		</>
	);
}

export default App;
