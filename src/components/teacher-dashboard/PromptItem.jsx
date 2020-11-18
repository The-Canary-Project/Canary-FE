import React from 'react';
import PropTypes from 'prop-types';

const PromptItem = ({ prompt, handleClick }) => {
  return (
    <div>
      <p>Question: {prompt.text}</p>
      <button onClick={handleClick} value={JSON.stringify(prompt)}>Ask Question</button>
    </div>
  );
};

PromptItem.propTypes = {
  prompt: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default PromptItem;
