import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/ProductCard';
import { CategoryPageContainer, CategoryTitle } from './Category.styles';
import { selectCategoriesMap } from '../../store/categories/categoriesSelector';

const Category = () => {
	const categoriesMap = useSelector(selectCategoriesMap);

	const { category } = useParams();

	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			<CategoryPageContainer>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</CategoryPageContainer>
		</Fragment>
	);
};

export default Category;
