import { useContext } from 'react';

import { CartContext } from '../../contexts/cartContext';

import { useNavigate } from 'react-router-dom';

import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

import {
	CartDropdownContainer,
	Heading,
	EmptyMessage,
	CartItems,
} from './CartDropdown.styles';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const navigateToCheckout = () => {
		navigate('checkout');
	};

	return (
		<CartDropdownContainer>
			<Heading>Shopping Cart</Heading>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem cartItem={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
