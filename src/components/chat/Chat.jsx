import React from 'react';
import ChatForm from './ChatForm';
import ChatList from './ChatList';
import styles from './Chat.css'

export default function Chat() {
  return (
    <div className={styles.chatContainer}>
      <ChatList />
      <ChatForm />
    </div>
  );
}
