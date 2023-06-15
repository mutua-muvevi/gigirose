import { useState } from "react";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "../../../layout/titlesubtitle";
import { company } from "../info";

import { truncateStr } from "../../../utils/formatString";
import BackgroundImage from "../../../assets/images/design1.jpg";
import ModalComponent from "../../../components/modal";
import ModalDetails from "./modal";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom: "50px",
	overflow: "hidden",
	backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.75)), url(${BackgroundImage})`,
	backgroundAttachment: "fixed",
	backgroundSize: "cover",
	backgroundPosition: "center",
	display: "flex",
	alignItems: "center",
	color: "#fff",
}));

const StyledCardBox = styled(Box)(({ theme }) => ({
	border: `2px solid ${theme.palette.primary.main}`,
	borderRadius: "10px",
	padding: "10px",
	cursor: "pointer",
	minHeight: "200px",
}));

const cardArray = [company.mission, company.vision, company.partners];

const text = [
	"We are committed to being pioneers in the provision of advanced beauty and skincare treatments. Our mission is to bring the future of beauty to the present, to demystify the complexities of advanced skincare, and to make groundbreaking treatments accessible to everyone. Our specialists regularly participate in training sessions to stay abreast of the latest techniques and treatments. We take pride in offering a wide range of cutting-edge services like Dermal Fillers, Anti-Wrinkle Treatments, Threadlifts, Stretchmark Reduction, and Vitamin Boosts. Through our relentless pursuit of knowledge and commitment to innovation, we aim to revolutionize the beauty experience for our clients, offering them the very best the industry",
];

const Mission = () => {
	const [open, setOpen] = useState(false);
	const [modalData, setModalData] = useState({});

	const modalHandler = (item) => {
		setModalData(item);
		setOpen(true);
	};

	return (
		<>
			<StyledWrapper>
				<Container maxWidth="xl">
					<Stack
						direction="column"
						justifyContent="center"
						spacing={3}
						sx={{ minHeight: "50vh" }}
					>
						<TitleSubtitle title="Mission Statements" text={text} />
						<div>
							<Grid container spacing={3}>
								{company.statements.map((item, i) => (
									<Grid
										item
										xs={12}
										sm={12}
										md={12}
										lg={4}
										xl={4}
										key={i}
										onClick={() => modalHandler(item)}
									>
										<StyledCardBox>
											<Stack
												direction="column"
												spacing={2}
											>
												<Typography variant="h5" color="private">
													{item.title}
												</Typography>

												<Typography variant="body1" color="private">
													{truncateStr(
														item.paragraph[0],
														180
													)}
												</Typography>
											</Stack>
										</StyledCardBox>
									</Grid>
								))}
							</Grid>
						</div>
					</Stack>
				</Container>
			</StyledWrapper>

			<ModalComponent
				header={modalData.title}
				open={open}
				close={() => setOpen(false)}
				width="90vw"
				children={<ModalDetails data={modalData} c/>}
			/>
		</>
	);
};

export default Mission;
