import { SET_USERNAME, SET_USERROLE } from '../actions/authActions';

const initialState = {
  userName: '',
  userRole: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USERNAME:
      return { ...state, userName: action.payload };
    case SET_USERROLE:
      return { ...state, userRole: action.payload };
    default: 
      return state;
  }
} 
