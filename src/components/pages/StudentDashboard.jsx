import React, { useState } from 'react';
import TfCalibrater from '../calibrater/Tfcalibrater';
import { Play } from '../play/Play';
import Chat from '../chat/Chat';

export default function StudentDashboard() {
  const [play, setPlay] = useState(false);

  const togglePlay = () => {
    play ? setPlay(false) : setPlay(true);
  };
  return (
    <div>
      Student Dashboard
      {
        play ? <Play /> : <TfCalibrater /> 
      }
      {/* <Chat /> */}
      <button onClick={togglePlay}>Play</button>
    </div>
  );
}
