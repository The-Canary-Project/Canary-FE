import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postSignUp } from '../../services/AuthService';
import { 
  setUserNameReducer, 
  setUserRoleReducer 
} from '../../actions/authActions';



const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('student');
  const dispatch = useDispatch();
 
  
  const handleSubmit = async(event) => {
    event.preventDefault();

    await postSignUp({ userName, password, userRole })
    // set global state here
      .then(res => {
        dispatch(setUserNameReducer(res.userName));
        dispatch(setUserRoleReducer(res.userRole));
      });
    setUserName('');
    setPassword('');
    setUserRole('student');
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <option value = "student">Student</option>
        <option value = "teacher">Teacher</option>

      </select>
      <button>Sign Up</button>
    </form>
  );
};

export default SignUp;
