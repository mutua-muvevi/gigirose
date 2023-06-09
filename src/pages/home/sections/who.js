import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { useTheme } from "@emotion/react";

import TitleSubtitle from "../../../layout/titlesubtitle";
import imageOne from "../../../assets/images/design1.jpg";

const text = [
	`At our beauty shop, we are more than just a place for beauty services – we are a destination where transformation happens. Our passion lies in helping individuals embrace their unique beauty and unleash their inner radiance. With a team of dedicated professionals and a commitment to excellence, we strive to provide exceptional services that go beyond the surface, enhancing both outer appearance and inner confidence.`,
	`What sets us apart is our personalized approach to beauty. We understand that each individual is unique, and that's why we take the time to listen and understand your specific needs and desires. Our team of skilled professionals is trained in the latest techniques and technologies, ensuring that you receive the highest quality care and the best possible results. Whether you're seeking facial rejuvenation, body contouring, or skin revitalization, we have the expertise to deliver transformative outcomes tailored to your individual goals.`,
	`At the heart of our beauty shop is a belief in the power of self-care and self-expression. We strive to create a welcoming and inclusive environment where clients can feel comfortable, pampered, and empowered. Our commitment to customer satisfaction extends beyond the services we provide; we aim to build lasting relationships with our clients, guiding and supporting them on their beauty journey. With a focus on continuous education and staying abreast of industry advancements, we ensure that we always deliver innovative solutions and maintain the highest standards of professionalism.`,
];

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
	backgroundColor: theme.palette.secondary.main,
	color: "#fff"
}));

const StyledGrid = styled(Grid)(({ theme }) => ({}));

const StyledGridItem = styled(Grid)(({ theme }) => ({}));


const Who = () => {
	const theme = useTheme();

	const styledImage = {
		width: "100%",
	};

	return (
		<StyledWrapper>
			<Container maxWidth="xl">
				<StyledGrid container spacing={3}>
					<StyledGridItem
						item
						xs={12}
						sm={12}
						md={12}
						lg={5.5}
						xl={5.5}
					>
						<img
							src={imageOne}
							alt="Who we are"
							style={styledImage}
							loading="lazy"
						/>
					</StyledGridItem>

					<StyledGridItem
						item
						xs={12}
						sm={12}
						md={12}
						lg={6.5}
						xl={6.5}
					>
						<TitleSubtitle
							title="Our Story"
							subtitle="Where Beauty Meets Transformation"
							text={text}
						/>
					</StyledGridItem>
				</StyledGrid>
			</Container>
		</StyledWrapper>
	);
};

export default Who;
