import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChatItem from './ChatItem';
import io from 'socket.io-client';
import { setChatItem } from '../../actions/classroomActions';

function ChatList() {
  useEffect(() => {
    const socket = io('localhost:8080');

    socket.on('RECEIVE_MESSAGE', (data) => {
      
      dispatch(setChatItem(
        { author: data.author, message: data.message }
      ));
    });
  }, []);
  
  const dispatch = useDispatch();
  const messageArray = useSelector(state => state.chatItems);

  const messageElements = messageArray.map((message, i) => {
    return <ChatItem message={message} key={i}/>;
  });

  return (
    <div>
      {messageElements}
    </div>
  );
}

export default ChatList;
