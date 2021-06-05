import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from './component/LoginForm'
import RegisterForm from './component/RegisterForm'
import RandingPage from './component/RandingPage'
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={RandingPage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;