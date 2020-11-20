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
      <>
        <h3>{options[i]}</h3>
        <p>{answer.text}</p>
        {answer.imageUrl && 
        <img src={answer.imageUrl} alt={answer.text}/>} 
      </>
    );
  });
  // find the text of the correct answer
  const correctAnswerIndex = question.answers.map(
    answer => answer.isCorrect).indexOf(true);

  const correctAnswer = options[correctAnswerIndex];
  
  return {
    answerElements,
    correctAnswer
  };
}

function trueFalseAssets(question) {
  const answerElements = question.answers.map((answer) => {
    return (
      <>
        <p>{answer.text}</p>
        {answer.imageUrl && 
        <img src={answer.imageUrl} alt={answer.text}/>} 
      </>
    );
  });
  
  // find the text of the correct answer
  const correctAnswerIndex = question.answers.map(
    answer => answer.isCorrect).indexOf(true);

  const correctAnswer = ['a', 'b'][correctAnswerIndex];

  return {
    answerElements,
    correctAnswer
  };
}
