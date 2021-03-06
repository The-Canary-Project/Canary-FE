import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postSignUp } from '../../services/AuthService';
import {
  setUserNameReducer,
  setUserRoleReducer
} from '../../actions/authActions';
import styles from './AuthStyles.css';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('student');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async(event) => {
    event.preventDefault();

    const signUp = await postSignUp({ userName, password, userRole });

    dispatch(setUserNameReducer(signUp.userName));
    dispatch(setUserRoleReducer(signUp.userRole));

    if(signUp.status === 500) return history.push('/');
    history.push(`/${signUp.userRole}`);
    
    setUserName('');
    setPassword('');
    setUserRole('student');
  };

  return (
    <section className={styles.signupContainer}>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          data-testid="signup-username"
          type="text"
          placeholder="Username"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />

        <input
          data-testid="signup-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <select
          data-testid="signup-userrole"
          type="select"
          placeholder="User Role"
          value={userRole}
          onChange={({ target }) => setUserRole(target.value)}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>

        </select>
        <button>Sign Up</button>
      </form>
    </section>
  );
};

export default SignUp;
