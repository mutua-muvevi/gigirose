import contactTypes from "./types";
import axios from "axios";


export const startpostContact = () => ({
	type: contactTypes.START_POST_CONTACT,
})

export const postContactSuccess = (contact) => ({
	type: contactTypes.SUCCESS_POST_CONTACT,
	payload: contact,
})

export const postContactFail = (errMessage) => ({
	type: contactTypes.FAIL_POST_CONTACT,
	payload: errMessage,
})



export const startFetchContact = () => ({
	type: contactTypes.START_FETCH_CONTACT,
})

export const fetchContactSuccess = (token) => ({
	type: contactTypes.SUCCESS_FETCH_CONTACT,
	payload: token,
})

export const fetchContactFail = (errMessage) => ({
	type: contactTypes.FAIL_FETCH_CONTACT,
	payload: errMessage,
})


export const loadDeleteContact = () => ({
	type: contactTypes.START_DELETE_CONTACT,
})

export const postDeleteContactSuccess = (data) => ({
	type: contactTypes.SUCCESS_DELETE_CONTACT,
	payload: data,
})

export const postDeleteContactFail = (errMessage) => ({
	type: contactTypes.FAIL_DELETE_CONTACT,
	payload: errMessage,
})


export const postContact = (values) => {
	return async (dispatch) => {
		try {

			const res = await axios.post(
				`http://localhost:7500/api/contact/post`,
				// `https://red-cockatoo-cap.cyclic.app/api/user/register`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			startpostContact()
			dispatch(postContactSuccess(res.data))
		} catch (error) {
			dispatch(postContactFail(error.response))
			console.log(error.response)
		}
	}
}



export const fetchContact = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`http://localhost:7500/api/contact/fetchAll`,
				// `https://red-cockatoo-cap.cyclic.app/api/user/login`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
				
			)
			startFetchContact()
			dispatch(fetchContactSuccess(res.data))
		} catch (error) {
			dispatch(fetchContactFail(error.response.data.error))
		}
	}
}


export const deleteContact = (id) => {
	return async (dispatch) => {
		try {
			const res = await axios.delete(
				`http://localhost:7500/api/contact/delete/${id}`,
			)
			loadDeleteContact()
			dispatch(postDeleteContactSuccess(res.data.data))
		} catch (error) {
			dispatch(postDeleteContactFail(error.response))
		}
	}
}
