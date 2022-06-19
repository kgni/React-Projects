import React, { useState } from 'react';
import styles from './FoodItem.module.css';
import Button from '../UI/Button';
const FoodItem = (props) => {
	const [amount, setAmount] = useState(0);
	return (
		<div class={styles.foodItem}>
			<div className={styles.foodInfo}>
				<h4 class>{props.item.title}</h4>
				<p>{props.item.subtitle}</p>
				<p className={styles.price}>${props.item.price}</p>
			</div>
			<div className={styles.foodAction}>
				<div className={styles.input}>
					<label htmlFor="amount">Amount</label>
					<input
						min={0}
						value
						onChange={(e) => setAmount(e.target.value)}
						type="number"
					/>
				</div>
				<Button
					onClick={() => props.addItemToCart(Number(amount), props.id)}
					title="+ Add"
				/>
			</div>
		</div>
	);
};

export default FoodItem;
