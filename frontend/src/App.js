import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Category from './components/Category';
import PostDetail from './components/PostDetail';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => (
            <div>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
          </div>
          )}/>
          <Route path='/category' component={Category} />
          <Route path='/postdetail' component={PostDetail} />
          <Route component={NoMatch} status={404} />
        </Switch>
      </div>
    );
  }
}

export default App;
