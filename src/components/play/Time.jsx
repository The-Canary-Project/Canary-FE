import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ timer, handleTimer }) => {

  useEffect(() => {
    const timeRemaining = setInterval(() => {
      console.log('tick');
      handleTimer(state => state - 1);
    }, 1000);
    setTimeout(() => (clearInterval(timeRemaining)), timer * 1000);
  }, []);

  return (
    <div>
      <h1>Time Remaining: {timer}</h1>
    </div>
  );
};

Timer.propTypes = { 
  timer: PropTypes.number.isRequired,
  handleTimer: PropTypes.func.isRequired
};

export default Timer;

