import React, { useState } from 'react';

import { Alert, AlertTitle, Box, Button, Grid, Grow, IconButton, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";

import { FaEye, FaEyeSlash, FaPaperPlane } from "react-icons/fa";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextFieldWrapper from "../../../components/formui/textfield/textfield";
import { connect } from 'react-redux';
import { forgotPassword } from '../../../redux/auth/action';

const INITIAL_FORM_STATE = {
	email: "",
}

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string().email("Please add a valid email").min(5, "Too short email").max(80, "Too long email").required("Please add an email"),
});



const StyledForgotPasswordForm = styled(Box)(({theme}) => ({
	minWidth: "50vw",
}))

const ForgotPasswordForm = ({forgotPassword}) => {
	
	const [ showSuccess, setShowSuccess ] = useState(true);

	const submitHandler = ( values ) => {
		console.log("VALUES", values)
		forgotPassword(values)
	}

	return (
		<StyledForgotPasswordForm>
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitHandler }
			>
				<Form>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<TextFieldWrapper
								type="text"
								name="email"
								label="Email"
								size="small"
								variant="standard"
							/>
						</Grid>

						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<Button
								variant="contained"
								type="submit"
								startIcon={<FaPaperPlane style={{ fontSize: "inherit" }}/>}
							>
								Submit
							</Button>
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</StyledForgotPasswordForm>
	)
}

const mapStateToProps = ({}) => ({

})


const mapDispatchToProps = (dispatch) => ({
	forgotPassword : (values) => dispatch(forgotPassword(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm)