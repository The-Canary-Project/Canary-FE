import React, { useState } from 'react';

export default function AddPrompt() {
  const [text, setText] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [type, setType] = useState();
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

      </form>
      
    </div>
  );
}
