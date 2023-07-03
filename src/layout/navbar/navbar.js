import React, { useState, useLayoutEffect, useRef } from 'react';

import { styled } from '@mui/system';
import { AppBar,Toolbar, IconButton, Typography, Button, Menu, MenuItem, Divider, Container, Stack, Box } from '@mui/material';

import { FaBars } from "react-icons/fa";

import { menuItems } from "./info";
import { Link, NavLink } from 'react-router-dom';

import SwipeableSideDrawer from './drawer';

import logo from "../../assets/images/logo.png";
import ModalComponent from '../../components/modal';
import BookingForm from "../../pages/home/sections/form"
import { connect } from 'react-redux';

const TopAppBar = styled(AppBar)(({theme}) => ({
	zIndex: 3,
	backgroundColor: theme.palette.primary.main
}));

const StyledContainer = styled(Container)({
	width: "100%",
	paddingTop: "20px"
})

const StyledLogoSection = styled(Stack)({
	fontFamily: "'Merienda', cursive",
});

const styledLogo = {
	maxHeight: "75px"
}

const StyledMenuStack = styled(Stack)({
	width: "100%",
	paddintTop: "20px",
	paddintBottom: "20px",
});

const StyledNavButton = styled(Button) ({
	paddingTop: "20px",
	paddingBottom: "20px",
	width:"max-content"
});

const styledLink = {
	textDecoration: "none",
	color: "inherit"
}

const StyledButtonStack = styled(Stack)({
	
})

const StyledButton = styled(Button)({
	minWidth: "200px"
});

const iconButtonSX = {

}

const Navbar = ({user}) => {

	const [mobileNav, setMobileNav] = useState(false);
	const [ open, setOpen ] = useState(false)

	const handleMobileNav = () => {
		setMobileNav(!mobileNav)
	}


	const innerWidth = window.innerWidth

	return (
		<>
			{
				innerWidth >= 1000 ? (
					<TopAppBar position="scroll">
						<Toolbar>
							<StyledContainer maxWidth="xl">

								<StyledMenuStack direction="row" justifyContent="space-between" alignItems="center" spacing={5}>
									<StyledLogoSection direction="row" spacing={3} justifyContent="left" alignItems="center">
										<img src={logo} alt="Skydive logo" style={styledLogo}/>
										<Typography variant="h5"  color="secondary" style={{fontFamily: "'Merienda', cursive",}}>
											<span style={{color: "#fff"}}> GIGI</span>Rose
										</Typography>
									</StyledLogoSection>

									<Stack direction="row" spacing={3}>
										{
											menuItems.map((el, i) => (
												<StyledNavButton sx={{textAlign: "left"}} variant="text" key={i}>
													<NavLink to={el.path} style={styledLink}>
														<Typography variant="subtitle1" style={{textTransform: "uppercase", color: "#fff", fontFamily: "'Merienda', cursive",}}>
															{el.label}
														</Typography>
													</NavLink>

												</StyledNavButton>
											))
										}
									</Stack>

									{
										user && user.user ? (
											<Link to="/admin/bookings">
												<StyledButton variant="contained" color="secondary">
													{user.user.fullname}
												</StyledButton>
											</Link>
										) : (
										<StyledButtonStack direction="row" spacing={3}>
											<StyledButton variant="contained" color="secondary" onClick={() => setOpen(true)}>
												<Typography variant="subtitle1" >
													Book Online
												</Typography>
											</StyledButton>
										</StyledButtonStack>
										)
									}
								</StyledMenuStack>
							</StyledContainer>

						</Toolbar>
					</TopAppBar>
				) : (
					<Box sx={{marginBottom: "52px"}}>
						<TopAppBar >
							<Container maxWidth="xl">
								<Stack direction="row" justifyContent="space-between" alignItems="center">
									{/* <img src={logo} alt="Henriot mobile logo" style={styledMobileLogo}/> */}
										<Typography variant="h5" color="secondary" style={{fontFamily: "'Merienda', cursive"}}>
											<span style={{color: "#fff"}}> GIGI</span>Rose
										</Typography>
									<IconButton
										size="large"
										aria-label="account of current user"
										aria-controls="menu-appbar"
										aria-haspopup="true"
										onClick={handleMobileNav}
										color="inherit"
										sx={iconButtonSX}
									>
										<FaBars/>
									</IconButton>
								</Stack>
							</Container>
						</TopAppBar>
					</Box>
				)

			}

			<SwipeableSideDrawer mobileNav={mobileNav} setMobileNav={setMobileNav} />
			<ModalComponent
				header="Book Service"
				open={open}
				close={() => setOpen(false)}
				width="75vw"
				children={
					<BookingForm setOpen={setOpen}/>
				}
			/>
		</>
	);
};

const mapStateToProps = ({user}) => ({
	user: user,
})

export default connect(mapStateToProps)(Navbar);
