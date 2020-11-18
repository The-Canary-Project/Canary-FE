import React, { useState, useEffect  } from 'react';
import TfCalibrater from '../calibrater/Tfcalibrater';
import { Play } from '../play/Play';
import Chat from '../chat/Chat';
import { getVerify } from '../../services/AuthService';
import { useHistory } from 'react-router-dom';


export default function StudentDashboard() {
  const [play, setPlay] = useState(false);
  const history = useHistory();
  useEffect(async() => {
    const user = await getVerify();

    if(!user.userName) return history.push('/');
  }, []);

  const togglePlay = () => {
    play ? setPlay(false) : setPlay(true);
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      {
        play ? <Play /> : <TfCalibrater /> 
      }
      <button onClick={togglePlay}>Play</button>
      <Chat />
    </div>
  );
}
