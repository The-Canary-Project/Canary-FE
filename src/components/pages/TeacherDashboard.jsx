import React from 'react';
import { SocketProvider } from '../../provider/socketProvider';

export default function TeacherDashboard() {
  return (
    <div>
      <SocketProvider>
        Teacher Dashboard
      </SocketProvider>
    </div>
  );
}
