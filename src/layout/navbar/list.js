import { NavLink } from "react-router-dom";

import { Box, Divider,  List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { drawerMenuItems } from "./info";

import logo from "../../assets/images/logo.webp"
import { useTheme } from "@emotion/react";

const StyledLogoListItem = styled(List)(({theme}) => ({

}));

const LogoParent = styled(ListItem)(({theme}) => ({
	height: "100px",
	width: "60vw",
}));

const LogoItem = styled("img")(({theme}) => ({
	// width: "60vw",
	display: "flex",
	flexDirection: "column",
	alignItems: "start",
	height: "100%",
	marginBottom: "20px",
	margin: "20px auto"
}));

const navlinkStyle = {
	textDecoration: "none",
	color: "inherit"
};

const SwipeableDrawerList = ({ mobileNav, setMobileNav }) => {

	const theme = useTheme()

	const styledWrapper = {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.primary.main,
		height: "100%"
	}
  
	return (
		<Box
			role="presentation"
			sx={styledWrapper}
		>
			<StyledLogoListItem component="nav" aria-label="Gigi rose mobile navigation">
				<LogoParent>
					{/* <LogoItem src={logo} alt="Skydive Rhino Kenya Logo"/> */}
					LOGO
				</LogoParent>

				<Divider color="grey"/>
				
				<NavLink to="/landing/home" style={navlinkStyle}>
					<ListItemButton
						sx={{
							minHeight: 48,
							justifyContent: mobileNav ? 'initial' : 'center',
							px: 2.5,
						}}
					>
						<ListItemText primary="Home" sx={{ opacity: mobileNav ? 1 : 0, marginLeft: "15px" }} />
					</ListItemButton>
				</NavLink>
				
				<NavLink to="/landing/about" style={navlinkStyle}>
					<ListItemButton
						sx={{
							minHeight: 48,
							justifyContent: mobileNav ? 'initial' : 'center',
							px: 2.5,
						}}
					>
						<ListItemText primary="About" sx={{ opacity: mobileNav ? 1 : 0, marginLeft: "15px" }} />
					</ListItemButton>
				</NavLink>

				<NavLink to="/landing/services" style={navlinkStyle}>
					<ListItemButton
						sx={{
							minHeight: 48,
							justifyContent: mobileNav ? 'initial' : 'center',
							px: 2.5,
						}}
					>
						<ListItemText primary="Services" sx={{ opacity: mobileNav ? 1 : 0, marginLeft: "15px" }} />
					</ListItemButton>
				</NavLink>
				
				<NavLink to="/landing/contact" style={navlinkStyle}>
					<ListItemButton
						sx={{
							minHeight: 48,
							justifyContent: mobileNav ? 'initial' : 'center',
							px: 2.5,
						}}
					>
						<ListItemText primary="Contact" sx={{ opacity: mobileNav ? 1 : 0, marginLeft: "15px" }} />
					</ListItemButton>
				</NavLink>

				<Divider color="grey"/>

				{drawerMenuItems.bottom.map((item, index) => (
					<NavLink to={item.link} style={navlinkStyle}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: mobileNav ? 'initial' : 'center',
								px: 2.5,
							}}
							key={index}
						>
							{item.icon}
							<ListItemText primary={item.label} sx={{ opacity: mobileNav ? 1 : 0, marginLeft: "15px" }} />
						</ListItemButton>
					</NavLink>
				))}
			</StyledLogoListItem>
		</Box>
	);
}

export default SwipeableDrawerList;
