import { useContext } from 'react';

import { CartContext } from '../../contexts/cartContext';

import Button, { BUTTON_TYPES } from '../button/Button';

import {
	ProductCardContainer,
	Footer,
	Name,
	Price,
} from './ProductCard.styles';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer>
				<Name>{name}</Name>
				<Price>${price}</Price>
			</Footer>
			<Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart}>
				Add To Cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
