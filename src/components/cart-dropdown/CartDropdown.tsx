import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cartSelector';

import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

import {
	CartDropdownContainer,
	Heading,
	EmptyMessage,
	CartItems,
} from './CartDropdown.styles';

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const navigateToCheckout = useCallback(() => {
		navigate('checkout');
	}, [navigate]);

	return (
		<CartDropdownContainer>
			<Heading>Shopping Cart</Heading>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
