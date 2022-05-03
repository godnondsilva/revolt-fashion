import { createSelector } from 'reselect';
import { RootState } from '../store';

import { CategoryState } from './categoriesReducer';
import { CategoryMap } from './categoriesTypes';

const selectCategories = (state: RootState): CategoryState => state.categories;

const selectCategoriesArray = createSelector(
	[selectCategories],
	(categories) => categories.categoriesArray,
);

export const selectCategoriesMap = createSelector(
	[selectCategoriesArray],
	(categoriesArray) =>
		categoriesArray.reduce((acc, categories) => {
			const { title, items } = categories;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {} as CategoryMap),
);

export const selectCategoriesIsLoading = createSelector(
	[selectCategories],
	(categories) => categories.isLoading,
);
