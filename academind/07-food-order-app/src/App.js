import React, { useState } from 'react';
import './App.css';
import FoodData from './Data/FoodData';
import Nav from './components/Nav/Nav';
import CartModal from './components/Modals/CartModal/CartModal';
import InfoCard from './components/Card/InfoCard/InfoCard';
import Card from './components/Card/Card';
import FoodList from './components/Food/FoodList';

function App() {
	const [showCartModal, setShowCartModal] = useState(false);

	const [cartState, setCartState] = useState({
		totalCount: 0,
		totalPrice: 0.0,
	});

	function addItemToCart(amount) {
		setCartState((prevCartState) => {
			return {
				...prevCartState,
				totalCount: prevCartState.totalCount + amount,
			};
		});
	}

	function toggleCartModal() {
		setShowCartModal((prevValue) => !prevValue);
	}

	return (
		<>
			{showCartModal && (
				<CartModal cartState={cartState} toggleCartModal={toggleCartModal} />
			)}
			<Nav
				title="ReactMeals"
				cartState={cartState}
				onClick={setShowCartModal}
			/>
			<InfoCard />
			<Card>
				<FoodList addItemToCart={addItemToCart} menu={FoodData} />
			</Card>
		</>
	);
}

export default App;
