import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledContactDetails = styled(Stack)(({ theme }) => ({

}))

const StyledDetailTitles = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: "#fff",
	textTransform: "uppercase",
	width: "200px",
	display: "flex",
	justifyContent: "center",
	borderRadius: theme.shape.borderRadius
}))

const contactItems = [
	{
		title: "Address",
		items: [
			"Nairobi City, Kenya"
		],
	},
	{
		title: "Phone",
		items: [
			"+254 700 000 000",
			"+254 700 000 000",
		],
	},
	{
		title: "Email",
		items: [
			"emailOne@mail.com",
			"emailTwo@mail.com",
			"emailThree@mail.com",
		],
	},
]

const ContactDetails = () => {
	return (
		<StyledContactDetails direction="column" spacing={3}>
			<Typography variant="h4" color="primary">
				Get in touch with us
			</Typography>
			<Typography variant="body2" color="text.primary">
			We're here to help you make your skydiving dreams a reality, and the first step is getting in touch with us. Whether you have questions about our services, want to book a jump, or just need some advice, we're always happy to hear from you. Our experienced team is dedicated to providing exceptional customer service and support, and we will do everything in our power to make your skydiving experience as smooth and enjoyable as possible. So don't hesitate – get in touch with us today and let us help you take the leap into the thrilling world of skydiving!
			</Typography>
			{
				contactItems.map((item, i) => (
					<Stack direction="column" spacing={1.5} key={i}>
						<StyledDetailTitles>
							<Typography variant="h6">
								{item.title}
							</Typography>
						</StyledDetailTitles>
						{
							item.items.map((text, i) => (
								<Typography variant="body2" color="text.primary" key={i}>
									{text}
								</Typography>
							))
						}
					</Stack>
				))
			}
		</StyledContactDetails>
	)
}

export default ContactDetails