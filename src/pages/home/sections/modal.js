import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import ReusableParagraphs from "../../../layout/paragraphs";
import TitleSubtitle from "../../../layout/titlesubtitle";
import { useTheme } from "@emotion/react";

const StyledModal = styled(Box)(({ theme }) => ({}));

const ServiceDetails = ({ data }) => {
	const theme = useTheme();

	return (
		<StyledModal>
			<Stack direction="column" spacing={3}>
				{data.content.map((el, i) => (
					<Stack direction="column" spacing={2}>
						<TitleSubtitle title={el.title} />
						<ReusableParagraphs
							paragraph={el.paragraph}
							color={theme.palette.text.main}
						/>
					</Stack>
				))}
			</Stack>
		</StyledModal>
	);
};

export default ServiceDetails;
