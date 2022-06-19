import React from 'react';
import FoodItem from './FoodItem';
const FoodList = (props) => {
	return (
		<>
			{props.menu.map((item) => {
				return (
					<FoodItem
						addItemToCart={props.addItemToCart}
						key={item.id}
						item={item}
					/>
				);
			})}
		</>
	);
};

export default FoodList;
