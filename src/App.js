
import Router from "./routes";
import "./App.css";

// theme
import ThemeProvider from "./theme";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchBookService } from "./redux/book/action";
import { fetchUser } from "./redux/user/action";
import { fetchContact } from "./redux/contact/action";

const App = ({auth}) => {
	useEffect(() => {
		try {
			if(auth.token.token){
				fetchBookService()
				fetchUser(auth.token.token)
				fetchContact()

			}
		} catch (error) {
			console.log(error)
		}
	}, [auth])
	return (
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	);
};

const mapStateToProps = ({auth}) => ({
	auth: auth
})

const mapStateToDispatch = (dispatch) => ({
	fetchBookService: () => dispatch(fetchBookService()),
	fetchContact: () => dispatch(fetchContact())
})

export default connect(mapStateToProps, mapStateToDispatch)(App);
