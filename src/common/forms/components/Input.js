import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }

  focus = () => {
    this.setState({
      focus: true
    });
  }

  blur = () => {
    this.setState({
      focus: false
    });
  }

  render () {
    const { meta: { touched, error }, input, type, ...rest } = this.props;

    const className = cx('form-input-group', {'form-input-group-error': touched && error});

    return (
      <div className={className}>
        <input type={type || 'text'}
          className="form-input"
          id={input.name}
          {...input}
          onFocus={(e) => {
            this.focus();
            if (input.onFocus) {
              input.onFocus(e);
            }
          }}
          onBlur={(e) => {
            this.blur();
            if (input.onBlur) {
              input.onBlur(e);
            }
          }}
          {...rest} />
        <div className="form-input-error">
          {touched && error}
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
