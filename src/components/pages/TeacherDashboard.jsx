import React, { useState, useEffect } from 'react'
import { getAllPrompts } from '../../services/PromptsService'
import PromptList from '../teacher-dashboard/PromptList'
import { SocketProvider } from '../../provider/socketProvider';
import Chat from '../chat/Chat';
import { useSocket } from '../../provider/socketProvider'

export default function TeacherDashboard() {
  const [prompts, setPrompts] = useState([])

  useEffect(async () => {
    const APIPrompts = await getAllPrompts()

    setPrompts(APIPrompts)
  }, [])

  const handleClick = ({target}) => {
    const socket = useSocket()
    socket.emit('SEND_QUESTION', target.value)
  }

  return (
    <div>
      <SocketProvider>
        <h1>Teacher Dashboard</h1>

        <section>
          <PromptList promptList={prompts} handleClick={handleClick} />
        </section>

        <Chat />
      </SocketProvider>
    </div>
  );
}
