import React from 'react';
import ChatForm from './ChatForm';
import ChatList from './ChatList';

export default function Chat() {
  return (
    <div>
      <ChatList />
      <ChatForm/>
    </div>
  );
}
