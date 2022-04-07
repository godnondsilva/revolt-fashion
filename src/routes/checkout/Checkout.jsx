import { useContext } from 'react';

import { CartContext } from '../../contexts/cartContext';

import './Checkout.scss';

const Checkout = () => {
	const { addItemToCart, removeItemFromCart, cartItems } =
		useContext(CartContext);

	return (
		<div className='checkout-container'>
			{cartItems.map((cartItem) => {
				const { id, name, quantity } = cartItem;

				const incrementCartItem = () => {
					addItemToCart(cartItem);
				};

				const decrementCartItem = () => {
					removeItemFromCart(cartItem);
				};
				return (
					<div key={id}>
						<h2>{name}</h2>
						<span>{quantity}</span>
						<br />
						<span onClick={incrementCartItem}>increment</span>
						<br />
						<span onClick={decrementCartItem}>decrement</span>
					</div>
				);
			})}
		</div>
	);
};

export default Checkout;
