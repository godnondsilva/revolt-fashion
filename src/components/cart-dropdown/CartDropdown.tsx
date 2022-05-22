import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsCartOpen } from '../../store/cart/cartActions';

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
	const dispatch = useDispatch();

	const navigateToCheckout = useCallback(() => {
		dispatch(setIsCartOpen(false));
		navigate('checkout');
	}, [navigate, dispatch]);

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
