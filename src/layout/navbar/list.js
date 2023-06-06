import { NavLink } from "react-router-dom";

import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    Typography,
} from "@mui/material";
import { styled } from "@mui/system";

import { drawerMenuItems } from "./info";

import logo from "../../assets/images/logo.webp";
import { useTheme } from "@emotion/react";

const StyledLogoListItem = styled(List)(({ theme }) => ({}));

const LogoParent = styled(ListItem)(({ theme }) => ({
    height: "100px",
    width: "60vw",
}));

const styledNavItems = {
    fontFamily: "'Merienda', cursive",
};

const LogoItem = styled("img")(({ theme }) => ({
    // width: "60vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    height: "100%",
    marginBottom: "20px",
    margin: "20px auto",
}));

const navlinkStyle = {
    textDecoration: "none",
    color: "inherit",
};

const SwipeableDrawerList = ({ mobileNav, setMobileNav }) => {
    const theme = useTheme();

    const styledWrapper = {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        height: "100%",
    };

    return (
        <Box role="presentation" sx={styledWrapper}>
            <StyledLogoListItem
                component="nav"
                aria-label="Gigi rose mobile navigation"
            >
                <LogoParent>
                    {/* <LogoItem src={logo} alt="Skydive Rhino Kenya Logo"/> */}
                    <Typography
                        variant="h5"
                        color="primary"
                        style={{ fontFamily: "'Merienda', cursive" }}
                    >
                        <span style={{ color: "#fff" }}> GIGI</span>Rose
                    </Typography>
                </LogoParent>

                <Divider color="grey" />

                <NavLink to="/landing/home" style={navlinkStyle}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: mobileNav ? "initial" : "center",
                            px: 2.5,
                        }}
                    >
                        <Typography
                            sx={{
                                opacity: mobileNav ? 1 : 0,
                                marginLeft: "15px",
                            }}
                            style={styledNavItems}
                        >
                            Home
                        </Typography>
                    </ListItemButton>
                </NavLink>

                <NavLink to="/landing/about" style={navlinkStyle}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: mobileNav ? "initial" : "center",
                            px: 2.5,
                        }}
                    >
                        <Typography
                            sx={{
                                opacity: mobileNav ? 1 : 0,
                                marginLeft: "15px",
                            }}
                            style={styledNavItems}
                        >
                            About
                        </Typography>
                    </ListItemButton>
                </NavLink>

                <NavLink to="/landing/services" style={navlinkStyle}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: mobileNav ? "initial" : "center",
                            px: 2.5,
                        }}
                    >
                        <Typography
                            sx={{
                                opacity: mobileNav ? 1 : 0,
                                marginLeft: "15px",
                            }}
                            style={styledNavItems}
                        >
                            Services
                        </Typography>
                    </ListItemButton>
                </NavLink>

                <NavLink to="/landing/contact" style={navlinkStyle}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: mobileNav ? "initial" : "center",
                            px: 2.5,
                        }}
                    >
                        <Typography
                            sx={{
                                opacity: mobileNav ? 1 : 0,
                                marginLeft: "15px",
                            }}
                            style={styledNavItems}
                        >
                            Contact
                        </Typography>
                    </ListItemButton>
                </NavLink>

                <Divider color="grey" />

                {drawerMenuItems.bottom.map((item, index) => (
                    <NavLink to={item.link} style={navlinkStyle}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: mobileNav
                                    ? "initial"
                                    : "center",
                                px: 2.5,
                            }}
                            key={index}
                        >
                            {item.icon}
                            <Typography
                                sx={{
                                    opacity: mobileNav ? 1 : 0,
                                    marginLeft: "15px",
                                }}
                                style={styledNavItems}
                            >
                                {item.label}
                            </Typography>
                        </ListItemButton>
                    </NavLink>
                ))}
            </StyledLogoListItem>
        </Box>
    );
};

export default SwipeableDrawerList;
