import Navbar from './Navbar'
import Home from './Home'
import LoginForm from './Loginform'
import Registerform from './Registerform'
import NotFound from './NotFound'
import Room1 from './Room1'
import Room2 from './Room2'
import Room3 from './Room3'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from './Auth'
import { useState } from 'react'
function App() {

  //null => anybody acctoken = 10 
    //true => login user acctoken = 1 option 1
    //false => non login user acctoken = 0 option = 0 
  const [token, setToken] = useState(localStorage.getItem('accessToken'))

  


  return (
    <>
    <Router>
    <div className="App">
      <Navbar token={token} setToken={setToken} />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Auth(Home, null)} />
            <Route exact path="/login" component={Auth(() => <LoginForm token={token} setToken={setToken} />, false)} /> 
            <Route exact path="/register" component={Auth(Registerform, false)} /> 
            <Route exact path="/room1" component={Auth(Room1, true)}/>
            <Route exact path="/room2" component={Auth(Room2, true)}/>
            <Route exact path="/room3" component={Auth(Room3, true)}/>
            <Route exact path="*" component={Auth(NotFound, true)} /> 
          </Switch>
        </div>
    </div>
    </Router>
    </>
  );
}

export default App;
