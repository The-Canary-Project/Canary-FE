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
      <div className={styles.authLargeIcon}>
        <img src="src/assets/canary-blk-blue-w-txt.png" alt="blue canary logo" />
      </div>
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
