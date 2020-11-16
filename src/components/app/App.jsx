import React from 'react';
import { Provider } from 'react-redux';
import { Auth } from '../auth/Auth';
import store from '../../store';
import TfCalibrater from '../calibrater/Tfcalibrater';

export default function App() {
  return (
    <Provider store={store}>
      <TfCalibrater />
    </Provider>
  );
}
