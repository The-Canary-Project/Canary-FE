import React from 'react';
import PropTypes from 'prop-types';

export default function AddQuestions({ type }) {
  return (
    <div>
      <h1>{type}</h1>
    </div>
  );
}

AddQuestions.propTypes = {
  type: PropTypes.string.isRequired
};

