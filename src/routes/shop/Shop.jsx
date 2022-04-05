import { useContext } from 'react';

import { ProductContext } from '../../contexts/productContext';

import ProductCard from '../../components/product-card/ProductCard';

import './Shop.scss';

const Shop = () => {
	const { products } = useContext(ProductContext);

	return (
		<div className='shop-products-container'>
			{products.map((product) => (
				<div>
					<ProductCard key={product.id} product={product} />
				</div>
			))}
		</div>
	);
};

export default Shop;
