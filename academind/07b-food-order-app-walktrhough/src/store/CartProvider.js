import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		const updatedTotalAmount =
			state.totalAmount + action.payload.price * action.payload.amount;

		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.payload.id
		);

		const existingCartItem = state.items[existingCartItemIndex];

		let updatedItem;
		let updatedItems;
		if (existingCartItem) {
			updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.payload.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItem = { ...action.payload };
			updatedItems = state.items.concat(action.payload);
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);
	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: 'ADD_ITEM', payload: item });
	};

	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({ type: 'REMOVE_ITEM', payload: id });
	};
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};
export default CartProvider;
