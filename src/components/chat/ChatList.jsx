import React from 'react';
import { useSelector } from 'react-redux';
import ChatItem from './ChatItem';

function ChatList() {
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
