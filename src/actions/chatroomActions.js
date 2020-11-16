export const SET_CHATROOM = 'SET_CHATROOM';
export const setChatroom = roomNumber => ({
  type: SET_CHATROOM,
  payload: roomNumber
});

export const SET_CHAT_ITEM = 'SET_CHAT_ITEM';
export const setChatItem = chatItem => ({
  type: SET_CHAT_ITEM,
  payload: chatItem
});
