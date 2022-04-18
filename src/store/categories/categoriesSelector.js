import { createSelector } from 'reselect';

const selectCategories = (state) => state.categories;

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
		}, {}),
);
