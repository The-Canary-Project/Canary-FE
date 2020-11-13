import React from 'react';
import { useState } from 'react';
import { postSignUp } from '../../services/AuthService';



const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');
 
  
  const handleSubmit = event => {
    event.preventDefault();
    return postSignUp({ userName, password, userRole })
      .then(console.log);

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value= {userName}
        onChange={({ target }) => setUserName(target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <select
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
