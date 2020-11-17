import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChatItem } from '../../actions/classroomActions';

function ChatForm() {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.userName);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (message === '') return;

    dispatch(setChatItem(
      { author: user, message }
    ));
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
