import Navbar from './component/Navbar'
import Home from './component/Home'
import LoginForm from './component/Loginform'
import Registerform from './component/Registerform'
import NotFound from './component/NotFound'
import Room1 from './component/Room1'
import Room2 from './component/Room2'
import Room3 from './component/Room3'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from './hoc/Auth'
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
