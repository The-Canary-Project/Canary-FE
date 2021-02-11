import React from 'react';
import PropTypes from 'prop-types';

export function TextInputOnChange({ name, handleChange, labelTitle }) {
  return (
    <>
      <label htmlFor={name}>{labelTitle}</label>
      <input
        id={name} 
        type="text"
        name={name}
        value={name}
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

export function SelectOnChange({
  name, 
  handleChange,
  labelTitle,
  options
}) {
  const optionEls = options.map(({ value, title }, i) => <Option 
    key={i} 
    {...{ value, title }}
  />);
  return (
    <>
      <label htmlFor={name}>{labelTitle}</label>
      <select
        id={name}
        name={name}
        value={name}
        onChange={e => handleChange(e.target.value)}
      >
        {optionEls}
      </select>
    </>
  );
}

SelectOnChange.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]), 
  handleChange: PropTypes.func.isRequired,
  labelTitle: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
};

function Option({ value, title }) {
  return <option value={value}>{title}</option>;
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
;
