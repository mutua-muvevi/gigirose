import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import TitleSubtitle from "../../../layout/titlesubtitle";
import { serviceInfo } from "../info";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}));

const styledImage = {
	width: "80%",
	height: "20vh"
}

const HomeServices = () => {
	return (
		<StyledWrapper>
			<Container maxWidth="xl">
				<Stack direction="column" spacing={3}>
					<TitleSubtitle
						title="What we do"
						subtitle="Special And Unique Services That We Offer"
						center
					/>
					<div>
						<Grid container spacing={3}>
							{
								serviceInfo.map((el, i) => (
									<Grid item xs={12} sm={12} md={6} lg={3} xl={3} Key={i}>
										<Stack direction="column" spacing={3}>
											<img src={el.image} alt={el.title} style={styledImage}/>
												
											<Typography variant="h5" colot="text.primary">
												{el.title}
											</Typography>
											<Typography variant="subtitle1" colot="text.secondary">
												{el.text}
											</Typography>
										</Stack>
									</Grid>
								))
							}
						</Grid>
					</div>
				</Stack>
			</Container>
		</StyledWrapper>
	)
}

export default HomeServices