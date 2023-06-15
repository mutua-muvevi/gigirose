import bookTypes from "./types";
import axios from "axios";


export const startpostBookService = () => ({
	type: bookTypes.START_POST_BOOK_SERVICE,
})

export const postBookServiceSuccess = (book) => ({
	type: bookTypes.SUCCESS_POST_BOOK_SERVICE,
	payload: book,
})

export const postBookServiceFail = (errMessage) => ({
	type: bookTypes.FAIL_POST_BOOK_SERVICE,
	payload: errMessage,
})



export const startFetchBookService = () => ({
	type: bookTypes.START_FETCH_BOOK_SERVICE,
})

export const fetchBookServiceSuccess = (token) => ({
	type: bookTypes.SUCCESS_FETCH_BOOK_SERVICE,
	payload: token,
})

export const fetchBookServiceFail = (errMessage) => ({
	type: bookTypes.FAIL_FETCH_BOOK_SERVICE,
	payload: errMessage,
})


export const loadDeleteBook = () => ({
	type: bookTypes.START_DELETE_BOOK,
})

export const postDeleteBookSuccess = (data) => ({
	type: bookTypes.SUCCESS_DELETE_BOOK,
	payload: data,
})

export const postDeleteBookFail = (errMessage) => ({
	type: bookTypes.FAIL_DELETE_BOOK,
	payload: errMessage,
})


export const postBookService = (values) => {
	return async (dispatch) => {
		try {
			
			const res = await axios.post(
				`http://localhost:7500/api/book/post`,
				// `https://red-cockatoo-cap.cyclic.app/api/user/register`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			startpostBookService()
			dispatch(postBookServiceSuccess(res.data))
		} catch (error) {
			dispatch(postBookServiceFail(error.response))
			console.log(error.response)
		}
	}
}



export const fetchBookService = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`http://localhost:7500/api/book/fetchAll`,
				// `https://red-cockatoo-cap.cyclic.app/api/user/login`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
				
			)
			startFetchBookService()
			dispatch(fetchBookServiceSuccess(res.data))
		} catch (error) {
			dispatch(fetchBookServiceFail(error.response.data.error))
		}
	}
}


export const deleteBook = (id) => {
	return async (dispatch) => {
		try {
			const res = await axios.delete(
				`http://localhost:7500/api/book/delete/${id}`,
			)
			loadDeleteBook()
			dispatch(postDeleteBookSuccess(res.data.data))
		} catch (error) {
			dispatch(postDeleteBookFail(error.response))
		}
	}
}
