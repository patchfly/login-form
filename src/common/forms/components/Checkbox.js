import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ input, label, ...rest }) => {
  return (
    <div className="form-checkbox">
      <input type="checkbox" id={input.name} {...input} {...rest} />
      <label htmlFor={input.name}>
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string
};

export default Checkbox;
