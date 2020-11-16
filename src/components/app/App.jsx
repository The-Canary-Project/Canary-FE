import React from 'react';
import { Provider } from 'react-redux';
import { Auth } from '../auth/Auth';
import store from '../../store';

export default function App() {
  return (
    <Provider store={store}>
      <Auth />
    </Provider>
  );
}
