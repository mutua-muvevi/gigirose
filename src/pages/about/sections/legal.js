import { Box, Container, Stack } from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "../../../layout/titlesubtitle";
import ReusableParagraphs from "../../../layout/paragraphs";

import { company } from "../info";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom: "50px",
}))

const Legal = () => {
	return (
		<StyledWrapper>
			<Container maxWidth="xl">
				<Stack direction="column" spacing={3}>
					<TitleSubtitle title={company.legal.title}/>
					<ReusableParagraphs paragraph={company.legal.paragraph}/>
				</Stack>
			</Container>
		</StyledWrapper>
	)
}

export default Legal