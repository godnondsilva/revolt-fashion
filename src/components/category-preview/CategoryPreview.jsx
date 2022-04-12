import { Link } from 'react-router-dom';

import ProductCard from '../product-card/ProductCard';

import {
	CategoryPreviewContainer,
	Title,
	Preview,
} from './CategoryPreview.styles';

const CategoryPreview = ({ title, products, productsToShow }) => {
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
