import { SET_USERNAME, SET_USERROLE } from '../actions/authActions';
import { SET_CLASSIFIER_STATE, SET_NET_STATE } from '../actions/studentActions';

const initialState = {
  userName: '',
  userRole: '',
  classifier: {},
  net: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USERNAME:
      return { ...state, userName: action.payload };
    case SET_USERROLE:
      return { ...state, userRole: action.payload };
    case SET_CLASSIFIER_STATE:
      return { ...state, classifier: action.payload };
    case SET_NET_STATE:
      return { ...state, net: action.payload };
    default: 
      return state;
  }
} 
