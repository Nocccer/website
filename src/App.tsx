import React from 'react';
import './custom.scss';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './screens/Home';
import { Band } from './screens/Band';
import { Navigation } from './component/Navigation'


function App() {
  return (        
    <div className="app"> 
      <Navigation/>
      <Switch>                
        <Route path='/band' component={Band}/>  
        <Route path='/' component={Home}/>                         
      </Switch>
    </div>
  );
}

export default App;
