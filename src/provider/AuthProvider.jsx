import React, { useState } from 'react';
import { useEffect } from 'react';
import { getVerify } from '../services/AuthService';
import { useSelector } from 'react-redux';


const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const[currentUser, setCurrentUser ] = useState(null);
  const userName = useSelector(state => state.userName)
  

useEffect(() => {
  getVerify()
    .then(userName => setCurrentUser(userName))
    
}, []);

const authState ={
  currentUser,
  userName
}
return (
  <AuthContext.Provider value={authState}>
    {children}
  </AuthContext.Provider>
  );
}














