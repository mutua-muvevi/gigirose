import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Box, CssBaseline, Fade } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { Outlet } from "react-router-dom";

import DrawerComponent from "./drawer/drawer";
import PrimarySearchAppBar from "./topbar/topbar";

import { connect } from "react-redux";
import { fetchUser } from "../redux/user/action";
import { fetchBookService } from "../redux/book/action";
import { fetchContact } from "../redux/contact/action";

const Main = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	marginBottom: "20px",
}));

const Dashboard = ({ token, user, fetchUser, fetchBooks, fetchContact }) => {
	const theme = useTheme();
	const [open, setOpen] = useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const navigate = useNavigate();

	useEffect(() => {
		try {
			fetchUser(token);
			fetchBooks();
			fetchContact();

			setTimeout(() => {
				if (!token) {
					return navigate("/login");
				}
				return navigate("/admin/bookings");
			}, 15000);
		} catch (error) {
			console.log(error);
		}
	}, [token, fetchUser, fetchContact, fetchBooks]);

	return (
		<Fade in timeout={1000}>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<DrawerComponent
					handleDrawerOpen={handleDrawerOpen}
					open={open}
					theme={theme}
					handleDrawerClose={handleDrawerClose}
				/>

				<PrimarySearchAppBar
					handleDrawerOpen={handleDrawerOpen}
					open={open}
				/>

				<Main
					component="main"
					sx={{ flexGrow: 1, p: 3, width: "100%" }}
				>
					<DrawerHeader />
					<Outlet />
				</Main>
			</Box>
		</Fade>
	);
};

const mapStatetoProps = ({ auth, user }) => ({
	token: auth.token.token,

	user: user.user,
});

const mapDispatchToProps = (dispatch) => ({
	fetchUser: (token) => dispatch(fetchUser(token)),

	fetchBooks: () => dispatch(fetchBookService()),
	fetchContact: () => dispatch(fetchContact()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Dashboard);
