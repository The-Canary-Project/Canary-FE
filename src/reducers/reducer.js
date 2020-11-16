import { SET_USERNAME, SET_USERROLE } from '../actions/authActions';
import { 
  SET_CLASSIFIER_STATE, 
  SET_CORRECT_ANSWERS, 
  SET_NET_STATE, 
  SET_TOTAL_ANSWERS 
} from '../actions/studentActions';
import {
  SET_CHATROOM, 
  SET_CHAT_ITEM
} from '../actions/chatroomActions';
import { 
  SET_CURRENT_QUESTION, 
  SET_QUESTIONS_ARRAY 
} from '../actions/teacherActions';

const initialState = {
  userName: '',
  userRole: '',
  classifier: {},
  net: {},
  totalAnswers: 0,
  chatroom: null,
  chatItems: [],
  questions: [],
  currentQuestion: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    // SET USERNAME AND ROLE
    case SET_USERNAME:
      return { ...state, userName: action.payload };
    case SET_USERROLE:
      return { ...state, userRole: action.payload };
    //CALIBRATE MODEL
    case SET_CLASSIFIER_STATE:
      return { ...state, classifier: action.payload };
    case SET_NET_STATE:
      return { ...state, net: action.payload };
    // KEEP SCORE
    case SET_TOTAL_ANSWERS:
      return { ...state, totalAnswers: state.totalAnswers + 1 };
    case SET_CORRECT_ANSWERS: 
      return { ...state, correctAnswers: state.correctAnswers + 1 };
    // KEEP CHATROOM
    case SET_CHATROOM: 
      return { ...state, chatroom: action.payload };
    case SET_CHAT_ITEM:
      return { ...state, chatItems: state.chatItems.push(action.payload) }; 
    // TEACHER ACTIONS
    case SET_QUESTIONS_ARRAY:
      return { ...state, questions: action.payload };
    case SET_CURRENT_QUESTION:
      return { ...state, currentQuestion: action.payload };
    default: 
      return state;
  }
} 