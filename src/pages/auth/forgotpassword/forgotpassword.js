import React from 'react';

import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ForgotPasswordForm from "./form";

const AccountActivationWrapper = styled(Stack)(({ theme }) => ({
	margin: 0,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "100vh",
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
				alignItems="flex-start"
				spacing={5}
				style={{
					minWidth: "50vw",
				}}
			>
				<Typography variant="h2" color="text.primary">
					Enter your email
				</Typography>
				<ForgotPasswordForm/>
			</Stack>
		</AccountActivationWrapper>
	)
}

export default ForgotPassword