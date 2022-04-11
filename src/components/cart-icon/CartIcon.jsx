import { useContext } from 'react';

import { CartContext } from '../../contexts/cartContext';

import { CartIconContainer, ShoppingSVG, ItemCount } from './CartIcon.styles';

const CartIcon = () => {
	const { cartCount, isCartOpen, setIsCartOpen } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingSVG />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
