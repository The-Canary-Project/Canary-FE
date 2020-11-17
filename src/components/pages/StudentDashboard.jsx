import React from 'react';
import TfCalibrater from '../calibrater/Tfcalibrater';
import Chat from '../chat/Chat';
import SocketProvider from '../../provider/socketProvider';

export default function StudentDashboard() {
  return (
    <div>
      <SocketProvider>
        Student Dashboard
        <TfCalibrater />
        <Chat />
      </SocketProvider>
    </div>
  );
}
