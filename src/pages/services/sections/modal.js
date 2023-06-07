import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system"
import ReusableParagraphs from "../../../layout/paragraphs";
import TitleSubtitle from "../../../layout/titlesubtitle";

const StyledModal = styled(Box)(({ theme }) => ({

}))

const ServiceDetails = ({ data }) => {
	return (
		<StyledModal>
			<Stack direction="column" spacing={3}>
				{
					data.content.map((el, i) => (
						<Stack direction="column" spacing={2}>
							<TitleSubtitle title={el.title}/>
							<ReusableParagraphs paragraph={el.paragraph} color="#fff"/>
						</Stack>
					))
				}
			</Stack>
		</StyledModal>
	)
}

export default ServiceDetails