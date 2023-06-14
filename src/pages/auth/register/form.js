import React, { useState } from "react";

import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { FaPaperPlane } from "react-icons/fa";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { registerItems } from "./info";
import TextfieldWrapper from "../../../components/formui/textfield/textfield";
import { registerUser } from "../../../redux/auth/action";
import { connect } from "react-redux";

const INITIAL_FORM_STATE = {
	email: "",
	fullname: "",
	telephone: "",
	location: "",
	password: "",
};

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string()
		.email("Please add a valid email")
		.min(5, "Too short email")
		.max(100, "Too long email")
		.required("Please add an email"),
	fullname: Yup.string()
		.min(5, "Too short fullname")
		.max(100, "Too long fullname")
		.required("Please add an fullname"),
	telephone: Yup.string()
		.min(5, "Too short telephone")
		.max(100, "Too long telephone"),
	location: Yup.string()
		.min(5, "Too short location")
		.max(100, "Too long location")
		.required("Please add an location"),
	password: Yup.string()
		.min(5, "Too short password")
		.max(100, "Too long password")
		.required("Please add an password"),
});

const StyledRegisterForm = styled(Box)(({ theme }) => ({}));

const RegisterForm = ({register}) => {
	const [showSuccess, setShowSuccess] = useState(true);

	const submitHandler = (values) => {
		register(values)
	};

	return (
		<StyledRegisterForm>
			<Formik
				initialValues={{...INITIAL_FORM_STATE}}
				validationSchema={FORM_VALIDATION}
				onSubmit={submitHandler}
			>
				<Form>
					<Grid container spacing={3}>
						{registerItems.map((el, i) => (
							<Grid
								item
								key={i}
								xs={el.xs}
								sm={el.sm}
								md={el.md}
								lg={el.lg}
								xl={el.xl}
							>
								<TextfieldWrapper
									type={el.type}
									name={el.name}
									label={el.label}
									size="small"
									variant="standard"
								/>
							</Grid>
						))}

						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<Button
								variant="contained"
								type="submit"
							>
								Register
							</Button>
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</StyledRegisterForm>
	);
};

const mapStatetoProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
	register : (values) => dispatch(registerUser(values))
})

export default connect(mapStatetoProps, mapDispatchToProps)(RegisterForm);
