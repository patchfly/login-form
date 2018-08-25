import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { appUrls } from '../consts';
import HomeView from '../../modules/dashboard/containers/HomeView';
import LoginView from '../../modules/auth/containers/LoginView';

class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path={appUrls.login} component={LoginView} />
        </Switch>
      </Router>
    );
  }
}

export default Root;
