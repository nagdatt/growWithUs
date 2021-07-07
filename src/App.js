import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import {Switch,Route, Redirect} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>

        <Route path="/"  exact component={Home}/>
        <Route path="/About"  exact component={About}/>
        <Route path="/Services" exact  component={Services}/>
        <Route path="/Contact"  exact component={Contact}/>
        <Redirect to="/"/>

      </Switch>
    </div>
  );
}

export default App;
