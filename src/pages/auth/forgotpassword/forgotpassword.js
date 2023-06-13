import React from 'react';

import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ForgotPasswordForm from "./form";

const AccountActivationWrapper = styled(Stack)(({ theme }) => ({
	width: "80vw",
	height: "80vh",
}))


const ForgotPassword = () => {
	return (
		<AccountActivationWrapper
			direction="row"
			justifyContent="center"
			alignItems="center"
		>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={3}
			>
				<Typography variant="h3" color="text.primary">
					Enter your email
				</Typography>
				<ForgotPasswordForm/>
			</Stack>
		</AccountActivationWrapper>
	)
}

export default ForgotPassword