import { SET_USERNAME, SET_USERROLE } from '../actions/authActions';
import { 
  SET_CLASSIFIER_STATE, 
  SET_CORRECT_ANSWERS, 
  SET_NET_STATE, 
  SET_TOTAL_ANSWERS 
} from '../actions/studentActions';

const initialState = {
  userName: '',
  userRole: '',
  classifier: {},
  net: {},
  totalAnswers: 0,
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
    // KEEP SCORE DATA
    case SET_TOTAL_ANSWERS:
      return { ...state, totalAnswers: state.totalAnswers + 1 };
    case SET_CORRECT_ANSWERS: 
      return { ...state, correctAnswers: state.correctAnswers + 1 };
    default: 
      return state;
  }
} 
