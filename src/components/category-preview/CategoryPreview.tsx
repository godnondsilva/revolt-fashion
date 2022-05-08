import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CategoryItem } from '../../store/categories/categoriesTypes';

import ProductCard from '../product-card/ProductCard';

import {
	CategoryPreviewContainer,
	Title,
	Preview,
} from './CategoryPreview.styles';

type CategoryPreviewProps = {
	title: string;
	products: CategoryItem[];
	productsToShow: number;
};

const CategoryPreview: FC<CategoryPreviewProps> = ({
	title,
	products,
	productsToShow,
}) => {
	return (
		<CategoryPreviewContainer>
			<h2>
				<Title as={Link} to={title}>
					{title.toUpperCase()}
				</Title>
			</h2>
			<Preview>
				{products
					.filter((_, idx) => idx < productsToShow)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Preview>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
