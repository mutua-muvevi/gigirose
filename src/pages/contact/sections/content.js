import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const subtitle = "We would love to hear from you! Our contact us section is designed to make it easy for you to reach out and start your beauty journey with us. Whether you have questions about our services, want to book an appointment, or simply want to learn more about how we can help you achieve your beauty goals, our friendly team is here to provide you with personalized assistance and guidance. Simply fill out the contact form or give us a call, and we'll be delighted to connect with you and help you embark on your transformational experience."

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

			<Typography variant="body2" color="text.primary">
				{subtitle}
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
								<Typography variant="body1" color="text.primary" key={i}>
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