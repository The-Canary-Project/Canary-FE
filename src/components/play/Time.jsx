import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ question, timer, handleTimer }) => {

  useEffect(() => {
    const timeRemaining = setInterval(() => {
      console.log('tick');
      handleTimer(state => state - 1);
    }, 1000);
    setTimeout(() => (clearInterval(timeRemaining)), timer * 1000);
  }, [question]);

  return (
    <div>
      <h1>Time Remaining: {timer}</h1>
    </div>
  );
};

Timer.propTypes = { 
  question: PropTypes.object,
  timer: PropTypes.number,
  handleTimer: PropTypes.func.isRequired
};

export default Timer;

