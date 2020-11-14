import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import styles from './AuthStyles.css';

export const Auth = () => {
  const [displaySignUp, setDisplaySignUp] = useState(false);

  const toggle = () => {
    displaySignUp ? setDisplaySignUp(false) : setDisplaySignUp(true);
  };

  return (
    <div>
      {
        displaySignUp ? <SignUp /> : <Login />
      }
      <button className={styles.authToggle} onClick={toggle}>{displaySignUp ? 'Log In' : 'Sign Up'}</button>
    </div>
  );
};
