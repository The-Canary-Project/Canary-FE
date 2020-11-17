import React from 'react';
import { Provider } from 'react-redux';
import { Auth } from '../auth/Auth';
import store from '../../store';
import TfCalibrater from '../calibrater/Tfcalibrater';
import Chat from '../chat/Chat';

import { Play } from '../play/Play';


export default function App() {
  return (
    <Provider store={store}>
      <Auth />
      <TfCalibrater />
      <Chat />
    </Provider>
  );
}
