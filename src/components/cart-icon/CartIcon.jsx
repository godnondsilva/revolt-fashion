import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cartActions';

import {
	selectCartCount,
	selectIsCartOpen,
} from '../../store/cart/cartSelector';

import { CartIconContainer, ShoppingSVG, ItemCount } from './CartIcon.styles';

const CartIcon = () => {
	const dispatch = useDispatch();

	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectIsCartOpen);

	const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingSVG />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
