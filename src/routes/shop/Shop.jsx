import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { setCategoriesMap } from '../../store/categories/categoriesActions';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebaseUtils';
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getAsyncCategories = async () => {
			const newCategoriesMap = await getCategoriesAndDocuments();
			dispatch(setCategoriesMap(newCategoriesMap));
		};

		getAsyncCategories();
	}, [dispatch]);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
