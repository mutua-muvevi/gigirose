import { Box } from "@mui/material";
import { styled } from "@mui/system";

import ReusableBanner from "../../layout/banner";
import Image from "../../assets/images/design5.jpg";
import Mission from "./sections/mission";
import Company from "./sections/company";

const subtitle = [
	`We offer an array of meticulously curated products designed to bring out your inner radiance, ensuring every customer leaves with confidence and grace.`
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