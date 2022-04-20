import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './rootReducer';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];
const composedEnhancer = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancer);

export const persistor = persistStore(store);
