export const SET_CLASSIFIER_STATE = 'SET_CLASSIFIER_STATE';
export const setClassifierState = classifier => ({
  type: SET_CLASSIFIER_STATE,
  payload: classifier
});

export const SET_NET_STATE = 'SET_NET_STATE';
export const setNetState = net => ({
  type: SET_NET_STATE,
  payload: net
});
