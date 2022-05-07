import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/ProductCard';
import { CategoryPageContainer, CategoryTitle } from './Category.styles';
import {
	selectCategoriesIsLoading,
	selectCategoriesMap,
} from '../../store/categories/categoriesSelector';
import Spinner from '../../components/spinner/Spinner';

type CategoryRouteParams = {
	category: string;
};

const Category = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	const { category } = useParams<CategoryRouteParams>() as CategoryRouteParams;

	const products = categoriesMap[category];

	return (
		<Fragment>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			{isLoading ? (
				<Spinner />
			) : (
				<CategoryPageContainer>
					{products &&
						products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</CategoryPageContainer>
			)}
		</Fragment>
	);
};

export default Category;
