import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cartActions';
import { selectCartItems } from '../../store/cart/cartSelector';
import { CategoryItem } from '../../store/categories/categoriesTypes';

import Button, { BUTTON_TYPES } from '../button/Button';

import {
	ProductCardContainer,
	Footer,
	Name,
	Price,
} from './ProductCard.styles';

type ProductCardProps = {
	product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();

	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
