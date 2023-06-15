import { useEffect } from "react";
import Router from "./routes";
import "./App.css";

// theme
import ThemeProvider from "./theme";
import { connect } from "react-redux";
import { fetchUser } from "./redux/user/action";
import { fetchBookService } from "./redux/book/action";
import { fetchContact } from "./redux/contact/action";

const App = ({ token, fetchUser, fetchBooks, fetchContact }) => {
	useEffect(() => {
		try {
			fetchUser(token);
			fetchBooks()
			fetchContact()
		} catch (error) {
			console.log(error);
		}
	}, [token, fetchUser, fetchContact, fetchBooks]);
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

	fetchBooks : () => dispatch(fetchBookService()),
	fetchContact: () => dispatch(fetchContact())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
