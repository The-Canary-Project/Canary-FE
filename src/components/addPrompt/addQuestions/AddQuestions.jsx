import React from 'react';
import PropTypes from 'prop-types';
import MultipleChoiceQuestions from './MultipleChoiceQuestions';
import TrueFalseQuestions from './TrueFalseQuestions';

export default function AddQuestions({ type }) {
  if(type === 'multipleChoice') return <MultipleChoiceQuestions />;
  if(type === 'trueFalse') return <TrueFalseQuestions />;
}

AddQuestions.propTypes = {
  type: PropTypes.string.isRequired
};

