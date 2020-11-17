export const SET_CLASSROOM = 'SET_CLASSROOM';
export const setClassroom = roomNumber => ({
  type: SET_CLASSROOM,
  payload: roomNumber
});

export const SET_CHAT_ITEM = 'SET_CHAT_ITEM';
export const setChatItem = chatItem => ({
  type: SET_CHAT_ITEM,
  payload: chatItem
});
