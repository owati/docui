import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Cookie from 'js-cookie';
import 'tachyons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/main.css';
import Home from './pages/Home';
import Order from './pages/Order';

function OnlyMobile() {
  return(
    <div className="only-mobile">
      <h1>Proposed DOC express ui</h1>
      <h3>only for mobile devices.</h3>
    </div>

  )
}

function App() {

  AOS.init();

  return(
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={() => <Home/>}/>
          <Route path="/orders" exact component={() => <Order/>}/>
        </Switch>
      </Router>
      <OnlyMobile/>

    </div>
  );
}

export default App;
