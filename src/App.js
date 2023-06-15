import { useEffect } from "react";
import Router from "./routes";
import "./App.css";

// theme
import ThemeProvider from "./theme";
import { connect } from "react-redux";
import { fetchUser } from "./redux/user/action";

const App = ({ token, fetchUser }) => {
	useEffect(() => {
		try {
			fetchUser(token);
		} catch (error) {
			console.log(error);
		}
	}, [token, fetchUser]);
	return (
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	);
};

const mapStateToProps = ({ auth }) => ({
	token: auth.token.token,
});

const mapDispatchToProps = (dispatch) => ({
	fetchUser: (token) => dispatch(fetchUser(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
