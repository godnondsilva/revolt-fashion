import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { fetchCategoriesStart } from '../../store/categories/categoriesActions';
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';

const Shop = () => {
	const dispatch = useDispatch();

	// DIspatch the fetchCategoriesState saga to begin the categories fetching phase
	useEffect(() => {
		dispatch(fetchCategoriesStart());
	}, [dispatch]);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
