import React, { useState, useEffect } from 'react';
import TfCalibrater from '../calibrater/Tfcalibrater';
import { Play } from '../play/Play';
import { getVerify } from '../../services/AuthService';
import { useHistory } from 'react-router-dom';

export default function StudentDashboard() {
  const [play, setPlay] = useState(false);
  const history = useHistory();
  useEffect(async() => {
    const user = await getVerify();

    if(!user.userName) return history.push('/');
    if(user.userRole === 'teacher') return history.push('/teacher');
  }, []);

  const togglePlay = () => {
    play ? setPlay(false) : setPlay(true);
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      {
        play ? <Play /> : <TfCalibrater togglePlay={togglePlay} />
      }
    </div>
  );
}
