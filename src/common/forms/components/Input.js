import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export class Input extends React.Component {
  render () {
    const { meta: { touched, error }, input, type, ...rest } = this.props;

    const className = cx('form-input-group', {'form-input-group-error': touched && error});

    return (
      <div className={className}>
        <input type={type || 'text'}
          className="form-input"
          id={input.name}
          {...input}
          {...rest} />
        <div className="form-input-error">
          {touched && error && <span className="form-input-error-text">{error}</span>}
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  type: PropTypes.string
};

export default Input;
