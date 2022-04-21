import { CATEGORIES_ACTION_TYPES } from './categoriesTypes';
import { createAction } from '../../utils/reducer/reducerUtils';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebaseUtils';

export const fetchCategoriesStart = () =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
	createAction(
		CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
		categoriesArray,
	);

export const fetchCategoriesFailed = (error) =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCategoriesStart());

	try {
		const newCategoriesArray = await getCategoriesAndDocuments();
		dispatch(fetchCategoriesSuccess(newCategoriesArray));
	} catch (error) {
		dispatch(fetchCategoriesFailed(error));
	}
};
