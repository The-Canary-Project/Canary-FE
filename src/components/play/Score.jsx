import React from 'react';
import { useSelector } from 'react-redux';


export const Score = () => {
  const correctAnswers = useSelector(state => state.correctAnswers);
  const totalAnswers = useSelector(state => state.totalAnswers);

  return (
    <div>
      <h2>Score</h2>
      <h3>{correctAnswers}/{totalAnswers}</h3>
    </div>
  );
};
