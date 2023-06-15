import contactTypes from './types';

const initialState = {
	isLoading: false,

	post: null,
	postError: null,

	fetch: null,
	fetchError: null,

	delete: null,
	deleteError: null
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case contactTypes.START_POST_CONTACT:
			return { 
				...state,
				data: null,
				isLoading: true,
			};
		case contactTypes.SUCCESS_POST_CONTACT:
			return {
				...state,
				data: payload,
				isLoading: false,
				postError: null
			};
		case contactTypes.FAIL_POST_CONTACT:
			return {
				data: null,
				isLoading: false,
				postError: payload,
			};
		
			
		case contactTypes.START_FETCH_CONTACT:
			return {
				...state,
				fetch: null,
				isLoading: true,
			}

		case contactTypes.SUCCESS_FETCH_CONTACT: 
			return {
				...state,
				fetch: payload,
				isLoading: false,
			}

		case contactTypes.FAIL_FETCH_CONTACT: 
			return {
				...state,
				fetch: null,
				fetchError: payload,
				isLodainf: false
			}
		

			
		case contactTypes.START_DELETE_CONTACT:
			return {
				...state,
				delete: null,
				isLoading: true,
			}

		case contactTypes.SUCCESS_DELETE_CONTACT: 
			return {
				...state,
				delete: payload,
				isLoading: false,
			}

		case contactTypes.FAIL_DELETE_CONTACT: 
			return {
				...state,
				delete: null,
				isLoading: false,
				deleteError: payload
			}

		default:
			return state;
	}
};

export default authReducer;