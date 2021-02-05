import React from 'react';
import PropTypes from 'prop-types';

export default function TextInputOnChange({ name, handleChange, labelTitle }) {
  return (
    <>
      <label htmlFor={name}>{labelTitle}</label>
      <input
        id={name} 
        type="text"
        name={name}
        onChange={e => handleChange(e.target.value)}
      />
    </>
  );
}

TextInputOnChange.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  labelTitle: PropTypes.string.isRequired
};
