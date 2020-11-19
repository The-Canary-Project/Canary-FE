import React from 'react';

export const feedbackElements = (styles, feedback) => {
  const letters = ['a', 'b', 'c', 'd'];
  return letters.map(letter => {
    return <div 
      className={
        `${styles[letter]} ${feedback === `${letter}` && styles.feedback}`} 
      key={letter}>
      {letter.toUpperCase()}
    </div>;
  });
};

export const feedbackAnswerElements = (position, text, styles, feedback) => {
  return (
    <div className={feedback === position && styles.feedback}>{text}</div>
  );
};
