//React router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//Pages
import {Home} from "./pages/index";
import {Contact} from "./pages/index";
import {Projects} from "./pages/index";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/Own-website" component={Home} />
					<Route path="/Home" component={Home} />
					<Route path="/Contact" component={Contact} />
					<Route path="/Projects" component={Projects} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
