import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
function App() {
	const [isCartOpen, setIsCartOpen] = useState(false);
	return (
		<>
			<CartProvider>
				{isCartOpen && <Cart setIsCartOpen={setIsCartOpen} />}
				<Header setIsCartOpen={setIsCartOpen} />
				<main>
					<Meals />
				</main>
			</CartProvider>
		</>
	);
}

export default App;
