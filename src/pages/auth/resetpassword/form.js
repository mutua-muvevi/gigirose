import React, { useState } from 'react';

import { Alert, AlertTitle, Box, Button, Grid, Grow, IconButton, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";

import { FaEye, FaEyeSlash, FaPaperPlane } from "react-icons/fa";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { passwordUpdate } from "./info";
import TextFieldWrapper from "../../../components/formui/textfield/textfield";

const INITIAL_FORM_STATE = {
	new_password: "",
	confirm_new_password: "",
}

const FORM_VALIDATION = Yup.object().shape({
	new_password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required("Please add a password"),
	confirm_new_password: Yup.string().oneOf([Yup.ref('new_password'), null], 'Passwords do not match').required("Please retype password above"),
});



const StyledResetPasswordForm = styled(Box)(({theme}) => ({

}))

const ResetPasswordForm = () => {
	
	const [ showSuccess, setShowSuccess ] = useState(true);
	const [showPassword, setShowPassword] = useState(false);

	const submitHandler = ( values ) => {
		console.log("VALUES", values)
	}

	return (
		<StyledResetPasswordForm>
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitHandler }
			>
				<Form>
					<Grid container spacing={2}>
						{
							passwordUpdate &&
							passwordUpdate.map((el, i) => (
								<Grid item xs={el.xs} sm={el.sm} md={el.md} lg={el.lg} xl={el.xl}>
									<TextFieldWrapper
										type={showPassword ? 'text' : 'password'}
										name={el.name}
										label={el.label}
										size="small"
										InputProps={{
											endAdornment : (
												<InputAdornment position="end">
													<IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
														{ showPassword ? <FaEye/> : <FaEyeSlash/> }
													</IconButton>
												</InputAdornment>
											)
										}}

									/>
								</Grid>
							))
						}
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
		</StyledResetPasswordForm>
	)
}

export default ResetPasswordForm