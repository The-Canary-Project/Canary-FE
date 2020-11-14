import React from 'react';
import { useState } from 'react';
import { postLogin } from '../../services/AuthService';
import styles from './AuthStyles.css'

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    await postLogin({ userName, password })
      .then(console.log());
    setUserName('');
    setPassword('');
  };

  return (
    <section className={styles.loginContainer}>
      <h1>Canary</h1>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          data-testid="login-username"
          type="text"
          placeholder="Username"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />
        <input
          data-testid="login-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Log In</button>
      </form>
    </section>
  );
};

export default Login;
