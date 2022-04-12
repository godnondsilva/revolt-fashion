import { useContext, useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/ProductCard';
import { CategoriesContext } from '../../contexts/categoriesContext';
import { CategoryPageContainer, CategoryTitle } from './Category.styles';

const Category = () => {
	const { categoriesMap } = useContext(CategoriesContext);
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
