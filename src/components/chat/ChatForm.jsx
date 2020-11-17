import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import useSocket from '../../provider/socketProvider';

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

    return () => {
      socket.off('SEND_MESSAGE');
    };
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
