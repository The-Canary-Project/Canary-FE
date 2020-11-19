import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSocket } from '../../provider/socketProvider';
import styles from './Chat.css';

function ChatForm() {
  const [message, setMessage] = useState('');
  const user = useSelector(state => state.userName);
  const socket = useSocket();

  const handleSubmit = (event) => {
    event.preventDefault();

    if(message === '') return;

    socket.emit('SEND_MESSAGE', {
      author: user,
      message
    });

    setMessage('');
  };

  const handleChange = ({ target }) => {
    setMessage(target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.chatInput}>
      <input
        type="text"
        value={message}
        onChange={handleChange}
      />
      <button>Send</button>
    </form>
  );
}

export default ChatForm;
