import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class LoginView extends Component {
  render() {
    return (
      <div className="login-view">
        <LoginForm />
      </div>
    );
  }
}

export default LoginView;
