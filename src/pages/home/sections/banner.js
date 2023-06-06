import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import imageThree from "../../../assets/images/design2.jpg";
import { Link } from "react-router-dom";

const StyledWrapper = styled(Box)(({ theme }) => ({
	height: "75vh",
	overflow: "hidden",
	backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.75)), url(${imageThree})`,
	backgroundAttachment: "fixed",
	backgroundSize: "cover",
	backgroundPosition: "center",
	display: "flex",
	alignItems: "center",
	color: "#fff"
}));

const BannerItem = styled(Container)(({ theme }) => ({}));

const styledLink = {
	textDecoration: "none",
	color: "inherit"
}

const StyledButton = styled(Button)(({ theme }) => ({
	width: "200px"
}))

const Banner = () => {
	return (
		<StyledWrapper>
			<BannerItem maxWidth="xl">
				<Stack direction="column" spacing={3}>
					<Typography variant="h2">Lorem Ipsum Text One</Typography>
					<Typography variant="subtitle1">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse non quam ut nisl rhoncus elementum. Nullam eu
						eros luctus, posuere odio vel, feugiat leo. Vivamus id ipsum
						ut magna eleifend fermentum. Integer sit amet nisi non
						ligula tincidunt porta. Interdum et malesuada fames ac ante
						ipsum primis in faucibus
					</Typography>

					<Link to="/landing/about" style={styledLink}>
						<StyledButton variant="contained" color="primary">
							About
						</StyledButton>
					</Link>
				</Stack>
			</BannerItem>
		</StyledWrapper>
	);
};

export default Banner;
