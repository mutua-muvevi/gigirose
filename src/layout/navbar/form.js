import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../../components/formui/textfield/textfield";
import SelectField from "../../components/formui/select/select";


const StyledWrapper = styled(Box)(({ theme }) => ({}));

const services = [
	{Name: "Dermal Filler"},
	{Name: "Fat Dissolve"},
	{Name: "PDO COG & Thread Lifts"},
	{Name: "Vitamin Boost"},
	{Name: "Anti Wrinkle"},
	{Name: "Facials"},
	{Name: "Microschelotherapy"},
	{Name: "Stretch Mark Reduction"},
]

const INITIAL_FORM_STATE = {
	email: "",
	fullname: "",
	telephone: "",
	service: "",
	address: "",
};

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string()
		.email("Please add a valid email")
		.min(5, "Too short email")
		.max(80, "Too long email")
		.required("Please add an email"),
	fullname: Yup.string()
		.min(5, "Too short fullname")
		.max(100, "Too long fullname")
		.required("Please add a fullname"),
	telephone: Yup.string()
		.min(5, "Too short telephone")
		.max(100, "Too long telephone"),
	service: Yup.string()
		.min(5, "Too short service")
		.max(100, "Too long service")
		.required("Please add a service"),
	address: Yup.string()
		.min(5, "Too short address")
		.max(100, "Too long address")
		.required("Please add an address"),
});

const BookForm = () => {
	const submitHandler = (values) => {
		console.log(values);
	};

	return (
		<StyledWrapper>
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE,
				}}
				validationSchema={FORM_VALIDATION}
				onSubmit={submitHandler}
			>
				<Form>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<TextfieldWrapper
								type="email"
								name="email"
								label="Email"
								size="small"
								textColor="#fff"
								borderColor="#fff"
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<TextfieldWrapper
								type="text"
								name="fullname"
								label="Fullname"
								size="small"
								textColor="#fff"
								borderColor="#fff"
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<TextfieldWrapper
								type="text"
								name="telephone"
								label="Telephone"
								size="small"
								textColor="#fff"
								borderColor="#fff"
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<SelectField
								type="text"
								name="service"
								label="Services"
								size="small"
								textColor="#fff"
								borderColor="#fff"
								options={services}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<TextfieldWrapper
								type="text"
								name="address"
								label="Address"
								size="small"
								textColor="#fff"
								borderColor="#fff"
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<Button variant="contained" type="submit" color="primary">
								<Typography variant="body2" style={{color: "#ffffff"}}>
									Book Now
								</Typography>
							</Button>
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</StyledWrapper>
	);
};

export default BookForm;
