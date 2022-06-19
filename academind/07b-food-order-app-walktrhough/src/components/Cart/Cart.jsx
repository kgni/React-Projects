import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {};
	const cartItemAddHandler = (item) => {};

	const cartItems = (
		<ul className={styles['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					// using .bind() this way is equivalent of using an anonymous function
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
					{...item}
				/>
			))}
		</ul>
	);

	return (
		<Modal setIsCartOpen={props.setIsCartOpen}>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button
					onClick={() => props.setIsCartOpen(false)}
					className={styles['button--alt']}
				>
					Close
				</button>
				{hasItems && <button className={styles.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
