import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebaseUtils';

export const CategoriesContext = createContext({
	categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState([]);
	const value = { categoriesMap };

	useEffect(() => {
		const getAsyncCategories = async () => {
			const newCategoriesMap = await getCategoriesAndDocuments();
			setCategoriesMap(newCategoriesMap);
		};

		getAsyncCategories();
	}, []);

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
