import authTypes from './types';

const initialState = {
	isLoading: false,
	// token: null,
	// data: null,
	// registerError:undefined,
	// setupError:undefined,
	// loginError: undefined,
	// resetError: undefined,
	// forgotError: undefined
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case authTypes.START_REGISTER_USER:
			return { 
				...state,
				token: null,
				isLoading: true,
			};
		case authTypes.SUCCESS_REGISTER_USER:
			return {
				...state,
				token: payload,
				isLoading: false,
			};
		case authTypes.FAIL_REGISTER_USER:
			return {
				token: null,
				isLoading: false,
				registerError: payload,
			};
		

		case authTypes.START_LOGIN_USER:
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
		case authTypes.SUCCESS_LOGIN_USER:
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
		case authTypes.FAIL_LOGIN_USER:
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
		

			
		case authTypes.START_FORGOT_PASSWORD:
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

		case authTypes.SUCCESS_FORGOT_PASSWORD: 
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

		case authTypes.FAIL_FORGOT_PASSWORD: 
			return {
				...state,
				token: null,
				data: null,
				isLoading: false,
				errMessage: undefined,
				loginError: undefined,
				resetError: undefined,
				forgotError: payload
			}
		

			
		case authTypes.START_RESET_PASSWORD:
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

		case authTypes.SUCCESS_RESET_PASSWORD: 
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

		case authTypes.FAIL_RESET_PASSWORD: 
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

		case authTypes.LOGOUT_USER: 
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