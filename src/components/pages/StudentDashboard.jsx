import React, { useState } from 'react';
import TfCalibrater from '../calibrater/Tfcalibrater';
import { Play } from '../play/Play';
import Chat from '../chat/Chat';
import { SocketProvider } from '../../provider/socketProvider';

export default function StudentDashboard() {
  const [play, setPlay] = useState(false);

  const togglePlay = () => {
    play ? setPlay(false) : setPlay(true);
  };
  return (
    <SocketProvider>
      
      <h1>Student Dashboard</h1>
      {
        play ? <Play /> : <TfCalibrater /> 
      }
      <button onClick={togglePlay}>Play</button>
      <Chat />
    </SocketProvider>
  );
}
