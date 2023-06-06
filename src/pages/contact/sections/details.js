import { Box, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import ContactDetails from "./content";
import ContactForm from "./form";

const StyledDetailsContainer = styled(Container)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom: "50px"
}))

const StyledContactDetailsForm = styled(Grid)(({ theme }) => ({

}))

const ContactDetailsForm = () => {
	return (
		<StyledDetailsContainer maxWidth="xl">
			<StyledContactDetailsForm container spacing={3}>
				<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
					<ContactDetails/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
					<ContactForm/>
				</Grid>
			</StyledContactDetailsForm>
		</StyledDetailsContainer>
	)
}

export default ContactDetailsForm