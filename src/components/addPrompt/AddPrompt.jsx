import React, { useState } from 'react';
import styles from './addPrompt.css';
import { SelectOnChange, TextInputOnChange } from './miniInputHelpers';
import AddQuestions from './addQuestions/AddQuestions';

export default function AddPrompt() {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [type, setType] = useState('');
  const [quizId, setQuizId] = useState('');
  const [categories, setCategories] = useState('');
  const [timer, setTimer] = useState(15);

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
        <SelectOnChange 
          name={type}
          handleChange={setType}
          labelTitle={'Type of Question'}
          options={[
            { value: 'multipleChoice', title: 'Multiple Choice' }, 
            { value: 'trueFalse', title: 'True/False' }
          ]}
        />
        {
          type && <AddQuestions {...{ type }}/>
        }
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
        <SelectOnChange 
          name={timer}
          handleChange={(v) => setTimer(Number(v))}
          labelTitle={'Timer (in seconds)'}
          options={[
            { value: '5', title: '5' }, 
            { value: '10', title: '10' }, 
            { value: '15', title: '15' }, 
            { value: '20', title: '20' }, 
            { value: '30', title: '30' }, 
          ]}
        />
      </form>
      
    </div>
  );
}
