import React from 'react';
import PropTypes from 'prop-types';
import styles from './Results.css';

function Results({ displayResults, }) {
  return (
    <div className={styles.Results}>
      <h2>Time is up!</h2>
      <img src={displayResults} alt="results"/>
    </div>
  );
}

Results.propTypes = {
  displayResults: PropTypes.string.isRequired,
};

export default Results;


