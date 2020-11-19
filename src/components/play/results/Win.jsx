import React from 'react';
import styles from './Results.css';

export default function Win() {
  return (
    <img 
      src="https://media.giphy.com/media/l0FP53519GcImDf1U8/giphy.gif" 
      className={styles.result} 
      alt="win"
    />
  );
}
