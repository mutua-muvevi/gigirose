import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { company } from "../info";
import TitleSubtitle from "../../../layout/titlesubtitle";
import ReusableParagraphs from "../../../layout/paragraphs";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom: "50px",
}))

const Company = () => {
	return (
		<StyledWrapper>
			<Container maxWidth="xl">
				<Stack direction="column" spacing={3}>
					<TitleSubtitle
						title="About Company"
					/>
					<ReusableParagraphs
						paragraph={company.about}
					/>
				</Stack>
			</Container>
		</StyledWrapper>
	)
}

export default Company