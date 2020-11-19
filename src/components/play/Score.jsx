import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Score.css'

export const Score = () => {
  const correctAnswers = useSelector(state => state.correctAnswers);
  const totalAnswers = useSelector(state => state.totalAnswers);

  return (
    <div className={styles.score}>
      <h2>Score</h2>
      <h3>{correctAnswers}/{totalAnswers}</h3>
    </div>
  );
};
