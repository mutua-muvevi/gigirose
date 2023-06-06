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
	border: "2px solid orange",
	borderRadius: "10px",
	padding: "10px",
	cursor: "pointer",
	minHeight: "200px"
}));

const cardArray = [
	company.mission,
	company.vision,
	company.partners,
];

const text = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula euismod mauris, ut ultrices nisi auctor at. Donec pellentesque orci eget massa interdum, sed tempor nisi aliquam. Proin non ipsum sem. Nunc tincidunt tincidunt libero. Donec posuere tempor mattis. Cras blandit turpis eu risus commodo bibendum."]

const Mission = () => {
	const [ open, setOpen ] = useState(false)
	const [ modalData, setModalData ] = useState({})

	const modalHandler = (item) => {
		setModalData(item)
		setOpen(true)
	}

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
						<TitleSubtitle
							title="Mission Statements"
							text={text}
						/>
						<div>
							<Grid container spacing={3}>
								{cardArray.map((item, i) => (
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
											<Stack direction="column" spacing={2}>
												<Typography variant="h5">
													{item.title}
												</Typography>

												<Typography variant="body1">
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
				children={
					<ModalDetails data={modalData}/>
				}
			/>
		</>
	);
};

export default Mission;
