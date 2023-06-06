import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextFieldWrapper from "../../../components/formui/textfield/textfield";

import { contactForm } from "../info";

const StyledContactForm = styled(Box)(({ theme }) => ({

}))

const INITIAL_FORM_STATE = {
	name: "",
	email: "",
	subject: "",
	message: "",
}

const FORM_VALIDATION = Yup.object().shape({
	name: Yup.string().min(4, 'Minimum characters required is 4'),
	email: Yup.string().email("Please add a valid email").required("Please add an email"),
	subject: Yup.string().min(5, "Minimum characters required is 5"),
	message: Yup.string().min(25, "Minimum characters required is 25"),
})

const ContactForm = () => {
	const submitValues = (values) => {
		console.log(values)
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
							<Button variant="contained" color="primary">
								Send Message
							</Button>
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</StyledContactForm>
	)
}

export default ContactForm