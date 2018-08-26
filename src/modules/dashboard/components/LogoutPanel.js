import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from 'modules/auth/redux/actions';

class LogoutPanel extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;

    dispatch(logout());
  }

  render() {
    return (
      <div className="logout-panel-box">
        <h1 className="logout-panel-message">
          You're logged in.
        </h1>
        <button onClick={this.handleLogout} className="app-btn logout-panel-btn">
          Logout
        </button>
      </div>
    );
  }
}

LogoutPanel.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(LogoutPanel);
