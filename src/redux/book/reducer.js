import bookTypes from './types';

const initialState = {
	isLoading: false,
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case bookTypes.START_BOOK_SERVICE:
			return { 
				...state,
				data: null,
				isLoading: true,
			};
		case bookTypes.SUCCESS_BOOK_SERVICE:
			return {
				...state,
				data: payload,
				isLoading: false,
			};
		case bookTypes.FAIL_BOOK_SERVICE:
			return {
				data: null,
				isLoading: false,
				registerError: payload,
			};
		

		case bookTypes.START_EDIT_BOOK_SERVICE:
			return { 
				...state, 
				token: null,
				data: null,
				isLoading: true,
				errMessage: undefined,
				loginError: undefined,
				resetError: undefined,
				forgotError: undefined
			};
		case bookTypes.SUCCESS_EDIT_BOOK_SERVICE:
			return {
				...state,
				token: payload,
				data: null,
				isLoading: false,
				errMessage: undefined,
				loginError: undefined,
				resetError: undefined,
				forgotError: undefined
			};
		case bookTypes.FAIL_EDIT_BOOK_SERVICE:
			return {
				...state,
				token: null,
				data: null,
				isLoading: false,
				errMessage: undefined,
				loginError: payload,
				resetError: undefined,
				forgotError: undefined
			};
		

			
		case bookTypes.START_FETCH_BOOK_SERVICE:
			return {
				...state,
				token: null,
				data: null,
				isLoading: true,
			}

		case bookTypes.SUCCESS_FETCH_BOOK_SERVICE: 
			return {
				...state,
				token: null,
				data: payload,
				isLoading: false,
			}

		case bookTypes.FAIL_FETCH_BOOK_SERVICE: 
			return {
				...state,
				token: null,
				data: payload
			}
		

			
		case bookTypes.START_RESET_PASSWORD:
			return {
				...state,
				token: null,
				data: null,
				isLoading: true,
				errMessage: undefined,
				loginError: undefined,
				resetError: undefined,
				forgotError: undefined
			}

		case bookTypes.SUCCESS_RESET_PASSWORD: 
			return {
				...state,
				token: null,
				data: payload,
				isLoading: false,
				errMessage: undefined,
				loginError: undefined,
				resetError: undefined,
				forgotError: undefined
			}

		case bookTypes.FAIL_RESET_PASSWORD: 
			return {
				...state,
				token: null,
				data: null,
				isLoading: false,
				errMessage: undefined,
				loginError: undefined,
				resetError: payload,
				forgotError: undefined
			}

		case bookTypes.LOGOUT_USER: 
			return {
				...state,
				token: null,
				data: null,
				isLoading: false,
				errMessage: undefined,
				loginError: undefined,
				resetError: undefined,
				forgotError: undefined
			}

		default:
			return state;
	}
};

export default authReducer;