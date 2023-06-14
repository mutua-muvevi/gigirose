import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Alert, AlertTitle, Box, Button, Grid, Grow, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaEye, FaEyeSlash, FaPaperPlane } from "react-icons/fa";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextFieldWrapper from "../../../components/formui/textfield/textfield";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../../redux/auth/action';

const INITIAL_FORM_STATE = {
	email: "",
	password: "",
}

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string().email("Please add a valid email").min(5, "Too short email").max(80, "Too long email").required("Please add an email"),
	password: Yup.string().min(5, "Invalid Password").max(100, "Invalid Password").required("Please add a password"),
});



const StyledLoginForm = styled(Stack)(({theme}) => ({
}))

const LoginForm = ({ loginUser, token, loginError }) => {
	
	const [ showSuccess, setShowSuccess ] = useState(false);
	const [ showError, setShowError ] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const navigate = useNavigate()

	const submitHandler = ( values ) => {
		// loginUser(values)
		console.log(values)
		
		if(token === null){
			setShowError(true)
		}

		
		if( token && token.success === true){
			setShowSuccess(true)
			console.log("Token here is", token)
	
			setTimeout(() => {
				navigate("/admin/freelancer/home")
			}, 1500);
		}
		
	}

	const growStyles = {
		transformOrigin: '0 0 0',
		display: showSuccess || showError === true ? "flex" : "none"
	}

	return (
		<StyledLoginForm spacing={3}>
			{
				token ? (
					<Grow in={showSuccess}  style={growStyles} timeout={1000}>
						<Alert severity="success" variant="filled">
							<AlertTitle style={{color: "#fff"}}>Success!!</AlertTitle>
							<Typography variant="body2" style={{color: "#fff"}}>
								Login successfull. Redirecting ...
							</Typography>
						</Alert>
					</Grow>
				) : (
					<Grow in={showError}  style={growStyles} timeout={1000}>
						<Alert severity="error" variant="filled">
							<AlertTitle>Login Error</AlertTitle>
							<Typography variant="body2">
								{loginError}
							</Typography>
						</Alert>
					</Grow>
				)
			}

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
								variant="standard"
								type="text"
								name="email"
								label="Email"
								size="small"
							/>
						</Grid>

						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<TextFieldWrapper
								variant="standard"
								type={showPassword ? 'text' : 'password'}
								name="password"
								label="Password"
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

						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<Button
								variant="contained"
								type="submit"
								startIcon={<FaPaperPlane style={{ fontSize: "inherit" }}/>}
								sx={{width:"100%"}}
							>
								Submit
							</Button>
						</Grid>

						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<Typography variant="body2" color="text.secondary">
								Forgot your password ?
							</Typography>

							<Link to="/forgotpassword">
								<Typography variant="body2" color="primary">
									Reset password here
								</Typography>
							</Link>
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</StyledLoginForm>
	)
}

const mapStateToProps = ({auth}) => ({
	token: auth.token,
	loginError: auth.loginError
})

const mapDispatchToProps = (dispatch) => ({
	loginUser : (values) => dispatch(loginUser(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)