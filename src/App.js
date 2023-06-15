
import Router from "./routes";
import "./App.css";

// theme
import ThemeProvider from "./theme";

const App = () => {

	return (
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	);
};


export default App;
