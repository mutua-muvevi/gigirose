import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { useTheme } from "@emotion/react";

import TitleSubtitle from "../../../layout/titlesubtitle";
import imageOne from "../../../assets/images/design1.jpg";

const text = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non quam ut nisl rhoncus elementum. Nullam eu eros luctus, posuere odio vel, feugiat leo. Vivamus id ipsum ut magna eleifend fermentum. Integer sit amet nisi non ligula tincidunt porta. Interdum et malesuada fames ac ante ipsum primis in faucibus",
	"Nunc rutrum bibendum risus, quis tempor mauris facilisis ac. Nam molestie auctor dui, a gravida dui laoreet ac. Proin ut dui malesuada justo tincidunt consequat. Nunc facilisis urna eget dui rutrum finibus in non orci. Nulla ac tempor velit, vel congue purus. Aliquam neque quam, commodo porta tellus ut, commodo auctor lectus. Etiam massa enim, sagittis vitae metus vitae, elementum facilisis mauris. Mauris gravida leo quis rutrum pulvinar.",
	"Nunc rutrum bibendum risus, quis tempor mauris facilisis ac. Nam molestie auctor dui, a gravida dui laoreet ac. Proin ut dui malesuada justo tincidunt consequat. Nunc facilisis urna eget dui rutrum finibus in non orci. Nulla ac tempor velit, vel congue purus. Aliquam neque quam, commodo porta tellus ut, commodo auctor lectus. Etiam massa enim, sagittis vitae metus vitae, elementum facilisis mauris. Mauris gravida leo quis rutrum pulvinar.",
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
							title="who we are"
							subtitle="Beauty shop and some wording here"
							text={text}
						/>
					</StyledGridItem>
				</StyledGrid>
			</Container>
		</StyledWrapper>
	);
};

export default Who;
