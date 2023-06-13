import React from 'react';

import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import RegisterForm from "./form";

const AccountActivationWrapper = styled(Stack)(({ theme }) => ({
	margin: 0,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "100vh"
}))


const Register = () => {
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
			>
				<Typography variant="h2" color="text.primary">
					Register 
				</Typography>
				<RegisterForm/>
			</Stack>
		</AccountActivationWrapper>
	)
}

export default Register