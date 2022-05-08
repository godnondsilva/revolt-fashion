import { FC } from 'react';
import {
	CartItemContainer,
	ItemDetails,
	Name,
	ItemImage,
} from './CartItem.styles';

import { CartItem as CartItemType } from '../../store/cart/cartTypes';

type CartItemProps = {
	cartItem: CartItemType;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<CartItemContainer>
			<ItemImage src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<Name>{name}</Name>
				<span>
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
