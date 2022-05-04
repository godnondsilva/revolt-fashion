import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebaseUtils';
import {
	fetchCategoriesFailed,
	fetchCategoriesSuccess,
} from './categoriesActions';
import { CATEGORIES_ACTION_TYPES } from './categoriesTypes';

export function* fetchCategoriesAsync() {
	try {
		const newCategoriesArray = yield* call(getCategoriesAndDocuments);
		yield* put(fetchCategoriesSuccess(newCategoriesArray));
	} catch (error) {
		yield* put(fetchCategoriesFailed(error as Error));
	}
}

export function* onFetchCategories() {
	yield* takeLatest(
		CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
		fetchCategoriesAsync,
	);
}

export function* categoriesSaga() {
	yield* all([call(onFetchCategories)]);
}
