import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { validateEmail, validatePassword, required } from 'common/forms/utils/fieldsValidation';
import Input from 'common/forms/components/Input';
import Checkbox from 'common/forms/components/Checkbox';
import { login } from '../redux/actions';

export const LoginForm = ({ handleSubmit, submitFcn = login, error }) => {
  return (
    <div className="login-form-container">
      <div className="login-form-box">
        <form className="login-form" onSubmit={handleSubmit(submitFcn)}>
          <h1 className="login-form-title">Sign in</h1>
          <Field name="email" component={Input} type="email" placeholder="Email"
            validate={[required, validateEmail]} />
          <Field name="password" component={Input} type="password" placeholder="Password"
            validate={[required, validatePassword]}/>
          <div className="form-error">
            {error && <span className="form-error-text">{error}</span>}
          </div>
          <Field name="remember" component={Checkbox} label="Remember me" />
          <button className="app-btn login-btn" type="submit">
            Login
          </button>
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
