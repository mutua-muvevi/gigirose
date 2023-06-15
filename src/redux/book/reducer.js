import bookTypes from './types';

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
		case bookTypes.START_POST_BOOK_SERVICE:
			return { 
				...state,
				data: null,
				isLoading: true,
			};
		case bookTypes.SUCCESS_POST_BOOK_SERVICE:
			return {
				...state,
				data: payload,
				isLoading: false,
				postError: null
			};
		case bookTypes.FAIL_POST_BOOK_SERVICE:
			return {
				data: null,
				isLoading: false,
				postError: payload,
			};
		
			
		case bookTypes.START_FETCH_BOOK_SERVICE:
			return {
				...state,
				fetch: null,
				isLoading: true,
			}

		case bookTypes.SUCCESS_FETCH_BOOK_SERVICE: 
			return {
				...state,
				fetch: payload,
				isLoading: false,
			}

		case bookTypes.FAIL_FETCH_BOOK_SERVICE: 
			return {
				...state,
				fetch: null,
				fetchError: payload,
				isLodainf: false
			}
		

			
		case bookTypes.START_DELETE_BOOK:
			return {
				...state,
				delete: null,
				isLoading: true,
			}

		case bookTypes.SUCCESS_DELETE_BOOK: 
			return {
				...state,
				delete: payload,
				isLoading: false,
			}

		case bookTypes.FAIL_DELETE_BOOK: 
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