import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import imageThree from "../../../assets/images/design2.jpg";
import { Link } from "react-router-dom";

const subtitle = `Ignite Your Beauty Potential, Unveil Your True Radiance, and Illuminate Your Skin. With Expert Services Tailored to You, Discover a New Level of Beauty. Rejuvenate, Revitalize, and Renew with Our Transformative Treatments. Experience the Essence of Luxury Beauty and Unlock a World of Glamour. From Head to Toe, Embrace the Art of Timeless Beauty. Elevate Your Look and Embrace Your Beauty Revolution.`;

const StyledWrapper = styled(Box)(({ theme }) => ({
	height: "75vh",
	overflow: "hidden",
	backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.75)), url(${imageThree})`,
	backgroundAttachment: "fixed",
	backgroundSize: "cover",
	backgroundPosition: "center",
	display: "flex",
	alignItems: "center",
	color: "#fff",
}));

const BannerItem = styled(Container)(({ theme }) => ({}));

const styledLink = {
	textDecoration: "none",
	color: "inherit",
};

const StyledButton = styled(Button)(({ theme }) => ({
	width: "200px",
}));

const Banner = () => {
	return (
		<StyledWrapper>
			<BannerItem maxWidth="xl">
				<Stack direction="column" spacing={3}>
					<Typography
						variant="h2"
						style={{ fontFamily: "'Merienda', cursive" }}
					>
						GIGIRose Beauty Products
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{
							fontFamily: "'Merienda', cursive",
							display: {
								xs: "none",
								sm: "none",
								md: "none",
								lg: "block",
								xl: "block",
							},
						}}
					>
						{subtitle}
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
