import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Banner from "../../layout/banner";
import ContactDetailsForm from "./sections/details";
import Map from "./sections/map";

import Image from "../../assets/images/design4.jpg"

const StyledContact = styled(Box)(({ theme }) => ({
}))

const Contact = () => {
	return (
		<StyledContact>
			<Banner
				height="50vh"
				image={Image}
				title="Contact us"
				subtile="Contact us for more information"
				position="center"
			/>
			<ContactDetailsForm/>
			<Map/>
		</StyledContact>
	)
}

export default Contact