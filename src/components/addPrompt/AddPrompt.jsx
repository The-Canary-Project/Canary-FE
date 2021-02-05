import React, { useState } from 'react';
import styles from './addPrompt.css';

export default function AddPrompt() {
  const [text, setText] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [type, setType] = useState();
  const [quizId, setQuizId] = useState();
  const [categories, setCategories] = useState();
  const [timer, setTimer] = useState();

  return (
    <div className={styles.addPromptContainer}>
      <form>
        <label htmlFor="text">Text</label>
        <input 
          type="text"
          id="text"
          name="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <label htmlFor="imageUrl">Image URL</label>
        <input 
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        />
        <label htmlFor="type">Type of Question</label>
        <input 
          type="text"
          id="type"
          name="type"
          value={type}
          onChange={e => setType(e.target.value)}
        />
        <label htmlFor="quizId">Quiz Id</label>
        <input 
          type="text"
          id="quizId"
          name="quizId"
          value={quizId}
          onChange={e => setQuizId(e.target.value)}
        />
        <label htmlFor="categories">Categories</label>
        <input 
          type="text"
          id="categories"
          name="categories"
          value={categories}
          onChange={e => setCategories(e.target.value)}
        />
        <label htmlFor="timer">Timer</label>
        <input 
          type="text"
          id="timer"
          name="timer"
          value={timer}
          onChange={e => setTimer(e.target.value)}
        />
      </form>
      
    </div>
  );
}
