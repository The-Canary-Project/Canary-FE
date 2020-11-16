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
    <section className={styles.authPage}>
      <h1>CANARY</h1>
      <div className={styles.authContainer}>
        {
          displaySignUp ? <SignUp /> : <Login />
        }

        <section className={styles.authToggleButtonContainer} >
          <p onClick={toggle}>{displaySignUp ? 'Existing user?' : 'New user?'}</p>
        </section>
      </div>
    </section>
  );
};
