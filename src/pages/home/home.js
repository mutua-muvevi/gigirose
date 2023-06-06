import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Banner from "./sections/banner";
import Who from "./sections/who";
import Testimonials from "./sections/testimonials";
import HomeServices from "./sections/services";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Home = () => {
	return (
		<StyledWrapper>
			<Banner/>
			<Who/>
			<HomeServices/>
			<Testimonials/>
		</StyledWrapper>
	)
}

export default Home