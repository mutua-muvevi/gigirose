import React from 'react';

import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ResetPasswordForm from "./form";

const AccountActivationWrapper = styled(Stack)(({ theme }) => ({
	width: "80vw",
	height: "80vh",
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
				alignItems="center"
				spacing={3}
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