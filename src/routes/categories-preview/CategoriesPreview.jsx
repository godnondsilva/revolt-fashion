import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/CategoryPreview';
import { selectCategoriesMap } from '../../store/categories/categoriesSelector';

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);

	return (
		<div>
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
		</div>
	);
};

export default CategoriesPreview;
