import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appUrls } from '../consts';
import IndexView from './IndexView';
import LoginView from 'modules/auth/containers/LoginView';

import 'assets/styles/base.scss';

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Switch>
            <Route exact path="/" component={IndexView} />
            <Route exact path={appUrls.login} component={LoginView} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
