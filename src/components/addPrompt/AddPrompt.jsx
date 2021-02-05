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
        <TextInputOnChange 
          {...{
            name: imageUrl,
            handleChange: setImageUrl,
            labelTitle: 'Image URL'
          }}
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
        <TextInputOnChange 
          {...{
            name: quizId,
            handleChange: setQuizId,
            labelTitle: 'Quiz Id'
          }}
        />
        <TextInputOnChange 
          {...{
            name: categories,
            handleChange: setCategories,
            labelTitle: 'Categories'
          }}
        />
        <TextInputOnChange 
          {...{
            name: timer,
            handleChange: setTimer,
            labelTitle: 'Timer (in seconds)'
          }}
        />
      </form>
      
    </div>
  );
}
