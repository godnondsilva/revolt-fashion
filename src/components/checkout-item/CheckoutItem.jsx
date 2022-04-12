import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

import {
	CheckoutItemContainer,
	ImageContainer,
	Name,
	Quantity,
	Price,
	Arrow,
	Value,
	RemoveButton,
} from './CheckoutItem.styles';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;

	const { addItemToCart, removeItemFromCart, clearItemFromCart } =
		useContext(CartContext);

	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);
	const clearItemHandler = () => clearItemFromCart(cartItem);

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<Name>{name}</Name>
			<Quantity>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</Quantity>
			<Price>${price}</Price>
			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
