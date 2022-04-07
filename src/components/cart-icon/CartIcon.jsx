import { useContext } from 'react';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cartContext';

import './CartIcon.scss';

const CartIcon = () => {
	const { cartCount, isCartOpen, setIsCartOpen } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<div className='cart-icon-container' onClick={toggleIsCartOpen}>
			<ShoppingBagIcon className='shopping-bag' />
			<span className='item-count'>{cartCount}</span>
		</div>
	);
};

export default CartIcon;
