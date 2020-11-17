export const SET_USERNAME = 'SET_USERNAME';
export const setUserNameReducer = username => ({
  type: SET_USERNAME,
  payload: username
});

export const SET_USERROLE = 'SET_USERROLE';
export const setUserRoleReducer = role => ({
  type: SET_USERROLE,
  payload: role
});
