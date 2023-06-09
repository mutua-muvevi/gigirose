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
				subtitle={["Reach Out to Us – Let's Connect and Transform Together"]}
				position="center"
			/>
			<ContactDetailsForm/>
			<Map/>
		</StyledContact>
	)
}

export default Contact