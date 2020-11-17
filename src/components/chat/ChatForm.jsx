import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

function ChatForm() {
  const [message, setMessage] = useState('');
  const user = useSelector(state => state.userName);
  const socket = io('localhost:8080', {
    withCredentials: true
  });

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
    <form onSubmit={handleSubmit}>
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
