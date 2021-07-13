import React from 'react';
import './custom.scss';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './screens/Home';
import { Band } from './screens/Band';
import { Music } from './screens/Music';
import { Navigation } from './component/Navigation';
import { HashRouter as Router} from 'react-router-dom';


function App() {
  return (        
    <div className="app"> 
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation/>
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route path='/band' component={Band}/>   
          <Route path='/music' component={Music}/>                     
        </Switch>
      </Router>
    </div>
  );
}

export default App;
