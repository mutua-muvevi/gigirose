import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Banner from "../../layout/banner";
import ContactDetailsForm from "./sections/details";
import Map from "./sections/map";

const image ="https://res.cloudinary.com/dqweh6zte/image/upload/v1679654149/skydive%20rhino/images/young-man-answering-telework-call-customer-service-job-talking-clients-phone-helpline-male-worker-using-audio-headset-given-assistance-support-people-close-up_aw6tix.jpg"

const StyledContact = styled(Box)(({ theme }) => ({
}))

const Contact = () => {
	return (
		<StyledContact>
			<Banner
				height="50vh"
				image={image}
				title="Contact us"
				subtile="Adventure is just a phone call away - contact us now!"
				position="center"
			/>
			<ContactDetailsForm/>
			<Map/>
		</StyledContact>
	)
}

export default Contact