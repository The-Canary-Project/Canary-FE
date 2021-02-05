import React, { useState } from 'react';

export default function AddPrompt() {
  const [text, setText] = useState();
  // const [imageUrl, setImageUrl] = useState();
  // const [type, setType] = useState();
  // const [quizId, setQuizId] = useState();
  // const [categories, setCategories] = useState();
  // const [timer, setTimer] = useState();

  return (
    <div>
      <form>
        <label htmlFor="text">Text</label>
        <input 
          type="text"
          id="text"
          name="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />

      </form>
      
    </div>
  );
}
