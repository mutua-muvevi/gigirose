import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import authReducer from './auth/reducer';
import userReducer from './user/reducer';
import contactReducer from './contact/reducer';
import bookReducer from './book/reducer';


const config = {
	key: 'root',
	storage,
	whitelist: [
		"auth",
		"user",
		"contact",
		"book"
	],
};

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	contact: contactReducer,
	book: bookReducer
});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;