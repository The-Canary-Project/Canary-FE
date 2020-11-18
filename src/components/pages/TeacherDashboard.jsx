import React, { useState, useEffect } from 'react';
import { getAllPrompts } from '../../services/PromptsService';
import PromptList from '../teacher-dashboard/PromptList';
import Chat from '../chat/Chat';
import { useSocket } from '../../provider/socketProvider';

export default function TeacherDashboard() {
  const [prompts, setPrompts] = useState([]);
  const socket = useSocket();

  useEffect(async() => {
    const APIPrompts = await getAllPrompts();

    setPrompts(APIPrompts);
  }, []);

  const handleClick = ({ target }) => {
    console.log(target.value);
    socket.emit('SEND_QUESTION', JSON.parse(target.value));
  };

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <section>
        <PromptList promptList={prompts} handleClick={handleClick} />
      </section>
      <Chat />
    </div>
  );
}
