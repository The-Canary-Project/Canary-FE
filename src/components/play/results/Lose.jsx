import React from 'react';
import styles from './Results.css';

export default function Lose() {
  return (
    <img 
      src="https://media.giphy.com/media/jSPtfWqGxpzigdK24p/giphy.gif" 
      className={styles.result} 
      alt="lose"
    />
  );
}
