import { Category } from './categoriesTypes';
import {
	fetchCategoriesStart,
	fetchCategoriesSuccess,
	fetchCategoriesFailed,
} from './categoriesActions';
import { AnyAction } from 'redux';

export type CategoryState = {
	readonly categoriesArray: Category[];
	readonly isLoading: boolean;
	readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoryState = {
	categoriesArray: [],
	isLoading: false,
	error: null,
};

export const categoriesReducer = (
	state = CATEGORIES_INITIAL_STATE,
	action: AnyAction,
): CategoryState => {
	if (fetchCategoriesStart.match(action)) {
		return {
			...state,
			isLoading: true,
		};
	}
	if (fetchCategoriesSuccess.match(action)) {
		return {
			...state,
			categoriesArray: action.payload,
			isLoading: false,
		};
	}
	if (fetchCategoriesFailed.match(action)) {
		return {
			...state,
			error: action.payload,
			isLoading: false,
		};
	}

	return state;
};
