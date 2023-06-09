import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Image from "../../assets/images/design5.jpg";
import ReusableBanner from "../../layout/banner";
import ServiceCards from "./sections/cards";

const subtitle = [
	`Experience beauty transformed with our cutting-edge services and skincare solutions.`
]

const StyledWrapper = styled(Box)(({ theme }) => ({

}))


const Services = () => {
	return (
		<StyledWrapper>
			<ReusableBanner
				title="Our Services"
				subtitle={subtitle}
				image={Image}
				height="55vh"
			/>
			<ServiceCards/>
		</StyledWrapper>
	)
}

export default Services