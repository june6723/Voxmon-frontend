import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Auth from './hoc/auth'
import Navbar from './components/views/Navbar/Navbar'

function App() {
  return (
    <Router>
      <div>
        <hr />
        <Switch>
          <Route exact path="/Home"  component={Auth(LandingPage,null)} />
          <Route exact path="/login" component={Auth(LoginPage,false)} />
          <Route exact path="/register" component={Auth(RegisterPage,false)} />    
        </Switch>
      </div>
    </Router>
  );
  }

export default App;