import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../index.css'

// Import Components
import About from './About';
import Detail from './Detail';
import NotFound from './NotFound';
import Header from './Header';
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className = 'container'>
          <Switch>
            {/* <Route exact path="/" render ={ () => <Redirect to="/home" component={Home} /> } /> */}
            <Route path="/pokemon/:pokemon" component={Detail} />
            <Route exact path="/:pokemon" component={Home} />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}


