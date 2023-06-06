//package imports
import { Navigate, useRoutes } from "react-router-dom";

//module imports
import Layout from "./layout/layout";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Services from "./pages/services/services";
import NotFound from "./pages/error/404";

//router function
const Router = () => {
	return useRoutes([
		{
			path: "/landing",
			element: <Layout/>,
			children: [
				{
					path: "/landing/home",
					element: <Home/>
				},
				{
					path: "/landing/about",
					element: <About/>
				},
				{
					path: "/landing/services",
					element: <Services/>
				},
				{
					path: "/landing/contact",
					element: <Contact/>
				},
			]
		},
		{
			path: "/",
			element: <Navigate to="/landing/home" replace />,
		},
		{
			path: "/404",
			element: <NotFound/>
		},
		{
			path: "*",
			element: <Navigate to="/404" replace/>
		}
	])
}

export default Router