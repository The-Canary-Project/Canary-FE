import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import styles from './AuthStyles.scss';

export const Auth = () => {
  return (
    <div>
      <SignUp />
      <Login />
    </div>
  );
};
