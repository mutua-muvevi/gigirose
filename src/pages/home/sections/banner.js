import React, { useState, useEffect } from "react";

import { Box, Button, Container, Fade, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import BookingForm from "./form"
import { bannerInfo } from "../info";
import ModalComponent from "../../../components/modal";


const StyledWrapper = styled(Box)(({ theme }) => ({
	height: "75vh",
	overflow: "hidden",
	backgroundAttachment: "fixed",
	backgroundSize: "cover",
	backgroundPosition: "center",
	display: "flex",
	alignItems: "center",
	color: "#fff",
}));

const BannerItem = styled(Container)(({ theme }) => ({}));

const StyledButton = styled(Button)(({ theme }) => ({
	width: "200px",
}));

const Banner = () => {
	const [index, setIndex] = useState(0);
	const [ open, setOpen ] = useState(false)

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % bannerInfo.length);
		}, 7500);
		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<Fade key={index} in={true} timeout={1000}>
				<StyledWrapper
					style={{
						backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.75)), url(${bannerInfo[index].image})`,
					}}
				>
					<BannerItem maxWidth="xl">
						<Stack direction="column" spacing={3}>
							<Typography
								variant="h2"
								style={{ fontFamily: "'Merienda', cursive" }}
							>
								{bannerInfo[index].title}
							</Typography>
							<Typography variant="subtitle1" sx={{
								display: {
									xs: "none",
									sm: "none",
									md: "block",
									lg: "block",
									xl: "block"
								}
							}}>
								{bannerInfo[index].description}
							</Typography>
							<StyledButton variant="contained" color="secondary" onClick={() => setOpen(true)}>
								<Typography variant="subtitle1" >
									Book Online
								</Typography>
							</StyledButton>
						</Stack>
					</BannerItem>
				</StyledWrapper>
			</Fade>

			<ModalComponent
				header="Book Service"
				open={open}
				close={() => setOpen(false)}
				width="75vw"
				children={
					<BookingForm open={open} setOpen={setOpen}/>
				}
			/>
		</>
	);
};

export default Banner;
