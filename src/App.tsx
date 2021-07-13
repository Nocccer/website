import React from 'react';
import './custom.scss';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './screens/Home';
import { Band } from './screens/Band';
import { Music } from './screens/Music';
import { Navigation } from './component/Navigation';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (        
    <div className="app"> 
      <Router>
        <Navigation/>
        <Switch>
          <Route path='/music' component={Music}/>                 
          <Route path='/band' component={Band}/>  
          <Route path='/' component={Home}/>                         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
