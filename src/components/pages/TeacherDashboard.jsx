import React from 'react';
import { SocketProvider } from '../../provider/socketProvider';
import Chat from '../chat/Chat';

export default function TeacherDashboard() {
  return (
    <div>
      <SocketProvider>
        Teacher Dashboard
        <Chat />
      </SocketProvider>
    </div>
  );
}
