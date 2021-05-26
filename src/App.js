import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Navbar from './components/Navbar';
import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;
