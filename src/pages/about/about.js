import { Box } from "@mui/material";
import { styled } from "@mui/system";

import ReusableBanner from "../../layout/banner";
import Image from "../../assets/images/design5.jpg";
import Mission from "./sections/mission";
import Company from "./sections/company";

const subtitle = [
	`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula euismod mauris, ut ultrices nisi auctor at. Donec pellentesque orci eget massa interdum, sed tempor nisi aliquam. Proin non ipsum sem.`
]

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const About = () => {
	return (
		<StyledWrapper>
			<ReusableBanner
				title="About"
				subtitle={subtitle}
				image={Image}
				height="55vh"
			/>
			<Company/>
			<Mission/>
		</StyledWrapper>
	)
}

export default About