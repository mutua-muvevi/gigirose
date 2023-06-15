import userTypes from './types';

const initialState = {
	loading: false,
	user: null,
	users: null,
	admin: null,
	errMessage: undefined,
	authenticated: false
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case userTypes.START_FETCH_USER:
			return { 
				...state,
				loading: true,
				errMessage: undefined,
				authenticated: false
			};
		case userTypes.SUCCESS_FETCH_USER:
			return {
				...state,
				loading: false,
				authenticated: true,
				errMessage: undefined,
				user: payload
			};
		case userTypes.FAIL_FETCH_USER:
			return {
				...state,
				loading: false,
				errMessage: payload,
				authenticated: false,
				user: null
			};

	

		default:
			return state;
	}
};

export default userReducer;