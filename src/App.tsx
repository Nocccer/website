import React from 'react';
import './custom.scss';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './screens/Home';
import { Band } from './screens/Band';
import { Music } from './screens/Music';
import { Videos } from './screens/Videos';
import { Dates } from './screens/Dates';
import { Contact } from './screens/Contact';
import { NewRelease } from './screens/NewRelease';
import { Navigation } from './component/Navigation';
import { HashRouter as Router } from 'react-router-dom';
import { releases } from './data/Releases';
// import { getPaletteFromURL } from 'color-thief-node';
// import rgbHex from 'rgb-hex';


function App() {

  // RUN THIS FOR NEW RELEASE AND SET THE COLORS IN data/Releases.ts
    // getPaletteFromURL(releases[0].picture, 2)
    //   .then(color => {
    //     releases[0].colorStyle.textColor = '#' + rgbHex(color[0][0], color[0][1], color[0][2]);
    //     releases[0].colorStyle.backgroundColor = '#' + rgbHex(color[1][0], color[1][1], color[1][2]);
    //     releases[0].colorStyle.borderColor = '#' + rgbHex(color[2][0], color[2][1], color[2][2]);
    //     if (color[0][0] + color[0][1] + color[0][2] >= 384) // --> is bright
    //     {
    //       releases[0].colorStyle.isBright = true;
    //     }
    //     else // --> is dark
    //     {
    //       releases[0].colorStyle.isBright = false;
    //     }

    //     console.log('Colors for ' + releases[0].name)
    //     console.log('textColor: ' + releases[0].colorStyle.textColor)
    //     console.log('backgroundColor: ' + releases[0].colorStyle.backgroundColor)
    //     console.log('borderColor: ' + releases[0].colorStyle.borderColor)
    //     console.log('isBright: ' + releases[0].colorStyle.isBright)
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   })

  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/band' component={Band} />
          <Route path='/music' component={Music} />
          <Route path='/videos' component={Videos} />
          <Route path='/dates' component={Dates} />
          <Route path='/contact' component={Contact} />
          <Route path={'/' + releases[0].name} render={() => <NewRelease {...releases[0]}/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
