import React, { useState } from 'react';
import styles from './addPrompt.css';
import TextInputOnChange from './miniInputHelpers';

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
        <TextInputOnChange 
          {...{
            name: text,
            handleChange: setText,
            labelTitle: 'Question Text' 
          }}
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
        <select
          type="text"
          id="type"
          name="type"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="multipleChoice">Multiple Choice</option>  
          <option value="trueFalse">True/False</option>
        </select>
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
        <label htmlFor="timer">Timer (in seconds)</label>
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
