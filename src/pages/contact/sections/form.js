import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextFieldWrapper from "../../../components/formui/textfield/textfield";

import { contactForm } from "../info";
import { postContact } from "../../../redux/contact/action";

import { connect } from "react-redux";

const StyledContactForm = styled(Box)(({ theme }) => ({

}))

const INITIAL_FORM_STATE = {
	fullname: "",
	email: "",
	subject: "",
	message: "",
}

const FORM_VALIDATION = Yup.object().shape({
	fullname: Yup.string().min(5, 'Minimum characters required is 5'),
	email: Yup.string().email("Please add a valid email").required("Please add an email"),
	subject: Yup.string().min(10, "Minimum characters required is 10"),
	message: Yup.string().min(20, "Minimum characters required is 20").max(1000, "Maximum characters required is 1000"),
})

const ContactForm = ({postContact}) => {
	const submitValues = (values, {resetForm}) => {
		postContact(values)
		resetForm()
	}
	return (
		<StyledContactForm>
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitValues }
			>
				<Form>
					<Grid container spacing={3}>
						{
							contactForm.map((el, i) => (
								<Grid item key={i} xs={el.xs} sm={el.sm} md={el.md} lg={el.lg} xl={el.xl}>
									<TextFieldWrapper
										type={el.type}
										name={el.name}
										label={el.label}
										fullwidth
									/>
								</Grid>
							))
						}
						<Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
							<TextFieldWrapper
								type="text"
								name="message"
								label="Message"
								multiline
								rows={5}
								fullwidth
							/>
						</Grid>
						<Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
							<Button variant="contained" color="primary" type="submit">
								Send Message
							</Button>
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</StyledContactForm>
	)
}

const mapStateToProps = ({}) => ({})

const mapDispatchToProps = (dispatch) => ({
	postContact: (values) => dispatch(postContact(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)