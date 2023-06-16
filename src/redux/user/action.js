import userTypes from "./types";
import axios from "axios"

export const fetchUserStart = () => ({
	type: userTypes.START_FETCH_USER
})

export const fetchUserSuccess = (user) => ({
	type: userTypes.SUCCESS_FETCH_USER,
	payload: user,
})

export const fetchUserFail = (errMessage) => ({
	type: userTypes.FAIL_FETCH_USER,
	payload: errMessage,
})

export const editAdminStart = () => ({
	type: userTypes.START_EDIT_ADMIN
})

export const editAdminSuccess = (user) => ({
	type: userTypes.SUCCESS_EDIT_ADMIN,
	payload: user,
})

export const editAdminFail = (errMessage) => ({
	type: userTypes.FAIL_EDIT_ADMIN,
	payload: errMessage,
})


export const fetchUser = (token) => {
	return async (dispatch) => {
		try {console.log("The token we get is", token)
			const res = await axios.get(
				// `http://localhost:7500/api/user/me`,
				`https://gigirosebeauty.onrender.com/api/user/me`,
				{
					headers: {
						Authorization:`${token}`,
					}
				}
			)
			fetchUserStart()
			dispatch(fetchUserSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchUserFail(error.response))
		}
	}
}

export const editUser = ({id, token, values}) => {

	return async (dispatch) => {
		try {
			const res = await axios.put(
				// `http://localhost:7500/api/user/edit/${id}`,
				`https://gigirosebeauty.onrender.com/api/user/users`,
				values,
				{
					headers: {
						Authorization:`Bearer ${token}`,
					}
				}
			)

			editAdminStart()
			dispatch(editAdminSuccess(res.data.data))
		} catch (error) {
			dispatch(editAdminFail(error.response.data.error))
		}
	}
}