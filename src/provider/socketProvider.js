import React, { useContext } from 'react';
import io from 'socket.io-client';

const SocketContext = React.createContext();

export const SocketProvider = ({ children }) => {
  const socket = io(process.env.SOCKET_URL || 7890);
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
export const useSocket = () => useContext(SocketContext);
