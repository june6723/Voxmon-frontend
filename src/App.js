import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/about'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  //null => anybody
    //true => login user
    //false => non login user



  return (
    <Router>
    <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} /> 

          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
