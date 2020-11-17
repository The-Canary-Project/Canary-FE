import React from 'react';

export const makeAnswers = (question) => {
  // make answer elements depending on the question type
  // find text of the correct answer
  return (question.type === 'multipleChoice') ? 
    multipleChoiceAssets(question) :
    trueFalseAssets(question);

};


function multipleChoiceAssets(question) {
  const options = ['a', 'b', 'c', 'd'];
  const answerElements = question.answers.map((answer, i) => {
    return (
      <div key={i}>
        <h3>{options.i}</h3>
        <p>answer: {answer.text}</p>
        {answer.imageUrl && 
        <img src={answer.imageUrl} alt={answer.text}/>} 
      </div>
    );
  });
  // find the text of the correct answer
  const correctAnswerIndex = question.answers.map(answer => answer.isCorrect).indexOf(true);

  const correctAnswer = options[correctAnswerIndex];
  return {
    answerElements,
    correctAnswer
  };
}

function trueFalseAssets(question) {
  const answerElements = question.answers.map((answer, i) => {
    return (
      <div key={i}>
        <p>{answer.text}</p>
        {answer.imageUrl && 
        <img src={answer.imageUrl} alt={answer.text}/>} 
      </div>
    );
  });
  
  // find the text of the correct answer
  const correctAnswerIndex = question.answers.find(answer => answer.isCorrect);
  const correctAnswer = ['a', 'b'][correctAnswerIndex];

  return {
    answerElements,
    correctAnswer
  };
}
