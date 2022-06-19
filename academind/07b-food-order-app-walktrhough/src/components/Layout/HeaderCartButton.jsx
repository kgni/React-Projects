import React, { useContext } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const numberOfCartItems = cartCtx.items.reduce(
		(curNumber, item) => curNumber + item.amount,
		0
	);
	return (
		<button onClick={() => props.setIsCartOpen(true)} className={styles.button}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
