import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

class LoginView extends Component {
  componentDidMount() {
    this.handleLoggedIn();
  }

  componentDidUpdate() {
    this.handleLoggedIn();
  }

  handleLoggedIn = () => {
    const { history, auth } = this.props;
    if (auth && auth.token) {
      history.push('/');
    }
  }

  render() {
    return (
      <div className="login-view">
        <LoginForm />
      </div>
    );
  }
}

LoginView.propTypes = {
  auth: PropTypes.object,
  history: PropTypes.object
};

const select = ({ auth }) => {
  return {
    auth
  };
};

export default connect(select)(LoginView);
