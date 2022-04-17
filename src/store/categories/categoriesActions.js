import { CATEGORIES_ACTION_TYPES } from './categoriesTypes';
import { createAction } from '../../utils/reducer/reducerUtils';

export const setCategoriesMap = (categoriesMap) =>
	createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
