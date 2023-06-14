import React from 'react';

import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ResetPasswordForm from "./form";

const AccountActivationWrapper = styled(Stack)(({ theme }) => ({
	margin: 0,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "100vh",
}))

const ResetPassword = () => {
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
				spacing={3}
				style={{minWidth: "50vw",}}
			>
				<Typography variant="h3" color="text.primary">
					Reset your password
				</Typography>
				<ResetPasswordForm/>
			</Stack>
		</AccountActivationWrapper>
	)
}

export default ResetPassword