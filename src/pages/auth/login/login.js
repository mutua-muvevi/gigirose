import React from 'react';

import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import LoginForm from "./form";

const AccountActivationWrapper = styled(Stack)(({ theme }) => ({
	margin: 0,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "100vh"
}))

const Login = () => {
	return (
		<AccountActivationWrapper
			direction="row"
			justifyContent="center"
			alignItems="flex-start"
		>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={5}
			>
				<Typography variant="h2" color="text.primary">
					Login
				</Typography>
				<LoginForm/>
			</Stack>
		</AccountActivationWrapper>
	)
}

export default Login