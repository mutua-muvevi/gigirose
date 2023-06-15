//package imports
import { Navigate, useRoutes } from "react-router-dom";

//module imports
import Layout from "./layout/layout";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Services from "./pages/services/services";
import NotFound from "./pages/error/404";
import Register from "./pages/auth/register/register";
import Login from "./pages/auth/login/login";
import ForgotPassword from "./pages/auth/forgotpassword/forgotpassword";
import ResetPassword from "./pages/auth/resetpassword/resetpassword";
import Dashboard from "./layout/dashboard";
import DashBooking from "./pages/dashboard/booking/booking";
import DashServices from "./pages/dashboard/services/services";
import DashContact from "./pages/dashboard/contact/contact";

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
			path: "/admin",
			element: <Dashboard/>,
			children: [
				{
					path: "/admin/bookings",
					element: <DashBooking/>
				},
				{
					path: "/admin/services",
					element: <DashServices/>
				},
				{
					path: "/admin/contacts",
					element: <DashContact/>
				},
			]
		},
		{
			path: "/register",
			element: <Register />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/forgotpassword",
			element: <ForgotPassword/>,
		},
		{
			path: "/resetpassword",
			element: <ResetPassword />,
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