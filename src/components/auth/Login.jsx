import React from 'react';
import { useState } from 'react';
import { postLogin } from '../../services/AuthService';
import { useDispatch } from 'react-redux';
import { 
  setUserNameReducer, 
  setUserRoleReducer 
} from '../../actions/authActions';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async(event) => {
    event.preventDefault();

    await postLogin({ userName, password })
      .then(res => {
        dispatch(setUserNameReducer(res.userName));
        dispatch(setUserRoleReducer(res.userRole));
      });
    setUserName('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default Login;
