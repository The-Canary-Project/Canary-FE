import React, { useState, useEffect } from 'react';
import { getAllPrompts } from '../../services/PromptsService';
import PromptList from '../teacher-dashboard/PromptList';
import Chat from '../chat/Chat';
import { useSocket } from '../../provider/socketProvider';
import styles from './TeacherDashboard.css';
import { getVerify } from '../../services/AuthService';
import { useHistory } from 'react-router-dom';

export default function TeacherDashboard() {
  const [prompts, setPrompts] = useState([]);
  const socket = useSocket();
  const history = useHistory();
  useEffect(async() => {
    const user = await getVerify();
    if(!user.userName) return history.push('/');
    
    const APIPrompts = await getAllPrompts();

    setPrompts(APIPrompts);
  }, []);
  
  const handleClick = ({ target }) => {
    console.log(target.value);
    socket.emit('SEND_QUESTION', JSON.parse(target.value));
  };

  return (
    <div >
      <h1>Teacher Dashboard</h1>
      <div className={styles.teacherDashboard}>
        <section className={styles.teacherDashboardSections}>
          <h2>Chat</h2>
          <Chat />
        </section>

        <section className={styles.teacherDashboardSections}>
          <h2>Prompts List</h2>
          <PromptList 
            promptList={prompts} 
            handleClick={handleClick} 
            className={styles.promptsList}
          />
        </section>
      </div>
    </div>
  );
}
