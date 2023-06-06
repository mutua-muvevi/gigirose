import { Box } from "@mui/material";
import { styled } from "@mui/system";

import ReusableBanner from "../../layout/banner";
import Image from "../../assets/images/design5.jpg";
import Mission from "./sections/mission";
import Company from "./sections/company";

const subtitle = [
	`Heldial Painting Company was formed to meet the growing demand and ongoing need for professional-grade painting and refinishing services in Kenya and East Africa.`,
	`The focus of Heldial Painting Company is to provide high-quality surface preparation, finished painting, and refinishing services to residential, commercial, municipal building, and facilities clients primarily in the most-populated areas`,
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