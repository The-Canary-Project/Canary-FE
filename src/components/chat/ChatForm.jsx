import React from 'react';
import { useState } from 'react';
import { useSocket } from '../../provider/socketProvider';

function ChatForm() {
  const [message, setMessage] = useState('');
  const user = localStorage.getItem('userName');
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
