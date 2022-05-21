import { useSelector } from 'react-redux';

import Spinner from '../../components/spinner/Spinner';
import CategoryPreview from '../../components/category-preview/CategoryPreview';
import {
	selectCategoriesIsLoading,
	selectCategoriesMap,
} from '../../store/categories/categoriesSelector';

import { CategoriesPreviewContainer } from './CategoriesPreview.styles';

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	return (
		<div>
			{isLoading ? (
				<Spinner />
			) : (
				<CategoriesPreviewContainer>
					{Object.keys(categoriesMap).map((title) => {
						const products = categoriesMap[title];
						return (
							<CategoryPreview
								key={title}
								title={title}
								products={products}
								productsToShow={4}
							/>
						);
					})}
				</CategoriesPreviewContainer>
			)}
		</div>
	);
};

export default CategoriesPreview;
