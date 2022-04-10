import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/ProductCard';
import { CategoriesContext } from '../../contexts/categoriesContext';
import './Category.scss';

const Category = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	const { category } = useParams();

	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<div className='category-page-container'>
			{products &&
				products.map((product) => (
					<ProductCard id={product.id} product={product} />
				))}
		</div>
	);
};

export default Category;
