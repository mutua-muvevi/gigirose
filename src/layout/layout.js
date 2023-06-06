import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { Outlet } from "react-router-dom";

import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Layout = () => {
	return (
		<StyledWrapper>
			<Navbar/>
			<Outlet/>
			<Footer/>
		</StyledWrapper>
	)
}

export default Layout