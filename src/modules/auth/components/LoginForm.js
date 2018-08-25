import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../redux/actions';

const LoginForm = ({ handleSubmit, submitFcn = login, error }) => {
  return (
    <div className="login-form-container">
      <div className="login-form-box">
        <form className="login-form" onSubmit={handleSubmit(submitFcn)}>
          <h1 className="login-form-title">Sign in</h1>
          <Field name="email" component="input" type="email" placeholder="E-mail" className="login-form-input" />
          <Field name="password" component="input" type="password" placeholder="Password"
            className="login-form-input" />
          <button className="login-btn" type="submit">
            Login
          </button>
          <div className="login-form-error">
            {error}
          </div>
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitFcn: PropTypes.func,
  error: PropTypes.string
};

const ReduxLoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm);

export default connect()(ReduxLoginForm);
