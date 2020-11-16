export const SET_QUESTIONS_ARRAY = 'SET_QUESTIONS_ARRAY';
export const setQuestionsArray = questions => ({
  type: SET_QUESTIONS_ARRAY,
  payload: questions
});

export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
export const setCurrentQuestion = question => ({
  type: SET_CURRENT_QUESTION,
  payload: question
});
