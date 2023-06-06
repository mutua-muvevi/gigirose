import { useState } from "react";

import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { services } from "../info";
import { truncateStr } from "../../../utils/formatString";
import ModalComponent from "../../../components/modal";
import ServiceDetails from "./modal";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}))

const StyledCard = styled(Card)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	color: "#fff"
}))

const ServiceCards = () => {
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
					<Grid container spacing={3}>
						{
							services.map((el, i) => (
								<Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={i}>
									<StyledCard>
										<CardActionArea onClick={() => modalHandler(el)}>
											<CardMedia
												component="img"
												src={el.thumbnail}
												alt={el.title}
												height={250}
											/>
											<CardContent>
												<Stack direction="column" spacing={1.5}>
													<Typography variant="h5" color="primary">
														{el.title}
													</Typography>

													<Typography variant="body1">
														{truncateStr(el.content[0].paragraph[0], 90)}
													</Typography>
												</Stack>
											</CardContent>
										</CardActionArea>
									</StyledCard>
								</Grid>
							))
						}
					</Grid>
				</Container>
			</StyledWrapper>

			<ModalComponent
				header={modalData.title}
				open={open}
				close={() => setOpen(false)}
				width="90vw"
				children={
					<ServiceDetails data={modalData}/>
				}
			/>
		</>
	)
}

export default ServiceCards