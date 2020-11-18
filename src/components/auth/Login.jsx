import React from 'react';
import { useState } from 'react';
import { postLogin } from '../../services/AuthService';
import { useDispatch } from 'react-redux';
import {
  setUserNameReducer,
  setUserRoleReducer
} from '../../actions/authActions';
import styles from './AuthStyles.css';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const logIn = await postLogin({ userName, password });
    
    dispatch(setUserNameReducer(logIn.userName));
    dispatch(setUserRoleReducer(logIn.userRole));

    window.location.href = `/${logIn.userRole}`;

    localStorage.setItem('userName', `${logIn.userName}`);

    setUserName('');
    setPassword('');
  };

  return (
    <section className={styles.loginContainer}>
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
