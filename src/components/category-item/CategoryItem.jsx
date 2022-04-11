import { useNavigate } from 'react-router-dom';

import {
	CategoryImage,
	CategoryItemContainer,
	CategoryItemBodyContainer,
} from './CategoryItem.styles';

const CategoryItem = ({ category }) => {
	const { title, imageUrl, route } = category;
	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(route);

	return (
		<CategoryItemContainer onClick={onNavigateHandler}>
			<CategoryImage imageUrl={imageUrl} />
			<CategoryItemBodyContainer>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</CategoryItemBodyContainer>
		</CategoryItemContainer>
	);
};

export default CategoryItem;
