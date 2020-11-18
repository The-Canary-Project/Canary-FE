import React from 'react';
import PropTypes from 'prop-types';
import styles from '../pages/TeacherDashboard.css'

const PromptItem = ({ prompt, handleClick }) => {
  return (
    <div className={styles.promptItem}>
      <p>{prompt.text}</p>
      <button onClick={handleClick} value={JSON.stringify(prompt)}>Ask Question</button>
    </div>
  );
};

PromptItem.propTypes = {
  prompt: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default PromptItem;
