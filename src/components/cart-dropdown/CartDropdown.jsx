import { useContext } from 'react';

import { CartContext } from '../../contexts/cartContext';

import { useNavigate } from 'react-router-dom';

import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

import './CartDropdown.scss';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const navigateToCheckout = () => {
		navigate('checkout');
	};

	return (
		<div className='cart-dropdown-container'>
			<div className='heading'>Shopping Cart</div>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem cartItem={item} />
				))}
			</div>
			<Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
