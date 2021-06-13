import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import RandingPage from './component/RandingPage'
import LoginForm from './component/Loginform'
import RegisterForm from './component/Registerform'


function App() {
  return (
    <Router>
      <Navbar/>
      <>
        <Switch>
          <Route exact path="/" component={RandingPage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
        </Switch>
      </>
    </Router>
  );
}

export default App;