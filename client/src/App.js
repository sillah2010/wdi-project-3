import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import LoginPage from './components/LoginPage'
import Game from './components/Game'
import System from './components/System'
import UserPage from './components/UserPage'
import UserEdit from './components/UserEdit'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route exact path="/login" component={ LoginPage } />
            <Route exact path="/games/:gameId" component={ Game }/>
            <Route exact path="/systems/:systemId" component={ System }/>
            <Route exact path="/users/:userId" component={ UserPage } />
            <Route exact path="/users/:userId/edit" component={ UserEdit } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
