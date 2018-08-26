import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { appUrls } from 'base/consts';
import HomeView from 'modules/dashboard/containers/HomeView';

class IndexView extends Component {
  render() {
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      return <HomeView />;
    } else {
      return <Redirect to={appUrls.login} />;
    }
  }
}

const select = ({ auth }) => {
  return {
    isLoggedIn: auth && !!auth.token
  };
};

IndexView.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default connect(select)(IndexView);
