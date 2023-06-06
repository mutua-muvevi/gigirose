import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system"
import ReusableParagraphs from "../../../layout/paragraphs";

const StyledModal = styled(Box)(({ theme }) => ({

}))

const ModalDetails = ({ data }) => {
	return (
		<StyledModal>
			<Stack direction="column" spacing={3}>
				<ReusableParagraphs paragraph={data.paragraph} color="#ffffff"/>
				{
					data.list ? (
						<Stack direction="column" >
							<Typography variant="h6" style={{fontFamily: "'Merienda', cursive",}} color="primary">
								{data.list.title}
							</Typography>
							{
								data.list.items.map((li, i) => (
									<Stack direction="row" spacing={2} key={i}>
										<Typography variant="body1" >
											{1 + i}.
										</Typography>
										
										<Typography variant="body1" >
											{li}
										</Typography>
									</Stack>
								))
							}
						</Stack>
					) : ""
				}
				{console.log(data.list)}
			</Stack>
		</StyledModal>
	)
}

export default ModalDetails