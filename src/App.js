import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import theme from "./utils/theme";
import Homepage from "./components/Homepage/Homepage";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/Own-website" component={Homepage} />
          <Route path="/Homepage" component={Homepage} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Projects" component={Projects} />
          <ThemeProvider theme={theme}>
            <Navbar />
          </ThemeProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
