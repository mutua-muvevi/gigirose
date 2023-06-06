import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Image from "../../assets/images/design5.jpg";
import ReusableBanner from "../../layout/banner";
import ServiceCards from "./sections/cards";

const subtitle = [
	`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula euismod mauris, ut ultrices nisi auctor at. Donec pellentesque orci eget massa interdum, sed tempor nisi aliquam. Proin non ipsum sem.`
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