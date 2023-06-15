import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const BannerItem = styled(Container)(({ theme }) => ({}));

const ReusableBanner = ({ height, title, subtitle, image }) => {
	const StyledWrapper = styled(Box)(({ theme }) => ({
		height: height ? height : "75vh",
		overflow: "hidden",
		backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.75)), url(${image})`,
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
		backgroundPosition: "center",
		display: "flex",
		alignItems: "center",
		color: "#fff",
	}));

	return (
		<StyledWrapper>
			<BannerItem maxWidth="xl">
				<Stack direction="column" spacing={3}>
					<Typography
						variant="h2"
						style={{ fontFamily: "'Merienda', cursive" }}
					>
						{title}
					</Typography>
					{subtitle
						? subtitle.map((el, i) => (
								<Typography
									variant="subtitle1"
									key={i}
									style={{
										fontFamily: "'Merienda', cursive",
									}}
								>
									{el}
								</Typography>
						  ))
						: ""}
				</Stack>
			</BannerItem>
		</StyledWrapper>
	);
};

export default ReusableBanner;
